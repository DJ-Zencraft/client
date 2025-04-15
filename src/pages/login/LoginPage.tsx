import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components';
import { WidgetLayout } from '../../components/layouts';
import { TextField } from '../../components/textField';
import { RoutePaths } from '../../constants/commonConstants';
import './loginPageStyle.scss';

export const LoginPage: FC = () => {
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const navigate = useNavigate();

    const loginChangedHandler =( value: string) => {
        setLogin(value);
    }

    const passwordChangedHandler =( value: string) => {
        setPassword(value);
    }


    const loginHandler = () => {
        console.log({
            login,
            password
        })
        navigate(RoutePaths.STO);
    }
    const toRegistrationHandler = () =>{
        navigate (RoutePaths.Registration);
    }

    const toTestHandler = () =>{
        navigate (RoutePaths.Tes);
    }

    return(
        <WidgetLayout>
            <div className="login-page__form">
                <h3 className="login-page__tittle">Вход</h3>
                <div className='login-page__form'>
                    <TextField labelText = "Логин" value={login} type ="text" onChange={loginChangedHandler} />
                    <TextField labelText = "Пароль" value={password} type="password" onChange={passwordChangedHandler}/>
                </div>
                <div className="login-page__actions">
                    <Button text="Войти" onClick={loginHandler} type="primary"/>
                    <Button text = "Зарегистрироваться" onClick={toRegistrationHandler} type="secondary" />
                </div>
                
            </div>
        </WidgetLayout>
    );
};