export function generateMetadata({ params }) {
    const { locale } = params;
  
    const titles = {
      en: "Modern Services || Resonance",
      ru: "Услуги || Resonance",
      am: "Մեր ծառայությունները || Resonance",
    };
  
    const descriptions = {
      en: "Resonance — One & Multi Page React Next.js Creative Template",
      ru: "Resonance — креативный шаблон на Next.js",
      am: "Resonance — Կրիատիվ շաբլոն React Next.js-ի համար",
    };
  
    return {
      title: titles[locale] || titles.en,
      description: descriptions[locale] || descriptions.en,
    };
  }
  