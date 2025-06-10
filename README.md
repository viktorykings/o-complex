First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

- адаптирован под мобильные устройства и планшеты
- наполнение контентом отзывов из html обернутого в json
- наполнение контентом товары по апи
  - первую страница показывается сразу
  - остальные страницы подгружать ajax запросом, по мере прокрутки вниз
- добавлены лоадеры пока грузится контент.
- dompurify для защиты от xss атаки через контент отзывов
