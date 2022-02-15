import '@assets/styles/main.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'react-toastify/dist/ReactToastify.css';

import { Layout } from '@components/common';
import { wrapper } from '@store/index';
import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { Bounce, ToastContainer } from 'react-toastify';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
    const getLayout = (Component as any).getLayout || ((page: any) => <Layout>{page}</Layout>);
    return (
        <>
            <ToastContainer
                closeButton={false}
                hideProgressBar
                autoClose={false}
                className={'font-sans'}
                transition={Bounce}
                position={'bottom-right'}
                icon={false}
            />
            <QueryClientProvider client={queryClient}>
                <Hydrate state={pageProps.dehydratedState}>
                    {getLayout(<Component {...pageProps} />)}
                </Hydrate>
            </QueryClientProvider>
        </>
    );
}

export default wrapper.withRedux(MyApp);
