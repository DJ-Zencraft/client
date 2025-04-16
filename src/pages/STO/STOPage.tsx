import { FC } from 'react';
import { Layout } from "../../components/layouts";
import './STOPageStyles.scss'
import { DropDown } from '../../components';

export const STOPage: FC = () => {
    return (
        <Layout>
            <div className="dep-page">
                <div className="dep-page__users-list-container">
                    <DropDown items={[{
                        text: 'Otdel 1', value: '1'
                    },{
                        text: 'Otdel 2', value: '2'
                    }]} label="Сервисы Тех Осмотра: " 
                    selectedChanged={(value) => console.log(value)} // Добавляем обработчик
                    />
                    <div>
                        Список Сотруднкиов
                    </div>
                </div>
                <div>
                    <div>
                        <span>ФИО</span>
                        <div>*</div>
                    </div>
                    <div>
                        <div>Личные данные</div>
                        <div>Данные о работе</div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}