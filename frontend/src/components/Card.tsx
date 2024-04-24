


type CardData = {
  imgurl: string;
  title: string;
  venue: string;
  date: string;
  participants?: string[]; 
}

function Card(card: CardData){
  const participants = card.participants ? card.participants : []
    return(
      <div className="cards-main">
        <div className="main-card">
          <div className="card-img"><img src={card.imgurl} alt="Event image" /></div>
          <div className="event-name">{card.title}</div>
          <div className="venue-date">
            <div>{card.venue}</div>
            <div>{card.date}</div>
          </div>
          <div className="participants-button">
            <div className="participants">
              {participants.map((participant,index) => {
                return <div key={index} className="participant"><img src={participant} alt="Participant image" /></div>
              })}
            </div>
            <div className="join-button">Join</div> 
          </div>
        </div>
    </div>
  )
}


export default Card