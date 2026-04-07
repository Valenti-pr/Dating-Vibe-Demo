# ARCHITECTURE — Dating2026

## Структура файлов и папок

```
dating2026/
├── docs/
│   ├── PROJECT_OVERVIEW.md
│   ├── ARCHITECTURE.md
│   ├── TECH_STACK.md
│   └── CURRENT_STATUS.md
│
├── src/
│   ├── app/
│   │   ├── layout.tsx             # Root layout: шрифты, провайдеры, metadata
│   │   ├── page.tsx               # Главная страница
│   │   └── globals.css            # CSS переменные, keyframes
│   │
│   ├── components/
│   │   ├── sections/
│   │   │   ├── HeroSection/
│   │   │   │   ├── index.tsx
│   │   │   │   ├── HeroSection.tsx
│   │   │   │   ├── AnimatedBackground.tsx
│   │   │   │   └── FloatingCards.tsx
│   │   │   │
│   │   │   ├── AnimationsSection/
│   │   │   │   ├── index.tsx
│   │   │   │   ├── AnimationsSection.tsx
│   │   │   │   ├── ProfileCard.tsx
│   │   │   │   └── StaggerDemo.tsx
│   │   │   │
│   │   │   ├── InteractivitySection/
│   │   │   │   ├── index.tsx
│   │   │   │   ├── InteractivitySection.tsx
│   │   │   │   ├── LikeButton.tsx
│   │   │   │   ├── MatchSlider.tsx
│   │   │   │   └── MoodTags.tsx
│   │   │   │
│   │   │   ├── VisualEffectsSection/
│   │   │   │   ├── index.tsx
│   │   │   │   ├── VisualEffectsSection.tsx
│   │   │   │   ├── GlassCard.tsx
│   │   │   │   ├── GlowOrb.tsx
│   │   │   │   └── GradientText.tsx
│   │   │   │
│   │   │   ├── ResponsiveSection/
│   │   │   │   ├── index.tsx
│   │   │   │   ├── ResponsiveSection.tsx
│   │   │   │   └── DevicePreview.tsx
│   │   │   │
│   │   │   └── FooterSection/
│   │   │       ├── index.tsx
│   │   │       └── FooterSection.tsx
│   │   │
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── SectionHeader.tsx
│   │   │   ├── GlassPanel.tsx
│   │   │   └── ThemeToggle.tsx
│   │   │
│   │   └── layout/
│   │       ├── Navbar.tsx
│   │       └── ScrollProgress.tsx
│   │
│   ├── hooks/
│   │   ├── useScrollProgress.ts
│   │   ├── useInView.ts
│   │   ├── useTheme.ts
│   │   └── useConfetti.ts
│   │
│   ├── lib/
│   │   ├── animations.ts
│   │   ├── constants.ts
│   │   └── utils.ts
│   │
│   └── types/
│       └── index.ts
│
├── public/
│   └── og-image.png
│
├── .cursorrules
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

---

## Компоненты: детальное описание

### app/layout.tsx
Root layout. Подключает шрифты через next/font/google, оборачивает в ThemeProvider,
устанавливает metadata. Добавляет Navbar и ScrollProgress.

### app/page.tsx
Главная страница. Просто собирает все секции по порядку.
```tsx
export default function Home() {
  return (
    <main>
      <HeroSection />
      <AnimationsSection />
      <InteractivitySection />
      <VisualEffectsSection />
      <ResponsiveSection />
      <FooterSection />
    </main>
  )
}
```

---

### HeroSection

Задача: Первое впечатление. Визуальный wow за 3 секунды.

**AnimatedBackground.tsx**
Анимированный mesh-градиентный фон. CSS @keyframes для плавного движения цветовых
орбов. Три-четыре полупрозрачных круга разного цвета движутся по разным траекториям.
Чистый CSS для производительности.

**FloatingCards.tsx**
Плавающие мини-карточки профилей. Позиционированы абсолютно вокруг центрального
контента. Анимируются через Motion y: [0, -10, 0] с разными duration для органичности.
Показывают: аватар, имя, возраст, процент совместимости.

**HeroSection.tsx**
- Заголовок с gradient text animation
- Подзаголовок "Создано за 1 день с Claude и Cursor"
- CTA-кнопки: "Смотреть демо" + "GitHub"
- Анимация появления: fadeIn + slideUp с stagger через Motion
- Скролл-индикатор внизу

---

### AnimationsSection

Задача: Показать Framer Motion во всей красе.

**ProfileCard.tsx**
Карточка профиля дейтинг-приложения:
- Фото (gradient placeholder с инициалами)
- Имя, возраст, город
- Теги интересов (чипы)
- Кнопки действий (пропустить / лайк)
- whileHover: карточка поднимается, тень усиливается
- whileTap: небольшой scale down

**StaggerDemo.tsx**
Сетка из 6 карточек профилей. При попадании в viewport появляются по одной
с задержкой (stagger 0.1s). Используют variants и staggerChildren из Motion.
Подпись: "stagger animation + scroll trigger"

---

### InteractivitySection

Задача: Доказать, что сайт живой. Пользователь должен хотеть кликать.

**LikeButton.tsx**
Большая кнопка "Match!" с эффектами:
- При клике: конфетти через canvas-confetti (сердечки, розовый/красный)
- Иконка сердца: scale up -> bounce
- Счётчик лайков инкрементируется с анимацией числа
- После 3 кликов: "Ты слишком популярен"

**MatchSlider.tsx**
Слайдер "Совместимость":
- Custom styled range input
- При движении: меняется gradient-fill трека, иконка-эмодзи (от нейтрального до влюблённого)
- Значение анимируется через Motion spring
- Label меняется по порогам

**MoodTags.tsx**
Набор тегов настроения ("Приключения", "Кофе и разговоры"...):
- Кликабельные, toggle-переключение
- При выборе: border + bg меняется через Motion animate
- Плавный layout animation при добавлении тега в выбранные

---

### VisualEffectsSection

Задача: Чистая визуальная магия. Люди должны делать скриншоты.

**GlassCard.tsx**
Карточка с glassmorphism:
- backdrop-filter: blur(20px), полупрозрачный bg
- Subtle border: rgba(255,255,255,0.3)
- Hover: glow-эффект через box-shadow с цветом акцента

**GlowOrb.tsx**
Декоративные анимированные шары:
- CSS animation: scale + opacity пульсация
- Размытый цветной blob на фоне
- Несколько слоёв с разными цветами и задержками

**GradientText.tsx**
Текст с анимированным градиентом:
- CSS background-clip: text
- @keyframes анимация background-position
- Фразы про дейтинг 2026

---

### ResponsiveSection

Задача: Показать адаптивность интерактивно, не просто рассказать о ней.

**DevicePreview.tsx**
Симулятор устройств:
- Три кнопки: Desktop / Tablet / Mobile
- При переключении: масштабированный div меняет размер с анимацией Motion layout
- Внутри: мини-версия профиля дейтинг-приложения

---

### FooterSection

Содержит:
- Логотип/название
- Стек технологий (иконки или чипы)
- "Создано за 24 часа с Claude + Cursor"
- GitHub ссылка
- CTA: "Хочешь научиться так же?"
- Copyright

---

### ui/SectionHeader.tsx
Переиспользуемый заголовок секции:
```tsx
<SectionHeader
  number="01"
  tag="Animations"
  title="Карточки, которые живут"
  description="Framer Motion + spring physics = анимации, которые чувствуются правильно"
/>
```
Номер секции — крупный, полупрозрачный. Tag — бейдж с акцентным цветом.

### ui/ThemeToggle.tsx
Кнопка переключения тем. Анимированная иконка sun/moon через Motion rotateY.
Сохраняет выбор в localStorage. Работает через CSS data-theme на html.

### layout/Navbar.tsx
Прозрачный navbar. При скролле > 50px: добавляется backdrop-filter: blur.
Содержит: лого слева, якорные ссылки, ThemeToggle справа.
На мобиле: hamburger-меню.

### layout/ScrollProgress.tsx
Тонкая линия-прогресс вверху страницы (как на Medium).
Ширина = процент прокрутки. Цвет — gradient акцента.

---

## Motion Variants (lib/animations.ts)

```ts
export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
}

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
}

export const cardHover = {
  whileHover: { y: -8, boxShadow: "0 20px 60px rgba(0,0,0,0.15)" },
  whileTap: { scale: 0.97 }
}

export const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
}
```

---

## Принципы организации кода

1. Секции самодостаточны — каждая содержит свои субкомпоненты
2. Контент отделён от UI — все тексты в lib/constants.ts
3. CSS Variables для тем — никаких dark: классов Tailwind в компонентах
4. Motion variants в lib/animations.ts — компоненты импортируют готовые варианты
5. Типы в types/index.ts — Profile, Section, Theme, Tag
6. Хуки переиспользуемы — useInView с дефолтными настройками (once: true, amount: 0.2)

---

## Паттерн добавления новой секции

1. Создать папку src/components/sections/NewSection/
2. Добавить index.tsx + NewSection.tsx + субкомпоненты
3. Добавить импорт в app/page.tsx
4. Добавить якорную ссылку в Navbar.tsx
5. Обновить CURRENT_STATUS.md
