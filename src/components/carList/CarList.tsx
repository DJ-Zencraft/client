import { FC, useState } from 'react';
import clsx from 'classnames';
import { CarListProps } from "./CarListProps";
import { PencilIcon, TrashIcon } from "../../assets/icons";
import './employeesListStyles.scss'

export const CarList: FC<CarListProps> = props => {
    const {carList, onItemClick, onItemDelete, onItemEdit} = props
    const [selectedUser, setSelectedUser] = useState(0)

    const employeeClickHandler = (id: number) => {
        setSelectedUser(id)
        onItemClick && onItemClick(id)
    }

    const employeeEditHandler = (id: number) => {
        onItemEdit && onItemEdit(id)
    }

    const employeeDeleteHandler = (id: number) => {
        onItemDelete && onItemDelete(id)
    }

    const isSelected = (id: number) => selectedUser === id

    return(
        <div className="empl-list">
            {carList.map(user =>{
                    return(
                        <div key={user.id} 
                        className={clsx('empl-list__item', {'empl-list__item_selected': isSelected(user.id)})}
                        onClick={() => employeeClickHandler(user.id)}>
                            <div className="empl-list__item-fio">
                                {`${user.mark} ${user.model} группа ${user.ownerFIO}`.trim()}
                            </div>
                            <div className="empl-list__item-action">
                                <PencilIcon width={18} height={18} onClick={() => {employeeEditHandler(user.id)}}/>
                                <TrashIcon width={18} height={18} onClick={() => {employeeDeleteHandler(user.id)}}/>
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}