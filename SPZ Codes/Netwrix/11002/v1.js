const bodyInterval10001 = setInterval(function () {
	if (document.querySelector('body') && !document.querySelector('.spz_11002')) {
		clearInterval(bodyInterval10001);
		document.querySelector('body').classList.add("spz_11002")

		document.querySelector('.breadcrumbs').insertAdjacentHTML('afterend', `
			<div class="new_hero">
				<div class="auto_container">
					<div class="new_heroInner">
						<div class="new_heroTop">
							<div class="hero_topLeft">
								<h1>CISSP Exam Study Guide</h1>
								<p>This CISSP study guide will help you accurately assess your knowledge of the eight key domains of the exam.</p>
							</div>
							<div class="hero_topRight">
								<figure><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/11002/main-img.webp" alt="Hero"></figure>
							</div>
						</div>
						<div class="hero_bottom">
							<h3>Covering the following topics</h3>
							<div class="topics_list">
								<ul>
									<li>
										<div class="topic_data">
											<span>Security and Risk Management</span>
										</div>
									</li>
									<li>
										<div class="topic_data">
											<span>Asset Security</span>
										</div>
									</li>
									<li>
										<div class="topic_data">
											<span>Communications and Network Security</span>
										</div>
									</li>
									<li>
										<div class="topic_data">
											<span>Security Architecture and Engineering</span>
										</div>
									</li>
									<li>
										<div class="topic_data">
											<span>Identity and Access Management (IAM)</span>
										</div>
									</li>
									<li>
										<div class="topic_data">
											<span>Security Assessment and Testing</span>
										</div>
									</li>
									<li>
										<div class="topic_data">
											<span>Security Operations</span>
										</div>
									</li>
									<li>
										<div class="topic_data">
											<span>Software Development Security</span>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="guide_detail">
				<div class="auto_container">
					<div class="guide_detailInner">

					</div>
				</div>
			</div>
			`);
		document.querySelector('.hero_topLeft p').insertAdjacentElement('afterend', document.querySelector('.content-form .form-cont'));
		document.querySelector('.hero_topLeft form').insertAdjacentHTML('afterbegin', `<div class="spz_wrapper"></div>`);
		document.querySelector('.spz_wrapper').insertAdjacentElement('afterbegin', document.querySelector('.hero_topLeft form > div:nth-child(3)'));
		document.querySelector('.spz_wrapper').insertAdjacentElement('afterbegin', document.querySelector('.hero_topLeft form > div:nth-child(2)'));
		document.querySelector('.spz_wrapper > div:first-child input[type=email]').setAttribute('placeholder', 'Work Email');
		document.querySelector('.spz_wrapper > div:nth-child(2) input').classList.add('spz_11002_v1yteyttyytttytehetyehtyytehe23e123214');
		document.querySelectorAll('.security-info').forEach(el => {
			el.innerHTML = el.innerHTML.replace(/Please see our/g, '');
		});
	}
}, 10);
