import React from 'react';

import './style.scss';

const Header = ({ siteTitle }) => (
	<section className="hero gradientBg ">
		<div className="hero-body">
			<div className="container container--small center">
				<div className="content">
					<h1 className="is-uppercase is-size-1 has-text-white">Sign our Virtual Guestbook</h1>
					<p className="subtitle has-text-white is-size-3">
						If you like all the things that we do, be sure to sign our virtual guestbook
					</p>
				</div>
			</div>
		</div>
	</section>
);

export default Header;
