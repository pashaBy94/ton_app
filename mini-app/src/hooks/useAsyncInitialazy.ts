import { useEffect, useState } from 'react';

export function useAsyncInitialize<T>(func: () => Promise<T>, deps: unknown[]) {
    const [state, setState] = useState<T | undefined>();
    useEffect(() => {
        (async () => {
            // console.log(state, deps);

            setState(await func());
        })();
    }, [...deps]);
    return state;
}
