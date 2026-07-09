import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { configs } from "eslint-plugin-react-hooks";

export default defineConfig(({ command }) => {
    const config = {
        plugins: [react(), tailwindcss()],
        base: '/cartogeo',
    };

    if (command !== 'serve') {
        config.base = '/cartogeo/';
    }

    return config;
});