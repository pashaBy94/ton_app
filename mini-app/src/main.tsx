import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App.tsx';
import './index.css';
import '@/shared/styles/variables/variables.css';
import { QueryClientProvider } from '@tanstack/react-query';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { queryClient, manifestURL } from '@/processes';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <TonConnectUIProvider manifestUrl={manifestURL}>
        <QueryClientProvider client={queryClient}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </QueryClientProvider>
    </TonConnectUIProvider>,
);
