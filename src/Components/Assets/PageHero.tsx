import { FC } from "react"
import Container from "../Container"

interface pageHeroProps {
    pageTitle?: string,
    pageDescription?: string
    bgImg?:string
}

const PageHero:FC<pageHeroProps> = ({pageTitle, pageDescription, bgImg}) => {
  return (
    <section className="bg-bg-200" style={{backgroundImage:`url(${bgImg})`, backgroundRepeat:'no-repeat', backgroundSize:'contain', backgroundPosition:'top left', backgroundBlendMode:"overlay"}}>
        <Container>
            <div className="min-h-[25svh] flex flex-col items-center justify-center">
                <h2 className="text-[2rem] font-black text-prime-100 text-center w-full">{pageTitle}</h2>
                {pageDescription && (
                    <p className="text-second">{pageDescription}</p>
                )}
            </div>
        </Container>
    </section>
  )
}

export default PageHero