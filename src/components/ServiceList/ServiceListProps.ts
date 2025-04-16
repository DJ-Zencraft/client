// src/components/ServiceList/ServiceListProps.ts
import { AutoService } from '../../types/models';

export interface ServiceListProps {
  services: AutoService[];
  onServiceSelect: (id: number) => void;
}