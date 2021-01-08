import React from "react";
export const HomeCard = ({ news }) => {
	return (
		<>
			<div className='card'>
				<a
					className='card-link'
					href={news.currentNewsLink}
					target='_blank'
					rel='noopener noreferrer'
				>
					<figure>
						<picture>
							<img
								src={news.currentNewsImg || news.logo}
								className='card-img-top'
								alt=''
							/>
						</picture>
					</figure>
					<div className='card-body text-primary' style={{ fontWeight: "600" }}>
						<div style={{ display: "flex", justifyContent: "space-between" }}>
							<div style={{ display: "flex", justifyContent: "space-between" }}>
								<img
									src={news.logo}
									className='rounded mr-2'
									alt='...'
									width='50px'
									height='50px'
									style={{ objectFit: "cover", borderRadius: "50%" }}
								/>

								<h4 className='card-title m-auto'>{news.newsPaper}</h4>
							</div>
							<p className='card-text ml-auto'>
								<time>
									<span className='card-text'>{news.currentNewsDate}</span>
								</time>
							</p>
						</div>
						<strong className='text-primary mt-5'>
							<h4 className='card-text m-auto'>{news.currentNewsLocation}</h4>
							<h5>{news.currentNewsTime}</h5>
						</strong>
						<h2 className='card-title'>{news.currentNewsTitle}</h2>
						<p className='lead'>{news.currentNewsDesc}</p>
					</div>
				</a>
			</div>
		</>
	);
};
