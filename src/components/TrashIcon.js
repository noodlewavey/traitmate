import React from 'react';

function TrashIcon(props) {
    const { size = 24, alt = '', className, ...rest } = props;

    return (
        <img
            src={process.env.PUBLIC_URL + '/trash.png'}
            alt={alt}
            width={size}
            height={size}
            className={className}
            {...rest}
        />
    );
}

export default TrashIcon;