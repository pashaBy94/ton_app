import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import {
    QueryClient,
    QueryClientProvider,
    // useQuery,
} from '@tanstack/react-query';
import { TonConnectUIProvider } from '@tonconnect/ui-react';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});
const manifestURL = 'https://pashaby94.github.io/manifest_file/pahas_manifest.json';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <TonConnectUIProvider manifestUrl={manifestURL}>
        <QueryClientProvider client={queryClient}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </QueryClientProvider>
    </TonConnectUIProvider>,
);
