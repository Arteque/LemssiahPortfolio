import { ButtonHTMLAttributes, FC } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../libs/utils";

const buttonVariants = cva(
    "text-prime py-2 text-bold",
    {
        variants:{
            variant:{
                default:"inline-block text-prime hover:text-second font-medium p-2 px-4 m-1 transition-all duration-[.3] ease-in-out",
                outline:"block w-fit p-2 px-4 bg-none text-second border border-2 border-second rounded-sm font-bold uppercase hover:text-prime-200 hover:border-second-100 transition-all duration-[.3] ease-in-out",
                full:"block w-fit p-2 px-4 bg-second-100 text-prime rounded-sm font-bold uppercase hover:bg-second hover:text-prime transition-all duration-[.3] ease-in-out",
                inline:"inline m-0 px-0 pr-2 underline text-prime-100 hover:text-prime target?pr-10",
                rounded:"text-prime hover:text-prime-100 hover:bg-bg-100 duration-[.3s]  rounded-[50%] bg-bg w-[2.5rem] h-[2.5rem] md:w-[3rem] md:h-[3rem] flex justify-center items-center shadow-lg",
                roundedLight:"text-bg-200 bg-prime hover:text-bg-100 hover:bg-prime-100 duration-[.3s]  rounded-[50%] w-[2.5rem] h-[2.5rem] md:w-[3rem] md:h-[3rem] flex justify-center items-center shadow-lg"
            },
            sizes:{
                sm:"w-[1rem] h-[1rem] p-2 md:w-[2rem] md:h-[2rem]"
            }
        },
        defaultVariants: {
            variant:"default"
        }
    }
)
interface  ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
        className?: string,
    }
const Button : FC<ButtonProps> = ({className, variant, ...props}) => {
    return <button className={cn(buttonVariants({ variant }), className)} {...props} />
}

export {Button, buttonVariants}


