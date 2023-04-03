function Footer() {
    return (
        <div style={{display:"flex", justifyContent:"center", backgroundColor:"white", minHeight:"10vh", alignItems:"center", fontSize:"1.5vw"}}>
            <div style={{width:"20%"}}>
                Email Address<br/>
                hello@reallygreatsite.com
            </div>
            <div style={{width:"20%"}}>
                Mailing Address<br/>
                123 Anywhere St
            </div>
            <div style={{width:"20%"}}>
                Phone<br/>
                (123) 456-7890
            </div>
        </div>
    )
}
export default Footer;