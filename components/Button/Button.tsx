import { Spinner } from 'components';
import React, { DetailedHTMLProps, FC, ReactNode } from 'react';
export interface ButtonProps
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    children?: ReactNode;
    spinnerColor?: string;
    isLoading?: boolean;
}
const Button: FC<ButtonProps> = ({
    isLoading,
    spinnerColor = 'white',
    children,
    ...otherProps
}) => {
    return (
        <button className="flex items-center justify-center" {...otherProps}>
            {isLoading ? (
                <div className="flex w-full justify-center">
                    <Spinner fill={spinnerColor} />
                </div>
            ) : (
                children
            )}
        </button>
    );
};

export default Button;
