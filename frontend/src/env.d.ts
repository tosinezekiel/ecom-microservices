/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_USER_URL: string
    readonly VITE_API_ORDER_URL: string
    readonly VITE_API_SHOPPING_URL: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}

declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
  }