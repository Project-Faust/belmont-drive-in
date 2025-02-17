// eslint-disable-next-line
import WeekendDates from "../utils/WeekendDates";
import { nowPlaying } from "./data";
import Image from "next/image";

export default function NowPlaying() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-start py-12">

            {/* Announcement Section */}
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold">
                    <strong>Now Playing!</strong>
                </h2>
            </div>

            {/* Now Playing Grid */}
            <div className="w-full max-w-screen-xl px-4">
                <section className="grid gap-8 grid-cols-1 sm:grid-cols-2 justify-items-center mx-auto">
                    {nowPlaying.map((res, index) => (
                        <div
                            className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105"
                            key={index}
                        >
                            {/* Title */}
                            <div className="text-center mb-4">
                                <a
                                    href={res.imdb}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-lg font-semibold text-blue-600 hover:underline"
                                >
                                    <h1>{res.title}</h1>
                                </a>
                            </div>

                            {/* Image */}
                            <div className="flex justify-center">
                                <a
                                    href={res.imdb}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Image
                                        src={res.image}
                                        alt={res.title}
                                        width={500}
                                        height={750}
                                        className="rounded-md"
                                    />
                                    <p className="text-sm text-gray-500 mt-2 text-center">
                                        Image source: IMDb
                                    </p>
                                </a>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </section>

    );
}
