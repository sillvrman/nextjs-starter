import React, { useState } from 'react';

const ReadMore = ({ children, count = 150 }: { children: string; count?: number }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <p className="text">
            {isReadMore ? text?.slice(0, count) : text}
            {children?.length && (
                <span
                    onClick={toggleReadMore}
                    className="text-xs text-yellow-base cursor-pointer mx-2"
                >
                    {isReadMore ? 'مشاهده بیشتر...' : ' بستن  '}
                </span>
            )}
        </p>
    );
};
export default ReadMore;
