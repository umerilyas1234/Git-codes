// main css
var link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href =
  "//res.cloudinary.com/spiralyze/raw/upload/JupiterOne/10001/src/style.css";
if (
  !document.querySelector(
    'link[href="//res.cloudinary.com/spiralyze/raw/upload/JupiterOne/10001/src/style.css"]'
  )
) {
  document.getElementsByTagName("head")[0].appendChild(link);
}

function loadTestCode10001() {
  if (!document.querySelector("body").classList.contains("spz_10001")) {
    document.querySelector("body").classList.add("spz_10001");
    console.log("111111");
    var sidebarHtml = `<div class="sidebar_newsData">
                        <strong>SUBSCRIBE TO OUR NEWSLETTER</strong>
                        <p>Stay up-to-date on emerging threats and security news</p>
                        <ul>
                          <li>
                            <p>Day-zero vulnerabilities & solutions</p>
                          </li>
                          <li>
                            <p>Best practices for asset management</p>
                          </li>
                          <li><p>Streamlining compliance and audit</p></li>
                        </ul>
                      </div>
                    `;

    var sidebarInterval = setInterval(() => {
      if (document.querySelectorAll(".sidebar-news-cta").length > 0) {
        clearInterval(sidebarInterval);

        console.log("22222");

        var sidebarForm = document.querySelector(".sidebar-news-cta");
        sidebarForm.insertAdjacentHTML("afterBegin", sidebarHtml);
        console.log("3333");
        var placeholder = document.querySelector(
          ".sidebar-news-form-block form .sidebar-news-button"
        );
        placeholder.value = "Subscribe";
        placeholder.placeholder = "Subscribe";
        console.log("4444");
        var email = document.querySelector("#Email-Address");

        if (email) {
          email.setAttribute("required", "true");
        }
      }
    }, 100);
  }
}

var bodyInterval = setInterval(() => {
  if (document.querySelectorAll("body").length > 0) {
    clearInterval(bodyInterval);
    console.log("Interval Working");
    loadTestCode10001();
  }
}, 100);
