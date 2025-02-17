export default function Footer() {
    return (

        <footer className="bg-neutral text-neutral-content px-5 py-0 flex flex-col md:flex-row justify-between items-center">
            {/* Left Section */}

            <aside className="mb-4 md:mb-0 text-center md:text-left">
                <p>
                    Belmont Drive-In, LLC
                    <br />
                    Copyright © 2023 - {new Date().getFullYear()} All rights reserved.
                </p>
            </aside>

            {/* Right Section */}
            <nav className="flex flex-col items-center">
                <h6 className="footer-title mb-2">Social</h6>
                <div className="flex gap-2 pb-2">
                    <a
                        href="https://www.facebook.com/p/Belmont-Drive-In-100063570731472/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current">
                            <path
                                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                        </svg>
                    </a>
                </div>
            </nav>

        </footer>
    );
}
