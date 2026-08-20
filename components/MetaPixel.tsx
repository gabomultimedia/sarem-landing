import Script from "next/script";

const META_PIXEL_ID = "263967566166243";

/**
 * Meta Pixel (Facebook Pixel) para tracking de PageView y conversiones.
 * Se carga con `afterInteractive` para no bloquear el render inicial.
 *
 * IMPORTANTE: Se usa `dangerouslySetInnerHTML` y NO children JSX porque
 * React Server Components Flight serialization agrega un `\n` al ID
 * cuando se pasa como JSX child, rompiendo el tracking (mismo bug que
 * sufrimos en SOSOCO con GA4 el 2026-07-08).
 */
export default function MetaPixel() {
  return (
    <>
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        <img
          height={1}
          width={1}
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}
