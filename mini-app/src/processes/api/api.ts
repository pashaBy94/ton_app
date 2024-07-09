import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});
export const manifestURL = 'https://pashaby94.github.io/manifest_file/pahas_manifest.json';
