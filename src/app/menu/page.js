import { menuData } from "./data";
import { formatCategoryTitle } from "../utils/FormatTitle";
// import menuPoster from "../../../public/images/menu-downscaled.webp";

import { Limelight } from "next/font/google";

const limelight = Limelight({ subsets: ["latin"], weight: "400" });

export default function Menu() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-start p-5 lg:mx-0 mx-5 ">

            <div className="text-center mb-10">

                <h2
                    style={{ color: "#FFFFFF" }}
                    className={`text-4xl mb-5 ${limelight.className}`}>
                    <strong>Menu</strong>
                </h2>

                <h3
                    style={{ backgroundColor: "#ffffff", color: "#aa0000" }}
                    className="text-2xl py-1 px-5 mb-5 rounded-lg">
                    <a
                        href="#allergies-and-diet"
                        className="font-semibold hover:underline"
                    >
                        Allergy Warnings & Diet Considerations
                    </a>
                </h3>

            </div>


            {Object.entries(menuData).map(([category, items]) => (
                <div key={category} className="collapse collapse-arrow bg-white text-secondary-content w-full max-w-3xl mb-4">
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
                                        {item.description && <p className="text-sm text-black-400">{item.description}</p>}
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