import { useState, ReactNode, useEffect } from 'react';
import Script from 'next/script';
import {
  getUserToken,
  removeUserId,
  removeUserInfo,
  removeUserToken,
  setUserId,
  setUserInfo as setUserInfoCookie,
} from '@/utils/userCookie';
import { apiGetUserInfo } from '@/services/user';
import UserContext, { UserInfo } from './UserContext';
import { globalBus, GlobalEvents } from '@/utils/globalBus';

interface Props {
  needSign?: boolean;
  children: ReactNode;
}
const UserProvider: React.FC<Props> = ({ children, needSign }) => {
  console.log('provider--needSign-', needSign);

  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  useEffect(() => {
    globalBus.on(GlobalEvents.LOGIN_TIME_OUT, () => {
      removeUserId();
      removeUserInfo();
      removeUserToken();
      setUserInfo(null);
      window.XM_SSO_SDK && window.XM_SSO_SDK.openLoginDialog();
    });

    return () => {
      globalBus.off(GlobalEvents.LOGIN_TIME_OUT);
    };
  }, []);

  useEffect(() => {
    if (needSign) {
      const token = getUserToken();
      if (token) {
        apiGetUserInfo({ token })
          .then((data) => {
            setUserInfo(data);
          })
          .catch((e) => {
            console.log(e);
          });
      } else {
        window.XM_SSO_SDK && window.XM_SSO_SDK.openLoginDialog();
      }
    }
  }, [needSign]);

  const login = () => {
    if (window && window.XM_SSO_SDK) {
      window.XM_SSO_SDK.openLoginDialog();
    }
  };

  const logout = () => {
    if (window && window.XM_SSO_SDK) {
      window.XM_SSO_SDK.doLogOut();
      removeUserId();
      removeUserInfo();
      removeUserToken();
      setUserInfo(null);
    }
  };

  const registet = () => {
    if (window && window.XM_SSO_SDK) {
      window.XM_SSO_SDK.openRegDialog();
    }
  };

  const handleInitConfig = () => {
    console.log('init-config');
    if (window && window.XM_SSO_SDK) {
      window.XM_SSO_SDK.config({
        doTrack: (name) => {
          console.log('doTrack-name---', name);
        },
        onLoginSuccess: (user) => {
          setUserId(user.userId);
          setUserInfo(user);
          setUserInfoCookie(user);
        },
        xmAppId: process.env.XM_ENV.XM_APP_ID,
        loginSuccessCallback: '',
        skipPwdSet: true,
        isShowWeiXinLogin: false,
      });
    }
  };

  return (
    <UserContext.Provider value={{ userInfo, logout, login, registet }}>
      <Script id="sso_sdk" src={process.env.XM_ENV.SSO_SCRIPT} onLoad={handleInitConfig} />
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
