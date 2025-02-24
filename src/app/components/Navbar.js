"use client";

import { Limelight, Sigmar, Sigmar_One } from "next/font/google"

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import HomeButton from "./ui/Button";

const limelight = Limelight({ subsets: ["latin"], weight: "400" });
const sigmar = Sigmar({weight: "400"});

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // toggles nav dropdown when clicked
    const toggleDropdown = () => setIsOpen((prev) => !prev);
    // force closes nav dropdown when a link is clicked
    const closeDropdown = () => setIsOpen(false);

    // closes nav dropdown when clicked off
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                closeDropdown();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <nav className="bg-bright-red text-primary-content navbar bg-neutral text-neutral-content shadow-sm">
            <div className="navbar-start">
                <div ref={dropdownRef} className={`dropdown ${isOpen ? "dropdown-open" : ""}`}>
                    <button
                        tabIndex={0}
                        role="button"
                        aria-label="Open navigation menu"
                        className="btn btn-ghost btn-circle"
                        onClick={toggleDropdown}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h7"
                            />
                        </svg>
                    </button>

                    {/* nav dropdown */}
                    {isOpen && (
                        <ul
                            tabIndex={0}
                            className={`menu menu-sm dropdown-content bg-bright-red text-black font-semibold rounded-box z-10 mt-3 w-52 p-2`}
                        >
                            {[
                                { href: "/", label: "Home" },
                                { href: "/nowplaying", label: "Now Playing" },
                                { href: "/comingsoon", label: "Coming Soon" },
                                { href: "/menu", label: "Menu" },
                                { href: "/rules", label: "Rules" },
                                { href: "/faq", label: "FAQ" },
                            ].map(({ href, label }) => (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        onClick={() => closeDropdown()}
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>

            {/* business name */}
            <div className="navbar-center">
                <Link
                    href="/"
                    className={`btn btn-ghost text-2xl ${limelight.className}`}
                >
                    <strong>Belmont Drive-In</strong>
                </Link>
            </div>

            {/* hidden button */}
            <div className="navbar-end">
                <HomeButton />
            </div>
        </nav >
    );
}
