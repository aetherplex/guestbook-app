import React, { useState } from 'react';
import { useStaticQuery } from 'gatsby';
import Signatures from './signatures';
import SignForm from './sign-form';

const Midsection = () => {
	const data = useStaticQuery(
		graphql`
			query GetSignatures {
				allSignatures {
					nodes {
						name
						message
						_ts
						_id
					}
				}
			}
		`
	);
	const [sigData, setSigData] = useState(data.allSignatures.nodes);
	return (
		<section className="section">
			<div className="container container--small">
				<section className="section is-small">
					<h2 className="title is-4">Sign here</h2>
					<SignForm setSigData={setSigData}></SignForm>
				</section>

				<section className="section">
					<h2 className="title is-5">View Signatures</h2>
					<Signatures sigData={sigData}></Signatures>
				</section>
			</div>
		</section>
	);
};

export default Midsection;
