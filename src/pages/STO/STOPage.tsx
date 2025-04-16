import { FC, useEffect  } from 'react';
import api from '../../api/apiClient';
import React, { useState } from 'react'; 
import { Layout } from "../../components/layouts";
import './STOPageStyles.scss'
import { toast } from 'react-toastify';
import { DropDown } from '../../components';
import { TextField } from '../../components';
import { CarList } from '../../components';
import { Car } from '../../types/models';
import { Button } from '../../components';

export const STOPage: React.FC = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [cars, setCars] = useState<Car[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    
    // Временные данные
    // const cars = [
    //     { 
    //         id: 1, 
    //         mark: 'Toyota', 
    //         model: 'Camry', 
    //         group: 'Средний класс', 
    //         ownerFIO: 'Иванов И.И.' 
    //     },
    //     {
    //         id: 2,
    //         mark: 'Nissan',
    //         model: 'X-Trail',
    //         ownerFIO: 'Сидоров А.А.ы'
    //     }
    // ];

    // Получение данных с API
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

    // Фильтрация машин по поисковому запросу
    const filteredCars = cars.filter(car =>
        `${car.mark} ${car.model} ${car.ownerFIO}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
    );

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
                <CarList 
                    carList={cars}
                    onItemClick={(id) => console.log('Selected:', id)}
                    onItemEdit={(id) => console.log('Edit:', id)}
                    onItemDelete={(id) => console.log('Delete:', id)}
                />
            </div>
            
            <div className="sto-page__main-content">
                <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    marginBottom: '20px' 
                }}>
                    <h2 style={{ margin: 0 }}>Детали автомобиля</h2>
                    <Button text="Войти" type="primary"/>
                </div>
                
                <div style={{ color: '#666' }}>
                    Выберите автомобиль из списка для просмотра деталей
                </div>
            </div>
        </div>
        </Layout>
    );
};