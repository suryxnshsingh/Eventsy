export function Signup(){
    return <div>
        <div style={{display : "flex", justifyContent : "center", flexDirection : 'column',
            paddingInline : 400, paddingBlock : 100, background : "khaki"
        }}>
            <a style={{display : "flex", justifyContent : "center", fontSize : 50, fontWeight : 50 ,
                fontFamily : "sans-serif"
                }}>CREATE NEW ACCOUNT</a>

            <p><h2>Username</h2></p>
            <input placeholder="jeffery" style={{ fontSize : 20}}></input>
            <p><h2>Email</h2></p>
            <input placeholder="jeffbezos@amzon.com" style={{ fontSize : 20}}></input>

            <p><h2>Password</h2></p>
            <input placeholder="password" style={{ fontSize : 20}}></input>
            <br></br>
            <div style={{ justifyContent : "center", display : "flex", margin : 20,}}>
                <button style={{ paddingInline : 15, paddingBlock : 10, color : "khaki", background : 'green'}}>LogIn</button>
            </div>
        </div>
    </div>
}