// _app.tsx
import '../styles/global.css'; // Import global styles
import '../styles/tailwind.css'; // Import Tailwind styles
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
