// ServiceList.tsx
import { FC, useState } from 'react';
import clsx from 'classnames';
import { ServiceListProps } from "./ServiceListProps";
import { AutoService } from '../../types/models';
import './serviceListStyles.scss';

// interface ServiceListProps {
//   services: AutoService[];
//   onServiceSelect: (id: number) => void;
// }

export const ServiceList: FC<ServiceListProps> = ({ services, onServiceSelect }) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <div className="service-list">
      {services.map(service => (
        <div
          key={service.id}
          className={clsx('service-list__item', {
            'service-list__item--selected': service.id === selectedId
          })}
          onClick={() => {
            setSelectedId(service.id);
            onServiceSelect(service.id);
          }}
        >
          <h4>{service.name}</h4>
          <p>Адрес: {service.address}</p>
          <p>Машин в сервисе: {service.currentCars}</p>
        </div>
      ))}
    </div>
  );
};