// import Menu from 'assets/svg/menu.svg';
// import Insta from 'assets/svg/socialNetworks/insta.svg';
// import Linkedin from 'assets/svg/socialNetworks/linkedin.svg';
// import Telegram from 'assets/svg/socialNetworks/telegram.svg';
// import YouTube from 'assets/svg/socialNetworks/youtube.svg';
import useWindowSize from 'hooks/useWindowSize';
import React, { useState } from 'react';

import s from './navbar.module.css';

const Navbar: React.FC = () => {
    const links = [
        { title: 'خانه', link: 'https://kolahduzan.com/Home' },
        { title: 'درباره ما', link: 'https://kolahduzan.com/About' },
        { title: 'جواهرات', link: 'https://kolahduzan.com/Jewerly' },
        { title: 'دست بافته ها', link: 'https://kolahduzan.com/HandWaves' },
        { title: 'هنرهای تجسمی', link: 'https://kolahduzan.com/VisualArt' },
        { title: 'تماس با ما', link: 'https://kolahduzan.com/ContactUs' },
    ];
    const [showCategory, setShowCategory] = useState<boolean>(false);
    const windowSize = useWindowSize();
    return (
        <>
            <div className={s.bg}>
                <div className="container mx-auto max-w-1170 text-sm text-white">
                    <div className="flex w-full justify-between">
                        <div className="mt-30px mr-11px ml-10 flex w-10 justify-center self-start lg:block lg:w-5/12">
                            {/* {windowSize == 'lg' || windowSize == 'xlg' ? null : (
                                <Menu
                                    className="justify-start h-5 cursor-pointer"
                                    onClick={() => setShowCategory(!showCategory)}
                                />
                            )} */}
                        </div>

                        <div className="mt-25px px-15px lg:w-1/6">
                            <img
                                src="/images/logoKolahdoozan.png"
                                alt="logo"
                                className="mr-1 h-75px w-auto object-contain lg:h-90px"
                            />
                        </div>
                        <div className="mt-30px ml-11px mr-10 w-10 self-start lg:w-5/12 lg:border-t lg:border-b lg:border-white">
                            <div className={`${s.topNavbarField} hidden justify-end lg:flex`}>
                                <a
                                    href="https://www.linkedin.com/ "
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {/* <Linkedin className="ml-1" /> */}
                                </a>
                                <a href="https://instagram.com/ " target="_blank" rel="noreferrer">
                                    {/* <Insta className="ml-1" /> */}
                                </a>
                                <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                                    {/* <YouTube className="ml-1" /> */}
                                </a>
                                <a href="http://t.me/ " target="_blank" rel="noreferrer">
                                    {/* <Telegram className="ml-1" /> */}
                                </a>
                            </div>
                        </div>
                    </div>
                    {windowSize == 'lg' ||
                        (windowSize == 'xlg' && (
                            <div className="flex justify-center">
                                <ul className={s.navbar_menu}>
                                    {links.map((l) => (
                                        <a href={l.link} key={l.link}>
                                            <li>{l.title}</li>
                                        </a>
                                    ))}
                                </ul>
                            </div>
                        ))}
                </div>
            </div>
            {showCategory && (
                <div
                    className="absolute z-50 h-auto w-full animate-fade-in-down p-3 text-sm text-white"
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    }}
                >
                    <ul>
                        {links.map((l) => (
                            <a href={l.link} key={l.link}>
                                <li className="cursor-pointer py-1">{l.title}</li>
                            </a>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
};

export default Navbar;
