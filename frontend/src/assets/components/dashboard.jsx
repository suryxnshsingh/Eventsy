import { useNavigate } from "react-router-dom"
import { Navbar } from "./nav/navbar"
import Footer from "./footer/footer"
import { AboutUs } from "./about/aboutus"
import { WhyEventsy } from "./whyEventsy/whyEvensy"

export function Dashboard(){
    return <div>
         
         <h1>Welcome to Eventsy</h1>
         <Footer/>
    </div>
} 