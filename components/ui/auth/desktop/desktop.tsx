import Logo from 'assets/svg/auth/auth-logo.svg';
import LogoTwo from 'assets/svg/auth/auth-two.svg';
import Login from 'components/ui/auth/Login';
import { FC, useState } from 'react';

import Wrapper from './Wrapper';

const AuthMobile: FC = () => {
    const [Tpage, setPage] = useState<1 | 2>(1);

    return (
        <Wrapper
            Tpage={Tpage}
            setPage={setPage}
            title={
                <div className="flex">
                    به <h1 className="mx-2 text-[#0577AF]">دادبانان دانا</h1> خوش آمدید
                </div>
            }
            description={
                Tpage == 1
                    ? 'برای ثبت نام در سایت شماره موبایل خود را وارد کنید و منتظر دریافت کد تایید بمانید.'
                    : Tpage == 2 && 'لطفا کد ارسال شده را وارد نمایید.'
            }
            Icon={
                Tpage == 1 ? (
                    <Logo className="my-auto h-auto w-full items-center justify-center" />
                ) : (
                    <LogoTwo className="h-full w-full" />
                )
            }
        >
            <Login setPage={setPage} page={Tpage} mode="desktop" />
        </Wrapper>
    );
};

export default AuthMobile;
