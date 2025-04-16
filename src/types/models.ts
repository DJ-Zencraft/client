export interface Car{
    id: number;
    mark: string;
    model?: string;
    ownerFIO?: string;
}

// src/types/models.ts
export interface AutoService {
    id: number;
    name: string;
    address: string;
    currentCars: number;
    coordinates: [number, number];
  }