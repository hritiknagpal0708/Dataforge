# DataForge

React + Vite + Tailwind frontend with an Express (Nodemailer) backend for the contact form.
Inquiries are emailed to the address in `INQUIRY_TO`.

## Setup

    npm install
    cd server && npm install && cp .env.example .env

Edit `server/.env` and set `SMTP_PASS` to a Gmail App Password
(Google Account > Security > 2-Step Verification > App passwords).

## Development (two terminals)

    cd server && npm run dev     # API on :3001
    npm run dev                  # site on :5173 (proxies /api to :3001)

Set `DRY_RUN=true` in `server/.env` to log emails instead of sending them.

## Production

    npm run build
    cd server && npm start       # serves the site and the API together

Add your live site URL to `ALLOWED_ORIGINS` if the frontend is hosted separately.
# Dataforge
