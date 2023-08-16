import '@/styles/globals.css';
import Sidebar from '../components/Sidebar';

export default function App({ Component, pageProps }) {
  console.log("🚀 ~ file: _app.js:5 ~ App ~ pageProps:", pageProps)
  return (
    <Sidebar>
      <Component {...pageProps} />
    </Sidebar>
  );
}
