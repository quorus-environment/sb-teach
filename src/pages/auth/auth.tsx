import React, {SyntheticEvent} from 'react';
import './auth.css'
import {Input} from "../../shared/ui/input/input";
import {Button} from "../../shared/ui/button/button";

export const Auth = () => {
    const onSubmit = (e: SyntheticEvent) => {
        e.preventDefault()
    }
    return (
        <div className={'auth-container'}>
            <form onSubmit={onSubmit} className={'auth-form'}>
                <h1>Войти</h1>
                <Input type={"text"} placeholder={'Имя'}></Input>
                <Input type={"password"} placeholder={'Пароль'}></Input>
                <Button type={"submit"}>Войти</Button>
            </form>
        </div>

    );
};

