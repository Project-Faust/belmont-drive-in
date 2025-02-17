export default function Home() {
  return (

    <div>

      <header className="text-center mx-5 my-12">
        <h1 className="text-2xl">Home of Your Affordable Family Entertainment Center</h1>
      </header>

      <section className="flex justify-center mb-5">
        <div>
          <div role="alert" className="alert alert-info inline-flex items-center justify-center mx-auto">
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
        </div>
      </section>

      <section className="flex justify-center mx-2">
        <ul className="text-xl text-center mx-2 mt-5 mb-2">
          <li className="">
            We are open seasonally on <strong>Friday</strong> and <strong>Saturday</strong> nights from April to the first week in December.
            <br />
            You can find us at <a className="text-blue-600 hover:underline">314 McAdenville Rd, Belmont NC 28120</a>.
          </li>
          <br />
          <li>
            We are a <strong>cash only</strong> business. Card and tap to pay <strong>are not accepted</strong> at this time.
          </li>
          <br />
          <li className="">
            We have one screen and we play two movies each night we're open. <br />This means that we always play one movie after another with a brief intermission between the two.
          </li>
          <br />
          <li>
            Our <strong>first movie starts</strong> after the sun dips below the horizon. <br /> Our earliest movie start time will be <strong>no sooner than 7:30PM</strong>.
          </li>
        </ul>
      </section>

    </div>

  );
}
