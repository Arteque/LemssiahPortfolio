import { Outlet } from "react-router-dom"
import MainHeader from "../Components/MainHeader"
import MainFooter from "../Components/MainFooter"
function Root() {
  return (
    <>
        <MainHeader />
        <Outlet />
        <MainFooter />
    </>
  )
}

export default Root