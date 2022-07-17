import './global.css';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
    return (
        <AnimatePresence exitBeforeEnter={true}>
            <ThemeProvider>
                <Component {...pageProps} />
            </ThemeProvider>
        </AnimatePresence>
    );
}

export default MyApp;
