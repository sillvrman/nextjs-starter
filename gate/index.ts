import { Login } from 'components';
import { SendCode, ChangePassword, VerifyTokenT } from './../interfaces/login';
import { Register } from '@interfaces/auth';
import api from './api';

const uploadFile = {
    uploadFile: (data: FormData, onUploadProgress: ((progressEvent: any) => void) | undefined) =>
        api.file('/file-upload', data, onUploadProgress),
};

const home = {
    home: () => api.get('/home'),
    getProductDetails: ({ id }: { id: number | string }) =>
        api.get(`Product/api/Product/GetProductById/${id}`),
};
const auth = {
    register: (data: Register) => api.post('/Idp/UserRegistration/RegisterUser', data),
    sendCode: (data: SendCode) => api.post('/Idp/Account/Login/PasswordLess', data),
    changePass: (data: ChangePassword) => api.post('/Idp/UserRegistration/ChangePassword', data),
    login: (data: Login) => api.post('/Idp/Account/Login', data),
    captcha: () => api.get('Idp/Account/GenerateCaptcha'),
    sendCaptcha: (data: any) => api.get('Idp/Account/SendVerifyCode', data),
    verifyToken: (data: VerifyTokenT) => api.post('/Idp/Account/SendVerfyToken', data),
};
const invoice = {
    factor: (orderId: number | string) =>
        api.get(`Invoice/api/Invoice/GetInvoiceById?invoiceId=${orderId}`),
};

export default {
    ...uploadFile,
    ...home,
    ...invoice,
    ...auth,
};
