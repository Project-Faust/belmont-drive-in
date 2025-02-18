export default function BusinessDetails() {
    const details = [
        {
            text: (
                <>
                    We are open seasonally on <strong>Friday</strong> and <strong>Saturday</strong> nights from April to the first
                    week in December.
                    <br />
                    You can find us at{" "}
                    <a
                        className="text-blue-600 hover:underline"
                        href="https://www.google.com/maps/dir//Belmont+Drive-In+314+McAdenville+Rd+Belmont,+NC+28012/@35.256076,-81.0586444,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8856bdea1cb81aa9:0xdda9335f9ba8dbe9!2m2!1d-81.0586444!2d35.256076?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoJLDEwMjExMjMzSAFQAw%3D%3D"
                        target="_blank"
                        rel="noreferrer">
                        314 McAdenville Rd, Belmont NC 28120
                    </a>
                    .
                </>
            ),
        },
        { text: "We are a cash-only business. Card and tap to pay are not accepted at this time." },
        {
            text: "We have one screen and play two movies each night we're open. One movie player after another with a brief intermission in between.",
        },
        {
            text: "Our first movie starts after sunset, never earlier than 7:30 PM.",
        },
        {
            text: "We rely on food and drink sales. Outside food and drinks, including alcohol, are not allowed. Strict no-alcohol policy in effect.",
        },
    ];

    return (
        <ul className="text-xl text-center mx-2 mt-5 mb-2 space-y-4">
            {details.map((item, index) => (
                <li key={index} className="p-2">
                    {item.text}
                </li>
            ))}
        </ul>
    );
}
