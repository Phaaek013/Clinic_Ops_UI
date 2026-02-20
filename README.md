# Clinic_Ops_UI Demo Prototype

Offline-first demo prototype built with Vite + React + React Router, using only mock data and local assets.

## Run locally

```bash
npm install
npm run dev
```

## Mock credentials

- `lifemed@demo.local / 123456` → `LIFEMED_STAFF`
- `internal@demo.local / 123456` → `INTERNAL_STAFF`
- `admin@demo.local / 123456` → `ADMIN`

## Notes

- All screens are mapped from `docs/ui/routes.autogen.tsv`.
- Non-showcase pages use screenshot-first templates.
- No backend integration and no persistence of clinical/anamnesis data.
