import React, { SVGProps } from 'react';
interface SpinnerProps extends SVGProps<SVGSVGElement> {
    color?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ color = '#fff', ...otherProps }) => {
    return (
        <svg
            {...otherProps}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
        >
            <g id="_-System-Icons" data-name="🔍-System-Icons" transform="translate(-2 -2)">
                <g id="ic_fluent_spinner_ios_20_filled">
                    <path
                        id="_-Color"
                        data-name="🎨-Color"
                        d="M10,3.5A6.5,6.5,0,0,0,3.5,10,.75.75,0,0,1,2,10a8,8,0,1,1,8,8,.75.75,0,0,1,0-1.5,6.5,6.5,0,0,0,0-13Z"
                        fill={color}
                    />
                </g>
            </g>
        </svg>
    );
};

export default Spinner;
