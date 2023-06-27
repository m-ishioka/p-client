/// <reference types="node" />

/**
 * override nodeJs namespace type
 */
declare namespace NodeJS {
  interface ProcessEnv {
    readonly NEXT_PUBLIC_API_URL_BASE: string
  }
}
