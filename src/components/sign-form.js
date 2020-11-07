import React from 'react';

import faunadb, { query as q } from 'faunadb';

var client = new faunadb.Client({ secret: process.env.GATSBY_FAUNA_CLIENT_KEY });

export default class SignForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sigName: '',
			sigMessage: '',
		};
	}

	handleSubmit = async (event) => {
		event.preventDefault();
		const placeSig = await this.createSignature(this.state.sigName, this.state.sigMessage);
		this.addSignature(placeSig);
	};
	handleInputChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value,
		});
	};

	createSignature = async (sigName, sigMessage) => {
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
			return signatureInfo;
		} catch (err) {
			console.log(err);
		}
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div className="field">
					<div className="control">
						<label className="label">
							Label
							<input
								className="input is-fullwidth"
								name="sigName"
								type="text"
								value={this.state.sigName}
								onChange={this.handleInputChange}
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
							value={this.state.sigMessage}
							onChange={this.handleInputChange}
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
}
