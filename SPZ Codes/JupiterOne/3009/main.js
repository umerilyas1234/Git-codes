function loadTestCode() {
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href =
    "//res.cloudinary.com/spiralyze/raw/upload/JupiterOne/3009/code/style.css";

  if (
    !document.querySelector(
      'link[href="//res.cloudinary.com/spiralyze/raw/upload/JupiterOne/3009/code/style.css"]'
    )
  ) {
    document.getElementsByTagName("head")[0].appendChild(link);
  }

  if (!document.querySelector("body").classList.contains("3009_spz")) {
    document.querySelector("body").classList.add("3009_spz");

    var featureSection = document.querySelector(".section-feature");
    var solutionsSection = document.createElement("section");
    solutionsSection.classList.add("section-solutions");
    solutionsSection.innerHTML =
      "<div class='container-large w-container'><div class='solution-inner'><div class='solution-heading'><h2>Find solutions for your industry</h2></div><div class='solutions-list'><ul><li><div class='solutions-data'><figure><img src='https://res.cloudinary.com/spiralyze/image/upload/v1704373138/jupiterone/3009/frame_1171275290.webp' alt='Fintech'><h3>Fintech</h3><p>Monitor and secure assets with sensitive customer data. Respond to incidents faster. Maintain PCI compliance.</p></figure></div></li><li><div class='solutions-data'><figure><img src='https://res.cloudinary.com/spiralyze/image/upload/v1704373157/jupiterone/3009/frame_1171275291.webp' alt='SaaS'><h3>SaaS</h3><p>Get complete visibility into complex multi-cloud environments. Infrastructure, code repos, identities, and more.</p></figure></div></li><li><div class='solutions-data'><figure><img src='https://res.cloudinary.com/spiralyze/image/upload/v1704373138/jupiterone/3009/frame_1171275292.webp' alt='Healthcare'><h3>Healthcare</h3><p>Automate evidence collection and continuous monitoring for HIPAA compliance. Manage PII security across assets.</p></figure></div></li></ul></div></div></div>";
    featureSection.parentNode.insertBefore(
      solutionsSection,
      featureSection.nextSibling
    );
  }
}

var bodyInterval = setInterval(() => {
  if (document.querySelectorAll("body").length > 0) {
    clearInterval(bodyInterval);

    loadTestCode();
  }
}, 100);
