# Crowdfunding Platform - Frontend (TypeScript)

Фронтенд приложение для краудфандинг платформы на React + TypeScript.

## Технологии

- React 18
- TypeScript
- React Router DOM
- Axios
- Vite

## Установка

```bash
npm install
```

## Запуск

```bash
npm run dev
```

Приложение будет доступно по адресу: http://localhost:3000

## Сборка

```bash
npm run build
```

## Структура проекта

```
src/
├── components/         # React компоненты
│   ├── Navbar.tsx
│   ├── CampaignCard.tsx
│   └── PrivateRoute.tsx
├── context/           # React Context
│   └── AuthContext.tsx
├── pages/             # Страницы приложения
│   ├── HomePage.tsx
│   ├── LoginPage.tsx
│   ├── RegisterPage.tsx
│   ├── CampaignDetailsPage.tsx
│   ├── CreateCampaignPage.tsx
│   ├── MyCampaignsPage.tsx
│   └── ProfilePage.tsx
├── services/          # API сервисы
│   └── api.ts
├── types.ts           # TypeScript интерфейсы
├── App.tsx
└── main.tsx
```

## API

Backend должен быть запущен на http://localhost:8080
