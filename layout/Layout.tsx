import Head from "next/head";
import { useState } from "react";
import Header from "./Header";

const Layout = ({ children }) => {
	const [dark, setdark] = useState(false);
	return (
		<>
			<Head>
				<link
					rel='stylesheet'
					href={`https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/${"lux"}/bootstrap.min.css`}
				></link>
				<meta></meta>
				<script src='https://code.jquery.com/jquery-3.5.1.slim.min.js'></script>
				<script src='https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js'></script>
				<script src='https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js'></script>
				<script type='text/javascript' src='/static/bootstrap.js'></script>
				<title>Enskayte</title>
			</Head>
			<Header />
			<main role='main' className='container'>
				<div className='row'>{children}</div>
			</main>
		</>
	);
};
export default Layout;
