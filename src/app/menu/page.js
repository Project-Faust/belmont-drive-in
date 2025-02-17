// import menuPoster from "../../../public/images/menu-downscaled.webp";

export default function Menu() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-start py-12">

            <div className="text-center mb-12">
                <h2 className="text-3xl mb-5">
                    <strong>Menu</strong>
                </h2>
                <h3 className="text-2xl mb-5">Allergy Warnings & Diet Considerations</h3>
            </div>

            <section className="flex">

                <div className="px-12 mb-5">
                    <img
                        className=""
                        src="/images/menu-downscaled.webp"
                        alt="Menu"
                    />
                </div>

                <div className="px-12 mb-5">
                    <img
                        className=""
                        src="/images/2024-food-allergies.webp"
                        alt="Food Allergies"
                    />
                </div>

            </section>

        </section>
    )
}