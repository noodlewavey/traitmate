import React from 'react';
import FadeInWrapper from './FadeInWrapper';

function TrashIcon(props) {
    const { size = 24, alt = '', className, ...rest } = props;

    return (
        <FadeInWrapper>
        <img
            src={process.env.PUBLIC_URL + '/trash.png'}
            alt={alt}
            width={size}
            height={size}
            className={className}
            {...rest}
        />
        </FadeInWrapper>
    );
}

export default TrashIcon;