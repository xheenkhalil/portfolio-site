"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 py-6 text-center border-t border-gray-300 dark:border-gray-700">
      <p className="text-sm text-gray-600 dark:text-gray-400">
        © {year} Moses Thomas. All rights reserved.
      </p>
    </footer>
  );
}

