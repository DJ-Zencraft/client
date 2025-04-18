import { FC } from "react";
import { IconProps } from "../../types/commonTypes";

export const PlusIcon: FC<IconProps> = props =>{
    const{
        className,
        color = '#313131',
        height = 24,
        width = 24,
        onClick
    } = props;

    return(
        <svg width={width} 
        height={height}
        viewBox="0 0 32 32" 
        version="1.1"
        className={className}
        onClick={onClick} 
        xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Icon-Set-Filled"  transform="translate(-362.000000, -1037.000000)" fill={color}>
                    <path d="M390,1049 L382,1049 L382,1041 C382,1038.79 380.209,1037 378,1037 C375.791,1037 374,1038.79 374,1041 L374,1049 L366,1049 
                    C363.791,1049 362,1050.79 362,1053 C362,1055.21 363.791,1057 366,1057 L374,1057 L374,1065 C374,1067.21 375.791,1069 378,1069 C380.209,
                    1069 382,1067.21 382,1065 L382,1057 L390,1057 C392.209,1057 394,1055.21 394,1053 C394,1050.79 392.209,1049 390,1049" 
                    id="plus">
                    </path>
                </g>
            </g>
        </svg>
    )
} 