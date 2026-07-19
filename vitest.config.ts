import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      include: ['src/**/*.{ts,tsx}'],
      exclude: [
        'src/**/*.docs.mdx',
        'src/**/*.styles.ts',
        'src/**/*.stories.ts',
        'src/**/*.stories.tsx',
        'src/**/stories/**',
        'src/**/*.test.ts',
        'src/**/*.test.tsx',
        'src/**/*.types.ts',
        'src/**/index.ts',
        'src/theme/theme.types.ts',
      ],
      thresholds: {
        branches: 100,
        functions: 100,
        lines: 100,
        statements: 100,
      },
    },
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
  },
});
