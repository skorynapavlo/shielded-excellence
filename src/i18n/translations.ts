export type Locale = "en" | "uk";

export const translations = {
  en: {
    nav: {
      products: "Products",
      capabilities: "Capabilities",
      contact: "Contact",
      getQuote: "Get a Quote",
    },
    hero: {
      badge: "",
      titleStart: "MRI RF Shielding",
      titleHighlight: "Manufactured in Ukraine",
      description:
        "Ukrainian manufacturer of Faraday cages and MRI RF shielding systems. We design and manufacture in Ukraine — for projects in Ukraine and worldwide.",
      viewProducts: "View Products",
      requestQuote: "Request a Quote",
    },
    products: {
      sectionLabel: "Completed Projects",
      title: "MRI RF Shielding — Manufactured in Ukraine",
      description:
        "Faraday cages and MRI RF shielding systems designed, manufactured, and installed by EMIGLI in Ukraine.",
      items: [
        {
          title: "RF Shielded Windows",
          description:
            "Multi-layer RF shielded windows with special mesh interlayer, providing clear visibility into the MRI suite without compromising electromagnetic integrity.",
          specs: ["Up to 100 dB attenuation", "Anti-glare coating", ""],
        },
        {
          title: "Complete RF Enclosures",
          description:
            "Turnkey shielded room solutions engineered for 0.2T - 3T MRI systems. Full installation and commissioning included.",
          specs: ["0.2T – 3T compatible", "Turnkey delivery", ""],
          project: {
            name: "Completed EMIGLI Project",
            location: "Ukraine",
          },
        },
        {
          title: "RF Shielded Doors",
          description:
            "Doors with continuous special gaskets ensuring consistent shielding performance.",
          specs: ["Up to 100 dB attenuation", "", ""],
        },
      ],
    },
    capabilities: {
      sectionLabel: "",
      title: "Why EMIgli",
      description:
        "Years of expertise in electromagnetic shielding, backed by cutting-edge manufacturing and rigorous quality control.",
      items: [
        { title: "Up to 100 dB Attenuation", desc: "Designed to meet the shielding requirements of leading MRI manufacturers." },
        { title: "Custom Engineering", desc: "Every cage tailored to your facility's exact dimensions and requirements." },
        { title: "Full-service solutions", desc: "We deliver turnkey projects — from site measurements and design to manufacturing, delivery, and installation." },
        { title: "Fast Turnaround", desc: "Streamlined production delivering from concept to install in 4–8 weeks." },
      ],
    },
    contact: {
      sectionLabel: "Contact",
      title: "Let's Discuss Your Project",
      description:
        "Whether you need a custom enclosure quote or technical consultation, our engineering team is ready to help.",
      email: "info@emigli.com",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      companyLabel: "Company",
      companyPlaceholder: "Organization",
      emailLabel: "Email",
      emailPlaceholder: "you@company.com",
      detailsLabel: "Project Details",
      detailsPlaceholder: "Tell us about your MRI shielding requirements…",
      send: "Send Message",
      sending: "Sending…",
      followUs: "Follow us",
      toastTitle: "Message sent!",
      toastDescription: "We'll get back to you within 24 hours.",
      errorTitle: "Message not sent",
      errorDescription: "Something went wrong. Please try again or email us directly.",
    },
    footer: {
      tagline: "Precision RF Shielding for MRI Systems",
    },
  },
  uk: {
    nav: {
      products: "Продукція",
      capabilities: "Можливості",
      contact: "Контакти",
      getQuote: "Отримати пропозицію",
    },
    hero: {
      badge: "",
      titleStart: "для систем МРТ",
      titleHighlight: "РЧ-екранування",
      description:
        "Український виробник кліток Фарадея та систем РЧ-екранування для МРТ. Проєктуємо та виготовляємо в Україні — для проєктів в Україні та за кордоном.",
      viewProducts: "Переглянути продукцію",
      requestQuote: "Запит пропозиції",
    },
    products: {
      sectionLabel: "Реалізовані проєкти",
      title: "Системи РЧ-екранування для МРТ, виготовлені в Україні",
      description:
        "Клітки Фарадея та системи РЧ-екранування, спроєктовані, виготовлені та змонтовані EMIGLI в Україні.",
      items: [
        {
          title: "РЧ-екрановані вікна",
          description:
            "Вікна з двома шарами спеціальної сітки всередині для стабільного екранування.",
          specs: ["До 100 дБ ослаблення", "Антиблікове покриття", ""],
        },
        {
          title: "РЧ-клітка",
          description:
            "Екрановані кімнати для систем МРТ 0.2T - 3Т. Повна установка та введення в експлуатацію включені.",
          specs: ["0.2T – 3T сумісність", "Комплексна поставка", ""],
          project: {
            name: "Реалізований проєкт EMIGLI",
            location: "Україна",
          },
        },
        {
          title: "РЧ-екрановані двері",
          description:
            "Двері зі спеціальним ущільненням для стабільного екранування.",
          specs: ["До 100 дБ ослаблення", "", ""],
        },
      ],
    },
    capabilities: {
      sectionLabel: "",
      title: "Чому обирають Еміглі",
      description:
        "Багато років досвіду в електромагнітному екрануванні підкріплені передовим виробництвом та суворим контролем якості.",
      items: [
        { title: "До 100 дБ ослаблення", desc: "Відповідність вимогам екранування провідних виробників МРТ." },
        { title: "Індивідуальне проектування", desc: "Кожна клітка адаптована до точних розмірів та вимог вашого об'єкта." },
        { title: "Повний цикл робіт", desc: "Реалізуємо проєкти під ключ — від замірів і проєктування до виробництва, доставки та монтажу." },
        { title: "Швидке виконання", desc: "Оптимізоване виробництво: від концепції до монтажу за 4–8 тижнів." },
      ],
    },
    contact: {
      sectionLabel: "Контакти",
      title: "Обговоримо ваш проект",
      description:
        "Для прорахунку вартості проєкту, або у разі необхідності технічної консультації — наша інженерна команда готова допомогти.",
      email: "info@emigli.com",
      nameLabel: "Ім'я",
      namePlaceholder: "Ваше ім'я",
      companyLabel: "Компанія",
      companyPlaceholder: "Організація",
      emailLabel: "Електронна пошта",
      emailPlaceholder: "ви@компанія.com",
      detailsLabel: "Деталі проекту",
      detailsPlaceholder: "Розкажіть про ваші вимоги до екранування МРТ…",
      send: "Надіслати повідомлення",
      sending: "Надсилання…",
      followUs: "Стежте за нами",
      toastTitle: "Повідомлення надіслано!",
      toastDescription: "Ми зв'яжемося з вами протягом 24 годин.",
      errorTitle: "Не вдалося надіслати повідомлення",
      errorDescription: "Сталася помилка. Спробуйте ще раз або напишіть нам напряму на email.",
    },
    footer: {
      tagline: "Високоякісне РЧ-екранування для систем МРТ",
    },
  },
} as const;
