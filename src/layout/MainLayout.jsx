import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router";


export default function MainLayout() {
  return (
    <>
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}
