import cn from 'classnames';
import { NextPage } from 'next';
import Head from 'next/head';
import { ReactNode } from 'react';

import Footer from '../Footer';
import Navbar from '../Navbar';

export interface LayoutProps {
    children: ReactNode;
    banner?: boolean;
    footer?: boolean;
    bottomNavigation?: boolean;
    isLoading?: boolean;
    description?: string;
    searchBar?: boolean;
    title?: string;
    selected?: 'home' | 'wallet' | 'cart' | 'profile' | undefined;
}
export interface OptionsType {
    footer?: boolean;
    searchBar?: boolean;
    bottomNavigation?: boolean;
    title?: string;
    description?: string;
    selected?: 'home' | 'wallet' | 'cart' | 'profile' | undefined;
}

const Layout: React.FC<LayoutProps> = ({
    children,
    title = 'Dadbanan',
    searchBar = true,
    footer = true,
    selected,
    bottomNavigation = false,
    description,
}) => {
    // const app = useSelector(withApp);
    // const [openMenu, setOpenMenu] = useState<boolean>(false);
    return (
        <>
            <Head>
                <title>{title}</title>

                <meta property="og:title" content="Dadbanan" />
                <meta property="og:type" content="jewellery.gallery" />
                {/* <meta property="og:url" content="https://kolahduzan.com" />
                <meta property="og:image" content="https://kolahduzan.com/pic/logo.png" /> */}

                {/* <meta name="author" content="http://bestdeveloper.ir" /> */}

                {/* <link rel="shortcut icon" href="pic/logo-kolahduzan.png?id=04" /> */}
                {/* <base href="https://kolahduzan.com" /> */}

                <meta name="description" content="kolahduzan jewellery designer gallery Dadbanan" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <link rel="icon" href="/kookbaz-72.png" />
                <link rel="icon" type="image/png" href="/icons/favicon.png" />
                <link rel="apple-touch-startup-image" href="/icons/kookbaz-192.png" />
                <meta name="apple-mobile-web-app-title" content="Kookbaz" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#37bfb4" />
                <meta name="kookbaz" content="kookbaz" />
                {/* <link rel="canonical" href="https://shop.kookbaz.ir/" /> */}
                <meta name="apple-mobile-web-app-capable" content="yes" />
                {/* <meta
                    name="keywords"
                    content="کوکباز,فروشگاه آنلاین کوکباز, خرید آنلاین خشکبار,خرید صنایع دستی,خرید میوه خشک,محصولات بازنشستگان,خرید زیورآلات,کسب و کار بازنشستگان,کسب و کار خانگی,فرزندبازنشسته,اشتغال فرزندبازنشسته,توانمدسازی کسب و کار,اشتغال بازنشسته"
                /> */}
                <link rel="apple-touch-icon" href="/icons/kookbaz-48.png" sizes="48x48" />
                <link rel="apple-touch-icon" href="/icons/kookbaz-72.png" sizes="72x72" />
                <link rel="apple-touch-icon" href="/icons/kookbaz-192.png" sizes="192x192" />
                <link rel="apple-touch-icon" href="/icons/kookbaz-512.png" sizes="512x512" />
                <meta name="apple-mobile-web-app-status-bar-style" content="#37bfb4" />
                {/* <link rel="manifest" href="/manifest.json" /> */}
                <meta name="robots" content="index, follow" />
                {/* og */}
                <meta property="og:locale" content="fa_IR" />
                {/* <meta property="og:site_name" content="فروشگاه کوکباز" /> */}
                <meta name="og:title" property="og:title" content={title} />
                <meta name="og:description" property="og:description" content={description} />
                <meta property="og:type" content="website" />
            </Head>

            <div className="h-screen w-full">
                <div className="bg-gray-250 relative mx-auto flex h-full w-full max-w-8xl flex-col justify-between">
                    <div>
                        <div className="md:hidden  "></div>
                        <div className="block">
                            <Navbar />
                        </div>

                        <main className={cn('min-h-60vh bg-gray-250 mx-auto w-full md:pb-0 ')}>
                            {children}
                        </main>
                    </div>
                    {footer && <Footer />}
                </div>
            </div>
        </>
    );
};
export const getLayout = (page: NextPage, options: OptionsType) => (
    <Layout {...options}>{page}</Layout>
);
export default Layout;
