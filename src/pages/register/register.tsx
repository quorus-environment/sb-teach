import React, {SyntheticEvent} from 'react';
import './register.css'
import {Input} from "../../shared/ui/input/input";
import {Button} from "../../shared/ui/button/button";

export const Register = () => {
    const onSubmit = (e: SyntheticEvent) => {
        e.preventDefault()
    }
    return (
        <div className={'auth-container'}>
            <form onSubmit={onSubmit} className={'auth-form'}>
                <h1 className={'app-title'}>Регистрация</h1>
                <Input type={"text"} placeholder={'ФИО'}></Input>
                <Input type={"text"} placeholder={'Имя пользователя'}></Input>
                <Input type={"text"} placeholder={'Телефон'}></Input>
                <Input type={"password"} placeholder={'Пароль'}></Input>
                <ul className={'auth-roles'}>
                    <li className={'auth-role'}>
                        Я соискатель
                    </li>
                    <li className={'auth-role'}>
                        Я работодатель
                    </li>
                    <li className={'auth-role'}>
                        Я ментор
                    </li>
                </ul>
                <Button type={"submit"}>Зарегистрироваться</Button>
            </form>
        </div>

    );
};

