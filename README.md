This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Environment Variables

This app requires a NewsAPI key to fetch news articles.

1. Sign up at [newsapi.org](https://newsapi.org) to get a free API key.
2. Copy `.env.example` to `.env.local` and add your API key:
   ```
   NEXT_PUBLIC_NEWS_API_KEY=your_actual_api_key_here
   ```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

### Steps:

1. Push your code to a Git repository (GitHub recommended).
2. Import your repository on Vercel.
3. In Vercel project settings, add the environment variable:
   - Name: `NEXT_PUBLIC_NEWS_API_KEY`
   - Value: Your NewsAPI key
   - Environment: Production
4. Deploy!

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
