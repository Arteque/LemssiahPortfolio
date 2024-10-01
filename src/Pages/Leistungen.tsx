import PageHero from "../Components/Assets/PageHero"
import Container from "../Components/Container"
import Header from "../Components/Header"


function Leistungen() {
  return (
    <>
      <PageHero pageTitle="Leistungen" bgImg="./Bg/Plan.svg"/>
      <section>
        <Container>
          <Header variant="section">
              <h2>Konzeption</h2>
              
          </Header>
          <div className="content md:grid md:grid-cols-2 md:place-items-center">
                <img  className="max-w-[500px] bg-[white] rounded-lg" src="./Bg/Webdesign.svg" alt="" />
                <div className="text">
                <h3 className="text-left">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, ab.</h3>
                <p className="text-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore expedita architecto ratione optio delectus labore qui, debitis ipsum aperiam reiciendis explicabo commodi necessitatibus tempore aliquid accusantium similique ducimus velit fugiat sed, temporibus neque impedit? Vero porro saepe ex, atque possimus, cupiditate temporibus excepturi ratione veritatis totam dignissimos! Placeat, obcaecati blanditiis.
                </p>
                <ul className="text-left list-disc ml-5 my-3">
                  <li>data-1</li>
                  <li>data-2</li>
                  <li>data-3</li>
                  <li>data-4</li>
                  <li>data-5</li>
                </ul>
                </div>
              </div>
        </Container>
      </section>
      <section>
        <Container>
            <Header variant="section" >
              <h2>Realisierung</h2>
            </Header>
           
        </Container>
      </section>
      <section>
        <Container>
          <Header variant="section">
            <h2>Pflegung</h2>
          </Header>
        </Container>
      </section>
    </>
  )
}

export default Leistungen