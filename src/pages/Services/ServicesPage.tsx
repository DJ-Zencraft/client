// ServicesPage.tsx
import React, {FC, useState } from 'react';
import { Layout } from '../../components/layouts';
import { useNavigate } from 'react-router-dom';
import { ServiceList } from '../../components';
import { MapComponent } from '../../components';
import { Button } from '../../components/button';
import './ServicesPageStyles.scss';
import { RoutePaths } from '../../constants/commonConstants';
import { AutoService } from '../../types/models';

const mockServices: AutoService[] = [
  {
    id: 1,
    name: 'Главный автосервис',
    address: 'ул. Центральная, 15',
    currentCars: 5,
    coordinates: [55.751244, 37.618423]
  },
  // ... другие сервисы
];
export const ServicesPage: FC = () => {
  const [selectedServiceId, setSelectedServiceId] = useState<number | null>(null);

  const navigate = useNavigate();

  const handleServiceSelect = (id: number) => {
    setSelectedServiceId(id);
  };

  const handleNavigateToSTO = () => {
    if (selectedService) {
      // Правильный путь: /sto/1 вместо /services/sto/1
      navigate(`${RoutePaths.STO}/${selectedService.id}`);
    }
  };

  const selectedService = mockServices.find(service => service.id === selectedServiceId);

  return (
    <Layout title="Автосервисы">
    <div className="services-page">
      <div className="services-page__sidebar">
        <ServiceList 
          services={mockServices}
          onServiceSelect={handleServiceSelect}
        />
      </div>

      <div className="services-page__main">
        {selectedService ? (
          <>
            <div className="service-info">
              <h2>{selectedService.name}</h2>
              <p>Адрес: {selectedService.address}</p>
              <p>Машин в сервисе: {selectedService.currentCars}</p>
              
              <div className="service-actions">
                <Button 
                  text="Перейти к сервису"
                  onClick={handleNavigateToSTO}
                  type="primary"
                  disabled={!selectedServiceId}
                />
              </div>
            </div>
            
            <div className="service-map">
              <MapComponent coordinates={selectedService.coordinates} />
            </div>
          </>
        ) : (
          <div className="service-placeholder">
            Выберите автосервис из списка
          </div>
        )}
      </div>
    </div>
    </Layout>
  );
};