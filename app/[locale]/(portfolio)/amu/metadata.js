export function generateMetadata({ params }) {
    const { locale } = params;
  
    const titles = {
      en: "AMU",
      ru: "AMU",
      am: "AMU",
    };
  
    const descriptions = {
      en: "descriptions descriptions descriptions descriptions descriptions",
      ru: "",
      am: "Resonance — React Next.js-ի բազմաէջանոց շաբլոն",
    };
  
    return {
      title: titles[locale] || titles.en,
      description: descriptions[locale] || descriptions.en,
    };
  }
  