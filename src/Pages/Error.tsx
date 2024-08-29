import { useRouteError } from "react-router-dom"

function Error() {
    const error:unknown = useRouteError()
    console.log(error)
  return (
    <>
        <h2>Irgendwas stimmt nicht!</h2>
        <p>
            {(error as Error)?.message ||
            (error as { statusText?: string })?.statusText}
        </p>
    </>
  )
}

export default Error