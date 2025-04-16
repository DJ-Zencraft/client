import { FC, useState } from "react";
import { UserIcon } from "../../assets/icons";
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components';
import { UserMenuProps } from "./UserMenuProps";
import { RoutePaths } from '../../constants/commonConstants';
import './userMenuStyle.scss'


export const UserMenu: FC<UserMenuProps> = props => {
    const { items } = props;

    const [show,setShow] = useState<boolean>(false);
    const showMenuHandler = () => {
        setShow(prev => !prev);
    }

    const navigate = useNavigate();


    const loginHandler = () => {

        navigate(RoutePaths.STO);
    }

    return(
        <div className="user-menu">
            <UserIcon onClick = {showMenuHandler} />
            {show && (
                <>
                    <div className="user-menu__menu">
                    { items.map(item => 
                        (<span className = "user-menu__menu-item"
                         onClick={item.action}
                         key = {item.id}>
                        {item.label}
                        </span>)
                    )}
                </div>
                <div className="user-menu__underlay" onClick={showMenuHandler} />
                </>
            )}    
        </div>
    );
}