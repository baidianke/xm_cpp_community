import { apiInstance as api } from '@/utils/request/baseApis';

export const apiGetUserInfo = async (params: { token: string }): Promise<XM_SSO.XM_SSO_USER> => {
  return api.get('/api/v1/user/validate-token', {
    params,
  });
};
