import React, { FC } from 'react';
import { Control, useController } from 'react-hook-form';
import styles from './style.module.css';
// import { ReactComponent as CalenderIcon } from 'assets/svg/bx-calendar.svg';

interface Props
    extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    placeholder?: string;
    labelClassName?: string;
    className?: string;
    control?: Control<any>;
    isDatePicker?: boolean;
    register?: any;
    error?: string;
    title: string;
    name?: string;
}

const Input: FC<Props> = ({
    title,
    className,
    labelClassName,
    control,
    name = 'a',
    register,
    isDatePicker = false,
    error,
    ...otherProps
}) => {
    const {
        field: { ref, ...inputProps },
    } = useController({
        name,
        control,
        defaultValue: '',
    });
    const borderStyle =
        (otherProps?.value || inputProps?.value) && !error
            ? 'border border-blue'
            : !error && 'border border-gray-300 focus:border-blue';
    const labelClass = !!otherProps?.value || !!inputProps?.value ? `${styles.fill} bg-white` : '';
    const isDatePickerRounded = isDatePicker ? 'rounded-r-lg' : 'rounded';
    return (
        <div className={`relative flex w-full flex-col`}>
            <input
                ref={ref}
                autoComplete="off"
                {...inputProps}
                id={name}
                className={`${styles.input}  ${isDatePickerRounded} ${borderStyle} ${
                    error && styles.error
                } ${className}`}
                {...otherProps}
                pattern=".+"
            />
            {title && (
                <label
                    className={`${styles.label}  ${labelClass}
                         ${error && styles.error}
                     ${labelClassName}`}
                    htmlFor={name}
                >
                    {title}
                </label>
            )}

            {error && (
                <small className="flex h-5 items-center overflow-hidden whitespace-nowrap px-4 text-right text-xs text-red-600">
                    {error}
                </small>
            )}
        </div>
    );
};

export default Input;
