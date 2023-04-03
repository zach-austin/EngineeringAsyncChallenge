import './Header.css';
import BLLogo from "../BLLogo/BLLogo";
import hero from '../media/hero.png';

function Header() {
    return (
        <header className="Header" style={{backgroundImage:`url(${hero})`}}>
            <div className="content" style={{height: '50vh', padding: '10vh'}}>
                <div style={{height:"100%", display:"flex",flexDirection:"column", color:"white", textAlign:"left", justifyContent:"space-around"}}>
                    <BLLogo style={{height: '10vh', width: '10vh'}}/>
                    <p style={{fontSize:"6vw", height:"auto"}}>BetterLesson Professional Coaching</p>
                    <p>PROFESSIONAL COACH SEMINARS & MENTORSHIP</p>
                    <button style={{backgroundColor:"blue", color:"white", width:"10%"}}>Register Now</button>
                </div>
            </div>
        </header>
    )
}

export default Header;