export default function MapEmbed() {
    return (
        <section>
            <div className="d-flex justify-content-center align-items-center mx-3 mt-3 mw-100">
                <iframe
                    title="google map embed"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJqRq4HOq9VogR6duom18zqd0&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}>
                </iframe>
            </div>
        </section>
    )
};