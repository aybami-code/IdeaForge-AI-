class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                }
                header {
                    background: rgba(15, 17, 21, 0.8);
                    backdrop-filter: blur(8px);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                    padding: 1rem 2rem;
                }
                .container {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    max-width: 1200px;
                    margin: 0 auto;
                }
                .logo {
                    font-weight: 700;
                    font-size: 1.25rem;
                    background: linear-gradient(90deg, #6E5BFF, #00C4FF);
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                }
                nav {
                    display: flex;
                    gap: 1.5rem;
                    align-items: center;
                }
                nav a {
                    color: var(--muted-text);
                    text-decoration: none;
                    font-weight: 500;
                    transition: color 0.2s;
                }
                nav a:hover {
                    color: white;
                }
                .theme-toggle {
                    background: rgba(255, 255, 255, 0.05);
                    border: none;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.2s;
                }
                .theme-toggle:hover {
                    background: rgba(255, 255, 255, 0.1);
                }
                @media (max-width: 640px) {
                    nav {
                        gap: 1rem;
                    }
                }
            </style>
            <header>
                <div class="container">
                    <a href="/" class="logo">IdeaForge</a>
                    <nav>
                        <a href="#">Features</a>
                        <a href="#">Examples</a>
                        <a href="#">Pricing</a>
                        <button class="theme-toggle" aria-label="Toggle theme">
                            <i data-feather="moon"></i>
                        </button>
                    </nav>
                </div>
            </header>
        `;
    }
}

customElements.define('custom-header', CustomHeader);