import { FC, useState } from 'react';
import clsx from 'classnames';
import { CarListProps } from "./CarListProps";
import { PencilIcon, TrashIcon } from "../../assets/icons";
import './carListStyles.scss'; // Переименованный файл стилей

export const CarList: FC<CarListProps> = props => {
    const { carList, onItemClick, onItemDelete, onItemEdit } = props;
    const [selectedCarId, setSelectedCarId] = useState<number | null>(null);

    const handleCarSelect = (id: number) => {
        setSelectedCarId(id);
        onItemClick?.(id);
    };

    return (
        <div className="car-list">
            {carList.map(car => (
                <div 
                    key={car.id}
                    className={clsx('car-list__item', {
                        'car-list__item--selected': selectedCarId === car.id
                    })}
                    onClick={() => handleCarSelect(car.id)}
                >
                    <div className="car-list__info">
                        <h4>{car.mark} {car.model}</h4>
                        <p>Владелец: {car.ownerFIO}</p>
                    </div>
                    
                    <div className="car-list__actions">
                        <button 
                            className="car-list__action-btn"
                            onClick={(e) => {
                                e.stopPropagation();
                                onItemEdit?.(car.id);
                            }}
                        >
                            <PencilIcon width={18} height={18}/>
                        </button>
                        <button
                            className="car-list__action-btn"
                            onClick={(e) => {
                                e.stopPropagation();
                                onItemDelete?.(car.id);
                            }}
                        >
                            <TrashIcon width={18} height={18}/>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};