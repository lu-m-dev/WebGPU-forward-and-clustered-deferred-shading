import { defineConfig } from 'vite'

declare const process: any

export default defineConfig({
    build: {
        target: 'esnext'
    },
    base: process.env.GITHUB_ACTIONS_BASE || './'
})
