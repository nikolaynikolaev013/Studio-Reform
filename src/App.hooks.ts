import { useEffect } from "react";
import { Cookies } from "react-cookie-consent";

export const useApp = () => {
  useEffect(() => {
    const hasConsent = Cookies.get("myAppCookieConsent") === "true";
    if (hasConsent) {
      loadTracking();
    }
  }, []);

  const loadTracking = () => {
    // TODO: Add google analytics
    // Google Analytics
    //   const gaScript = document.createElement("script");
    //   gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    //   gaScript.async = true;
    //   document.head.appendChild(gaScript);

    //   const gaInline = document.createElement("script");
    //   gaInline.innerHTML = `
    //   window.dataLayer = window.dataLayer || [];
    //   function gtag(){dataLayer.push(arguments);}
    //   gtag('js', new Date());
    //   gtag('config', '${GA_ID}');
    // `;
    //   document.head.appendChild(gaInline);

    // Microsoft Clarity
    const clarityScript = document.createElement("script");
    clarityScript.innerHTML = `
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "qw13a29zkj");
    `;
    document.head.appendChild(clarityScript);
  };

  return { loadTracking };
};
