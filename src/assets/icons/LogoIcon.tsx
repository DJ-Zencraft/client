import{ FC } from 'react'

interface IconProps{
    width?: number | string;
    height?: number | string;
    color?: string;
    className?: string;
    onClick?: () => void;
}

export const LogoIcon: FC<IconProps> = props =>{
    const {
        className,
        color = '#ffffff',
        height =40,
        width = 40,
        onClick
    } = props;

    return(
        <svg width = {width} height={height}
        className = {className}
        onClick = {onClick}
        viewBox = "0 -0.5 21 21"
        fill={color} xmlns="http://www.w3.org/2000/svg"
        >
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3 1L1.66667 5H0V8H1V15H3V13H13V15H15V8H16V5H14.3333L13 1H3ZM4 9C3.44772 9 3 9.44772 3 10C3 10.5523 3.44772 11 4 11C4.55228 11 5 10.5523 5 10C5 9.44772 4.55228 9 4 9ZM11.5585 3H4.44152L3.10819 7H12.8918L11.5585 3ZM12 9C11.4477 9 11 9.44772 11 10C11 10.5523 11.4477 11 12 11C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9Z" fill="#000000"/>
        </svg>
    );
}