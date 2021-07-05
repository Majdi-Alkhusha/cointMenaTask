import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#006af1',
            dark: '#626361',
            text: {
                default: '#fff',
            },
        },
        secondary: {
            main: '#728089'
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#0c0d15 ',
            list: 'transparent',
        },
    },
});

export default theme;
