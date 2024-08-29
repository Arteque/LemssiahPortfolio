import { ButtonHTMLAttributes, FC } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../libs/utils";

const buttonVariants = cva(
    "text-prime py-2 px-5 text-bold",
    {
        variants:{
            variant:{
                default:"inline-block text-prime hover:text-second font-medium p-2 px-4 m-1 transition-all duration-[.3] ease-in-out",
                outline:"block w-fit p-2 px-4 bg-none text-second border border-2 border-second rounded-sm font-bold uppercase hover:bg-second-100 hover:text-prime transition-all duration-[.3] ease-in-out",
                full:"block w-fit p-2 px-4 bg-second text-bg rounded-sm font-bold uppercase hover:bg-second-100 hover:text-prime transition-all duration-[.3] ease-in-out"
            },
        },
        defaultVariants: {
            variant:"default"
        }
    }
)
interface  ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
        className:string,
    }
const Button : FC<ButtonProps> = ({className, variant, ...props}) => {
    <button className={cn(buttonVariants(variant, className))} {...props} />
}

export {Button, buttonVariants}


