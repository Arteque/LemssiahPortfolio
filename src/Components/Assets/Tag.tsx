import { FC, ReactNode } from "react"

interface tagProps {
    class_name?:string,
    children?:ReactNode
}

const Tag:FC<tagProps> = ({children, class_name, ...props}) => {
  return (
    <div className={`${class_name} tag w-[25px] h-[25px] p-1 rounded-lg shadow-sm `} {...props}>
        {children}
    </div>
  )
}

export default Tag