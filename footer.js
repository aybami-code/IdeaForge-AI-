class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                    margin-top: auto;
                }
                footer {
                    background: rgba(15, 17, 21, 0.8);
                    backdrop-filter: blur(8px);
                    border-top: 1px solid rgba(255, 255, 255, 0.05);
                    padding: 3rem 2rem;
                }
                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 2rem;
                }
                .footer-section h3 {
                    font-weight: 600;
                    margin-bottom: 1rem;
                    color: white;
                }
                .footer-section a {
                    display: block;
                    color: var(--muted-text);
                    margin-bottom: 0.75rem;
                    text-decoration: none;
                    transition: color 0.2s;
                }
                .footer-section a:hover {
                    color: white;
                }
                .copyright {
                    text-align: center;
                    margin-top: 3rem;
                    color: var(--muted-text);
                    font-size: 0.875rem;
                }
                .social-links {
                    display: flex;
                    gap: 1rem;
                    margin-top: 1rem;
                }
                .social-links a {
                    color: var(--muted-text);
                    transition: color 0.2s;
                }
                .social-links a:hover {
                    color: var(--primary-accent);
                }
                @media (max-width: 640px) {
                    .container {
                        grid-template-columns: 1fr;
                    }
                }
            </style>
            <footer>
                <div class="container">
                    <div class="footer-section">
                        <h3>Product</h3>
                        <a href="#">Features</a>
                        <a href="#">Pricing</a>
                        <a href="#">Examples</a>
                        <a href="#">Updates</a>
                    </div>
                    <div class="footer-section">
                        <h3>Resources</h3>
                        <a href="#">Documentation</a>
                        <a href="#">Guides</a>
                        <a href="#">Blog</a>
                        <a href="#">API</a>
                    </div>
                    <div class="footer-section">
                        <h3>Company</h3>
                        <a href="#">About</a>
                        <a href="#">Careers</a>
                        <a href="#">Contact</a>
                        <a href="#">Legal</a>
                    </div>
                    <div class="footer-section">
                        <h3>Connect</h3>
                        <div class="social-links">
                            <a href="#" aria-label="Twitter"><i data-feather="twitter"></i></a>
                            <a href="#" aria-label="GitHub"><i data-feather="github"></i></a>
                            <a href="#" aria-label="LinkedIn"><i data-feather="linkedin"></i></a>
                            <a href="#" aria-label="Discord"><i data-feather="message-circle"></i></a>
                        </div>
                    </div>
                </div>
                <div class="copyright">
                    &copy; ${new Date().getFullYear()} IdeaForge. All rights reserved.
                </div>
            </footer>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);