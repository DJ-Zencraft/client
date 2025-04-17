import { FC, useEffect } from 'react';
import api from '../../api/apiClient';
import React, { useState } from 'react'; 
import { Layout } from "../../components/layouts";
import './STOPageStyles.scss'
import { toast } from 'react-toastify';
import { TextField } from '../../components';
import { CarList } from '../../components';
import { Car } from '../../types/models';
import { Button } from '../../components';
import { MapComponent } from '../../components/Map';

export const STOPage: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [cars, setCars] = useState<Car[]>([]);
    const [selectedCarId, setSelectedCarId] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const response = await api.get('/cars');
                setCars(response.data);
                setError(null);
            } catch (err: any) {
                setError('Ошибка загрузки автомобилей');
                toast.error('Не удалось загрузить данные');
            } finally {
                setIsLoading(false);
            }
        };

        fetchCars();
    }, []);

    const filteredCars = cars.filter(car =>
        `${car.mark} ${car.model} ${car.ownerFIO}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
    );

    const selectedCar = cars.find(car => car.id === selectedCarId);

    return (
        <Layout title="СТО">
            <div className="sto-page">
                <div className="sto-page__sidebar">
                    <div style={{ marginBottom: '15px' }}>
                        <TextField 
                            placeholder="Поиск автомобилей..."
                            value={searchQuery}
                            onChange={(value) => setSearchQuery(value)}
                        />
                    </div>
                    
                    {isLoading ? (
                        <div>Загрузка автомобилей...</div>
                    ) : error ? (
                        <div style={{ color: 'red' }}>{error}</div>
                    ) : (
                        <CarList 
                            carList={filteredCars}
                            onItemClick={(id) => setSelectedCarId(id)}
                            onItemEdit={(id) => console.log('Edit:', id)}
                            onItemDelete={(id) => console.log('Delete:', id)}
                        />
                    )}
                </div>
                
                <div className="sto-page__main-content">
                    {selectedCar ? (
                        <>
                            <div style={{ 
                                display: 'flex', 
                                justifyContent: 'space-between', 
                                marginBottom: '20px' 
                            }}>
                                <h2 style={{ margin: 0 }}>Детали автомобиля</h2>
                                <Button 
                                    text="Закрыть"
                                    onClick={() => setSelectedCarId(null)}
                                    type="secondary"
                                />
                            </div>
                            
                            <div className="car-details">
                                <div className="car-info">
                                    <p><strong>Марка:</strong> {selectedCar.mark}</p>
                                    <p><strong>Модель:</strong> {selectedCar.model}</p>
                                    <p><strong>VIN:</strong> {selectedCar.vin}</p>
                                    <p><strong>Владелец:</strong> {selectedCar.ownerFIO}</p>
                                    <p><strong>Год выпуска:</strong> {selectedCar.year}</p>
                                    <p><strong>Пробег:</strong> {selectedCar.mileage} км</p>
                                </div>
                                
                                {selectedCar.coordinates && (
                                    <div className="car-map">
                                        <MapComponent 
                                            coordinates={selectedCar.coordinates}
                                            // markerText={`${selectedCar.mark} ${selectedCar.model}`}
                                        />
                                    </div>
                                )}
                            </div>
                        </>
                    ) : (
                        <div style={{ color: '#666' }}>
                            {cars.length === 0 && !isLoading 
                                ? 'Нет доступных автомобилей'
                                : 'Выберите автомобиль из списка для просмотра деталей'}
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
};