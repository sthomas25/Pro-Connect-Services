# Pro-Connect-Services

A minimal ProConnect AI backend scaffold built with TypeScript and Express.

## Getting Started

1. Copy `.env.example` to `.env` and set your environment variables:

   ```env
   PORT=3000
   OPENAI_KEY=your_openai_key
   SUPABASE_URL=your_supabase_url
   SUPABASE_KEY=your_supabase_key
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Build the project:

   ```bash
   npm run build
   ```

4. Start the server:

   ```bash
   npm start
   ```

## Available API Routes

- `GET /api/chat`
- `GET /api/leads`
- `GET /api/bookings`
- `GET /api/health`

## Deployment

- Set the start command to:

  ```bash
  npm start
  ```

- Required environment variables:
  - `OPENAI_KEY`
  - `SUPABASE_URL`
  - `SUPABASE_KEY`
  - `PORT`
