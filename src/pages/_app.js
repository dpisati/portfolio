import './global.css';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'next-themes';
import AnimatedBackground from '../components/AnimatedBackground';

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider>
            <AnimatePresence exitBeforeEnter={true}>
                <AnimatedBackground />
                <Component {...pageProps} />
            </AnimatePresence>
        </ThemeProvider>
    );
}

export default MyApp;
