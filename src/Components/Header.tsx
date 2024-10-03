import { cva,VariantProps } from "class-variance-authority"
import { FC, HTMLAttributes } from "react"
import { cn } from "../Data/libs/utils"


const headerVariants = cva(
    "",
    {
        variants:{
            variant:{
                default: "px-4 w-full",
                section:"pt-20 pb-5 w-full text-center"
            }
        },
        defaultVariants:{
            variant:"default"
        }
    }
)

interface HeaderProps extends HTMLAttributes<HTMLDivElement>,
VariantProps<typeof headerVariants>{
    className?:string,
}

const Header:FC<HeaderProps> = ({className, variant, ...Props}) => {
    return <header className={cn(headerVariants({variant}), className)} {...Props} />
}

export default Header