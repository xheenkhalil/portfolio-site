"use client";
import { FaYoutube } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { MdWork } from "react-icons/md";

export default function HireMePanel() {
  return (
    <section
      id="hireme"
      className="w-full py-16 bg-dark_black text-white text-center px-6"
    >
      <h2 className="text-3xl font-bold text-tiffany_blue mb-8">
        Hire Me or View My Work
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
       <a
            href="https://www.upwork.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-melon text-dark_black font-semibold px-6 py-3 rounded-lg shadow hover:bg-raspberry_rose transition"
            >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
                className="w-5 h-5"
                fill="currentColor"
            >
                <path d="M103.9 20c-12.3 0-22.1 9.6-22.1 21.5 0 4.3 1.1 8.4 3.1 11.8-3.2 1.7-6.8 2.6-10.7 2.6h-4.2v-14H57.8v14h-5.8v-14H40v14h-5.8V34H23.2v44.1h11v-15h5.8v15h11.9v-15h5.8v15h12.2v-15h4.2c6.7 0 13-1.8 18.4-5.3 4.7 5.6 11.8 9.2 19.5 9.2 13.1 0 23.7-10.1 23.7-22.5S117 20 103.9 20z"/>
            </svg>
            Upwork
        </a>

        <a
          href="https://www.fiverr.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-tiffany_blue text-dark_black font-semibold px-6 py-3 rounded-lg shadow hover:bg-murrey transition"
        >
          <SiFiverr size={20} /> Fiverr
        </a>
        <a
          href="https://www.jobberman.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-raspberry_rose text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-melon transition"
        >
          <MdWork size={20} /> Jobberman
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-murrey text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-raspberry_rose transition"
        >
          <FaYoutube size={20} /> YouTube
        </a>
      </div>
    </section>
  );
}

