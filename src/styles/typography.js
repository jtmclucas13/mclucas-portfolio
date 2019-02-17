import Typography from "typography";
import grandViewTheme from "typography-theme-grand-view";

import { yellow50, purple50 } from "./_colors.scss";

grandViewTheme.overrideThemeStyles = ({ rhythm }, options, styles) => ({
    a: {
        color: purple50,
        textDecoration: 'none',
    },
    'a:hover': {
        color: purple50,
        textDecoration: 'underline',
    },
    'a.light': {
        color: yellow50,
    },
});
const typography = new Typography(grandViewTheme);

export default typography;
