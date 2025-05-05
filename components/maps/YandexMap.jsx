"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

const YandexMap = ({
  center = [40.183347, 44.514810],
  zoom = 16,
  width = "100%",
  height = "400px",
}) => {
  const mapRef = useRef(null);
  const hasMap = useRef(false); // 🔒 Флаг, чтобы избежать повторной инициализации

  useEffect(() => {
    if (!mapRef.current || hasMap.current) return;

    const initMap = () => {
      if (hasMap.current) return;
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

      hasMap.current = true; // помечаем, что карта уже инициализирована
    };

    if (window.ymaps) {
      window.ymaps.ready(initMap);
    }
  }, [center.join(","), zoom]);

  return (
    <>
      <Script
        src={`https://api-maps.yandex.ru/2.1/?apikey=${process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY}&lang=ru_RU`}
        strategy="lazyOnload" // ✅ Лучше чем beforeInteractive для этой библиотеки
      />
      <div ref={mapRef} style={{ width, height }} />
    </>
  );
};

export default YandexMap;
