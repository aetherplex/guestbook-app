import React from 'react';
import Signature from './signature';

const Signatures = (props) => {
	const SignatureMarkup = () => {
		return props.sigData
			.map((signature, index) => {
				return <Signature key={index} signature={signature}></Signature>;
			})
			.reverse();
	};

	return <SignatureMarkup></SignatureMarkup>;
};

export default Signatures;
