import { FC } from 'react';
import { CarListProps } from './CarListProps';

export const CarList: FC<CarListProps> = props => {
    const { carList } = props;
    const [selectedUser, setSelectedUser] = (0);
useState
    const carClickHandler = (id : number) => {
        setSelectedUser(id);
    }

    const isSelected = (id: number) => selectedUser === id;

    return(
        <div>
            {carList.map(user =>{
                return(
                <div key={user.id} onClick={() => carClickHandler(user.id)}> 
                    {`${user.mark} ${user.model ?? ''} ${user.ownerFIO}`}
                </div>)
            })}
        </div>
    )
}