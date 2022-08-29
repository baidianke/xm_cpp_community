declare module '*.less' {
  const resource: {[key: string]: string};
  export = resource;
}

declare namespace NodeJS {
  interface ProcessEnv {
    XM: "dev" | "test" | "prod"
    XM_ENV: {
      PORT: string
      APP_NAME: string
      WECHAT_APP_ID: string
      WECHAT_DIRECT_URL: string
      BASE_URL: string
      SSO_URL: string
      XM_APP_ID: string
      SSO_SCRIPT: string
    }
  }
}
