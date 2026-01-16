# NannyPoppins Rebranding

Next.js (App Router) + TypeScript + Tailwind + MongoDB (Mongoose) base focused on lead capture.

## Getting started

1) Install dependencies:

```bash
npm install
```

2) Create a local `.env` file from the template:

```bash
cp .env.example .env
```

3) Add your MongoDB connection string to `.env`:

```bash
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/nannypoppins
```

4) Run the dev server:

```bash
npm run dev
```

Visit `http://localhost:3000`.

## MongoDB setup

- Use MongoDB Atlas or a local instance.
- Ensure the database user has read/write access.
- The lead intake API uses the `Lead` model with Mongoose.

## Lead intake endpoint

`POST /api/leads`

Example payload:

```json
{
  "fullName": "Jane Doe",
  "email": "jane@email.com",
  "whatsapp": "+00 00000-0000",
  "city": "Miami",
  "serviceType": "full_time",
  "childrenCount": 2,
  "childrenAges": "2, 5",
  "startDate": "2024-08-01",
  "scheduleNotes": "Weekdays 8am to 6pm",
  "budgetRange": "mid",
  "languagePreference": "English",
  "notes": "We have a dog"
}
```

Responses:

- `201` -> `{ "ok": true, "id": "..." }`
- `400` -> `{ "ok": false, "error": "validation_error", "details": { ... } }`
# nannypoppinsportugal
