import { Car } from '../../types/models';

// export interface CarListProps {
//     carList: Array<Car>;
// }

export interface CarListProps{
    carList: Array<Car>;
    onItemClick?: (id: number) => void;
    onItemEdit?: (id: number) => void;
    onItemDelete?: (id: number) => void;
}