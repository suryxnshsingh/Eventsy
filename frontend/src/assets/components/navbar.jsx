import { useNavigate } from 'react-router-dom'

export function Navbar(){
    const navigate = useNavigate()

    return <div style={{
        display : "flex",
        justifyContent : "space-between",
        background : "green",
        color : "white",
        padding : 20
        }}>
        <div>EVENTSY</div>

        <div style={{display : "flex", justifyContent : "center"}}>
            <div><button onClick={()=>{
                navigate('/signup')
            }}>SIGNUP</button></div>
            
            <div><button onClick={()=>{
                navigate('/signin')
            }}>SIGNIN</button></div>
        </div>
    </div>
}
