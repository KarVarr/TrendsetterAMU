export function generateMetadata({ params }) {
    const { locale } = params;
  
    const titles = {
      en: "Modern About || Resonance",
      ru: "О Нас || Resonance",
      am: "Մեր մասին || Resonance",
    };
  
    const descriptions = {
      en: "Resonance — One & Multi Page React Nextjs Creative Template",
      ru: "Resonance — креативный шаблон на Next.js",
      am: "Resonance — կրիատիվ շաբլոն React Next.js-ի համար",
    };
  
    return {
      title: titles[locale] || titles.en,
      description: descriptions[locale] || descriptions.en,
    };
  }
  