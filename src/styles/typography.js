import Typography from "typography";
import grandViewTheme from "typography-theme-grand-view";

import { purple50 } from "./_colors.module.scss";

grandViewTheme.overrideThemeStyles = ({ rhythm }, options, styles) => ({
    a: {
        color: purple50,
        textDecoration: "none",
    },
    "a:hover": {
        color: purple50,
        textDecoration: "underline",
    },
    "a.noUnderline": {
        textDecoration: "none",
    },
    h1: {
        color: purple50,
    },
    "h1:first-child, h2:first-child, h1 + h2, h3:first-child": {
        marginTop: 0,
    },
    blockquote: {
        fontSize: "1rem",
    },
    "blockquote p": {
        marginBottom: "1rem",
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
