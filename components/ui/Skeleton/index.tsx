import React from 'react';
import cn from 'classnames';
import style from './skeleton.module.css';
type Atomic = number | string;
interface Props {
    width?: Atomic;
    heigth?: Atomic;
    className?: string;
    borderRadius?: Atomic;
}
const Skeleton: React.FC<Props> = ({ width, className, heigth, borderRadius = 10 }) => {
    return (
        <div
            style={{ height: heigth, minWidth: width }}
            className={cn(style.cardSkeleton, className)}
        >
            <div style={{ borderRadius: borderRadius }} className={style.animatedBackground}>
                <div className={style.skelMaskContainer}></div>
            </div>
        </div>
    );
};

export default Skeleton;
