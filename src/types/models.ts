export interface Car {
    id: number;
    mark: string;
    model: string;
    ownerFIO: string;
    vin?: string;
    year?: number;
    mileage?: number;
    coordinates?: [number, number];
}
// src/types/models.ts
export interface AutoService {
    id: number;
    name: string;
    address: string;
    currentCars: number;
    coordinates: [number, number];
  }