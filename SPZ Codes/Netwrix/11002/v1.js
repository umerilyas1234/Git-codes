const bodyInterval11002 = setInterval(function () {
	if (document.querySelector('body') && !document.querySelector('.spz_11002')) {
		clearInterval(bodyInterval11002);
		document.querySelector('body').classList.add("spz_11002")

		setTimeout(() => {
			document.querySelector('main .wrapper').insertAdjacentHTML('afterbegin', `
				<div class="new_hero">
					<div class="auto_container">
						<div class="new_heroInner">
							<div class="new_heroTop">
								<div class="hero_topLeft">
									<h1>CISSP Exam Study Guide</h1>
									<p>This CISSP study guide will help you accurately assess your knowledge of the eight key domains of the exam.</p>
								</div>
								<div class="hero_topRight">
									<figure><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/11002/main-img_2.webp" alt="Hero"></figure>
								</div>
							</div>
							<div class="hero_bottom">
								<h3>Covering the Following Topics</h3>
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
							<p>Certified Information Systems Security Professional (CISSP) is one of the most prestigious and globally recognized certifications for information security professionals. It’s no wonder that passing the exam and becoming CISSP certified is no easy task. To help you prepare for the CISSP exam with less effort, we created this CISSP study guide (.pdf). Even better, it’s free to download, so there’s no reason not to get started on the road to certification today.</p>
							<p>To help you get a feel for the real exam, each module includes several hands-on exercises, with detailed explanations of the right answers.</p>
							<p>Maybe you’ve already taken a class, read the official CISSP Common Body of Knowledge (CBK) or gone through a thousand practice test questions, and now you’re wondering if you are ready. This 2021 CISSP study guide pdf will help you accurately assess your knowledge of the eight domains. Alternatively, if you are just starting your CISSP certification journey, reading the guide will help you determine which domains you need to focus on and how much additional time you need for learning.</p>
							<p>Though the 2021 CISSP free eBook is meant to supplement other study materials, it is a great preparation tool that enables you to review a lot of material in a short amount of time and maximize your chances of passing the CISSP exam on the first try.</p>
						</div>
					</div>
				</div>
				`);
			document.querySelector('.hero_topLeft p').insertAdjacentElement('afterend', document.querySelector('.content-form .form-cont'));
			document.querySelector('.hero_topLeft form').insertAdjacentHTML('afterbegin', `<div class="spz_wrapper"></div>`);
			document.querySelector('.spz_wrapper').insertAdjacentElement('afterbegin', document.querySelector('.hero_topLeft form .btn_filled_red').closest('div'));
			document.querySelector('.spz_wrapper').insertAdjacentElement('afterbegin', document.querySelector('.hero_topLeft form input[type="email"]').closest('div'));
			document.querySelector('.spz_wrapper > div:first-child input[type=email]').setAttribute('placeholder', 'Work Email');
			document.querySelector('.spz_wrapper .btn_filled_red').classList.add('spz_11002_v1');

			document.querySelectorAll('.security-info').forEach(el => {
				el.innerHTML = el.innerHTML.replace(/Please see our/g, '');
			});

			//hidden field
			if (document.querySelector('#SPZ_Test').value == "") {
				document.querySelector('#SPZ_Test').value = "variant_11002"
			} else {
				document.querySelector('#SPZ_Test').value = document.querySelector('#SPZ_Test').value + ",variant_11002";
			}
		}, 300);

		function updatedText() {
			const errMsg = document.querySelector('#errorBodyForm');
			if (errMsg) {
				let html = errMsg.innerHTML;

				if (html.includes('Business Email')) {
					errMsg.closest('.spz_wrapper').classList.add('er_1');
					errMsg.closest('.spz_wrapper').classList.remove('er_2');
				} else if (html.includes('business e-mail')) {
					errMsg.closest('.spz_wrapper').classList.add('er_2');
					errMsg.closest('.spz_wrapper').classList.remove('er_1');
				}
			}
		}

		const targetNode = document.querySelector('#errorBodyForm');
		if (targetNode) {
			let lastText = targetNode.innerText;
			const observer = new MutationObserver(() => {
				const currentText = targetNode.innerText;
				if (currentText !== lastText) {
					lastText = currentText;
					observer.disconnect();
					updatedText();
					observer.observe(targetNode, {
						characterData: true,
						childList: true,
						subtree: true
					});
				}
			});

			observer.observe(targetNode, {
				characterData: true,
				childList: true,
				subtree: true
			});
		}
	}
}, 100);
