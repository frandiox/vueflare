declare module 'vitedge' {
  import { App } from 'vue'
  import { Router, RouteLocationRaw, RouteLocationNormalized } from 'vue-router'

  const handler: (
    App: any,
    options: {
      routes: RouteLocationRaw[]
      base?: ({ url: URL }) => string
      pageProps?: boolean
    },
    hook: (params: {
      app: App
      router: Router
      isClient: boolean
      initialState: unknown
      initialRoute: RouteLocationNormalized
    }) => void | Promise<void>
  ) => void

  export default handler
}

export type PropsOptions = {
  headers?: Record<string, string>
  cache?: {
    api?: number | boolean
    html?: number | boolean
  }
}

type ReturnedPropsPayload = { data: any; options?: PropsOptions }

export type EdgeProps = {
  options?: PropsOptions
  handler: (payload: {
    event: any
    request: any
    fullPath: string
    propsGetter: string
    name?: string
    hash?: string
    params?: Record<string, string | string[]>
    query?: Record<string, string | string[]>
  }) => ReturnedPropsPayload | Promise<ReturnedPropsPayload>
}

export type ApiOptions = {
  headers?: Record<string, string>
  cache?: {
    api?: number | boolean
  }
}

type ReturnedApiPayload = { data: any; options?: ApiOptions }

export type ApiEndpoint = {
  options?: ApiOptions
  handler: (payload: {
    event: any
    request: any
    url: URL
    query?: Record<string, string | string[]>
  }) => ReturnedApiPayload | Promise<ReturnedApiPayload>
}
