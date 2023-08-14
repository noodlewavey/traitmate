import React from 'react';

function HeartIcon(props) {
    const { size = 24, alt = '', className, ...rest } = props;

    return (
        <img
            src={process.env.PUBLIC_URL + '/love.png'}
            alt={alt}
            width={size}
            height={size}
            className={className}
            {...rest}
        />
    );
}

export default HeartIcon;