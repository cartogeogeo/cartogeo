import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { kml } from "@tmcw/togeojson";
import Eyebrow from "./Eyebrow";

const BASEMAPS = {
  osm: {
    label: "Mapa",
    url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution: "© OpenStreetMap",
  },
  sat: {
    label: "Satélite",
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    attribution: "Tiles © Esri",
  },
};

const COLORS = ["#0ea5e9", "#f59e0b", "#10b981", "#ef4444", "#8b5cf6", "#ec4899"];

// Exemplo (coordenadas aproximadas) para testar sem arquivo
const SAMPLE = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { nome: "Ponto de controle GNSS", tipo: "Exemplo" },
      geometry: { type: "Point", coordinates: [-41.0207, -21.6203] },
    },
    {
      type: "Feature",
      properties: { nome: "Linha de costa (exemplo)", tipo: "Exemplo" },
      geometry: {
        type: "LineString",
        coordinates: [[-41.026, -21.612], [-41.021, -21.62], [-41.017, -21.629]],
      },
    },
    {
      type: "Feature",
      properties: { nome: "Área de estudo (exemplo)", tipo: "Exemplo" },
      geometry: {
        type: "Polygon",
        coordinates: [[[-41.03, -21.612], [-41.012, -21.612], [-41.012, -21.63], [-41.03, -21.63], [-41.03, -21.612]]],
      },
    },
  ],
};

const esc = (v) =>
  String(v).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

function toFeatureCollection(json) {
  if (json?.type === "FeatureCollection" && Array.isArray(json.features)) return json;
  if (json?.type === "Feature") return { type: "FeatureCollection", features: [json] };
  if (json?.type && json.coordinates !== undefined || json?.type === "GeometryCollection") {
    return { type: "FeatureCollection", features: [{ type: "Feature", properties: {}, geometry: json }] };
  }
  throw new Error("O arquivo não é um GeoJSON válido.");
}

async function parseFile(file) {
  const text = await file.text();
  const isKml = /\.kml$/i.test(file.name);
  if (/\.kmz$/i.test(file.name)) throw new Error("KMZ não é suportado ainda. Converta para KML ou GeoJSON.");
  if (isKml) {
    const dom = new DOMParser().parseFromString(text, "text/xml");
    if (dom.querySelector("parsererror")) throw new Error("KML inválido.");
    return toFeatureCollection(kml(dom));
  }
  try {
    return toFeatureCollection(JSON.parse(text));
  } catch (e) {
    throw new Error(e.message.includes("GeoJSON") ? e.message : "JSON inválido.");
  }
}

function countGeoms(fc) {
  const c = { points: 0, lines: 0, polygons: 0 };
  const walk = (g) => {
    if (!g) return;
    if (g.type === "GeometryCollection") return g.geometries.forEach(walk);
    if (g.type.endsWith("Point")) c.points += g.type === "Point" ? 1 : g.coordinates.length;
    else if (g.type.endsWith("LineString")) c.lines += g.type === "LineString" ? 1 : g.coordinates.length;
    else if (g.type.endsWith("Polygon")) c.polygons += g.type === "Polygon" ? 1 : g.coordinates.length;
  };
  fc.features.forEach((f) => walk(f.geometry));
  return c;
}

function popupHtml(props) {
  const rows = Object.entries(props || {}).filter(([, v]) => v !== null && v !== "" && typeof v !== "object");
  if (!rows.length) return "<em>Sem atributos</em>";
  return (
    '<table style="font-size:12px;border-collapse:collapse">' +
    rows
      .map(([k, v]) => `<tr><td style="padding:2px 8px 2px 0;font-weight:600">${esc(k)}</td><td>${esc(v)}</td></tr>`)
      .join("") +
    "</table>"
  );
}

export default function ViewerPage() {
  const mapEl = useRef(null);
  const map = useRef(null);
  const tiles = useRef(null);
  const groups = useRef([]);
  const shouldFit = useRef(false);

  const [layers, setLayers] = useState([]);
  const [basemap, setBasemap] = useState("osm");
  const [error, setError] = useState("");
  const [dragging, setDragging] = useState(false);

  // Inicializa o mapa
  useEffect(() => {
    map.current = L.map(mapEl.current, { center: [-14.2, -51.9], zoom: 4 });
    return () => {
      map.current.remove();
      map.current = null;
      tiles.current = null;
      groups.current = [];
    };
  }, []);

  // Mapa base
  useEffect(() => {
    if (!map.current) return;
    if (tiles.current) tiles.current.remove();
    const b = BASEMAPS[basemap];
    tiles.current = L.tileLayer(b.url, { attribution: b.attribution, maxZoom: 19 }).addTo(map.current);
    tiles.current.bringToBack();
  }, [basemap]);

  // Sincroniza camadas no mapa
  useEffect(() => {
    if (!map.current) return;
    groups.current.forEach((g) => g.remove());
    groups.current = [];
    const bounds = L.latLngBounds([]);
    layers.forEach((layer) => {
      if (!layer.visible) return;
      const g = L.geoJSON(layer.data, {
        style: () => ({ color: layer.color, weight: 2, fillOpacity: 0.25 }),
        pointToLayer: (_, latlng) =>
          L.circleMarker(latlng, { radius: 6, color: "#fff", weight: 1.5, fillColor: layer.color, fillOpacity: 0.95 }),
        onEachFeature: (f, l) => l.bindPopup(popupHtml(f.properties), { maxWidth: 320 }),
      }).addTo(map.current);
      groups.current.push(g);
      if (g.getBounds().isValid()) bounds.extend(g.getBounds());
    });
    if (shouldFit.current && bounds.isValid()) {
      map.current.fitBounds(bounds, { padding: [30, 30], maxZoom: 17 });
    }
    shouldFit.current = false;
  }, [layers]);

  async function addFiles(fileList) {
    setError("");
    const added = [];
    for (const file of Array.from(fileList)) {
      try {
        const data = await parseFile(file);
        if (!data.features.length) throw new Error("Nenhuma feição encontrada.");
        added.push({ name: file.name, data, counts: countGeoms(data) });
      } catch (e) {
        setError(`${file.name}: ${e.message}`);
      }
    }
    if (!added.length) return;
    shouldFit.current = true;
    setLayers((prev) => [
      ...prev,
      ...added.map((a, i) => ({
        ...a,
        id: `${Date.now()}-${i}`,
        color: COLORS[(prev.length + i) % COLORS.length],
        visible: true,
      })),
    ]);
  }

  function addSample() {
    shouldFit.current = true;
    setLayers((prev) => [
      ...prev,
      {
        id: `s-${Date.now()}`,
        name: "exemplo.geojson",
        data: SAMPLE,
        counts: countGeoms(SAMPLE),
        color: COLORS[prev.length % COLORS.length],
        visible: true,
      },
    ]);
  }

  const toggle = (id) => setLayers((p) => p.map((l) => (l.id === id ? { ...l, visible: !l.visible } : l)));
  const remove = (id) => setLayers((p) => p.filter((l) => l.id !== id));

  function zoomTo(id) {
    const layer = layers.find((l) => l.id === id);
    if (!layer || !map.current) return;
    const b = L.geoJSON(layer.data).getBounds();
    if (b.isValid()) map.current.fitBounds(b, { padding: [30, 30], maxZoom: 17 });
  }

  function exportGeoJSON() {
    const features = layers.filter((l) => l.visible).flatMap((l) => l.data.features);
    const blob = new Blob([JSON.stringify({ type: "FeatureCollection", features }, null, 2)], {
      type: "application/geo+json",
    });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "cartogeo-camadas.geojson";
    a.click();
    URL.revokeObjectURL(a.href);
  }

  return (
    <>
      <section className="container-page pb-10 pt-28 sm:pt-32">
        <Eyebrow label="Visualizador" code="" />
        <h1 className="mt-4 max-w-3xl font-display text-3xl font-semibold leading-tight text-ink sm:text-5xl">
          Veja seus dados geoespaciais no mapa
        </h1>
        <p className="mt-6 max-w-2xl text-slate">
          Envie arquivos GeoJSON ou KML e visualize pontos, linhas e polígonos sobre mapa ou imagem de satélite.
          O arquivo é lido no seu navegador e não é enviado a nenhum servidor.
        </p>
      </section>

      <section className="container-page pb-20">
        <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
          <aside className="flex flex-col gap-4">
            <label
              onDragOver={(e) => {
                e.preventDefault();
                setDragging(true);
              }}
              onDragLeave={() => setDragging(false)}
              onDrop={(e) => {
                e.preventDefault();
                setDragging(false);
                addFiles(e.dataTransfer.files);
              }}
              className={`flex cursor-pointer flex-col items-center gap-2 rounded-xl border-2 border-dashed p-6 text-center text-sm transition-colors ${
                dragging ? "border-beacon bg-white" : "border-line bg-white"
              }`}
            >
              <span className="font-semibold text-ink">Arraste arquivos aqui</span>
              <span className="text-slate">ou clique para escolher (.geojson, .json, .kml)</span>
              <input
                type="file"
                multiple
                accept=".geojson,.json,.kml"
                className="hidden"
                onChange={(e) => {
                  addFiles(e.target.files);
                  e.target.value = "";
                }}
              />
            </label>

            <button onClick={addSample} className="text-left text-xs font-semibold text-slate underline hover:text-ink">
              Sem arquivo? Carregar dados de exemplo
            </button>

            {error && (
              <p role="alert" className="rounded-md border border-red-200 bg-red-50 p-3 text-xs text-red-700">
                {error}
              </p>
            )}

            <div className="flex gap-2">
              {Object.entries(BASEMAPS).map(([key, b]) => (
                <button
                  key={key}
                  onClick={() => setBasemap(key)}
                  aria-pressed={basemap === key}
                  className={`flex-1 rounded-md border px-3 py-1.5 text-xs font-semibold ${
                    basemap === key ? "border-ink bg-ink text-white" : "border-line bg-white text-slate hover:text-ink"
                  }`}
                >
                  {b.label}
                </button>
              ))}
            </div>

            <ul className="flex flex-col gap-2">
              {layers.map((l) => (
                <li key={l.id} className="rounded-lg border border-line bg-white p-3">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={l.visible}
                      onChange={() => toggle(l.id)}
                      aria-label={`Mostrar ${l.name}`}
                    />
                    <span className="h-3 w-3 flex-none rounded-full" style={{ background: l.color }} />
                    <span className="min-w-0 flex-1 truncate text-sm font-semibold text-ink" title={l.name}>
                      {l.name}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-slate">
                    {l.counts.points} pontos · {l.counts.lines} linhas · {l.counts.polygons} polígonos
                  </p>
                  <div className="mt-2 flex gap-3 text-xs font-semibold">
                    <button onClick={() => zoomTo(l.id)} className="text-slate hover:text-ink">
                      Zoom
                    </button>
                    <button onClick={() => remove(l.id)} className="text-slate hover:text-red-600">
                      Remover
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            {layers.length > 0 && (
              <div className="flex gap-2">
                <button
                  onClick={exportGeoJSON}
                  className="flex-1 rounded-md bg-ink px-4 py-2 text-xs font-semibold text-white hover:bg-beacon"
                >
                  Baixar GeoJSON
                </button>
                <button
                  onClick={() => setLayers([])}
                  className="rounded-md border border-line bg-white px-4 py-2 text-xs font-semibold text-slate hover:text-ink"
                >
                  Limpar
                </button>
              </div>
            )}
          </aside>

          <div className="relative overflow-hidden rounded-xl border border-line">
            <div ref={mapEl} className="h-[70vh] min-h-[420px] w-full" />
            {layers.length === 0 && (
              <p className="pointer-events-none absolute inset-x-0 top-4 z-[500] mx-auto w-fit rounded-md bg-white/90 px-3 py-1.5 text-xs text-slate shadow">
                Nenhuma camada carregada
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="container-page pb-24">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate hover:text-ink">
          <svg viewBox="0 0 16 16" className="h-4 w-4 rotate-180" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Voltar para a página inicial
        </Link>
      </section>
    </>
  );
}
