import React from 'react';

import style from './title.module.css';

const Title = ({ title }: any) => {
    return (
        <div className="flex items-center">
            <div className={style.right}></div>
            <h2 className="text-lg leading-9 font-bold">{title}</h2>
            <div className={style.small}></div>
            <div className={style.left}></div>
        </div>
    );
};

export default Title;
