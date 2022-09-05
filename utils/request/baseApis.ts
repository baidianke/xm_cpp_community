import Apis from './apis';

class BaseApis extends Apis {
  constructor() {
    super(process.env.XM_ENV.BASE_URL);
  }
}

const baseApis = new BaseApis();
const apiInstance = baseApis.axiosInstance;

export { baseApis, apiInstance };
