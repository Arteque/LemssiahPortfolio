import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import PageHero from "../Components/Assets/PageHero"
import Container from "../Components/Container"
import Header from "../Components/Header"
import { faArrowUpAZ, faArrowUpZA, faCalendarAlt, faFilter } from "@fortawesome/free-solid-svg-icons"
import {  useState,useEffect } from "react"
import { useLocation } from "react-router-dom"
const  Portfolio = () => {

  const [filterVal, setFilterVal] = useState("")
  const loc = useLocation()
  const [checkedInput, setCheckedInput] = useState("")


  const sortData = (event:React.FormEvent<HTMLUListElement> & React.ChangeEvent<HTMLInputElement>) => { 
    setFilterVal(event.target.value)
    loc.search = filterVal
    updateLocation()
  }


  const updateLocation = () => {
    console.log(loc)
  } 

  useEffect(() => {
    setCheckedInput(filterVal || loc.search)
   
  }, [filterVal, loc])


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
          <div className="content">
            <div className="filter flex gap-10 bg-prime-100 px-5 mx-10 rounded-xl shadow-lg items-center">
              <div className="filter__icon">
                <FontAwesomeIcon icon={faFilter} className="text-text-200"/>
              </div>
              <ul className="filter__items
                  flex gap-5
                  prose-li:p-5 
                  prose-li:border 
                  prose-li:border-prime 
                  prose-li:rounded-xl 
                  prose-li:bg-prime
                  prose-li:transition-all
                  prose-li:duration-100
                  prose-li:cursor-pointer 
                " onChange={sortData}>
                <li className="hover:bg-prime-100 hover:border-xl">
                  <label htmlFor="date">
                    <input 
                    className="hidden"
                    value="date"
                    checked={checkedInput === 'date'} 
                    type="radio"
                    readOnly 
                    name="filter" 
                    id="date" />
                     <FontAwesomeIcon className=" pointer-events-none text-bg" icon={faCalendarAlt} />
                  </label>
                </li>
                <li className="hover:bg-prime-100 hover:border-xl">
                  <label htmlFor="az">
                    <input 
                    className="hidden"
                    value="az"
                    checked={checkedInput === 'az'} 
                    type="radio"
                    readOnly 
                    name="filter" 
                    id="az" />
                      <FontAwesomeIcon className=" pointer-events-none text-bg" icon={faArrowUpAZ} />
                  </label>
                </li>
                <li className="hover:bg-prime-100 hover:border-xl">
                  <label htmlFor="za">
                    <input 
                    className="hidden"
                    value="za"
                    checked={checkedInput === 'za'} 
                    type="radio"
                    readOnly 
                    name="filter" 
                    id="za" />
                    <FontAwesomeIcon className=" pointer-events-none text-bg" icon={faArrowUpZA} />
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Portfolio