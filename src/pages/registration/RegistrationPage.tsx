import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components';
import { WidgetLayout } from '../../components/layouts';
import { TextField } from '../../components/textField';
import { RoutePaths } from '../../constants/commonConstants';
import './RegistrationPageStyle.scss';
import api from '../../api/apiClient';
import { toast } from 'react-toastify';


type FormFieldsNames = 'login' | 'password' | 'repeatePassword' | 'lastName' | 'firstName' | 'midName';

interface RegistrationForm{
    login: string;
    password: string;
    repeatePassword: string;
    lastName: string;
    firstName: string;
    midName: string;
}

export const RegistrationPage: FC = () => {
    // const [login, setLogin] = useState<string>();
    // const [password, setPassword] = useState<string>();
    // const [repeatePassword, setRepeatePassword] = useState<string>();
    // const [lastName, setLastname] = useState<string>();
    // const [firstName, setFirstName] = useState<string>();
    // const [midName, setMidName] = useState<string>();
    // const [formFields, setFormFields] = useState<RegistrationForm>();

    const [form, setForm] = useState<RegistrationForm>({
        login: '',
        password: '',
        repeatePassword: '',
        lastName: '',
        firstName: '',
        midName: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleFieldChange = (field: FormFieldsNames, value: string) => {
        setForm(prev => ({ ...prev, [field]: value }));
    };

    const validateForm = () => {
        if (form.password !== form.repeatePassword) {
            toast.error('Пароли не совпадают');
            return false;
        }
        return true;
    };

    const handleSubmit = async () => {
        if (!validateForm()) return;
        setIsLoading(true);

        try {
            await api.post('/register', {
                email: form.login,
                password: form.password,
                full_name: `${form.lastName} ${form.firstName} ${form.midName}`.trim()
            });
            
            toast.success('Регистрация успешна!');
            navigate(RoutePaths.Login);
        } catch (error: any) {
            toast.error(error.response?.data?.detail || 'Ошибка регистрации');
        } finally {
            setIsLoading(false);
        }
    };

    const registrationHandler = () => {
        navigate(RoutePaths.STO);
    }

    const goToLogin = () => {
        navigate(RoutePaths.Login);
    }


    return(
        <WidgetLayout>
            <div className="reg-page__form">
                <h3 className="reg-page__tittle">Вход</h3>
                <div className='reg-page__form'>
                    <TextField labelText = "Логин" value={form.login} type ="text" onChange={(v) => handleFieldChange('login', v)} />
                    <TextField labelText = "Пароль" value={form.password} type="password" onChange={(v) => handleFieldChange('password', v)}/>
                    <TextField labelText = "Повторите пароль" value={form.repeatePassword} type="password" onChange={(v) => handleFieldChange('repeatePassword', v)}/>
                    <TextField labelText = "Фамилия" value={form.lastName} type="text" onChange={(v) => handleFieldChange('lastName', v)}/>
                    <TextField labelText = "Имя" value={form.firstName} type="text" onChange={(v) => handleFieldChange('firstName', v)}/>
                    <TextField labelText = "Отчество" value={form.midName} type="text" onChange={(v) => handleFieldChange('midName', v)}/>

                </div>
                <div className="reg-page__actions">
                    <Button text = "Зарегистрироваться" onClick={handleSubmit} type="secondary" />
                    <Button text="Войти" onClick={goToLogin} type="primary"/>
                </div>
                
            </div>
        </WidgetLayout>
    );
}