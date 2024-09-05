import { useRef, useEffect } from "react";

const Canvas = () => {
  const heroCanvas = useRef<HTMLCanvasElement>(null)
  
  useEffect(()=> {
    
      const canvas = heroCanvas.current
      const ctx = canvas?.getContext('2d')
      const width = Number(canvas?.width)
      const height = Number(canvas?.height)
      cloud(ctx!)

      function cloud(ctx: CanvasRenderingContext2D){
        ctx.fillStyle ="red"
        ctx.fillRect(0, 0, width, height)
        ctx.fill()
      }

   }, [])

    return <canvas className="absolute -z-20 w-full h-full top-0 left-0" ref={heroCanvas}/>
}


export default Canvas