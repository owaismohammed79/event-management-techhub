type EventData = {
  imgurl: string;
  title: string;
  description: string;
}

function AutoSlider(event: EventData) {
  return (
    <div className='slider-main'>
      <div className= "event-div">
        <div className = "event-img" style = {{
          backgroundImage: `url("${event.imgurl}")`
          }}> </div>
        <div className="event-details">
          <h1>{event.title}</h1>    
          <p>{event.description}</p>
        </div>
      </div>
    </div>
  )
}

export default AutoSlider