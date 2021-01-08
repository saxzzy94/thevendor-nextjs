import React, { useEffect } from "react";
import Head from "next/head";
import { HomeCard } from "../components/localNews/Landing/HomeCard";
import { Errors } from "../components/utilites/Errors";
import { Loader } from "../components/utilites/Loader";

import { useDispatch, useSelector } from "react-redux";
import { getLocal, getForeign, getSport } from "../actions";
import Layout from "../layout/Layout";
import Banner from "../layout/Banner";

const Home = () => {
	const dispatch = useDispatch();
	const props = useSelector(state => state.news);

	useEffect(() => {
		dispatch(getLocal());
		dispatch(getForeign());
		dispatch(getSport());
	}, []);

	function refreshPage() {
		window.location.reload(false);
	}

	return (
		<Layout>
			<Head>
				<title>Enskayte: Nigerian News</title>
				<meta name='description' content='Get the latest news around Nigeria' />
			</Head>
			<div className='col'>
				{props.loading ? (
					<Loader />
				) : (
					<>
						<h3 className='card-header '>Featured</h3>

						<Banner
							b1={props.sport}
							b2={props.foreign}
							url1={"/sport"}
							url2={"/world"}
						/>

						<h3 className='card-header'>Latest News from Nigeria</h3>
						<section>
							{props.local.map(news => (
								<HomeCard key={news.getTime} news={news} />
							))}
						</section>
					</>
				)}
			</div>
		</Layout>
	);
};
export default Home;
