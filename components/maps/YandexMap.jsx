// "use client";

// import { useEffect, useRef } from "react";
// import Script from "next/script";

// const apiKey = process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY;
// const YandexMap = ({
//   center = [40.183347, 44.514810],
//   zoom = 16,
//   width = "100%",
//   height = "400px",
// }) => {
//   const mapRef = useRef(null);
//   const hasMap = useRef(false); // 🔒 Флаг, чтобы избежать повторной инициализации

//   useEffect(() => {
//     if (!mapRef.current || hasMap.current) return;

//     const initMap = () => {
//       if (hasMap.current) return;
//       const map = new window.ymaps.Map(mapRef.current, {
//         center,
//         zoom,
//         controls: ["zoomControl", "fullscreenControl"],
//       });

//       map.geoObjects.add(
//         new window.ymaps.Placemark(
//           center,
//           { balloonContent: "ТЦ Ташир стрит, Северный проспект 6/2" },
//           { preset: "islands#redDotIcon" }
//         )
//       );

//       hasMap.current = true; // помечаем, что карта уже инициализирована
//     };

//     if (window.ymaps) {
//       window.ymaps.ready(initMap);
//     }
//   }, [center.join(","), zoom]);

//   return (
//     <>
//       <Script
//         src={`https://api-maps.yandex.ru/2.1/?apikey=${apiKey}&lang=ru_RU`}
//         strategy="afterInteractive" // ✅ Лучше чем beforeInteractive для этой библиотеки
//       />
//       <div ref={mapRef} style={{ width, height }} />
//     </>
//   );
// };

// export default YandexMap;

// "use client";

// import { useEffect, useRef } from "react";
// import Script from "next/script";

// const apiKey = process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY;

// const YandexMap = ({
//   center = [40.183347, 44.514810],
//   zoom = 16,
//   width = "100%",
//   height = "400px",
// }) => {
//   const mapRef = useRef(null);
//   const hasMap = useRef(false);
//   let mapInstance = useRef(null);

//   useEffect(() => {
//     const initMap = () => {
//       if (hasMap.current || !mapRef.current || !window.ymaps) return;

//       mapInstance.current = new window.ymaps.Map(mapRef.current, {
//         center,
//         zoom,
//         controls: ["zoomControl", "fullscreenControl"],
//       });

//       mapInstance.current.geoObjects.add(
//         new window.ymaps.Placemark(
//           center,
//           { balloonContent: "ТЦ Ташир стрит, Северный проспект 6/2" },
//           { preset: "islands#redDotIcon" }
//         )
//       );

//       hasMap.current = true;
//     };

//     if (window.ymaps) {
//       window.ymaps.ready(initMap);
//     }

//     return () => {
//       if (mapRef.current) {
//         mapRef.current.innerHTML = "";
//       }
//       hasMap.current = false;
//     };
//   }, [center.join(","), zoom]);

//   return (
//     <>
//       <Script
//         src={`https://api-maps.yandex.ru/2.1/?apikey=${apiKey}&lang=ru_RU`}
//         strategy="beforeInteractive"
//       />
//       <div ref={mapRef} style={{ width, height }} />
//     </>
//   );
// };

// export default YandexMap;

"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

const apiKey = process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY;

const YandexMap = ({
  center = [40.183347, 44.514810],
  zoom = 16,
  width = "100%",
  height = "400px",
}) => {
  const mapRef = useRef(null);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const hasMap = useRef(false);

  useEffect(() => {
    if (!isScriptLoaded || hasMap.current || !mapRef.current) return;

    const initMap = () => {
      if (!window.ymaps || hasMap.current || !mapRef.current) return;

      const map = new window.ymaps.Map(mapRef.current, {
        center,
        zoom,
        controls: ["zoomControl", "fullscreenControl"],
      });

      map.geoObjects.add(
        new window.ymaps.Placemark(
          center,
          { balloonContent: "ТЦ Ташир стрит, Северный проспект 6/2" },
          { preset: "islands#redDotIcon" }
        )
      );

      hasMap.current = true;
    };

    window.ymaps.ready(initMap);

    return () => {
      if (mapRef.current) {
        mapRef.current.innerHTML = "";
      }
      hasMap.current = false;
    };
  }, [isScriptLoaded]);

  return (
    <>
      <Script
        src={`https://api-maps.yandex.ru/2.1/?apikey=${apiKey}&lang=ru_RU`}
        strategy="afterInteractive"
        onLoad={() => setIsScriptLoaded(true)}
      />
      <div ref={mapRef} style={{ width, height }} />
    </>
  );
};

export default YandexMap;
