import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PageHero from "../Components/Assets/PageHero"
import Container from "../Components/Container";
import { faReact, faHtml5, faCss3, faJs, faWordpress, faTypo3 } from "@fortawesome/free-brands-svg-icons";
import Card from "../Components/Assets/Card";

const tools = [
  {
    id:1,
    name:"HTML5",
    iconName: faHtml5,
    bg:"linear-gradient(to right, #DD4C25 50%, #EA6227 50%)",
    color:"white"
  },
  {
    id:2,
    name:"CSS3",
    iconName: faCss3,
    bg:"linear-gradient(to right, #1755A2 50%, #2663EA 50%)",
    color:"white"
  },
  {
    id:3,
    name:"Javascript",
    iconName: faJs,
    bg:"#EDD61A",
    color:"black"
  },
  {
    id:4,
    name:"Reactjs",
    iconName: faReact,
    bg:"black",
    color:"#03D1F7"
  },
  {
    id:5,
    name:"Wordpress",
    iconName: faWordpress,
    bg:"white",
    color:"#217196"
  },
  {
    id:6,
    name:"Typo3",
    iconName: faTypo3,
    bg:"#F78C00",
    color:"white"
  },
]


function About() {

  const calcYears = (datum:string) => {
    const birthDate = new Date(datum).getTime(); // November 29, 1982 (Month is 0-based)
    const today = new Date().getTime();

    const differenceInMilliseconds = today - birthDate;
    
    // Convert milliseconds into years (1000 milliseconds = 1 second, 60 seconds = 1 minute, 60 minutes = 1 hour, 24 hours = 1 day, 365.25 days = 1 year)
    const ageInYears = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));
   
      return ageInYears;
}




  return (
    <>
      <PageHero pageTitle="Über mich" pageDescription="Erfaren Sie alles über mich" />
      <section>
        <Container >
          <Card variant="mediaCard" className="text-prime prose-p:my-5">
            <div className="card__header bg-prime  px-5 pt-5 rounded-xl overflow-hidden">
              <div className="overflow-hidden">
                  <img src="https://res.cloudinary.com/www-arteque-de/image/upload/v1554565460/arteque/profil/amd.png" 
                  alt="Ahmed Lemssiah Profilbild" 
                  className="translate-y-4"
                  />
              </div>
            </div>
            <div className="card__body ">
              <p className=" bg-prime p-3 rounded-lg text-bg">
                <strong>
                    <q className="">
                      Nach einem langen Tag am <b>kodieren</b>!!! <br />
                      Sobald ich Heim bin und meine Familie im Bett ist, mache ich, was jeder Entwickler tut: weiter <b>kodieren</b>. &#129322;
                    </q>
                </strong>
              </p>
              <p>
                  Hallo und danke, für deine Enteresse!<br /> <br />
                  Mein Name ist Ahmed Lemssiah, ich bin {calcYears("1982,11,29")} Jahre alt und lebe in Deutschland. 
              </p>
              <p>
                Ich habe eine Ausbildung als Mediengestalter abgeschlossen. Seit {calcYears("2020,07,24")} Jahren habe ich meine Leidenschaft für die Webentwicklung entdeckt, in der ich mein gestalterisches und technisches Wissen kreativ einsetzen kann.
              </p>
             
            </div>
            <div className="card__footer">
              <p>
                  Als leidenschaftlicher Entwickler strebe ich stets danach, mein Wissen zu erweitern und neue Technologien zu erlernen, um mich kontinuierlich weiterzuentwickeln und am Puls der Zeit zu bleiben.
              </p>
              <p>
                Ich beherrsche die folgenden Technologien sicher:
              </p>
              <ul className="flex flex-wrap gap-2 justify-center my-5">
                {
                  tools && (
                    tools.map(item => (
                      <li key={item.id} title={item.name}
                        className="
                        flex flex-col gap-2 justify-center items-center 
                        p-2 uppercase 
                        min-w-[7rem] aspect-square rounded-lg
                        shadow-lg
                        
                        "
                        style={{
                          background:`${item.bg}`, 
                          color:`${item.color}`
                        }}
                      >
                        <FontAwesomeIcon icon={item.iconName} size="3x" 
                          
                        />
                        <h3>{item.name}</h3>
                      </li>
                    ))
                  )
                }
              </ul>
            </div>
          </Card>
          
          
          
        </Container>
      </section>
    </>
  )
}

export default About