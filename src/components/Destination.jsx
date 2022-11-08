// meine Bilder

import React from "react";

function Destination (props) {
  return (
		<div className='destination'>
			<img
				className='destination-img'
				src={props.destination.imageUrl}
				alt={props.destination.title}
			/>
			<div className='destination--article'>
				<div className='destination-location'>
					<img
						className='destination-icon'
						src='./images/location_pin_005.jpg'
						alt='location icon'
					/>
					<h2 className='destination-country'>
						{props.destination.location}
					</h2>
					<a
						className='destination-mapLink'
						href={props.destination.googleMapsUrl}>
						View on Google Maps
					</a>
				</div>
				<h1 className='destination-title'>{props.destination.title}</h1>
				<h3 className='destination-dates'>
					{props.destination.startDate} - {props.destination.endDate}
				</h3>
				<p className='destination-description'>
					{props.destination.description}
				</p>
			</div>
		</div>
	);
}

export default Destination;
