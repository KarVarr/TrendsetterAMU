export function generateMetadata({ params }) {
    const { locale } = params;
  
    const titles = {
      en: "About",
      ru: "О Нас",
      am: "Մեր մասին",
    };
  
    const descriptions = {
      en: "Trendsetter Á Multibrand is a multibrand fashion store",
      ru: "Trendsetter Á Multibrand - мультибрендовый fashion-ритейл",
      am: "Trendsetter Á Multibrand-ը բազմաբրենդային fashion խանութ է",
    };
  
    return {
      title: titles[locale] || titles.en,
      description: descriptions[locale] || descriptions.en,
    };
  }
  