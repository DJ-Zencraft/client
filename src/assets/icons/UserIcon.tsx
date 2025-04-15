import{ FC } from 'react'

interface IconProps{
    width?: number | string;
    height?: number | string;
    color?: string;
    className?: string;
    onClick?: () => void;
}

export const UserIcon: FC<IconProps> = props =>{
    const {
        className,
        color = '#ffffff',
        height =24,
        width = 24,
        onClick
    } = props;

    return(
        <svg width={width} height={height} className={className} onClick={onClick} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 1H1V3H15V1Z" fill={color}/>
        <path d="M1 5H3V15H1V5Z" fill={color}/>
        <path d="M5 13H15V15H5V13Z" fill={color}/>
        <path d="M15 9H5V11H15V9Z" fill={color}/>
        <path d="M5 5H15V7H5V5Z" fill={color}/>
        </svg>
    );
}