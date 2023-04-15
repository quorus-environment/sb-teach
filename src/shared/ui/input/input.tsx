import React, {FC, InputHTMLAttributes} from 'react';
import './input.css'

interface TInput extends InputHTMLAttributes<HTMLInputElement> {
    extraClass?: string
}

export const Input: FC<TInput> = ({extraClass, ...rest}) => {
    return (
        <input className={`${extraClass} input-default`} {...rest}></input>
    );
};
