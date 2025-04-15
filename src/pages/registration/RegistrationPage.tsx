import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components';
import { WidgetLayout } from '../../components/layouts';
import { TextField } from '../../components/textField';
import { RoutePaths } from '../../constants/commonConstants';
import './RegistrationPageStyle.scss';


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
    const [formFields, setFormFields] = useState<RegistrationForm>();
    const navigate = useNavigate();

    const changeFieldValue = (value: string | undefined, fieldName: FormFieldsNames) => {
        setFormFields(prev => {
            return{
                ...prev,
                [fieldName]: value
            } as RegistrationForm;
        })
    }

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
                    <TextField labelText = "Логин" value={formFields?.login} type ="text" onChange={(value) => changeFieldValue(value,'login')} />
                    <TextField labelText = "Пароль" value={formFields?.password} type="password" onChange={(value) => changeFieldValue(value,'login')}/>
                    <TextField labelText = "Повторите пароль" value={formFields?.repeatePassword} type="password" onChange={(value) => changeFieldValue(value,'login')}/>
                    <TextField labelText = "Фамилия" value={formFields?.lastName} type="text" onChange={(value) => changeFieldValue(value,'login')}/>
                    <TextField labelText = "Имя" value={formFields?.firstName} type="text" onChange={(value) => changeFieldValue(value,'login')}/>
                    <TextField labelText = "Отчество" value={formFields?.midName} type="text" onChange={(value) => changeFieldValue(value,'login')}/>

                </div>
                <div className="reg-page__actions">
                    <Button text = "Зарегистрироваться" onClick={registrationHandler} type="secondary" />
                    <Button text="Войти" onClick={goToLogin} type="primary"/>
                </div>
                
            </div>
        </WidgetLayout>
    );
}