import { FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";
import Image from "next/image";

const Hero = () => {
  return (
    <div
      id="home"
      className="first-letter:relative w-full min-h-screen bg-white flex items-center px-4 md:px-8 lg:px-16"
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-around w-full gap-12 min-h-screen mt-10 sm:mt-0">
        <div className="ml:0 sm:ml-16 space-y-6">
          <div className="mb-5">
            <h2 className="text-xl uppercase tracking-wider text-gray-600">
              Hi, I&apos;m
            </h2>
            <div className="w-14 bg-gray-500 mt-2 h-[2px]" />
          </div>
          <div>
            <h2 className="text-5xl uppercase md:text-6xl font-semibold mt-2">
              Ladipo Samuel
            </h2>
            <h3 className="text-2xl md:text-3xl text-gray-600 mt-2">
              Backend Developer{" "}
              <span className="text-sm md:text-base">Afficionado</span>
            </h3>
          </div>

          <div className="pt-1 space-y-2">
            <div className="flex items-center space-x-2">
              <p className="text-lg text-gray-600 max-w-[500px]">
              I&apos;m an Innovative Backend Developer proficient in Python with experience building projects using the Django framework. Skilled in leveraging NumPy, Pandas, and Matplotlib to manipulate large datasets and create insightful visualizations.
              </p>
            </div>
            <div className="flex items-center space-x-4 pt-4">
                <Link target="_blank" referrerPolicy="origin" aria-label="Github" href="https://github.com/ladicodes">
                    <FaGithub size={20} />
                </Link>
                <Link target="_blank" referrerPolicy="origin" aria-label="Linkedin" href="https://www.linkedin.com/in/ladicodes">
                    <FaLinkedin size={20} />
                </Link>
                <Link target="_blank" referrerPolicy="origin" aria-label="X (formerly Twitter)" href="https://x.com/Ladipo737">
                    <FaSquareXTwitter size={20} />
                </Link>
                <Link target="_blank" referrerPolicy="origin" aria-label="E-Mail" href="mailto:ladiposamuel30@gmail.com">
                    <IoMdMail size={20} />
                </Link>
                <Link aria-label="Resume" href="/resume.pdf" target="_blank" referrerPolicy="origin" download>
                    <MdOutlineFileDownload size={20} />
                </Link>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center items-center">
            <div className="aspect-square rounded-full overflow-hidden bg-gray-900 mt-0 w-[280px] sm:w-[300px] md:mt-10 lg:mt-0 md:w-[350px] lg:w-[450px]">
                <Image src="/image.jpg" alt="Profile" width={1920} height={1920} priority className="w-full h-full object-cover" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
