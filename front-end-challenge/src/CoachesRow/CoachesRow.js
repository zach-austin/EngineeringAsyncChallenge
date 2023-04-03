function CoachesRow({coach}) {
    return (
        <div style={{padding:"10px", display:"flex", borderTop:"solid black 1px"}}>
            <div style={{width:"30%", fontWeight:"bold"}}>{coach.name}</div>
            <div style={{width:"30%", fontWeight:"bold"}}>{coach.start}</div>
            <div style={{width:"30%", fontWeight:"bold"}}>{coach.industry}</div>
        </div>
    )
}

export default CoachesRow;