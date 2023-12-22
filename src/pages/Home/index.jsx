import Button from "../../components/Button";
import './style.css'
import { Link } from "react-router-dom";
import '../.././App.css'

const Home = () => {
    return (
        <main>

            {/* Titulo */}
            <hr />
            <div style={{fontFamily:'pixel'}} className="Titulo" >
                <h1 className="O">O</h1>
                <h1>Jogo Do Pato Maloqueiro</h1>
                <h1 className="X">X</h1>
            </div>
            <hr/>

            <div className="Pato">
                <img src="src\assets\Images\pato maloqueiro.png" alt="" />
            </div>

            {/* Button */}
            <div className="button" >
                <div className="Boxbutton">
                    <img src="src\assets\Images\Seta.png" alt="" />
                    <Link to="/um-jogador" ><Button texto="1 Jogador"/></Link>
                </div>
                <div className="Boxbutton">
                    <img src="src\assets\Images\Seta.png" alt="" />
                    <Link to="/dois-jogadores"><Button texto= "2 Jogador"  /></Link>
                </div>
            </div>
        </main>
    )
}

export default Home;