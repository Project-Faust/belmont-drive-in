import { comingSoon } from "../nowplaying/data";
import Image from "next/image";

export default function NowPlaying() {
    return (
        <section className="h-screen flex flex-col items-center justify-start w-full">
            <div className="text-center my-5">
                <h2 className="text-3xl font-bold">Coming Soon!</h2>
            </div>

            <div className="w-full max-w-screen-xl px-8 h-[85vh] flex">
                <section className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full justify-items-stretch flex-grow">
                    {comingSoon.map((movie, index) => (
                        <div
                            className="bg-primary text-primary-content shadow-lg rounded-lg p-5 h-full flex flex-col justify-between transition-transform transform hover:scale-105 w-full"

                            key={index}
                        >
                            <div className="text-center">
                                {movie.imdb ? (
                                    <a
                                        href={movie.imdb}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-lg text-blue-600 hover:underline"
                                    >
                                        <h1 className="font-semibold">{movie.title}</h1>
                                    </a>
                                ) : (
                                    <h1 className="font-semibold">{movie.title}</h1>
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
