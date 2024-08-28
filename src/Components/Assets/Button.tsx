import { FC } from "react";
import { cva, VariantProps } from "class-variance-authority";

interface ButtonProps {
    buttonArt:string;
}

const ButtonVariants = cva(
    "",
    {
        variants:{
            variant:{
                default:"text-white bg-second text-bg hover:bg-second-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
                outline:""
            }
        }
    }
)

const Button:FC<ButtonProps> = ({...props}) => {
    <button type="submit" className="" {...props}>Submit</button>
}

export default Button