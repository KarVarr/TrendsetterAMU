export function generateMetadata({ params }) {
    const { locale } = params;
  
    const titles = {
      en: "Contacts",
      ru: "Контакты",
      am: "Կապ մեզ հետ",
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
  