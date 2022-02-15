import { FC, ReactNode, useState } from 'react';
import { Login } from 'components';
import style from './style.module.css';
import Logo from 'assets/svg/auth/auth-logo.svg';
import LogoTwo from 'assets/svg/auth/auth-two.svg';

import LeftArrow from 'assets/svg/left-arrow.svg';
interface Props {
    title: string | ReactNode;
    description: string | ReactNode;
    page: 1 | 2;
    setPage: React.Dispatch<React.SetStateAction<1 | 2>>;
    Icon: any;
}

const Wrapper: FC<Props> = ({ title, page, setPage, Icon, description, children }) => {
    return (
        <div className={'h-full bg-transparent bg-neutral-100 p-5'}>
            <div className="flex h-full w-full flex-col items-center justify-between rounded-lg bg-white p-4 shadow-md">
                {Icon}
                <div
                    className="flex w-full flex-col justify-around m-h-400:justify-between"
                    style={{ height: '60%' }}
                >
                    <div className="mt-2 flex h-1/3 flex-col justify-start space-y-5 m-h-400:h-auto">
                        {title}
                    </div>
                    <div className="h-2/3 m-h-400:flex m-h-400:h-full m-h-400:flex-col m-h-400:justify-around">
                        <p className={style.description}>{description}</p>
                        {children}
                    </div>
                </div>
                <div className="flex cursor-pointer items-center self-end text-blue">
                    {page == 1 ? (
                        <a
                            href="https://ivabit.io/policy/"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center"
                        >
                            <small className="mx-2">قوانین و مقررات</small>
                        </a>
                    ) : (
                        <div className="flex items-center">
                            <small
                                onClick={() => setPage(1)}
                                className="mx-2 my-2 flex w-full justify-end"
                            >
                                بازگشت
                            </small>{' '}
                            <LeftArrow />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const AuthDesktop: FC = () => {
    const [Tpage, setPage] = useState<1 | 2>(1);

    return (
        <Wrapper
            setPage={setPage}
            page={Tpage}
            title={
                <h1>
                    به <span className="text-[#0577AF]">دادبانان دانا</span> خوش آمدید
                </h1>
            }
            description={
                Tpage == 1
                    ? 'جهت دریافت کد فعال سازی,شماره موبایل خود را وارد نمایید.'
                    : Tpage == 2 && 'لطفا کد ارسال شده را وارد نمایید.'
            }
            Icon={
                Tpage == 1 ? (
                    <Logo className="h-auto w-full" />
                ) : (
                    <LogoTwo className="my-auto h-auto w-full items-center justify-center" />
                )
            }
        >
            <Login setPage={setPage} page={Tpage} mode="mobile" />
        </Wrapper>
    );
};

export default AuthDesktop;
