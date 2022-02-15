export interface Register {
    phone?: string | number;
}
export interface SendCode {
    phone: any;
    verifyCode: number;
}
export interface ChangePassword {
    oldPassword?: string;
    password: string;
    confirmPassword: string;
}
export interface Login {
    phoneNumber: string | number;
    password: string;
    rememberLogin?: true;
    returnUrl?: string;
}
export interface VerifyTokenT {
    phoneNumber: string | number;
    twoFactorMethod: 0 | 1 | 2;
}
