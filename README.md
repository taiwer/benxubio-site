# Benxu Biotech

Benxu Biotech is a biotechnology corporate website built securely using Vite, React, Tailwind CSS, and Framer Motion. The application has been refactored into modular components for easier maintenance.

## Project Structure

- `src/App.tsx`: Main application wrapper routing between pages.
- `src/pages/`: Contains the three main route pages (`HomePage`, `ServicesPage`, `AboutPage`).
- `src/components/layout/`: Shared layout structures like `Navbar` and `Footer`.
- `src/components/`: Component directory including logic animations like particles etc.
- `src/types.ts`: Global types used across the site.

## Installation

1. Make sure you have Node installed (Node 18+ recommended).
2. Install dependencies:
   ```bash
   npm install
   ```

## Development

Run the following command to start a local development server with hot-reload enabled:

```bash
npm run dev
```

The application will be accessible via \`localhost:3000\`.

## Building for Production

Compile a production-ready application using Vite:

```bash
npm run build
```

The bundled static assets will be located in the \`dist/\` output folder.

## Deployment

Since the application is purely client-side React code bundled by Vite, you can host the \`dist/\` payload on servers like:
- **Vercel / Netlify / Cloudflare Pages**: Connect your Git repository and set the framework to "Vite". The build command will typically be `npm run build` and output folder `dist`.
- **Nginx Backend Flow**: Once built, simply transfer the folder contents of \`dist/\` to \`/var/www/html\` or point an Nginx block root config correctly to serve index.html statically.
