import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PageHero from "../Components/Assets/PageHero"
import Container from "../Components/Container";
import { faReact, faHtml5, faCss3, faJs, faWordpress, faTypo3, faGithub, faBootstrap } from "@fortawesome/free-brands-svg-icons";
import Card from "../Components/Assets/Card";
import { IconProp } from "@fortawesome/fontawesome-svg-core";


const webtools = [
  {
    id:1,
    name:"HTML5",
    iconName: faHtml5,
    imgPath:"",
    iconType:"fontawesome",
    bg:"linear-gradient(to right, #DD4C25 50%, #EA6227 50%)",
    color:"white"
  },
  {
    id:2,
    name:"CSS3",
    iconName: faCss3,
    imgPath:"",
    iconType:"fontawesome",
    bg:"linear-gradient(to right, #1755A2 50%, #2663EA 50%)",
    color:"white"
  },
  {
    id:3,
    name:"Javascript",
    iconName: faJs,
    imgPath:"",
    iconType:"fontawesome",
    bg:"#EDD61A",
    color:"black"
  },
  {
    id:4,
    name:"Reactjs",
    iconName: faReact,
    imgPath:"",
    iconType:"fontawesome",
    bg:"black",
    color:"#03D1F7"
  },
  {
    id:5,
    name:"Wordpress",
    iconName: faWordpress,
    imgPath:"",
    iconType:"fontawesome",
    bg:"#ddd",
    color:"#217196"
  },
  {
    id:6,
    name:"Typo3",
    iconName: faTypo3,
    imgPath:"",
    iconType:"fontawesome",
    bg:"#F78C00",
    color:"white"
  },
]


const designtools = [
  {
    id:1,
    name:"Photoshop",
    iconName: "",
    imgPath:"./Icons/Ps.svg",
    iconType:"img",
    bg:"#001E36",
    color:"white"
  },
  {
    id:2,
    name:"Illustrator",
    iconName: "",
    imgPath:"./Icons/Ai.svg",
    iconType:"img",
    bg:"#330000",
    color:"white"
  },
  {
    id:3,
    name:"Adobe XD",
    iconName: "",
    imgPath:"./Icons/Xd.svg",
    iconType:"img",
    bg:"#470137",
    color:"white"
  },
]

const libs = [
  {
    id:1,
    name:"Tailwind",
    iconName: "",
    imgPath:"./Icons/Tailwind.svg",
    iconType:"img",
    bg:"#1D2434",
    color:"white"
  },
  {
    id:2,
    name:"Bootstrap",
    iconName: faBootstrap,
    imgPath:"",
    iconType:"fontawesome",
    bg:"linear-gradient(to right, #8712F7, #6E10EE)",
    color:"white"
  }
]

const versiontools = [
  {
    id:1,
    name:"Github",
    iconName: faGithub,
    imgPath:"",
    iconType:"fontawesome",
    bg:"#001E36",
    color:"white"
  },
]


const About = () => {

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
      <PageHero pageTitle="Über mich" bgImg="./Bg/OfficeTopView.svg"/>
      <section>
        <Container >
          <Card variant="mediaCard" className="text-prime prose-p:my-1
            md:flex md:gap-10 md:justify-center md:max-w-full 
           
          ">
            <div className="card__header bg-bg px-5 pt-5 rounded-xl  h-fit">
              <div className="overflow-hidden">
                  <img src="https://res.cloudinary.com/www-arteque-de/image/upload/v1554565460/arteque/profil/amd.png" 
                  alt="Ahmed Lemssiah Profilbild" 
                  className="translate-y-4 md:translate-y-16"
                  />
              </div>
            </div>
            <div className="card__body prose-strong:text-second my-5 md:max-w-[80%]">
              
              <p>
                  Hallo und danke für deine Interesse!<br />
              Ich heiße <strong>Ahmed <span className="uppercase">Lemssiah</span></strong>, {calcYears("1982,11,29")} Jahre alt und lebe in Deutschland. 
              </p>
              <p className="pt-5">
                Ich bin gelernter <strong>Mediengestalter </strong> und arbeite seit {calcYears("2020,07,24")} Jahren als <strong>Web Entwickler</strong>.
              </p>
              <p>
                 Mit viel Leidenschaft designe und entwickle ich Webpräsenzen. 
              </p>
              <p className="pt-5">
                 - Hier ist eine noch unvollständige Liste meiner täglichen Begleiter, die sich ständig erweitert, da ich stets neue Dinge lerne.
              </p>

              <div className="items-list">
              <h3 className="mt-5 text-prime-200 list-item ml-5">
                Design<span className="text-second font-black">tools</span>:
              </h3>
              <ul className="flex flex-wrap justify-center md:grid gap-5 mt-5
              //Query
                md:grid-cols-3 md:justify-items-center
              ">
                {
                  designtools && (
                    designtools.map(item => (
                      <li key={item.id} title={item.name}
                        className="
                        
                        flex flex-col gap-2 justify-center items-center 
                        p-2 uppercase 
                        min-w-[7rem] max-w-[100px] aspect-square rounded-lg
                        shadow-lg
                        
                        "
                        style={{
                          background:`${item.bg}`, 
                          color:`${item.color}`
                        }}
                      >
                        {
                          item.iconType == "fontawesome" ? (
                            <>
                              <FontAwesomeIcon icon={item.iconName as IconProp} size="3x" />
                              <h3>{item.name}</h3>
                            </>
                          ):(
                            <>
                              <img src={item.imgPath} alt={item.name} title={item.name} />
                           </>
                          )
                        }
                       
                      </li>
                    ))
                  )
                }
              </ul>
              </div>

              <div className="items-list mt-10">
                  <h3 className="mt-5 text-prime-200 list-item ml-5">
                    Webentwicklungs<span className="text-second font-black">tools</span>:
                  </h3>
                  <ul className="flex flex-wrap justify-center md:grid gap-5 mt-5
                  //Query
                    md:grid-cols-3 md:justify-items-center
                  ">
                    {
                      webtools && (
                        webtools.map(item => (
                          <li key={item.id} title={item.name}
                            className="
                            
                            flex flex-col gap-2 justify-center items-center 
                            p-2 uppercase 
                            min-w-[7rem] max-w-[100px] aspect-square rounded-lg
                            shadow-lg
                            
                            "
                            style={{
                              background:`${item.bg}`, 
                              color:`${item.color}`
                            }}
                          >
                            {
                              item.iconType === 'fontawesome' ? (
                                <FontAwesomeIcon icon={item.iconName as IconProp} size="3x" />
                              ):(
                                <img src="${item.imgPath}" alt="${item.name}" />
                              )
                            }
                            <h3>{item.name}</h3>
                          </li>
                        ))
                      )
                    }
                  </ul>
              </div>

              <div className="items-list mt-10">
                  <h3 className="mt-5 text-prime-200 list-item ml-5">
                    Styling<span className="text-second font-black">tools</span>:
                  </h3>
                  <ul className="flex flex-wrap justify-center md:grid gap-5 mt-5
                  //Query
                    md:grid-cols-3 md:justify-items-center
                  ">
                    {
                      libs && (
                        libs.map(item => (
                          <li key={item.id} title={item.name}
                            className="
                            
                            flex flex-col gap-2 justify-center items-center 
                            p-2 uppercase 
                            min-w-[7rem] max-w-[100px] aspect-square rounded-lg
                            shadow-lg
                            
                            "
                            style={{
                              background:`${item.bg}`, 
                              color:`${item.color}`
                            }}
                          >
                            {
                              item.iconType === 'fontawesome' ? 
                              (<FontAwesomeIcon icon={item.iconName as IconProp} size="3x" title={item.name}/>) 
                              : 
                              (<img src={item.imgPath} alt={item.name} title={item.name}/>)
                            }
                           
                          </li>
                        ))
                      )
                    }
                  </ul>
              </div>


              <div className="items-list mt-10">
                  <h3 className="mt-5 text-prime-200 list-item ml-5">
                    Version<span className="text-second font-black">tools</span>:
                  </h3>
                  <ul className="flex flex-wrap justify-center md:grid gap-5 mt-5
                  //Query
                    md:grid-cols-3 md:justify-items-center
                  ">
                    {
                      versiontools && (
                        versiontools.map(item => (
                          <li key={item.id} title={item.name}
                            className="
                            
                            flex flex-col gap-2 justify-center items-center 
                            p-2 uppercase 
                            min-w-[7rem] max-w-[100px] aspect-square rounded-lg
                            shadow-lg
                            
                            "
                            style={{
                              background:`${item.bg}`, 
                              color:`${item.color}`
                            }}
                          >
                            {
                              item.iconType == 'fontawesome' ? (
                                <FontAwesomeIcon icon={item.iconName} size="3x" />
                              ):(
                                <img src={item.iconName} alt={item.iconName} />
                              )
                            }
                            <h3>{item.name}</h3>
                          </li>
                        ))
                      )
                    }
                  </ul>
              </div>
              <p>
                
              </p>
            </div>
          </Card>
          
          
          
        </Container>
      </section>
    </>
  )
}

export default About