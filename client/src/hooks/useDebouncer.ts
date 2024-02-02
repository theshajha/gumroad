import React from "react";

export const useDebounce = <F extends (...args: any[]) => void>(func: F, delay: number) => {
    const timerRef = React.useRef<NodeJS.Timeout | null>(null);

    return function (this: ThisParameterType<F>, ...args: Parameters<F>) {
        clearTimeout(timerRef.current as NodeJS.Timeout);
        timerRef.current = setTimeout(() => func.apply(this, args), delay);
    };
};