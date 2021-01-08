import Link from "next/link";
import React from "react";

const Banner = props => {
	const sport = props.b1[Math.floor(Math.random() * props.b1.length - 1)];
	const foreign = props.b2[Math.floor(Math.random() * props.b2.length - 1)];

	function truncate(str, n) {
		return str?.length > n ? str.substr(0, n - 1) + "..." : str;
	}

	return (
		<header className='mb-5'>
			<div
				id='carouselExampleCaptions'
				className='carousel slide'
				data-ride='carousel'
			>
				<ol className='carousel-indicators'>
					<li
						data-target='#carouselExampleCaptions'
						data-slide-to='0'
						className='active'
					></li>
					<li data-target='#carouselExampleCaptions' data-slide-to='1'></li>
					<li data-target='#carouselExampleCaptions' data-slide-to='2'></li>
				</ol>
				<div className='carousel-inner'>
					<div className='carousel-item active'>
						<img
							src={sport?.currentNewsImg}
							className='d-block w-100'
							alt='...'
						/>

						<div className='carousel-caption  d-md-block'>
							<h5 className='banner_title  p-2'>{sport?.currentNewsTitle}</h5>
							<p>{sport?.currentNewsDesc}</p>
							<Link href='/sport'>
								<a className='btn btn-info btn-sm'>View More Sports News</a>
							</Link>
						</div>
					</div>

					<div className='carousel-item'>
						<img
							src={foreign?.currentNewsImg}
							className='d-block w-100'
							alt={foreign?.currentNewsTitle}
						/>
						<div className='carousel-caption  d-md-block text-secondary'>
							<h5 className='banner_title p-2'>{foreign?.currentNewsTitle}</h5>
							<p>{foreign?.currentNewsDesc}</p>
							<Link href='/world'>
								<a className='btn btn-info btn-sm '>View More World News</a>
							</Link>
						</div>
					</div>
				</div>
				<a
					className='carousel-control-prev'
					href='#carouselExampleCaptions'
					role='button'
					data-slide='prev'
				>
					<span
						className='carousel-control-prev-icon'
						aria-hidden='true'
					></span>
					<span className='sr-only'>Previous</span>
				</a>
				<a
					className='carousel-control-next'
					href='#carouselExampleCaptions'
					role='button'
					data-slide='next'
				>
					<span
						className='carousel-control-next-icon'
						aria-hidden='true'
					></span>
					<span className='sr-only'>Next</span>
				</a>
			</div>
		</header>
	);
};

export default Banner;
