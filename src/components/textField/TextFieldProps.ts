import { LabelWeight } from '../../types/commonTypes';

type InfoType = 'info' | 'error' | 'success';


export interface TextFieldProps {
    labelText?: string;
    type?: React.HTMLInputTypeAttribute;
    info?: string;
    infoType?: InfoType;
    value?: string;
    disabled?: boolean;
    onEnter?: (value: string) => void;
    onChange?: (value: string) => void;
    lblWeight?: LabelWeight;
    placeholder?: string; // Добавляем пропс
};