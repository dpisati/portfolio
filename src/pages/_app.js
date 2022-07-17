import './global.css';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider>
            <AnimatePresence exitBeforeEnter={true}>
                <Component {...pageProps} />
            </AnimatePresence>
        </ThemeProvider>
    );
}

export default MyApp;
