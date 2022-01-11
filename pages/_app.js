import '../styles/globals.css'
import Script from "next/script";

function MyApp({ Component, pageProps }) {

  return(
  <>
  <Script
    id="1"
    strategy='lazyOnload' 
    src={`https://www.googletagmanager.com/gtag/js?id=G-F309KB24PZ`}
  />

  <Script
    id="2"
    strategy='lazyOnload'>
      { `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-F309KB24PZ');`}
    </Script> 
   <Component {...pageProps} />
   </>
  );
}

export default MyApp
