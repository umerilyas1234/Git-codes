const bodyInterval3010navbar = setInterval(function () {
	if (document.querySelector('body') && !document.querySelector('.spz_3010_navbar')) {
		clearInterval(bodyInterval3010navbar);
		document.querySelector('body').classList.add("spz_3010_navbar")
		if(document.querySelector('.navbar-start>a[href="how_to_buy.html"]')){
			document.querySelector('.navbar-start>a[href="how_to_buy.html"]').insertAdjacentHTML('afterend', `
				<div class="navbar-item has-dropdown is-hoverable narrow-menu new_pricing">
					<a href="how_to_buy.html" class="nav-link navbar-link is-arrowless link">Pricing</a>
					<ul class="navbar-dropdown">
						<li class="navbar-item">
							<a class="nav-link" href="/how_to_buy.html">
								<img src="//res.cloudinary.com/spiralyze/image/upload/v1747232844/netwrix/3010/icon-request-pricing.svg" alt="Request Pricing">
								Request Pricing
							</a>
						</li>
						<li class="navbar-item">
							<a class="nav-link" href="/netwrix-pricing.html">
								<img src="//res.cloudinary.com/spiralyze/image/upload/v1747232843/netwrix/3010/icon-buy-now.svg" alt="Buy Now">
								Buy Now
							</a>
						</li>
					</ul>
				</div>
				`);
		}

		if(document.querySelector('.panel.navmenu-buy')){
			document.querySelector('.panel.navmenu-buy').insertAdjacentHTML('afterend', `
				<li class="panel navmenu-buy-2">
					<a href="javascript:void(0);" class="link-collapse level-1 " aria-controls="partners" aria-expanded="false" role="button">Pricing </a>
					<ul id="partners" class="menu-collapse">
						<li class="navbar-item">
							<a class="nav-link" href="/how_to_buy.html">
								<img src="//res.cloudinary.com/spiralyze/image/upload/v1747232844/netwrix/3010/icon-request-pricing.svg" alt="Request Pricing">
								Request Pricing
							</a>
						</li>
						<li class="navbar-item">
							<a class="nav-link" href="/netwrix-pricing.html">
								<img src="//res.cloudinary.com/spiralyze/image/upload/v1747232843/netwrix/3010/icon-buy-now.svg" alt="Buy Now">
								Buy Now
							</a>
						</li>
					</ul>
				</li>
				`);
		}

		if (window.location.href.includes('netwrix-pricing.html') || window.location.href.includes('how_to_buy.html')) {
			document.querySelector('.new_pricing').classList.add('nav-active');
		}

	}
}, 1000);
