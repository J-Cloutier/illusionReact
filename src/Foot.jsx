import React from "react";

export default function Foot() {
	return (
		<div className="d-flex bg-dark flex-column h-100">
			<footer className="w-100 py-4 flex-shrink-0">
				<div className="container py-4">
					<div className="row gy-4 gx-5">
						<div className="col-lg-4 col-md-6">
							<h5 className="h1 text-white">ILLUSION.</h5>
							<p className="small text-muted">Create your new reality with Illusion.</p>
							<p className="small text-muted mb-0">
								&copy; Copyrights. All rights reserved.{" "}
								<a className="text-primary" href="https://jordancdev.netlify.app/">
									JordanTheDev
								</a>
							</p>
						</div>
						<div className="col-lg-2 col-md-6">
							<h5 className="text-white mb-3">Quick links</h5>
							<ul className="list-unstyled text-muted">
								<li>
									<a href="#whatWeDo">What We Do</a>
								</li>
								<li>
									<a href="#theFormula">The Formula</a>
								</li>
								<li>
									<a href="#bragSheet">Brag Sheet</a>
								</li>
								<li>
									<a href="#Services">Services</a>
								</li>
							</ul>
						</div>
						<div className="col-lg-2 col-md-6"></div>
						<div className="col-lg-4 col-md-6">
							<h5 className="text-white mb-3">Newsletter</h5>
							<p className="small text-muted">Join our newsletter to see some of the new exciting things we have coming up</p>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
