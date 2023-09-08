# Sky Seeker

Sky Seeker - это современный веб-проект, разработанный с использованием самых передовых технологий веб-разработки.

## Основные компоненты

1. **Vite**: Используется для быстрой сборки и разработки.
2. **React**: Основная библиотека для построения пользовательского интерфейса.
3. **TypeScript**: Предоставляет статическую типизацию для более безопасной и предсказуемой разработки.
4. **PostCSS**: Используется для трансформации CSS с использованием JavaScript.

## Поддержка браузеров

Проект настроен таким образом, чтобы обеспечивать поддержку современных браузеров и IE11. Для этого используются различные плагины и полифилы, такие как `autoprefixer` и `vite-plugin-legacy`.

### Поддержка IE11

- Использование полифилла для поддержки CSS переменных.
- Применение специфичных для IE11 CSS-хаков для корректного отображения стилей.
- Тщательное тестирование в IE11 с помощью ресурса SauceLabs для обеспечения корректной работы всех функций.
- Настройка Babel и Vite для обеспечения совместимости с IE11.
- Настройка PostCSS для обеспечения совместимости с IE11, включая автоматическое добавление вендорных префиксов.

## Установка и запуск

1. Клонируйте репозиторий:

`git clone https://github.com/itsslava/sky-seeker.git`

2. Установите зависимости:

`npm install`

3. Запустите проект в режиме разработки:

`npm run dev`

Так же проект доступен по ссылке [SkySeeker](https://sky-seeker-37tcri3rf-itsslava.vercel.app)