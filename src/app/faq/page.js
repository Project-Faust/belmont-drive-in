export default function Faq() {
    return (
        <section className="min-h-screen py-12">

            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold">
                    <strong>Frequently Asked Questions (F.A.Q.)</strong>
                </h2>
            </div>

            <div className="flex justify-center">
                <ul className="text-lg mx-2 mt-5 mb-2">
                    <li>Q: Do you take card or tap-to-pay?</li>
                    <li>A: Not at this time.</li>
                    <br />
                    <li>Q: Is there an ATM on site?</li>
                    <li>A: Not at this time, but we are looking into adding one.</li>
                    <br />
                    <li>Q: Are pets allowed?</li>
                    <li>A: Not currently, but we are interested in possibly doing events for pet owners in the future.</li>
                    <br />
                    <li>Q: How do we listen to the movies and music?</li>
                    <li>A: All of our sound is done by <strong>FM radio</strong>. This means that either a car radio or portable radio with FM is required.</li>
                    <p>*Note: Mobile apps for radio <strong>do not work</strong>.</p>
                    <br />
                    <li>Q: Can we leave early or leave after the first movie?</li>
                    <li>A: Yes! You are welcome to leave at any time you are ready or whenever we close for the night, whichever comes first.</li>
                    <p>*Note: Upon leaving, you will be required to purchase another ticket if you decide to re-enter afterwards.</p>
                    <br />
                    <li>Q: Are we allowed to bring our own food or drinks?</li>
                    <li>A: No, our business runs and survives from the proceeds from our concession stand sales.</li>
                    <p>*Note: This includes alcohol. We have a strict <strong>no alcohol</strong> policy.</p>
                </ul>
            </div>
        </section>
    )
}