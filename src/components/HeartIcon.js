import React from 'react';
import FadeInWrapper from './FadeInWrapper';

function HeartIcon(props) {
    const { size = 24, alt = '', className, ...rest } = props;

    return (
        <FadeInWrapper>
        <img
            src={process.env.PUBLIC_URL + '/love.png'}
            alt={alt}
            width={size}
            height={size}
            className={className}
            {...rest}
        />
        </FadeInWrapper>
    );
}

export default HeartIcon;