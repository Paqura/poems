import React from 'react';

const renderLinks = (links: string[]) => (
	links.map(link => (
		<li>
			<a href="/">{link}</a>
		</li>
	))
);

const Header = () => (
	<header>
		<nav>
			<ul>
				{renderLinks(['Home', 'Poems', 'About'])}
			</ul>
		</nav>
	</header>
);


export default Header;