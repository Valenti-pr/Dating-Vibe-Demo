# TECH STACK — Dating2026

## Выбранный стек

### Core
| Технология | Версия | Зачем |
|---|---|---|
| **Next.js 15** | latest | App Router, SSG, оптимизация изображений, отличный DX |
| **React 19** | latest | Concurrent features, новые хуки |
| **TypeScript** | 5.x | Типобезопасность, автодополнение в Cursor |

### Стилизация
| Технология | Зачем |
|---|---|
| **Tailwind CSS 4** | Утилитарные классы, быстрая разработка, dark mode из коробки |
| **CSS Variables** | Темы (light/dark), единая цветовая система |

### Анимации — ключевой выбор
| Технология | Зачем |
|---|---|
| **Motion (Framer Motion 11)** | Главная анимационная библиотека. `useInView`, `AnimatePresence`, stagger, spring physics |
| **GSAP (опционально)** | Для сложных scroll-driven анимаций в Hero-секции |

**Почему Motion, а не CSS-анимации?**  
Motion даёт spring physics, которые выглядят органично. `staggerChildren` — для карточек. `useScroll` — для параллакса. AnimatePresence — для mount/unmount. CSS-анимации не дают такого контроля.

### Интерактив
| Технология | Зачем |
|---|---|
| **canvas-confetti** | Конфетти при кликах — 2KB, без зависимостей |
| **react-spring** | Альтернатива Motion для физических эффектов |

### Контент и иконки
| Технология | Зачем |
|---|---|
| **Lucide React** | Современные иконки, tree-shakeable |
| **next/font** | Google Fonts без FOUT, оптимизированная загрузка |

### Шрифты (важно!)
- **Display:** `Clash Display` или `Syne` — характерный, не Inter
- **Body:** `DM Sans` или `Plus Jakarta Sans` — читаемый, современный
- **Accent:** `Space Mono` — для кодовых вставок и акцентов

### Dev Tools
| Инструмент | Зачем |
|---|---|
| **ESLint + Prettier** | Единый стиль кода |
| **Cursor** | AI-assisted разработка |
| **Vercel** | Деплой в 1 клик, Edge Network |

## Структура команд

```bash
# Создание проекта
npx create-next-app@latest dating2026 --typescript --tailwind --app --src-dir

# Основные зависимости
npm install motion canvas-confetti lucide-react clsx

# Опционально
npm install gsap @gsap/react
```

## Почему НЕ выбрали альтернативы

| Альтернатива | Почему нет |
|---|---|
| Vite + React | Нет SSG/SSR, сложнее деплой |
| Gatsby | Устаревший, медленный build |
| Vue/Svelte | Меньше экосистема для showcase |
| Styled Components | Хуже с Tailwind, лишняя сложность |
| Three.js | Избыточно для MVP, можно добавить позже |

## Цветовая палитра

### Светлая тема (основная)
```css
:root {
  /* Фон */
  --bg-primary: #FAFAF8;        /* Тёплый белый, не стерильный */
  --bg-secondary: #F3F2EE;      /* Секции с отступом */
  --bg-card: #FFFFFF;

  /* Текст */
  --text-primary: #0F0E0C;      /* Почти чёрный, тёплый */
  --text-secondary: #6B6A66;    /* Серый для подписей */
  --text-muted: #A8A7A3;

  /* Акценты — морская волна + коралл */
  --accent-teal: #00B4A6;       /* Главный акцент */
  --accent-teal-light: #E0F7F5;
  --accent-teal-glow: #00B4A640;
  --accent-coral: #FF6B6B;      /* Вторичный акцент */
  --accent-gold: #F5A623;       /* Третичный, для highlights */

  /* Градиенты */
  --gradient-hero: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #00B4A6 100%);
  --gradient-card: linear-gradient(145deg, #ffffff 0%, #f0fffe 100%);
  --gradient-text: linear-gradient(90deg, #00B4A6, #667eea);

  /* Glassmorphism */
  --glass-bg: rgba(255, 255, 255, 0.7);
  --glass-border: rgba(255, 255, 255, 0.3);
  --glass-blur: blur(20px);

  /* Тени */
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.06);
  --shadow-md: 0 8px 32px rgba(0, 0, 0, 0.10);
  --shadow-glow: 0 0 40px rgba(0, 180, 166, 0.3);
}
```

### Тёмная тема
```css
[data-theme="dark"] {
  --bg-primary: #0A0A0F;
  --bg-secondary: #111118;
  --bg-card: #16161F;

  --text-primary: #F0EFE8;
  --text-secondary: #8B8A85;
  --text-muted: #504F4C;

  --accent-teal: #00E5D4;       /* Ярче в тёмной теме */
  --accent-teal-light: #00E5D410;
  --accent-teal-glow: #00E5D430;
  --accent-coral: #FF8585;

  --glass-bg: rgba(16, 16, 24, 0.8);
  --glass-border: rgba(255, 255, 255, 0.08);

  --shadow-glow: 0 0 60px rgba(0, 229, 212, 0.2);
}
```

## Breakpoints (Tailwind)
```
sm:  640px  — большой телефон
md:  768px  — планшет
lg:  1024px — ноутбук
xl:  1280px — десктоп
2xl: 1536px — широкий монитор
```
