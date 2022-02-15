import { useEffect, useState } from 'react';

//a Util function that will conver the absolute width into breakpoints
function getBreakPoint(windowWidth: any) {
    if (windowWidth) {
        if (windowWidth < 480) {
            return { size: windowWidth, name: 'sm' };
        } else if (windowWidth < 768) {
            return { size: windowWidth, name: 'md' };
        } else if (windowWidth < 1200) {
            return { size: windowWidth, name: 'lg' };
        } else {
            return { size: windowWidth, name: 'xlg' };
        }
    } else {
        return undefined;
    }
}
function useWindowSize() {
    const isWindowClient = typeof window === 'object';

    const [windowSize, setWindowSize] = useState(
        isWindowClient ? getBreakPoint(window.innerWidth) : undefined,
    );

    useEffect(() => {
        //a handler which will be called on change of the screen resize
        function setSize() {
            setWindowSize(getBreakPoint(window.innerWidth));
        }

        if (isWindowClient) {
            //register the window resize listener
            window.addEventListener('resize', setSize);

            //unregister the listerner
            return () => window.removeEventListener('resize', setSize);
        }
    }, [isWindowClient, setWindowSize]);

    return windowSize;
}
export default useWindowSize;
