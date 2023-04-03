import './Content.css';
import CoachesRow from '../CoachesRow/CoachesRow';
import coachingImg from '../media/coaching.png';

const coaches = [
    {
        name: "Jessica D.",
        start: "11/6/22",
        industry: "Professional Services"
    },
    {
        name: "David F.",
        start: "8/5/21",
        industry: "Sports/Fitness"
    },
    {
        name: "Keir Y.",
        start: "4/12/22",
        industry: "E-Sports"
    }
]

function NewServicesContent() {
    return (
        <div className="Content">
            <div><img src={coachingImg} alt="Virtual coaching."></img></div>
            <div>
                <div style={{fontSize:"3vw", padding: "3vw", color:"rgb(1,1,255)", fontWeight:"bold"}}>
                    Current Coaches
                </div>
                <div style={{width:"90%", marginLeft:"auto", marginRight:"auto"}}>
                    <div style={{padding:"10px", display:"flex"}}>
                        <div style={{width:"30%", fontWeight:"bold"}}>Coach Name</div>
                        <div style={{width:"30%", fontWeight:"bold"}}>Available Starting</div>
                        <div style={{width:"30%", fontWeight:"bold"}}>Industry</div>
                    </div>
                    {coaches.map((coach, i) => {
                        return <CoachesRow key={i} coach={coach}/>
                    })}
                </div>
            </div>
        </div>
    )
}

export default NewServicesContent;