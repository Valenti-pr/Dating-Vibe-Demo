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

export const PROFILES: Profile[] = [
  {
    id: "p1",
    name: "Алина",
    age: 24,
    city: "Москва",
    initials: "А",
    interests: ["Кофе", "Прогулки", "AI‑matching"],
    match: 92
  },
  {
    id: "p2",
    name: "Никита",
    age: 27,
    city: "Санкт‑Петербург",
    initials: "Н",
    interests: ["Музыка", "Стартапы", "VR‑свидания"],
    match: 84
  },
  {
    id: "p3",
    name: "Лера",
    age: 22,
    city: "Казань",
    initials: "Л",
    interests: ["Кино", "Путешествия", "Мемы"],
    match: 88
  },
  {
    id: "p4",
    name: "Илья",
    age: 29,
    city: "Екатеринбург",
    initials: "И",
    interests: ["Горы", "Фотография", "Нейросети"],
    match: 79
  },
  {
    id: "p5",
    name: "Соня",
    age: 25,
    city: "Новосибирск",
    initials: "С",
    interests: ["Йога", "Рейвы", "Подкасты"],
    match: 90
  },
  {
    id: "p6",
    name: "Даня",
    age: 26,
    city: "Ростов‑на‑Дону",
    initials: "Д",
    interests: ["Бег", "Еда", "Дизайн"],
    match: 81
  }
];

export const MOOD_TAGS: Tag[] = [
  { id: "t1", label: "Приключения" },
  { id: "t2", label: "Кофе и разговоры" },
  { id: "t3", label: "Танцы до утра" },
  { id: "t4", label: "Серьёзно, но легко" },
  { id: "t5", label: "Мемы обязательны" }
];

