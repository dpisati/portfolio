import '../styles/global.css';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'next-themes';
import AnimatedBackground from '../components/AnimatedBackground';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
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
