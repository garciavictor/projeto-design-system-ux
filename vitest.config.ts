import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        environment: 'jsdom',
        globals: true,
        coverage: {
            exclude: ['**/stories/**', '**/*.stories.tsx', ".storybook", "storybook-static/**"],
        },
    }
})