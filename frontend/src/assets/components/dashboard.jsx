import { useNavigate } from "react-router-dom"
import { Navbar } from "./nav/navbar"
import Footer from "./footer/footer"
import { AboutUs } from "./about/aboutus"
import { WhyEventsy } from "./whyEventsy/whyEventsy"
import { Landing } from "./landing"
import { CgEnter } from "react-icons/cg"

export function Dashboard(){
    return <div>
         <Landing/>
         <Footer/>
    </div>
} 