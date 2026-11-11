# Naksala Sabeenthiran – Portfolio (React + Node/Express)

```
portfolio-fullstack/
├── client/   React (Vite) website
│   └── src/data/profile.js   <- all your text lives here
└── server/   Express API that receives the contact form and emails it to you
```

## Run it on your computer
You need Node.js 18 or newer.

**1. Backend** (first terminal)
```
cd server
npm install
cp .env.example .env     # then fill in EMAIL_USER and EMAIL_PASS (optional for testing)
npm run dev
```
Without email settings, messages are printed in this terminal, which is fine for testing.

**2. Frontend** (second terminal)
```
cd client
npm install
npm run dev
```
Open http://localhost:5173

## Change the content
Edit `client/src/data/profile.js` (text, projects, technologies in the scrolling line).
Colours (light and dark) are at the top of `client/src/styles.css`. The 3D background is `client/src/components/KnowledgeGraph.jsx` (change `NODE_COUNT` for more or fewer dots). Replace `client/public/profile.jpg` to change the photo.

## Deploy
- **Frontend:** `cd client && npm run build`, then upload `client/dist` to Netlify or Vercel.
  Set `VITE_API_URL` to your deployed backend address before building.
- **Backend:** deploy `server/` to Render. Render's free plan blocks Gmail/SMTP, so use `RESEND_API_KEY` there.
  Set the variables from `.env`, with `CLIENT_URL` as your website address.
  **Live link** : https://naksala.netlify.app
