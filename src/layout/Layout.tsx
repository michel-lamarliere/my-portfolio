import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const Layout: React.FC = (props) => {
	return (
		<>
			<Header />
			{props.children}
			<Footer />
		</>
	);
};

export default Layout;
