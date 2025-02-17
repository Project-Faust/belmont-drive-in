export default function Home() {
  return (
    <div>
      <header className="text-center mx-2 mt-5 mb-2">
        <h1>Home of Your Affordable Family Entertainment Center</h1>
      </header>
      <section className="flex justify-center">
        <div role="alert" className="alert alert-info inline-flex items-center justify-center mx-auto m-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-6 w-6 shrink-0 stroke-current">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>We are currently planning to open for the 2025 season in April. We will continue to post updates.</span>
        </div>
      </section>
      <main className="mx-2">
        <p className="indent-4">
          Welcome to the Belmont Drive-In Theatre. We are open seasonally on Friday and Saturday nights from April to the first week in December. You can find us at 314 McAdenville Rd, Belmont NC 28120.
        </p>
        <ul>
          <li>We are a <strong>cash only</strong> business.</li>
        </ul>
        <p className="indent-4">
          We have one screen and we play two movies each night we're open. This means that we always play our current features one after another with a brief intermission between the two.
        </p>
      </main>
    </div>
  );
}
