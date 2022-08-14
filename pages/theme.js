import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const theme = extendTheme({
styles: {
    global: (props) => ({
        body: {
            bg: mode('#edf2f7', '#121212')(props),
        },
        ':root': {
            '--chakra-colors-primary-400': mode(
                '#7C82FB',
                '#94d3ac',
            )(props),
            '--chakra-colors-primary-500': mode(
                '#5F63FC',
                '#29c7ac',
            )(props),
        },
    }),
},
// colors object is declared so chakra interprets it as css variables
// however real colors is defined in ':root' with darkmode conditions
colors: {
    primary: {
        400: '#7C82FB',
        500: '#5F63FC',
    },
    success: {
        500: '#21bf73',
    },
    danger: {
        500: '#FA4243',
    },
},
});

export default theme