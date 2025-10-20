import { defineConfig } from 'vitest/config'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: [
      {
        find: /^@\//,
        replacement: path.resolve(__dirname, '.') + '/'
      }
    ]
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './tests/setupTests.ts',
    coverage: {
      provider: 'istanbul',
      reportsDirectory: './coverage',
      reporter: ['lcov', 'html', 'text'],
      all: true,
      include: ['src/**/*.{ts,tsx,js,jsx}', 'components/**/*.{ts,tsx,js,jsx}']
    }
  }
})
