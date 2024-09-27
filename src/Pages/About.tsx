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
    iconType:"svg",
    bg:"linear-gradient(to right, #DD4C25 50%, #EA6227 50%)",
    color:"white"
  },
  {
    id:2,
    name:"CSS3",
    iconName: faCss3,
    iconType:"svg",
    bg:"linear-gradient(to right, #1755A2 50%, #2663EA 50%)",
    color:"white"
  },
  {
    id:3,
    name:"Javascript",
    iconName: faJs,
    iconType:"svg",
    bg:"#EDD61A",
    color:"black"
  },
  {
    id:4,
    name:"Reactjs",
    iconName: faReact,
    iconType:"svg",
    bg:"black",
    color:"#03D1F7"
  },
  {
    id:5,
    name:"Wordpress",
    iconName: faWordpress,
    iconType:"svg",
    bg:"white",
    color:"#217196"
  },
  {
    id:6,
    name:"Typo3",
    iconName: faTypo3,
    iconType:"svg",
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
      <PageHero pageTitle="Über mich" bgImg="./Bg/Arabeske.svg"/>
      <section>
        <Container >
          <Card variant="mediaCard" className="text-prime prose-p:my-1
            md:grid md:grid-cols-[1.2fr,.8fr] md-grid-rows-2 md:w-full md:max-w-[100%] md:gap-5
            md:items-end
          ">
            <div className="card__header bg-bg dark:bg-bg  px-5 pt-5 rounded-xl overflow-hidden
              md:col-1 md:row-start-1 md:row-span-2
            ">
              <div className="overflow-hidden">
                  <img src="https://res.cloudinary.com/www-arteque-de/image/upload/v1554565460/arteque/profil/amd.png" 
                  alt="Ahmed Lemssiah Profilbild" 
                  className="translate-y-4 md:translate-y-20"
                  />
                <p className=" bg-bg p-3 rounded-lg text-prime text-center z-10 relative">
                <small>
                  <q>
                        Nach einem langen Tag am <b>kodieren</b> zuhause <b>kodirere</b> ich  gerne weiter. &#129322;
                  </q>
                </small>
              </p>
              </div>
            </div>
            <div className="card__body prose-strong:text-second my-5">
              
              <p>
                  Hallo und danke, für deine Interesse!<br /> <br />
              Mein Name ist <strong>Ahmed <span className="uppercase">Lemssiah</span></strong>, ich bin {calcYears("1982,11,29")} Jahre alt und lebe in Deutschland. 
              </p>
              <p>
                Ich bin gelernter <strong>Mediengestalter </strong> und arbeite seit {calcYears("2020,07,24")} Jahren als <strong>Web Entwickler</strong>.
              </p>
              <p className="bg-bg py-10 pl-3 rounded-md text-center font-bold">
                 Mit viel Leidenschaft designe und entwickle ich Webpräsenzen. 
              </p>
              <p>
                 - Hier ist eine noch unvollständige Liste meiner täglichen Begleiter, die sich ständig erweitert, da ich stets neue Dinge lerne.
              </p>
              <ul className="flex flex-wrap gap-20 justify-start my-5">
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
                        {
                          item.iconType == 'svg' ? (
                            <FontAwesomeIcon icon={item.iconName} size="3x" />
                          ):(
                            <img src="${item.iconName}" alt="${item.iconName}" />
                          )
                        }
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