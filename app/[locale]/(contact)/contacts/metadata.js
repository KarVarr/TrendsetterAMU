export function generateMetadata({ params }) {
    const { locale } = params;
  
    const titles = {
      en: "Modern Contact || Resonance",
      ru: "Контакты || Resonance",
      am: "Կապ մեզ հետ || Resonance",
    };
  
    const descriptions = {
      en: "Resonance — One & Multi Page React Next.js Creative Template",
      ru: "Resonance — креативный шаблон на Next.js",
      am: "Resonance — React Next.js-ի բազմաէջանոց շաբլոն",
    };
  
    return {
      title: titles[locale] || titles.en,
      description: descriptions[locale] || descriptions.en,
    };
  }
  