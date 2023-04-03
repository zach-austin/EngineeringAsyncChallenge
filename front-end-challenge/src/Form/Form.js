import './Form.css'
import mailingImg from '../media/mailinglist.png';

const formSubmit = () => {
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const industry = document.getElementById('industries').value;
    console.log(`fullname: ${fullname}`, `, email: ${email}`, `, industry: ${industry}`);

    const allValid = [fullname, email].reduce((isValid, value) => {
        return (value && isValid) === true;
    }, true);

    if(!allValid) {
        alert('Please fill out all values');
    }
}

function Form() {
    return (
        <div className="Form" style={{backgroundImage:`url(${mailingImg})`, backgroundRepeat:"no-repeat", backgroundPositon:"center", backgroundSize:"cover", width:"100%"}}>
            <div style={{display:"flex", flexWrap:"wrap", height:"100%", backgroundColor:"rgba(1,1,255,0.5)", justifyContent:"center",alignItems:"center"}}>
                <p style={{width:"100%", color:"white", fontSize:"5vw"}}>Join our mailing list</p>
                <div style={{display:"flex",backgroundColor:"rgba(146, 148, 146,0.9)", width:"75vw", height:"60%", marginBottom:"3vw"}}>
                    <form method="get" style={{width:"50%", textAlign:"left", padding:"2vw"}}>
                        <label htmlFor="fullname">Full name</label><br/>
                        <input type="text" id="fullname" name="fullname"/><br/>
                        <label htmlFor="email">Email</label><br/>
                        <input type="text" id="email" name="email"/><br/>
                        <label htmlFor="industry">Industry</label><br/>
                        <select name="industries" id="industries">
                            <option value="profServ">Professional Services</option>
                            <option value="sFit">Sports/Fitness</option>
                            <option value="eSport">E-Sports</option>
                        </select>
                    </form>
                    <div style={{width:"50%", textAlign:"center", fontSize:"3vw"}}>
                        <div style={{padding:"2vw"}}>Join our mailing to recieve notifications about program availability and special discounts</div>
                        <button style={{marginBottom:"2vw", color:"white", backgroundColor:"blue"}} onClick={formSubmit}>Sign Up</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Form;