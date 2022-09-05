declare module '*.less' {
  const resource: { [key: string]: string };
  export = resource;
}

declare namespace NodeJS {
  interface ProcessEnv {
    XM: 'dev' | 'test' | 'gray' | 'prod';
    XM_ENV: {
      PORT: string;
      APP_NAME: string;
      WECHAT_APP_ID: string;
      WECHAT_DIRECT_URL: string;
      BASE_URL: string;
      SSO_URL: string;
      XM_APP_ID: string;
      SSO_SCRIPT: string;
    };
  }
}

declare namespace XM_SSO {
  interface XM_SSO_USER {
    accessToken: string;
    userId: number;
    avatarImg: string;
    nickname: string;
    phone: string;
  }

  interface XM_SSO_SDK_CONFIG {
    onLoginSuccess: (user: XM_SSO_USER) => void;
    doTrack: (name: string) => void;
    xmAppId: string;
    wxAppId?: string;
    regProtocolUrl?: string;
    skipPwdSet?: boolean;
    loginSuccessCallback: string;
    wechatBindType?: 'normal' | 'bubble';
    phoneInputPlaceholder?: string;
    loginByPhonePlaceholder?: string;
    isShowWeiXinLogin?: boolean;
    isBubble?: boolean;
    loginMethods?: 'password' | 'sms' | 'exam' | 'quicklogin' | 'teacher' | string;
  }

  interface XM_SSO_SDK {
    openLoginDialog: () => void;
    openRegDialog: () => void;
    openResetDialog: () => void;
    config: (options: XM_SSO_SDK_CONFIG) => void;
    getCurrentUser: () => Promise<XM_SSO_USER>;
    getCurrentUserToken: () => Promise<string>;
    doLogOut: () => void;
    loginByWechat: () => void;
  }
}

declare interface Window {
  XM_SSO_SDK: XM_SSO.XM_SSO_SDK;
}

/* eslint-disable */
declare type NextPageWithCustomConfig<P = {}, IP = P> = NextPage<P, IP> & {
  needSign: boolean;
};
/* eslint-enable */

declare type AppPropsWithCustomConfig = AppProps & {
  Component: NextPageWithCustomConfig;
};
