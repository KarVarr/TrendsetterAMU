export function generateMetadata({ params }) {
    const { locale } = params;
  
    const titles = {
      en: "Page Not Found || Resonance — One & Multi Page React Next.js Creative Template",
      ru: "Страница не найдена || Resonance — многостраничный шаблон на Next.js",
      am: "Էջը չի գտնվել || Resonance — React Next.js-ի բազմաէջանոց շաբլոն"
    };
  
    const descriptions = {
      en: "Resonance — One & Multi Page React Next.js Creative Template",
      ru: "Resonance — многостраничный шаблон на Next.js",
      am: "Resonance — React Next.js-ի բազմաէջանոց շաբլոն"
    };
  
    return {
      title: titles[locale] || titles.en,
      description: descriptions[locale] || descriptions.en
    };
  }
  