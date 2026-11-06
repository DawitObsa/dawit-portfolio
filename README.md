# Dawit Portfolio

This project now has a frontend and backend split.

## Frontend

The portfolio website is the main React app in the root project.

```sh
npm install
npm run dev:frontend
```

## Backend

The API backend lives in the `backend/` folder and handles project inquiry submissions.

```sh
cd backend
npm install
cp .env.example .env
npm run dev
```

Add real email sending by configuring:

```env
RESEND_API_KEY=your_resend_key
EMAIL_FROM="Dawit Portfolio <noreply@resend.dev>"
ADMIN_EMAIL=devaoobsa@gmail.com
```

## Run both together

From the project root:

```sh
npm install
npm run dev
```

This starts:
- the frontend on the Vite dev server
- the backend API on port 4000

## Built with

- TanStack Start
- React
- TypeScript
- Tailwind CSS
- Express
- Supabase
