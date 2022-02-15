import React from 'react';
import SpinnerIcon from 'assets/svg/Spinner';
export interface SpinnerProps {
    className?: string;
    width?: number;
    fill?: string;
    height?: number;
}

const Spinner: React.FC<SpinnerProps> = ({
    className = 'w-5 h-5',
    height,
    fill = '#3275bb',
    width,
}) => {
    return (
        <SpinnerIcon
            width={width}
            color={fill}
            height={height}
            className={`animate-spin ${className}`}
        />
    );
};

export default Spinner;
