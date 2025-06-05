export function generateMetadata({ params }) {
    const { locale } = params;
  
    const titles = {
      en: "Shop",
      ru: "Магазин",
      am: "Մեր ծառայությունները ",
    };
  
    const descriptions = {
      en: "",
      ru: "",
      am: "",
    };
  
    return {
      title: titles[locale] || titles.en,
      description: descriptions[locale] || descriptions.en,
    };
  }
  