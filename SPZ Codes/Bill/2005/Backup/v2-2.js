function loadTestCode2005() {
  if (!document.querySelector('body').classList.contains('spz_t2005')) {
    document.querySelector('body').classList.add('spz_t2005');
    localStorage.setItem('bdcAbTest9', '2005-v2');
    document.querySelector('#logos-ar + div + div').insertAdjacentHTML('afterend', `
      <div class="integration">
        <div class="container-large vertical-padding-medium">
          <div class="integrations_inner">
            <div class="integration_head">
              <h2>Integrations to easily connect with the tools you use every day</h2>
              <p>Reduce manual entry, speed up reconciliation, and simplify your workflow.</p>
            </div>
            <div class="video_section">
              <video
                class="desktop" 
                id="responsiveVideo" 
                src="https://res.cloudinary.com/spiralyze/video/upload/v1733912296/bill/2005/src/desktop-integrations_1.mp4"
                autoplay 
                loop 
                muted 
                playsinline>
              </video>
              <video
                class="mobile"
                src="https://res.cloudinary.com/spiralyze/video/upload/v1733915276/bill/2005/src/tablet_mobile-integrations.mp4" 
                id="responsiveVideo" 
                autoplay 
                loop 
                muted 
                playsinline>
              </video>
            </div>
            <div class="btn_list">
              <ul>
                <li>
                  <div class="btn_outer">
                    <a href="/signup" class="custom_btn">Get Started</a>
                  </div>
                </li>
                <li>
                  <div class="btn_outer">
                    <a href="/demo-request" class="custom_btn outline">Get a Demo</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      `);
      /*
    // Define the video URLs for different screen sizes
    const desktopVideo = "https://res.cloudinary.com/spiralyze/video/upload/v1733912296/bill/2005/src/desktop-integrations_1.mp4";
    const mobileVideo = "https://res.cloudinary.com/spiralyze/video/upload/v1733915276/bill/2005/src/tablet_mobile-integrations.mp4";

    // Function to set the video source based on screen width
    function setVideoSource() {
        const video = document.getElementById("responsiveVideo");
        if (window.innerWidth < 1024) {
            video.src = mobileVideo;
        } else {
            video.src = desktopVideo;
        }
    }

    // Run the function on page load
    setVideoSource();

    // Optionally, update the video source on window resize
    //window.addEventListener("resize", setVideoSource);
    */
  }
}

// Check condition to load test code
var checkCondition = setInterval(function () {
  if (document.querySelectorAll('body').length > 0) {
    clearInterval(checkCondition);
    loadTestCode2005();
  }
}, 100);
