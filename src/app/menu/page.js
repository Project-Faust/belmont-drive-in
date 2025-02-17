// import menuPoster from "../../../public/images/menu-downscaled.webp";

export default function Menu() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-start py-12">

            <div className="text-center mb-12">
                <h2 className="text-3xl mb-5">
                    <strong>Menu</strong>
                </h2>
                <h3 className="text-2xl mb-5">
                    <a
                        href="#allergies-and-diet"
                        className="text-blue-600 hover:underline"
                    >
                        Allergy Warnings & Diet Considerations
                    </a>
                </h3>
            </div>

            <section className="flex flex-col items-center">

                <div className="flex-auto px-12 mb-5">
                    <img
                        className=""
                        src="/images/menu-downscaled.webp"
                        alt="Menu"
                    />
                </div>

                <div className="flex-auto px-12 mb-5">
                    <img
                        id="allergies-and-diet"
                        className=""
                        src="/images/2024-food-allergies.webp"
                        alt="Food Allergies"
                    />
                </div>

            </section>

        </section>
    )
}