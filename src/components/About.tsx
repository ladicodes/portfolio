"use client";

import { Cardo } from "next/font/google";

const cardo = Cardo({
    weight: ["400", "700"],
    subsets: ["latin"],
})

const About = () => {
    return(
        <div id="about" className="px-4 sm:px-20 md:px-24 lg:px-32 mt-10 md:mt-4 mb-10">
            <div>
                <h2 className="text-lg uppercase tracking-wider text-gray-600">
                    about me
                </h2>
                <div className="w-20 h-[2px] bg-gray-500"></div>
            </div>

            <h1 className={`${cardo.className} text-xl sm:text-2xl md:text-3xl font-bold pt-5 leading-10`}>
                I&apos;m an Innovative Programmer proficient in Python with experience building projects using the Django framework. Skilled in leveraging NumPy, Pandas, and Matplotlib to manipulate large datasets and create insightful visualizations. A collaborative team player, working effectively with stakeholders and team members to deliver high-quality solutions on time. Expertise includes performance optimization, robust authentication and encryption, and crafting efficient database queries for scalable applications.
            </h1>
        </div>
    )
}

export default About;