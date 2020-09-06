import React from 'react';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Col';

function ProjectPage(props) {

	return (
		<Container>
			<Row>
				<Col sm>
					<h1 className='edu-text'>Projects </h1>
					<div class="wrapper">
						<div class="card">
							<h3 class="card-title">Portfolio</h3>
							<p class="card-content">My Dynamic Resume.It is built with React JS.</p>

							<div className='btn-group mr-2 justify-content-center p-5'>
								<a href='https://github.com/Umesh11032000/Portfolio'>
									<button class="card-btn" >Code</button>
								</a>

								<a href='https://umesh-portfolio.herokuapp.com/'>
									<button class="card-btn" >View</button>
								</a>
							</div>

						</div>
						<div class="card">
							<h3 class="card-title">Photo URl</h3>
							<p class="card-content">You can add photo from the any photo url.it is  built with react js</p>
							<div className='btn-group mr-2 justify-content-center p-5'>
								<a href='https://github.com/Umesh11032000/Photo-URL'>
									<button class="card-btn" >Code</button>
								</a>

								<a href='https://photo-url.herokuapp.com/'>
									<button class="card-btn" >View</button>
								</a>
							</div>
						</div>
						<div class="card">
							<h3 class="card-title">Blogging System</h3>
							<p class="card-content"> user can write blog and publish.it is built with PHP.</p>
							<div className='btn-group mr-2 justify-content-center p-5'>
								<a href='https://github.com/Umesh11032000/Blogging-system'>
									<button class="card-btn" >Code</button>
								</a>

								<a href='https://github.com/Umesh11032000/Blogging-system'>
									<button class="card-btn" >View</button>
								</a>
							</div>
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	);

}

export default ProjectPage;