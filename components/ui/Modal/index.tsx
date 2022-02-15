import Portal from '@reach/portal';
import { clearAllBodyScrollLocks, disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { FC, ReactNode, useEffect, useRef } from 'react';

interface Props {
    children: ReactNode;
    visible: boolean;
    onClose: VoidFunction;
    className?: string;
}
const Modal: FC<Props> = ({ children, visible, onClose, className }) => {
    const ref = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        if (ref.current) {
            if (visible) {
                disableBodyScroll(ref.current);
            } else {
                enableBodyScroll(ref.current);
            }
        }
        return () => {
            clearAllBodyScrollLocks();
        };
    }, [visible]);

    return (
        <Portal>
            <>
                {visible && (
                    <div
                        ref={ref}
                        onClick={onClose}
                        className="fixed right-0 left-0 top-0 bottom-0 z-20 h-screen w-screen bg-black opacity-25"
                    ></div>
                )}
                <div
                    className={`absolute left-0 top-0  flex  w-full items-center justify-center ${
                        visible && 'h-screen'
                    }`}
                >
                    {visible && (
                        <div
                            className={`flex transform animate-fade-in-down flex-col justify-center transition-all ${className} duration-700 ${
                                !visible ? '-translate-y-20 opacity-0' : 'translate-x-0 opacity-100'
                            }  fixed z-50`}
                        >
                            {children}
                        </div>
                    )}
                </div>
            </>
        </Portal>
    );
};

export default Modal;
