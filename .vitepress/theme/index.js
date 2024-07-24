// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import ImageSlider from "./components/ImageSlider.vue";

import "./custom.css";

/** @type {import('vitepress').Theme} */
export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        app.component("ImageSlider", ImageSlider)
    }
}