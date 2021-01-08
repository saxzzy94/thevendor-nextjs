import React, { useEffect } from "react";

import { getForeign, getSport } from "../actions";
import Head from "next/head";
import { HomeCard } from "../components/localNews/Landing/HomeCard";
import { Errors } from "../components/utilites/Errors";
import { Loader } from "../components/utilites/Loader";

import { useDispatch, useSelector } from "react-redux";

import Layout from "../layout/Layout";
import Banner from "../layout/Banner";

const Foreign = () => {
	const dispatch = useDispatch();
	const props = useSelector(state => state.news);

	useEffect(() => {
		dispatch(getForeign());
		dispatch(getSport());
	}, []);

	function refreshPage() {
		window.location.reload(false);
	}
	// if (props.error) {
	// 	return <Errors refreshPage={refreshPage} />;
	// }

	return (
		<Layout>
			<Head>
				<title>Enskayte: World News</title>
				<meta
					name='description'
					content='Get the latest news around the world'
				/>
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

						<h3 className='card-header'>News News Around the world</h3>
						<section>
							{" "}
							{props.foreign.map(news => (
								<HomeCard key={news.getTime} news={news} />
							))}
						</section>
					</>
				)}
			</div>
		</Layout>
	);
};
export default Foreign;
