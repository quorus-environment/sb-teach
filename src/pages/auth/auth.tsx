import React, {SyntheticEvent, useState} from 'react';
import './auth.css'
import {Input} from "../../shared/ui/input/input";
import {Button} from "../../shared/ui/button/button";
import {useAuthStore} from "../../shared/stores/user/lib/user-store";

export const Auth = () => {
    const {login} = useAuthStore()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const onSubmit = (e: SyntheticEvent) => {
        e.preventDefault()
        login({
            username,
            password
        })
    }
    return (
        <div className={'auth-container'}>
            <form onSubmit={onSubmit} className={'auth-form'}>
                <h1 className={'app-title'}>Войти</h1>
                <Input type={"text"} value={username} onChange={(e) => setUsername(e.target.value)} placeholder={'Имя'}></Input>
                <Input type={"password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder={'Пароль'}></Input>
                <Button type={"submit"}>Войти</Button>
            </form>
        </div>

    );
};

