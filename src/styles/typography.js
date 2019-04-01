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
    h1: {
        marginTop: 0, //JTM not overwriting without !Important?
    },
});
const typography = new Typography(grandViewTheme);

export default typography;
