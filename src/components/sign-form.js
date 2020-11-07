import React, { useState } from 'react';

import faunadb, { query as q } from 'faunadb';

var client = new faunadb.Client({ secret: process.env.GATSBY_FAUNADB_CLIENT_KEY });

export default function SignForm({ setSigData }) {
	const [sigName, setSigName] = useState('');
	const [sigMessage, setSigMessage] = useState('');

	const handleSubmit = async (event) => {
		event.preventDefault();
		const placeSig = await createSignature(sigName, sigMessage);
		setSigData((prevState) => [...prevState, placeSig]);
	};

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		name === 'sigName' ? setSigName(value) : setSigMessage(value);
	};

	const triggerBuild = async () => {
		const response = await fetch(process.env.GATSBY_BUILD_HOOK, { method: 'POST', body: '{}' });
		return response;
	};

	const createSignature = async (sigName, sigMessage) => {
		try {
			const queryResponse = await client.query(
				q.Create(q.Collection('signatures'), {
					data: {
						name: sigName,
						message: sigMessage,
					},
				})
			);
			const signatureInfo = {
				name: queryResponse.data.name,
				message: queryResponse.data.message,
				_ts: queryResponse.ts,
				_id: queryResponse.id,
			};
			await triggerBuild();
			return signatureInfo;
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="field">
				<div className="control">
					<label className="label">
						Label
						<input
							className="input is-fullwidth"
							name="sigName"
							type="text"
							value={sigName}
							onChange={handleInputChange}
						/>
					</label>
				</div>
			</div>
			<div className="field">
				<label>
					Your Message:
					<textarea
						rows="5"
						name="sigMessage"
						value={sigMessage}
						onChange={handleInputChange}
						className="textarea"
						placeholder="Leave us a happy note"
					></textarea>
				</label>
			</div>
			<div className="buttons">
				<button className="button is-primary" type="submit">
					Sign the Guestbook
				</button>
			</div>
		</form>
	);
}
