import React from "react";
import Layout from "../../layout/Layout";

export const Errors = ({ refreshPage }) => {
	return (
		<Layout>
			<div className='col'>
				<div className='text-primary' style={{ marginTop: "150px" }}>
					<div className='m-auto '>
						<h5 className='d-flex justify-content-center'>
							Oops! Something Went wrong.
						</h5>
						<p className='d-flex justify-content-center'>
							{" "}
							Please, Check your internet connection
						</p>
						<div className='d-flex justify-content-center'>
							<button
								className='btn rounded m-3'
								style={{ borderColor: "	#00BFFF" }}
								onClick={refreshPage}
							>
								Try Again
							</button>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};
