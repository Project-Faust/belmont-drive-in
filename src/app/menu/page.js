import { menuData } from "./data";
import { formatCategoryTitle } from "../utils/FormatTitle";
// import menuPoster from "../../../public/images/menu-downscaled.webp";

export default function Menu() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-start py-12 lg:mx-0 mx-5 ">

            <div className="text-center mb-12">

                <h2 className="text-3xl mb-5">
                    <strong>Menu</strong>
                </h2>

                <h3 className="text-2xl mb-5">
                    <a
                        href="#allergies-and-diet"
                        className="hover:underline"
                    >
                        Allergy Warnings & Diet Considerations
                    </a>
                </h3>

            </div>


            {Object.entries(menuData).map(([category, items]) => (
                <div key={category} className="collapse collapse-arrow bg-neutral text-neutral-content w-full max-w-3xl mb-4">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-semibold">
                        {formatCategoryTitle(category)}

                    </div>
                    <div className="collapse-content">
                        {Array.isArray(items) ? (
                            <ul className="list-disc pl-5">
                                {items.map((item, index) => (
                                    <li key={index} className="py-1">
                                        <span className="font-bold">{item.name}</span> - ${item.price.toFixed(2)}
                                        {item.description && <p className="text-sm text-gray-400">{item.description}</p>}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            Object.entries(items).map(([subCategory, subItems]) => (
                                <div key={subCategory} className="mt-3">
                                    <h3 className="text-lg font-semibold">{formatCategoryTitle(subCategory)}</h3>

                                    <ul className="list-disc pl-5">
                                        {(Array.isArray(subItems) ? subItems : [subItems]).filter(Boolean).map((item, index) => (
                                            <li key={index} className="py-1">
                                                <span className="font-bold">{item?.name}</span> - ${item?.price?.toFixed(2)}
                                                {item?.description && <p className="text-sm text-gray-400">{item.description}</p>}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            ))}

            <section className="flex flex-col items-center">
                {/* Allergy Information */}
                <div className="w-full max-w-3xl mx-auto mb-8">
                    <img
                        id="allergies-and-diet"
                        className="w-full rounded-lg shadow-md"
                        src="/images/2024-food-allergies.webp"
                        alt="Food Allergies"
                    />
                </div>
            </section>

        </section>
    );
}