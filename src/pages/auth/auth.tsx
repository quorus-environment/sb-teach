import React, {SyntheticEvent} from 'react';
import './auth.css'

export const Auth = () => {
    const onSubmit = (e: SyntheticEvent) => {
        e.preventDefault()
    }
    return (
        <form onSubmit={onSubmit} className={'auth-form'}>
            <h1>Войти</h1>
            <input type={"text"} placeholder={'name'}></input>
            <input type={"password"} placeholder={'password'}></input>
            <button type={"submit"}>Войти</button>
        </form>
    );
};

