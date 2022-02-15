import React from 'react';

import s from './navbar.module.css';

const Footer: React.FC = () => {
    return (
        <div className={s.footer_container}>
            <div className="container mx-auto mb-6 flex max-w-1170 flex-col px-4 lg:flex-row lg:px-0">
                <div className="flex flex-col items-center lg:w-1/3">
                    <div className={s.footerBox}>تماس با ما</div>
                    <span className="text-center text-sm">
                        <a href="tel:021-88607436-7">021-88607436-7</a> <br />
                        <a href="tel:021-88624011">021-88624011</a> <br />
                    </span>
                </div>
                <div className="flex flex-col items-center lg:w-1/3">
                    <div className={s.footerBox}>آدرس</div>
                    <span className="text-center text-sm">
                        تهران، خیابان سید جماالدین اسدآبادی(یوسف آباد)، پلاک ‌449 طبقه 6 واحد 602
                    </span>
                </div>
                <div className="flex flex-col items-center lg:w-1/3">
                    <div className={s.footerBox}>پست الکترونیک</div>
                    <span className="text-center text-sm">
                        <a href="mailto:info@kolahduzan.com">info@kolahduzan.com</a>
                    </span>
                </div>
                <div className="flex flex-col items-center lg:hidden lg:w-1/3">
                    <div className={s.footerBox}>ما را دنبال کنید</div>
                    <span className="text-center text-sm">
                        <div className={`${s.topNavbarField} flex justify-end lg:hidden`}>
                            {/* <Linkedin className="ml-1 h-5" />
                            <Insta className="ml-1 h-5" />
                            <YouTube className="ml-1 h-5" />
                            <Telegram className="ml-1 h-5" /> */}
                        </div>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Footer;
