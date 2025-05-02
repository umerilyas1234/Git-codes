var link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = '//res.cloudinary.com/spiralyze/raw/upload/techsmithcamtasia/227/src/style.css';

if (!document.querySelector('link[href="//res.cloudinary.com/spiralyze/raw/upload/techsmithcamtasia/227/src/style.css"]')) {
  document.getElementsByTagName('head')[0].appendChild(link);
}


function loadTestCode227() {
  if (!document.querySelector("body").classList.contains("spz_227")) {
    document.querySelector("body").classList.add("spz_227");

    document.querySelector('.contact-sales-messaging').insertAdjacentHTML('afterend', `
        <section class="comparison-section">
            <div class="container">
                <h1>Compare plan features</h1>
                <p>All plans come with the powerful Camtasia Editor, macOS and windows installations and 24/7 support</p>

                <!-- Plan Headers -->
                <div class="columns desktop-only">
                    <div class="column"><h3>Essentials</h3></div>
                    <div class="column"><h3>Create</h3></div>
                    <div class="column"><h3>Pro</h3></div>
                </div>

                <div class="plan-wrapper">
                    <div class="plan-selector mobile-only">
                        <select id="planDropdown">
                            <option value="essentials">Essentials Features</option>
                            <option value="create">Create Features</option>
                            <option value="pro">Pro Features</option>
                        </select>
                    </div>
                    <div class="sentinel"></div>
                    <div class="features-wrapper">
                        <!-- Recording -->
                        <div class="section-group">
                            <div class="section">
                                <h4><img src="https://res.cloudinary.com/spiralyze/image/upload/techsmithcamtasia/227/recording-icon.svg" alt="Recording">Recording</h4>
                                <div class="feature">Screen Recording</div>
                                <div class="feature">Camera Recording</div>
                                <div class="feature">Audio recording</div>
                                <div class="feature">System audio recording</div>
                                <div class="feature">Mouse paths, clicks, and keystrokes</div>
                                <div class="feature">Unlimited Recording</div>
                            </div>
                            <div class="section">
                                <h4><img src="https://res.cloudinary.com/spiralyze/image/upload/techsmithcamtasia/227/recording-icon.svg" alt="Recording">Recording</h4>
                                <div class="feature">Screen Recording</div>
                                <div class="feature">Camera Recording</div>
                                <div class="feature">Audio recording</div>
                                <div class="feature">System audio recording</div>
                                <div class="feature">Mouse paths, clicks, and keystrokes</div>
                                <div class="feature">Unlimited Recording</div>
                            </div>
                            <div class="section">
                                <h4><img src="https://res.cloudinary.com/spiralyze/image/upload/techsmithcamtasia/227/recording-icon.svg" alt="Recording">Recording</h4>
                                <div class="feature">Screen Recording</div>
                                <div class="feature">Camera Recording</div>
                                <div class="feature">Audio recording</div>
                                <div class="feature">System audio recording</div>
                                <div class="feature">Mouse paths, clicks, and keystrokes</div>
                                <div class="feature">Unlimited Recording</div>
                            </div>
                        </div>

                        <!-- Editing -->
                        <div class="section-group">
                            <div class="section">
                                <h4><img src="https://res.cloudinary.com/spiralyze/image/upload/techsmithcamtasia/227/editing-icon.svg" alt="Editing">Editing</h4>
                                <div class="feature">Non-linear editing</div>
                                <div class="feature">Filters, transitions, and visual effects</div>
                                <div class="feature">PowerPoint importing</div>
                                <div class="feature">Quick layout options</div>
                                <div class="feature">Cursor animation</div>
                                <div class="feature">Text animation</div>
                                <div class="feature">Brand standard logos, fonts, colors</div>
                                <div class="feature">Starter stock audio and video</div>
                                <div class="feature">Starter stock photos and graphics</div>
                                <div class="feature"><svg width="20" height="2" viewBox="0 0 20 2" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="1" x2="20" y2="1" stroke="#DDDDDD"/></svg></div>
                                <div class="feature"><svg width="20" height="2" viewBox="0 0 20 2" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="1" x2="20" y2="1" stroke="#DDDDDD"/></svg></div>
                            </div>
                            <div class="section">
                                <h4><img src="https://res.cloudinary.com/spiralyze/image/upload/techsmithcamtasia/227/editing-icon.svg" alt="Editing">Editing</h4>
                                <div class="feature">Non-linear editing</div>
                                <div class="feature">Filters, transitions, and visual effects</div>
                                <div class="feature">PowerPoint importing</div>
                                <div class="feature">Quick layout options</div>
                                <div class="feature">Cursor animation</div>
                                <div class="feature">Text animation</div>
                                <div class="feature">Brand standard logos, fonts, colors</div>
                                <div class="feature">Starter stock audio and video</div>
                                <div class="feature">Starter stock photos and graphics</div>
                                <div class="feature">Advanced audio effects</div>
                                <div class="feature">Text-based video editing</div>
                            </div>
                            <div class="section">
                                <h4><img src="https://res.cloudinary.com/spiralyze/image/upload/techsmithcamtasia/227/editing-icon.svg" alt="Editing">Editing</h4>
                                <div class="feature">Non-linear editing</div>
                                <div class="feature">Filters, transitions, and visual effects</div>
                                <div class="feature">PowerPoint importing</div>
                                <div class="feature">Quick layout options</div>
                                <div class="feature">Cursor animation</div>
                                <div class="feature">Text animation</div>
                                <div class="feature">Brand standard logos, fonts, colors</div>
                                <div class="feature">4M+ stock audio and video</div>
                                <div class="feature">100M+ stock photos and graphics</div>
                                <div class="feature">Advanced audio effects</div>
                                <div class="feature">Text-based video editing</div>
                            </div>
                            </div>

                            <!-- AI Tools -->
                            <div class="section-group">
                            <div class="section">
                                <h4><img src="https://res.cloudinary.com/spiralyze/image/upload/techsmithcamtasia/227/aitools-icon.svg" alt="AI Tools">AI Tools</h4>
                                <div class="feature">Video background removal</div>
                                <div class="feature">Speech-to-text transcription</div>
                                <div class="feature"><svg width="20" height="2" viewBox="0 0 20 2" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="1" x2="20" y2="1" stroke="#DDDDDD"/></svg></div>
                                <div class="feature"><svg width="20" height="2" viewBox="0 0 20 2" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="1" x2="20" y2="1" stroke="#DDDDDD"/></svg></div>
                                <div class="feature"><svg width="20" height="2" viewBox="0 0 20 2" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="1" x2="20" y2="1" stroke="#DDDDDD"/></svg></div>
                                <div class="feature ai-tool"><svg width="20" height="2" viewBox="0 0 20 2" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="1" x2="20" y2="1" stroke="#DDDDDD"/></svg></div>
                                <div class="feature"><svg width="20" height="2" viewBox="0 0 20 2" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="1" x2="20" y2="1" stroke="#DDDDDD"/></svg></div>
                                <div class="feature"><svg width="20" height="2" viewBox="0 0 20 2" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="1" x2="20" y2="1" stroke="#DDDDDD"/></svg></div>
                                <div class="feature"><svg width="20" height="2" viewBox="0 0 20 2" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="1" x2="20" y2="1" stroke="#DDDDDD"/></svg></div>
                                
                            </div>
                            <div class="section">
                                <h4><img src="https://res.cloudinary.com/spiralyze/image/upload/techsmithcamtasia/227/aitools-icon.svg" alt="AI Tools">AI Tools</h4>
                                <div class="feature">Video background removal</div>
                                <div class="feature">Speech-to-text transcription</div>
                                <div class="feature">Filler word and hesitation removal</div>
                                <div class="feature">Script generation</div>
                                <div class="feature">Generate audio from text with 200+ voices</div>
                                <div class="feature ai-tool">Audio and script translation for 7 languages and 13 dialects</div>
                                <div class="feature"><svg width="20" height="2" viewBox="0 0 20 2" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="1" x2="20" y2="1" stroke="#DDDDDD"/></svg></div>
                                <div class="feature"><svg width="20" height="2" viewBox="0 0 20 2" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="1" x2="20" y2="1" stroke="#DDDDDD"/></svg></div>
                                <div class="feature"><svg width="20" height="2" viewBox="0 0 20 2" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="1" x2="20" y2="1" stroke="#DDDDDD"/></svg></div>
                            </div>
                            <div class="section">
                                <h4><img src="https://res.cloudinary.com/spiralyze/image/upload/techsmithcamtasia/227/aitools-icon.svg" alt="AI Tools">AI Tools</h4>
                                <div class="feature">Video background removal</div>
                                <div class="feature">Speech-to-text transcription</div>
                                <div class="feature">Filler word and hesitation removal</div>
                                <div class="feature">Script generation</div>
                                <div class="feature">Generate audio from text with 200+ voices</div>
                                <div class="feature ai-tool">Audio and script translation for 7 languages and 13 dialects</div>
                                <div class="feature">Stock avatars</div>
                                <div class="feature">Image generation</div>
                                <div class="feature">Title, description, and chapter generation</div>
                            </div>
                        </div>

                        <!-- Captions -->
                        <div class="section-group">
                            <div class="section">
                                <h4><img src="https://res.cloudinary.com/spiralyze/image/upload/techsmithcamtasia/227/captions-icon.svg" alt="Captions">Captions</h4>
                                <div class="feature">Dynamic captioning</div>
                                <div class="feature">Closed captioning (ADA compliant)</div>
                                <div class="feature">Subtitling</div>
                                <div class="feature">Export captions</div>
                            </div>
                            <div class="section">
                                <h4><img src="https://res.cloudinary.com/spiralyze/image/upload/techsmithcamtasia/227/captions-icon.svg" alt="Captions">Captions</h4>
                                <div class="feature">Dynamic captioning</div>
                                <div class="feature">Closed captioning (ADA compliant)</div>
                                <div class="feature">Subtitling</div>
                                <div class="feature">Export captions</div>
                            </div>
                            <div class="section">
                                <h4><img src="https://res.cloudinary.com/spiralyze/image/upload/techsmithcamtasia/227/captions-icon.svg" alt="Captions">Captions</h4>
                                <div class="feature">Dynamic captioning</div>
                                <div class="feature">Closed captioning (ADA compliant)</div>
                                <div class="feature">Subtitling</div>
                                <div class="feature">Export captions</div>
                            </div>
                            </div>

                            <!-- Sharing -->
                            <div class="section-group">
                            <div class="section">
                                <h4><img src="https://res.cloudinary.com/spiralyze/image/upload/techsmithcamtasia/227/sharing-icon.svg" alt="Sharing">Sharing</h4>
                                <div class="feature">Watermark-free exports</div>
                                <div class="feature">View notifications for up to 25 videos </div>
                                <div class="feature">Commenting on up to 25 videos</div>
                                <div class="feature">Shared collections</div>
                            </div>
                            <div class="section">
                                <h4><img src="https://res.cloudinary.com/spiralyze/image/upload/techsmithcamtasia/227/sharing-icon.svg" alt="Sharing">Sharing</h4>
                                <div class="feature">Watermark-free exports</div>
                                <div class="feature">View notifications for up to 25 videos </div>
                                <div class="feature">Commenting on up to 25 videos</div>
                                <div class="feature">Shared collections</div>
                            </div>
                            <div class="section">
                                <h4><img src="https://res.cloudinary.com/spiralyze/image/upload/techsmithcamtasia/227/sharing-icon.svg" alt="Sharing">Sharing</h4>
                                <div class="feature">Watermark-free exports</div>
                                <div class="feature">View notifications for up to 25 videos </div>
                                <div class="feature">Commenting on up to 25 videos</div>
                                <div class="feature">Shared collections</div>
                            </div>
                            </div>

                            <!-- Support -->
                            <div class="section-group">
                            <div class="section">
                                <h4><img src="https://res.cloudinary.com/spiralyze/image/upload/techsmithcamtasia/227/support-icon.svg" alt="Support">Support</h4>
                                <div class="feature">Chat and email support</div>
                                <div class="feature">Access to TechSmith Academy</div>
                                <div class="feature">Certification course</div>
                            </div>
                            <div class="section">
                                <h4><img src="https://res.cloudinary.com/spiralyze/image/upload/techsmithcamtasia/227/support-icon.svg" alt="Support">Support</h4>
                                <div class="feature">Chat and email support</div>
                                <div class="feature">Access to TechSmith Academy</div>
                                <div class="feature">Certification course</div>
                            </div>
                            <div class="section">
                                <h4><img src="https://res.cloudinary.com/spiralyze/image/upload/techsmithcamtasia/227/support-icon.svg" alt="Support">Support</h4>
                                <div class="feature">Chat and email support</div>
                                <div class="feature">Access to TechSmith Academy</div>
                                <div class="feature">Certification course</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `);

    document.querySelector('.spz_227 .product-trusted-container picture').innerHTML = ` 
        <source media="(max-width:767px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/techsmithcamtasia/227/mobile.svg">
        <source media="(max-width:1023px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/techsmithcamtasia/227/tablet.svg">
        <img class="social-proof" src="https://res.cloudinary.com/spiralyze/image/upload/techsmithcamtasia/227/desktop.svg" alt="Apple inc., Microsoft, Google, Chase, LinkedIn">
    `;

    function matchFeatureHeights() {
        // Loop through each section group (Recording, Editing, etc.)
        document.querySelectorAll('.spz_227 .comparison-section .section-group').forEach(group => {
            const sections = group.querySelectorAll('.section');
            const rows = [];
    
            // Collect each row of features by index (row 0 = first .feature in each .section)
            sections.forEach(section => {
                const features = section.querySelectorAll('.feature');
                features.forEach((feature, i) => {
                    if (!rows[i]) rows[i] = [];
                    rows[i].push(feature);
                });
            });
    
            // Reset and equalize each row's height
            rows.forEach(features => {
                let maxHeight = 0;
    
                // Reset current height
                features.forEach(f => f.style.minHeight = '');
    
                // Find max height in this row
                features.forEach(f => {
                    maxHeight = Math.max(maxHeight, f.offsetHeight);
                });
    
                // Set all to max height
                features.forEach(f => {
                    f.style.minHeight = maxHeight + 'px';
                });
            });
        });
    }
    
    // Apply on load and resize
    window.addEventListener('load', matchFeatureHeights);
    window.addEventListener('resize', matchFeatureHeights);

    const dropdown = document.getElementById('planDropdown');
    const comparisonSection = document.querySelector('.comparison-section');

    function updatePlanClass(selectedPlan) {
        // Remove previous plan classes if any
        comparisonSection.classList.remove('essentials', 'create', 'pro');

        // Add new class
        comparisonSection.classList.add(selectedPlan);
    }

    // Initial load
    updatePlanClass(dropdown.value);

    // Change event listener
    dropdown.addEventListener('change', function () {
        updatePlanClass(this.value);
    });
  }
}

var bodyInterval222 = setInterval(() => {
  if (document.querySelectorAll("body").length > 0) {
    clearInterval(bodyInterval222);
    loadTestCode227();
  }
}, 10);
