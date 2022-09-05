import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { globalBus, GlobalEvents } from '../globalBus';
import { getUserToken } from '../userCookie';
import Toast from '@/utils/toast';

class Apis {
  public readonly axiosInstance: AxiosInstance;

  public constructor(baseURL: string) {
    this.axiosInstance = this.initBackendAxios(baseURL);
  }

  private responseInterceptor = (d: AxiosResponse) => {
    const res = d.data;
    if (res.code === 200 || res.code === 0) {
      return res.data;
    }
    if (res.code === 12012 || res.code === 10002 || res.code === 10010 || res.code === 10021) {
      if (typeof window !== 'undefined') {
        Toast.error(res.message);
        globalBus.emit(GlobalEvents.LOGIN_TIME_OUT);
      } else {
        return Promise.reject(res);
      }
    }
    return Promise.reject(res);
  };

  private rejectInterceptor = (error: AxiosError) => {
    const errorMessage = error.message || '';
    const timeoutRegExp = /^timeout.+exceeded$/;
    if (timeoutRegExp.test(errorMessage)) {
      error.code = '11111';
      error.message = '请求超时，请重试';
    }
    return Promise.reject(error);
  };

  private initBackendAxios(baseURL: string) {
    const axiosInstance = axios.create({
      baseURL: baseURL,
    });
    axiosInstance.interceptors.request.use((config) => {
      const userToken = getUserToken();
      if (userToken) {
        config.headers!['Access-Token'] = userToken;
      }
      if (config.method === 'post') {
        config.headers!['Content-Type'] = 'application/json';
      }
      return config;
    });
    axiosInstance.interceptors.response.use(this.responseInterceptor, this.rejectInterceptor);

    return axiosInstance;
  }
}

export default Apis;
