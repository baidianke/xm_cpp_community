import { toast as toastify, ToastOptions } from 'react-toastify';

const defaultOptions = {
  position: toastify.POSITION.TOP_CENTER,
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

const Toast = {
  error: (message: string, options: ToastOptions = {}) =>
    toastify.error(message, { ...defaultOptions, ...options }),
  success: (message: string, options: ToastOptions = {}) =>
    toastify.success(message, { ...defaultOptions, ...options }),
  warn: (message: string, options: ToastOptions = {}) =>
    toastify.warn(message, { ...defaultOptions, ...options }),
  info: (message: string, options: ToastOptions = {}) =>
    toastify.info(message, { ...defaultOptions, ...options }),
  default: (message: string, options: ToastOptions = {}) =>
    toastify(message, { ...defaultOptions, ...options }),
};

export default Toast;
