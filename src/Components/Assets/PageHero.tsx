import { FC } from "react"
import Container from "../Container"

const PageHeroProps = {
    pageTitle: string,
    pageDescription: React.ReactNode 
}

const PageHero:FC<HTMLDivElement> = ({pageTitle, pageDescription}) => {
  return (
    <div className="bg-prime">
        <Container>
            <div className="min-h-25svh flex flex-col items-center justify-center">
                <h2>{pageTitle}</h2>
                {pageDescription && (
                    <p>{pageDescription}</p>
                )}
            </div>
        </Container>
    </div>
  )
}

export default PageHero