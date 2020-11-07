import React from 'react';

const Signature = ({ signature }) => {
	console.log(signature);
	const dateObj = new Date(signature._ts / 1000);
	let dateString = `${dateObj.toLocaleString('default', {
		weekday: 'long',
	})}, ${dateObj.toLocaleString('default', {
		month: 'long',
	})} ${dateObj.getDate()} at ${dateObj.toLocaleTimeString('default', {
		hour: '2-digit',
		minute: '2-digit',
		hour12: false,
	})}`;

	return (
		<article className="signature box">
			<h3 className="signature__headline">
				{signature.name} - {dateString}
			</h3>
			<p className="signature__message">{signature.message}</p>
		</article>
	);
};

export default Signature;
