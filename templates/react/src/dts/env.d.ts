/**
 * @file env.d.ts
 * @ref https://nodejs.org/api/process.html#processenv
 * @ref https://vitejs.dev/guide/env-and-mode.html#intellisense-for-typescript
*/

namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
  }
}

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
