import React, { useEffect } from 'react';

const useOnClickOutside = (ref: React.RefObject<HTMLElement>, handler: (event: MouseEvent) => void) => {
    useEffect(() => {
        const listener = (event: MouseEvent) => {
            if (!ref?.current || ref?.current.contains(event.target as Node) || (event.pageX < 65 && event.pageY < 65)) {
                return;
            }
            handler(event);
        };
        document.addEventListener('mousedown', listener);
        return () => {
            document.removeEventListener('mousedown', listener);
        };
    }, [ref, handler]);
};

export default useOnClickOutside;