import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ConfigProvider } from 'antd';
import ptBR from 'antd/lib/locale/pt_BR';
import type { AppProps } from 'next/app';
import { queryClient } from '../services/queryClient';
import '../styles/styles.less';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ConfigProvider locale={ptBR}>
            <QueryClientProvider client={queryClient}>
                <Component {...pageProps} />
                <ReactQueryDevtools initialIsOpen />
            </QueryClientProvider>
        </ConfigProvider>
    );
}

export default MyApp;
