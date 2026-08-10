export type Locale = "en" | "uk";

export const translations = {
  en: {
    nav: {
      products: "Products",
      capabilities: "Capabilities",
      testimonials: "Testimonials",
      contact: "Contact",
      getQuote: "Get a Quote",
    },
    hero: {
      badge: "",
      titleStart: "Engineered RF Cages for",
      titleHighlight: "MRI Excellence",
      description:
        "Industry-leading electromagnetic shielding solutions designed for optimal MRI performance, patient safety, and regulatory compliance.",
      viewProducts: "View Products",
      requestQuote: "Request a Quote",
    },
    products: {
      sectionLabel: "Portfolio",
      title: "Our Product Range",
      description:
        "Each solution is precision-engineered to meet the most demanding electromagnetic shielding requirements in modern MRI environments.",
      items: [
        {
          title: "RF Shielded Windows",
          description:
            "Multi-layer laminated RF shielded windows with copper mesh interlayer, providing clear visibility into the MRI suite without compromising electromagnetic integrity.",
          specs: ["Up to 100 dB attenuation", "Anti-glare coating", ""],
        },
        {
          title: "Complete RF Enclosures",
          description:
            "Turnkey shielded room solutions engineered for 1.5T, 3T, and 7T MRI systems. Full installation and commissioning included.",
          specs: ["0.2T – 3T compatible", "Turnkey delivery", ""],
        },
        {
          title: "RF Shielded Doors",
          description:
            "Pneumatic-sealed doors with continuous copper-beryllium finger stock gaskets ensuring consistent shielding performance.",
          specs: ["Pneumatic seal", "", ""],
        },
      ],
    },
    capabilities: {
      sectionLabel: "",
      title: "Why Choose Us",
      description:
        "Decades of expertise in electromagnetic shielding, backed by cutting-edge manufacturing and rigorous quality control.",
      items: [
        { title: "120+ dB Attenuation", desc: "Exceeding international shielding standards across all MRI frequencies." },
        { title: "Custom Engineering", desc: "Every cage tailored to your facility's exact dimensions and requirements." },
        { title: "Advanced Simulation", desc: "FEM-based electromagnetic modeling ensures performance before fabrication." },
        { title: "Full Installation", desc: "On-site assembly, testing, and commissioning by our specialist teams." },
        { title: "Fast Turnaround", desc: "Streamlined production delivering from concept to install in 8–12 weeks." },
        { title: "Certified Quality", desc: "ISO 9001 certified processes with full traceability and documentation." },
      ],
    },
    testimonials: {
      sectionLabel: "Testimonials",
      title: "Trusted by Leading Institutions",
      items: [
        {
          quote: "ShieldRF delivered a flawless 3T MRI enclosure on a tight timeline. Their attenuation results exceeded our specifications by 15 dB.",
          name: "Dr. Helena Kessler",
          role: "Head of Radiology, Munich University Hospital",
        },
        {
          quote: "The modular panel system allowed us to retrofit our existing suite without major construction. Downtime was under 48 hours.",
          name: "James Thornton",
          role: "Facilities Director, Westfield Medical Center",
        },
        {
          quote: "From simulation to commissioning, their engineering team was outstanding. We've now specified ShieldRF for all our new MRI installations.",
          name: "Prof. Akira Tanaka",
          role: "Chief Medical Physicist, Osaka Imaging Institute",
        },
      ],
    },
    contact: {
      sectionLabel: "Contact",
      title: "Let's Discuss Your Project",
      description:
        "Whether you need a custom enclosure quote or technical consultation, our engineering team is ready to help.",
      phone: "+1 (555) 012-3456",
       email: "info@emigli.com",
      address: "1200 Industrial Pkwy, Suite 300, Denver, CO 80202",
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
      toastTitle: "Message sent!",
      toastDescription: "We'll get back to you within 24 hours.",
    },
    footer: {
      tagline: "Precision RF Shielding for MRI Systems",
    },
  },
  uk: {
    nav: {
      products: "Продукція",
      capabilities: "Можливості",
      testimonials: "Відгуки",
      contact: "Контакти",
      getQuote: "Отримати пропозицію",
    },
    hero: {
      badge: "",
      titleStart: "Високоякісне екранування",
      titleHighlight: "для вашого МРТ",
      description:
        "Провідні рішення електромагнітного екранування для оптимальної роботи МРТ, безпеки пацієнтів та відповідності нормативним вимогам.",
      viewProducts: "Переглянути продукцію",
      requestQuote: "Запит пропозиції",
    },
    products: {
      sectionLabel: "Портфоліо",
      title: "Наші рішення",
      description:
        "Кожне рішення спроектовано з високою точністю для відповідності найвищим стандартам електромагнітного екранування в сучасних МРТ-середовищах.",
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
      title: "Чому обирають нас",
      description:
        "Багато років досвіду в електромагнітному екрануванні підкріплені передовим виробництвом та суворим контролем якості.",
      items: [
        { title: "100+ дБ ослаблення", desc: "Відповідність вимогам екранування провідних виробників МРТ." },
        { title: "Індивідуальне проектування", desc: "Кожна клітка адаптована до точних розмірів та вимог вашого об'єкта." },
        { title: "Розширене моделювання", desc: "Електромагнітне моделювання на основі МСЕ забезпечує продуктивність до виготовлення." },
        { title: "Повна установка", desc: "Монтаж, тестування та введення в експлуатацію нашими спеціалізованими командами." },
        { title: "Швидке виконання", desc: "Оптимізоване виробництво від концепції до монтажу за 8–12 тижнів." },
        { title: "Сертифікована якість", desc: "Процеси, сертифіковані за ISO 9001, з повним відстеженням та документацією." },
      ],
    },
    testimonials: {
      sectionLabel: "Відгуки",
      title: "Довіра провідних установ",
      items: [
        {
          quote: "ShieldRF забезпечили бездоганний корпус для МРТ 3Т у стислі терміни. Їхні результати ослаблення перевищили наші специфікації на 15 дБ.",
          name: "Д-р Хелена Кесслер",
          role: "Керівник радіології, Мюнхенська університетська лікарня",
        },
        {
          quote: "Модульна панельна система дозволила нам модернізувати існуючий комплекс без масштабного будівництва. Простій склав менше 48 годин.",
          name: "Джеймс Торнтон",
          role: "Директор з об'єктів, Медичний центр Вестфілд",
        },
        {
          quote: "Від моделювання до введення в експлуатацію їхня інженерна команда була видатною. Тепер ми обираємо ShieldRF для всіх нових установок МРТ.",
          name: "Проф. Акіра Танака",
          role: "Головний медичний фізик, Інститут візуалізації Осака",
        },
      ],
    },
    contact: {
      sectionLabel: "Контакти",
      title: "Обговоримо ваш проект",
      description:
        "Для прорахунку вартості проєкту, або у разі необхідності технічної консультації — наша інженерна команда готова допомогти.",
       phone: "+1 (555) 012-3456",
       email: "info@emigli.com",
       address: "1200 Industrial Pkwy, Suite 300, Denver, CO 80202",
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
      toastTitle: "Повідомлення надіслано!",
      toastDescription: "Ми зв'яжемося з вами протягом 24 годин.",
    },
    footer: {
      tagline: "Високоякісне РЧ-екранування для систем МРТ",
    },
  },
} as const;

export type Translations = (typeof translations)[Locale];
