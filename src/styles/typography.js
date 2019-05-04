import Typography from "typography";
import grandViewTheme from "typography-theme-grand-view";

import { yellow50, yellow70, purple50 } from "./_colors.scss";

grandViewTheme.overrideThemeStyles = ({ rhythm }, options, styles) => ({
    a: {
        color: purple50,
        textDecoration: "none",
    },
    "a:hover": {
        color: purple50,
        textDecoration: "underline",
    },
    "a.light": {
        color: yellow70,
    },
    "a.inverted": {
        color: yellow50,
    },
    "a.noUnderline": {
        textDecoration: "none",
    },
    h1: {
        color: purple50,
    },
    "h1:first-child, h2:first-child": {
        marginTop: 0,
    },
});
const typography = new Typography({
    ...grandViewTheme,
    googleFonts: [
        ...grandViewTheme.googleFonts,
        {
            name: "Montserrat",
            styles: ["400", "700"],
        },
        {
            name: "Inconsolata",
            styles: ["400"],
        },
    ],
});

export default typography;
