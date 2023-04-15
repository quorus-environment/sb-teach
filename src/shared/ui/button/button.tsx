import React, {ButtonHTMLAttributes, FC} from 'react';
import './button.css'

interface TButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    extraClass?: string
}

export const Button: FC<TButton> = ({extraClass, ...rest}) => {
    return (
        <button className={`${extraClass} button-default`} {...rest}></button>
    );
};

