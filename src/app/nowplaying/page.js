import { nowPlaying } from "./data";
import Image from "next/image";

import { Limelight } from "next/font/google";

const limelight = Limelight({ subsets: ["latin"], weight: "400" });

export default function ComingSoon() {
    return (
        <section className="flex flex-col items-center justify-start w-full mb-0">

            <div
                style={{ color: "#FFFFFF" }}
                className="text-center my-3">
                <h2 className={`text-4xl font-bold ${limelight.className}`}>Now Playing!</h2>
            </div>

            <div className="w-full max-w-screen-xl px-8 mb-2 flex">
                <section className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full justify-items-stretch flex-grow">
                    {nowPlaying.map((movie, index) => (
                        <div
                            style={{ backgroundColor: "#303080" }}
                            className="shadow-lg rounded-lg p-2 h-full flex flex-col justify-between transition-transform transform hover:scale-105 w-full"

                            key={index}
                        >
                            <div className="text-center">
                                {movie.imdb ? (
                                    <a
                                        href={movie.imdb}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-lg text-white hover:underline"
                                    >
                                        <h1 className="text-xl font-semibold">{movie.title}</h1>
                                    </a>
                                ) : (
                                    <h1 className="text-xl font-semibold">{movie.title}</h1>
                                )}
                            </div>

                            <div className="flex justify-center">
                                {movie.imdb ? (
                                    <a href={movie.imdb} target="_blank" rel="noreferrer">
                                        <Image
                                            src={movie.image}
                                            alt={`Poster for ${movie.title}`}
                                            width={500}
                                            height={750}
                                            className="rounded-md min-h-[500px]"
                                        />
                                    </a>
                                ) : (
                                    <Image
                                        src={movie.image}
                                        alt={`Poster for ${movie.title}`}
                                        width={500}
                                        height={750}
                                        className="rounded-md min-h-[500px]"
                                    />
                                )}
                            </div>

                            <p className="text-sm text-gray-500 text-center">
                                Image source: IMDb
                            </p>
                        </div>
                    ))}
                </section>
            </div>
        </section>
    );
}
