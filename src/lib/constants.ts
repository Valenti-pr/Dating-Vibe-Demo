import type { Profile, Section, Tag } from "@/types";

export const SECTIONS: Section[] = [
  {
    id: "hero",
    number: "00",
    tag: "Dating 2026",
    title: "Онлайн‑знакомства, которые чувствуются живыми",
    description: "Анимации, интерактив и визуальные эффекты — всё в одном showcase."
  },
  {
    id: "animations",
    number: "01",
    tag: "Animations",
    title: "Карточки, которые живут",
    description: "Motion + spring physics = анимации, которые ощущаются правильно."
  },
  {
    id: "interactivity",
    number: "02",
    tag: "Interactivity",
    title: "Кликается — значит настоящее",
    description: "Слайдеры, кнопки, теги настроения и маленькие сюрпризы."
  },
  {
    id: "effects",
    number: "03",
    tag: "Visual",
    title: "Визуальная магия",
    description: "Glassmorphism, glow‑эффекты и градиенты, которые хочется скриншотить."
  },
  {
    id: "responsive",
    number: "04",
    tag: "Responsive",
    title: "Адаптивность — интерактивно",
    description: "Переключай устройство и смотри, как интерфейс подстраивается."
  }
];

export const NAV_LINKS: Array<{ href: string; label: string }> = [
  { href: "#hero", label: "Главная" },
  { href: "#animations", label: "Анимации" },
  { href: "#interactivity", label: "Интерактив" },
  { href: "#effects", label: "Эффекты" },
  { href: "#responsive", label: "Адаптив" }
];

export const NAV_CTA = {
  demoHref: "#interactivity",
  demoLabel: "Смотреть демо",
  mobileDemoLabel: "Демо",
  brand: {
    href: "#hero",
    name: "Dating",
    accent: "2026"
  }
} as const;

export const EXTERNAL_LINKS = {
  githubRepo: "https://github.com/Valenti-pr/Dating-Vibe-Demo"
} as const;

export const UI_COPY = {
  match: {
    title: "Совместимость",
    hint: "Двигай ползунок — значение пружинит.",
    min: "0%",
    max: "100%",
    steps: [
      { lt: 35, label: "Сомнительно", emoji: "😐" },
      { lt: 70, label: "Интересно", emoji: "🙂" },
      { lt: 90, label: "Очень даже", emoji: "😍" },
      { lt: 101, label: "Судьба", emoji: "💘" }
    ]
  },
  moods: {
    title: "Теги настроения",
    selectedPrefix: "Выбрано:",
    selectedNone: "ничего"
  },
  like: {
    labelDefault: "Match!",
    labelPopular: "Ты слишком популярен",
    countPrefix: "Лайков:"
  },
  effectsCards: [
    {
      accent: "pink",
      title: "GlassCard",
      description: "backdrop blur + полупрозрачный фон. Наведи курсор — появится мягкий glow."
    },
    {
      accent: "violet",
      title: "Glow Orbs",
      description: "Декоративные blobs на фоне: чистый CSS, минимум JS."
    },
    {
      accent: "cyan",
      title: "GradientText",
      description: "Анимированный градиент через background-clip: text."
    }
  ]
} as const;

export const HERO_COPY = {
  badge: "Создано за 1 день с Claude и Cursor",
  titleBeforeAccent: "Вайб‑лендинг для дейтинга",
  titleAccent: "будущего",
  description:
    "Здесь всё сделано, чтобы захотелось кликать: карточки, эффекты, интерактивные демо и аккуратная типографика.",
  ctaPrimary: { href: "#animations", label: "Смотреть демо" },
  ctaSecondary: { href: EXTERNAL_LINKS.githubRepo, label: "GitHub" },
  scrollHint: { href: "#animations", label: "Листай ниже" }
} as const;

export const FOOTER_COPY = {
  brand: NAV_CTA.brand,
  subtitle: "Создано за 24 часа с Claude + Cursor",
  techStack: ["Next.js", "React", "TypeScript", "Tailwind", "Motion"],
  github: { href: EXTERNAL_LINKS.githubRepo, label: "GitHub" },
  backToTop: { href: "#hero", label: "Наверх" },
  copyrightSuffix: "Dating2026. Demo project."
} as const;

export const PROFILES: Profile[] = [
  {
    id: "p1",
    name: "Алина",
    age: 24,
    city: "Москва",
    initials: "А",
    interests: ["Кофе", "Прогулки", "AI‑matching"],
    match: 92,
    photo: {
      src: "https://images.unsplash.com/photo-1758523672347-d4a0e2bb33df?auto=format&fit=crop&w=256&h=256&q=80",
      alt: "Портрет: Алина улыбается на синем фоне",
      creditName: "Vitaly Gariev",
      creditUrl: "https://unsplash.com/@silverkblack"
    }
  },
  {
    id: "p2",
    name: "Никита",
    age: 27,
    city: "Санкт‑Петербург",
    initials: "Н",
    interests: ["Музыка", "Стартапы", "VR‑свидания"],
    match: 84,
    photo: {
      src: "https://images.unsplash.com/photo-1758523671894-b5891a2ef3b6?auto=format&fit=crop&w=256&h=256&q=80",
      alt: "Портрет: Никита улыбается на синем фоне",
      creditName: "Vitaly Gariev",
      creditUrl: "https://unsplash.com/@silverkblack"
    }
  },
  {
    id: "p3",
    name: "Лера",
    age: 22,
    city: "Казань",
    initials: "Л",
    interests: ["Кино", "Путешествия", "Мемы"],
    match: 88,
    photo: {
      src: "https://images.unsplash.com/photo-1769636930152-238ed1f7e07f?auto=format&fit=crop&w=256&h=256&q=80",
      alt: "Портрет: Лера улыбается в студии",
      creditName: "Jadon Johnson",
      creditUrl: "https://unsplash.com/@jadonjohnson"
    }
  },
  {
    id: "p4",
    name: "Илья",
    age: 29,
    city: "Екатеринбург",
    initials: "И",
    interests: ["Горы", "Фотография", "Нейросети"],
    match: 79,
    photo: {
      src: "https://images.unsplash.com/photo-1758613654360-45f1ff78c0cf?auto=format&fit=crop&w=256&h=256&q=80",
      alt: "Портрет: Илья в джинсовой рубашке на светлом фоне",
      creditName: "Vitaly Gariev",
      creditUrl: "https://unsplash.com/@silverkblack"
    }
  },
  {
    id: "p5",
    name: "Соня",
    age: 25,
    city: "Новосибирск",
    initials: "С",
    interests: ["Йога", "Рейвы", "Подкасты"],
    match: 90,
    photo: {
      src: "https://images.unsplash.com/photo-1569240134835-c20b283158e3?auto=format&fit=crop&w=256&h=256&q=80",
      alt: "Портрет: Соня улыбается среди листьев",
      creditName: "Rosesh Bhandari",
      creditUrl: "https://unsplash.com/@roseshijk_z"
    }
  },
  {
    id: "p6",
    name: "Даня",
    age: 26,
    city: "Ростов‑на‑Дону",
    initials: "Д",
    interests: ["Бег", "Еда", "Дизайн"],
    match: 81,
    photo: {
      src: "https://images.unsplash.com/photo-1758598302784-42d00ce2ba8f?auto=format&fit=crop&w=256&h=256&q=80",
      alt: "Портрет: Даня в очках улыбается в помещении",
      creditName: "Vitaly Gariev",
      creditUrl: "https://unsplash.com/@silverkblack"
    }
  }
];

export const MOOD_TAGS: Tag[] = [
  { id: "t1", label: "Приключения", emoji: "🧭" },
  { id: "t2", label: "Кофе и разговоры", emoji: "☕" },
  { id: "t3", label: "Танцы до утра", emoji: "💃" },
  { id: "t4", label: "Серьёзно, но легко", emoji: "✨" },
  { id: "t5", label: "Мемы обязательны", emoji: "🤣" }
];

