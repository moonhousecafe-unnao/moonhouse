# Moon Light Cafe

## Setup (after cloning)
1. `cp .env.example .env` and fill in the values (Firebase console > Project settings > Your apps).
2. `node scripts/make-config.js` - creates `public/firebase-config.js` (gitignored).
3. Deploy: `firebase deploy --only firestore:rules,hosting`

## Secrets
- `.env` and `public/firebase-config.js` are gitignored. Never commit them.
- Firebase *web* config values are not secret (the browser must receive them). Protect the project with
  Firestore rules, App Check, and an HTTP-referrer restriction on the API key in Google Cloud Console.
- Service-account JSON / Admin SDK keys are real secrets: never put them in this repo or in `public/`.
