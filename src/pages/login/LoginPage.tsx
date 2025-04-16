import { FC, useState } from 'react';
import api from '../../api/apiClient';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components';
import { WidgetLayout } from '../../components/layouts';
import { TextField } from '../../components/textField';
import { RoutePaths } from '../../constants/commonConstants';
import { toast } from 'react-toastify';
import './loginPageStyle.scss';

export const LoginPage: FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const loginChangedHandler =( value: string) => {
        setEmail(value);
    }

    const handleLogin = async () => {
        if (!email || !password) {
            toast.error('Заполните все поля');
            return;
        }

        setIsLoading(true);
        
        try {
            const response = await api.post('/login', { 
                email, 
                password 
            });
            
            // Сохраняем токен в localStorage
            localStorage.setItem('token', response.data.access_token);
            
            // Перенаправляем на главную страницу
            navigate(RoutePaths.Services);
            
        } catch (error: any) {
            const errorMessage = error.response?.data?.detail || 'Ошибка авторизации';
            toast.error(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    const passwordChangedHandler =( value: string) => {
        setPassword(value);
    }


    const loginHandler = async () => {
        console.log({
            email,
            password
        })
        navigate(RoutePaths.Services);
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
                    <TextField labelText = "Логин" value={email} type ="text" onChange={loginChangedHandler} />
                    <TextField labelText = "Пароль" value={password} type="password" onChange={passwordChangedHandler}/>
                </div>
                <div className="login-page__actions">
                    <Button text="Войти" onClick={handleLogin} type="primary"/>
                    <Button text = "Зарегистрироваться" onClick={toRegistrationHandler} type="secondary" />
                </div>
                
            </div>
        </WidgetLayout>
    );
};