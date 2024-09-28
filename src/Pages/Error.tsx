import { useRouteError } from "react-router-dom"
import Container from "../Components/Container"
import MainHeader from "../Components/MainHeader"
import { useState } from "react"
import MainFooter from "../Components/MainFooter"

function Error() {
    const error:unknown = useRouteError()
    console.log(error)


      //FormState
  const [formState, setFormState] = useState(false)

  const changetheFormState = () => {
    setFormState(prev => !prev)
  }

  return (
    <>
        <MainHeader toggleForm={changetheFormState}/>
        <main>
          <section className="min-h-[68svh]">
            <Container>
                      <h2 className="text-center my-10 text-2xl font-black text-prime">Irgendwas stimmt nicht!</h2>
                    <p className="max-w-[400px] mx-auto text-center text-prime-100">
                        {(error as Error)?.message ||
                        (error as { statusText?: string })?.statusText}
                    </p>
            </Container>
          </section>
        </main>
        <MainFooter showkontakt={formState} toggleForm={changetheFormState}/>
    </>
  )
}

export default Error