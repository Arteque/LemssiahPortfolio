import { FC } from "react";
import { cva,  VariantProps} from "class-variance-authority";
import { cn } from "../../libs/utils";


const cardVariants = cva(
    "max-w-[450px] p-5  rounded-lg  border-bg bg-bg-100 ",
    {
        variants:{
            variant:{
                default: "transition hover:box-shadow-sm",
                mediaCard: "p-0 border-none"
            },
        },
        defaultVariants:{
            variant:"default",
        }
    }
)


interface cardProps extends VariantProps<typeof cardVariants>{
    className:string
    children:any 
}

const Card:FC<cardProps> = ({className,variant, children}) => {
    return <div className={`${cn(cardVariants({variant}), className)} mx-auto md:mx-0`} >
        {children}
    </div>
}

export default Card