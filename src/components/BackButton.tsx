"use client";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium bg-melon text-[color:var(--foreground)] shadow hover:bg-raspberry_rose transition"
    >
      <FaArrowLeft /> Back
    </button>
  );
}

