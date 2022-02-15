import CountDown from '@components/ui/Timer';
import { yupResolver } from '@hookform/resolvers/yup';
import { login } from '@store/reducers/auth';
import Refresh from 'assets/svg/auth/refresh.svg';
import { Button, Input } from 'components';
import Modal from 'components/ui/Modal';
import gate from 'gate';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { mobileRegExp } from 'utils/validation';
import * as yup from 'yup';

interface PageProps {
    mode: 'mobile' | 'desktop';
    setPage: React.Dispatch<React.SetStateAction<1 | 2>>;
    page?: 1 | 2;
}

const Login: FC<PageProps> = ({ mode, setPage, page }) => {
    const schema = yup.object().shape({
        mobile: yup
            .string()
            .required('این فیلد نمیتواند خالی باشد.')
            .matches(mobileRegExp, { message: 'شماره موبایل وارد شده صحیح نمیباشد.!' }),
    });
    const { mutateAsync: register, isLoading } = useMutation(gate.register);
    const {
        data: captchaData,
        mutate: getCaptcha,
        isLoading: loadingCaptcha,
    }: any = useMutation(gate.captcha);

    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<any>({ resolver: yupResolver(schema) });
    const dispatch = useDispatch();
    const [captchaCode, setCaptchaCode] = useState<any>();
    const [needCaptcha, setNeedCaptcha] = useState(false);
    const { isLoading: authVerifyLoading, mutate: authVerifyToken } = useMutation(gate.verifyToken);
    const { isLoading: authSendCodeLoading, mutate: authSendCode } = useMutation(gate.sendCode);
    const [isAllowToSendAgain, setIsAllowToSendAgain] = useState<boolean>(false);
    const [countRender, setCountRender] = useState(1);
    const [mobile, setMobile] = useState<number | string>(0);
    const [showModal, setShowModal] = useState(false);
    const router = useRouter();

    const submit = (e: any) => {
        if (page == 1) {
            register(
                { phone: e.mobile },
                {
                    onSuccess: () => {
                        setPage(2);
                        setMobile(e.mobile);
                    },
                    onError: (e: any) => {
                        toast.error(e?.data?.message, {
                            position: mode == 'desktop' ? 'bottom-right' : 'bottom-center',
                        });
                    },
                },
            );
        } else {
            const formData = {
                verifyCode: e.code,
                phone: mobile,
                twoFactorMethod: 1,
                ...(needCaptcha && { captchaCode: captchaCode }),
                ...(needCaptcha && { captchaText: captchaData?.captchaText }),
                ...(needCaptcha && { captchaToken: captchaData?.captchaToken }),
            };
            authSendCode(formData, {
                onSuccess: (e) => {
                    dispatch(login(e));
                    router.push('/');
                },
                onError: (e: any) => {
                    toast.error(e?.data?.message, {
                        position: mode == 'desktop' ? 'bottom-right' : 'bottom-center',
                    });
                    setCaptchaCode(null);
                    setNeedCaptcha(false);
                    if (e.status == 499) {
                        getCaptcha();
                        setNeedCaptcha(true);
                        setShowModal(true);
                    }
                },
            });
        }
    };

    const handleResendCode = () => {
        authVerifyToken(
            { phoneNumber: mobile, twoFactorMethod: 2 },
            {
                onSuccess: () => {
                    setCountRender((prev) => prev + 1);
                    setIsAllowToSendAgain(false);
                },
                onError: (err: any) => {
                    toast.error(err.data.message);
                },
            },
        );
    };

    return (
        <>
            {' '}
            <div className="flex h-2/3 flex-col justify-between px-0 m-h-400:h-auto">
                <form
                    className="flex h-full flex-col justify-between space-y-5 md:space-y-8 lg:space-y-2 xl:space-y-6 m-h-400:space-y-1"
                    onSubmit={handleSubmit(submit)}
                >
                    {page == 2 && (
                        <>
                            {' '}
                            <div className="space-y-3">
                                <Input
                                    name="code"
                                    autoFocus
                                    error={errors?.code?.message}
                                    control={control}
                                    title={'کد'}
                                    type="number"
                                    min={0}
                                />
                            </div>
                            <div className="flex w-full justify-between">
                                <small
                                    className={
                                        isAllowToSendAgain
                                            ? 'cursor-pointer text-blue'
                                            : 'pointer-events-none cursor-not-allowed text-gray-200'
                                    }
                                    onClick={handleResendCode}
                                >
                                    {'ارسال دوباره'}
                                </small>
                                <div key={countRender}>
                                    <CountDown
                                        hours={0}
                                        minutes={2}
                                        seconds={0}
                                        onlySecond={true}
                                        whenOver={() => setIsAllowToSendAgain(true)}
                                    />
                                </div>
                            </div>
                        </>
                    )}
                    {needCaptcha && page == 2 && mode == 'desktop' && (
                        <div className="flex">
                            <Input
                                title="کد امنیتی"
                                control={control}
                                required
                                onChange={(e: any) => setCaptchaCode(e.target.value)}
                                name="captchaCode"
                                value={captchaCode}
                                type="text"
                                className="w-1/2"
                            />
                            <div className="w-2" />
                            <div className="flex w-1/2 items-center">
                                {loadingCaptcha ? (
                                    <Skeleton width={88} heigth={32} />
                                ) : (
                                    <img
                                        src={captchaData?.captchaImgUrl}
                                        alt="کپچا"
                                        loading="lazy"
                                        className="flex h-8 w-20 items-center rounded-lg shadow"
                                    />
                                )}

                                <div
                                    className="mr-2 flex h-8 w-8 items-center rounded-lg p-2 shadow"
                                    onClick={() => getCaptcha()}
                                >
                                    <Refresh />
                                </div>
                            </div>
                        </div>
                    )}
                    {page == 1 && (
                        <Input
                            name="mobile"
                            error={errors?.mobile?.message}
                            control={control}
                            autoFocus
                            autoComplete="off"
                            title={'شماره تلفن'}
                            type="tel"
                        />
                    )}
                    <div className="mt-4 flex w-full flex-col justify-center m-h-400:mt-0">
                        <Button
                            isLoading={isLoading || authSendCodeLoading}
                            type="submit"
                            className="h-[34px] w-full rounded bg-blue py-1 px-2 text-white transition-all hover:opacity-90 md:h-12"
                        >
                            {'ورود'} / {'ثبت نام'}
                        </Button>
                    </div>
                </form>
            </div>
            {mode == 'mobile' && (
                <Modal
                    visible={showModal}
                    className="mx-auto w-11/12"
                    onClose={() => setShowModal(false)}
                >
                    <div className="flex h-12 items-center bg-blue px-4">
                        <small className="items-center text-white">کد امنیتی</small>
                    </div>
                    <div className="flex h-80 w-full flex-col justify-around bg-white px-4">
                        <div className="space-y-2">
                            <small>برای ادامه کد امنیتی داخل تصویر را وارد کنید</small>
                            <small>تعداد رمز عبور اشتباه وارد شده بیش از حد مجاز است</small>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="w-1/2">
                                <Input
                                    title="کد امنیتی"
                                    control={control}
                                    required
                                    onChange={(e: any) => setCaptchaCode(e.target.value)}
                                    name="captchaCode"
                                    value={captchaCode || ''}
                                    type="text"
                                    className="w-1/2"
                                />
                                <div className="w-2" />
                            </div>
                            <div className="flex w-1/2 items-center justify-center">
                                {loadingCaptcha ? (
                                    <Skeleton width={88} heigth={32} />
                                ) : (
                                    <img
                                        src={captchaData?.captchaImgUrl}
                                        alt="کپچا"
                                        loading="lazy"
                                        className="flex h-8 w-20 items-center rounded-lg shadow"
                                    />
                                )}

                                <div
                                    className="mr-2 flex h-8 w-8 items-center rounded-lg p-2 shadow"
                                    onClick={() => getCaptcha()}
                                >
                                    <Refresh />
                                </div>
                            </div>
                        </div>
                        <Button
                            onClick={() => setShowModal(false)}
                            className="h-9 w-8/12 self-center rounded-full border border-blue text-blue"
                        >
                            تایید
                        </Button>
                    </div>
                </Modal>
            )}
        </>
    );
};

export default Login;
