import React, { Children } from 'react';

const Button = ({children,className}) => {
    return (
        <div>
            <button className={className}>{Children}</button>
            
        </div>
    );
}

export default Button;
