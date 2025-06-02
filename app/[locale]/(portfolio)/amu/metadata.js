export function generateMetadata({ params }) {
    const { locale } = params;
  
    const titles = {
      en: "Modern Portfolio || Resonance",
      ru: "Портфолио || Resonance",
      am: "Մեր աշխատանքները || Resonance",
    };
  
    const descriptions = {
      en: "Resonance — One & Multi Page React Next.js Creative Template",
      ru: "Resonance — многостраничный шаблон Next.js",
      am: "Resonance — React Next.js-ի բազմաէջանոց շաբլոն",
    };
  
    return {
      title: titles[locale] || titles.en,
      description: descriptions[locale] || descriptions.en,
    };
  }
  