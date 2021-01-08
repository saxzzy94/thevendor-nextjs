import React, { useEffect } from "react";

import { getSport, getForeign } from "../actions";
import Head from "next/head";
import { HomeCard } from "../components/localNews/Landing/HomeCard";
import { Errors } from "../components/utilites/Errors";
import { Loader } from "../components/utilites/Loader";

import { useDispatch, useSelector } from "react-redux";

import Layout from "../layout/Layout";
import Banner from "../layout/Banner";

const Sport = () => {
	const dispatch = useDispatch();
	const props = useSelector(state => state.news);

	useEffect(() => {
		dispatch(getSport());
		dispatch(getForeign());
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
				<title>Enskayte: Sport News</title>
				<meta
					name='description'
					content='Stay updated with the latest happenings in sports around the world'
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

						<h3 className='card-header'>Latest Sport News</h3>
						<section>
							{" "}
							{props.sport.map(news => (
								<HomeCard key={news.getTime} news={news} />
							))}
						</section>
					</>
				)}
			</div>
		</Layout>
	);
};
export default Sport;
