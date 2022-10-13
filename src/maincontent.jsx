export default function MainContent(props) {
  return (
    <div className="main-content">
      <img className="location-picture" src={props.img}/>
      <div className="card-details">
        <div className="location-details">
          <i className="fa-sharp fa-solid fa-location-dot"></i>
          <div className="loc">{props.location}</div>
          <a className="map-url" href={props.mapUrl}>View on Google Maps</a>
        </div>
        <div className="title">{props.title}</div>
        <div className="date">{props.startDate} - {props.endDate}</div>
        <div className="description">{props.description}</div>
      </div>
    </div>
  )
}