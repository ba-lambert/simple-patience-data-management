import React, { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

interface ServiceItem {
	title: string;
	description: string;
	image: string;
}

function Services() {
	const services: ServiceItem[] = [
		{
			title: "Car repairement",
			description: "Description for Service 1",
			image:
				"https://www.carstore.com/-/media/carstore/locations/car-store-gloucester-1200x675px.ashx",
		},
		{
			title: "Repaire cars",
			description: "Description for Service 2",
			image:
				"data:image/jpeg;base64,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",
		},
		{
			title: "Car repairement",
			description: "Description for Service 1",
			image:
				"https://www.carstore.com/-/media/carstore/locations/car-store-gloucester-1200x675px.ashx",
		},
		{
			title: "Car repairement",
			description: "Description for Service 1",
			image:
				"https://www.carstore.com/-/media/carstore/locations/car-store-gloucester-1200x675px.ashx",
		},
		{
			title: "Car repairement",
			description: "Description for Service 1",
			image:
				"https://www.carstore.com/-/media/carstore/locations/car-store-gloucester-1200x675px.ashx",
		},
		{
			title: "Car repairement",
			description: "Description for Service 1",
			image:
				"https://www.carstore.com/-/media/carstore/locations/car-store-gloucester-1200x675px.ashx",
		},
	];

	const [hovered, setHovered] = useState<number | null>(null);

	const handleMouseEnter = (index: number) => {
		setHovered(index);
	};

	const handleMouseLeave = () => {
		setHovered(null);
	};

	return (
		<>
			<Link to={"/form"}>
				<Button title='Create Appointment' />
			</Link>
			<div className='flex justify-center flex-col space-y-5 items-center'>
				<h3>List of Hospitals we Work together</h3>
				<div className='grid grid-flow-row grid-cols-3 relative gap-x-10 gap-y-5'>
					{services.map((service, index) => (
						<div
							key={index}
							className='relative'
							onMouseEnter={() => handleMouseEnter(index)}
							onMouseLeave={handleMouseLeave}>
							<img
								src={service.image}
								alt={`Service ${index + 1}`}
								className='w-80 h-48 object-cover'
							/>
							<h2 className='text-xl mb-2 absolute top-0 text-white z-30'>
								{service.title}
							</h2>
							<div
								className={`absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 p-4 text-white ${
									hovered === index ? "opacity-100" : "opacity-0"
								} transition-opacity`}>
								<p className='text-sm'>{service.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export default Services;
