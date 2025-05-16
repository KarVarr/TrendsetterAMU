"use client";

import dynamic from "next/dynamic";

// Оборачиваем динамически карту, отключая SSR
const YandexMap = dynamic(() => import("./YandexMap"), {
  ssr: false,
});

export default function YandexMapWrapper(props) {
  return <YandexMap {...props} />;
}
