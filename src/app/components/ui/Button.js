"use client";

import { useRouter } from "next/navigation";

export default function HomeButton() {
  const router = useRouter();

  return (
    <button
      className="cursor-default p-2"
      onClick={() => router.push("/")}>
      <img
        src="/favicon-32x32.png"
        alt="Home"
        className="h-6 w-6"
      />
    </button>
  );
}
