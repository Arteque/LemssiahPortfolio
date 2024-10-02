import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import PageHero from "../Components/Assets/PageHero"
import Container from "../Components/Container"
import Header from "../Components/Header"
import { faArrowDownAZ, faArrowUpAZ, faCalendarAlt, faFilter } from "@fortawesome/free-solid-svg-icons"
import {  useState,useEffect } from "react"
import { useLocation } from "react-router-dom"
import Projects from "../Data/Projects.json"
import ProjectCard from "../Components/Assets/ProjectCard"



const  Portfolio = () => {


  const [filterVal, setFilterVal] = useState("")
  const loc = useLocation()
  const [checkedInput, setCheckedInput] = useState("")

  
  
  const sortData = (event:React.FormEvent<HTMLUListElement> & React.ChangeEvent<HTMLInputElement>) => { 
    setFilterVal(event.target.value)
    loc.search = filterVal
  }

  useEffect(() => {
    setCheckedInput(filterVal)
  },[filterVal])


  return (
    <>
      <PageHero pageTitle="Portfolio" />
      <section>
        <Container>
          <Header variant="section">
              <h2>
                Projekte Ecke
              </h2>
          </Header>
          <div className="content mt-5 mb-10">
            {/* Filter Start */}
            <div className="filter flex gap-10 bg-prime-100 px-5 mx-10 rounded-xl shadow-lg items-center">
              <div className="filter__icon">
                <FontAwesomeIcon icon={faFilter} className="text-text-200"/>
              </div>
              <ul className="filter__items
                  flex gap-5
                " onChange={sortData}>
                <li className="hover:bg-prime-100 hover:border-xl">
                <input 
                    className="hidden peer"
                    value="date"
                    checked={checkedInput === 'date'} 
                    type="radio"
                    readOnly 
                    name="filter" 
                    id="date" />
                  <label title={`Nach Datum Sortieren`} htmlFor="date" className="cursor-pointer block p-3 bg-prime transition-all duration-50 
                  text-bg
                  hover:bg-bg-100 hover:text-prime peer-checked:bg-bg peer-checked:text-prime" >
                    
                     <FontAwesomeIcon  icon={faCalendarAlt} />
                  </label>
                </li>
                <li className="hover:bg-prime-100 hover:border-xl">
                <input 
                    className="hidden peer"
                    value="az"
                    checked={checkedInput === 'az'} 
                    type="radio"
                    readOnly 
                    name="filter" 
                    id="az" />
                  <label title={`Von A bis Z sortieren`} htmlFor="az" className="cursor-pointer block p-3 bg-prime transition-all duration-50 
                  text-bg
                  hover:bg-bg-100 hover:text-prime peer-checked:bg-bg peer-checked:text-prime" >
                      <FontAwesomeIcon  icon={faArrowDownAZ} />
                  </label>
                </li>
                <li className="hover:bg-prime-100 hover:border-xl">
                <input 
                    className="hidden peer"
                    value="za"
                    checked={checkedInput === 'za'} 
                    type="radio"
                    readOnly 
                    name="filter" 
                    id="za" />
                  <label title={`von Z bis A sortieren`} htmlFor="za" className="cursor-pointer block p-3 bg-prime transition-all duration-50 
                  text-bg
                  hover:bg-bg-100 hover:text-prime peer-checked:bg-bg peer-checked:text-prime" >
                    <FontAwesomeIcon  icon={faArrowUpAZ} />
                  </label>
                </li>
              </ul>
            </div>
            {/* Fitler end */}

            {/* Main Content Start */}
            <p className="text-prime px-5 my-5">
              Wir haben {Projects.length} Projekte herutengeladen
            </p>
            {
              Projects && Projects.map((item) => (
                <ProjectCard key={`${item.title.de}${item.id}`} 
                title={item.title.de} 
                screenshot={item.screenshot}
                screenshottype={item.screenshottype}
                date={item.date}
                location={item.location}
                teks={item.teks}
                type={item.type}
                project={item.projectname}
                projektFolder={item.projectname}
                />
              ))
            }
            {/* Main Content End */}
          </div>
        </Container>
      </section>
    </>
  )
}

export default Portfolio