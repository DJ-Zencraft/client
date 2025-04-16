import { FC } from 'react';
import { LayoutProps } from "./LayoutProps";
import './layoutStyles.scss';
import { LogoIcon } from '../../../assets/icons/LogoIcon';
import { UserMenu } from '../../userMenu';
import { RoutePaths } from '../../../constants/commonConstants';
import { useNavigate } from 'react-router-dom';

export const Layout: FC<LayoutProps> = (props) => {
    const { footer, children } = props;

    const navigate = useNavigate();

    const handleLogout = () => {
      // Очистка данных авторизации
      localStorage.removeItem('authToken');
      // Переход на страницу входа
      navigate(RoutePaths.Login);
    };
  
    return (
      <div className='layout'>
        <header className='layout__header'>
          <div className='layout__brand'>
            <LogoIcon width={32} height={32} />
            <span className='layout__title'>База СТО</span>
          </div>
          
          <UserMenu 
          items={[
            {
              id: 'logout',
              action: handleLogout, // Используем обработчик
              label: 'Назад'
              }
            ]} 
          />
        </header>
  
        <main className='layout__content'>
          {children}
        </main>
  
        {footer && <footer className='layout__footer'>{footer}</footer>}
      </div>
    );
  };