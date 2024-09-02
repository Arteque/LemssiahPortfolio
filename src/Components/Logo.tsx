function Logo() {
  return (
    <div className="logo flex gap-2 items-center p-4">
        <img className="logo__image block" src="./logo.svg" alt="Ahmed Lemssiah Logo" style={{maxWidth:"50px"}}/>
        <h1 className="logo__content font-bold">
            <span className="block uppercase whitespace-nowrap text-prime font-title ">Ahmed Lemssiah</span>
            <span className="text-second font-text whitespace-nowrap">Web Designer</span>
        </h1>
    </div>
  )
}

export default Logo