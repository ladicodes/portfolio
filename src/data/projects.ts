interface Project {
	title: string;
	image: string;
	description: string;
	github?: string;
	demo?: string;
	tags: string[];
}

export const projects: Project[] = [
	{
		title: "StorePoint – Instant Website Builder for Small Businesses",
		image: "/storepoint.jpg",
		description:
			"Collaborated with a team to develop StorePoint, a platform that enables small businesses and local shops to create a fully functional website in under 5 minutes. Designed an intuitive template-based system, allowing users to input business details and select a layout that matches their brand, improving business onboarding efficiency by 40%. The platform empowers entrepreneurs to establish an online presence quickly and effortlessly, eliminating technical barriers.",
        // github: "https://github.com/theactualdev/crm-dashboard",
		demo: "https://storepoint.vercel.app",
		tags: ["Javascript", "TypeScript", "Python"],
	},
    {
		title: "Vital Aid - AI-Powered Healthcare Assistance System",
		image: "/vital.jpg",
		description:
			"Led a team to develop a sustainable healthcare system that helps users locate the nearest hospital and access AI-driven first aid guidance. Designed to support new residents and individuals in unfamiliar areas, the platform improves hospital discovery efficiency by 50%. Integrated an intelligent AI chatbot, providing real-time first aid responses, reducing critical response time by 40% before professional medical care is available..",
		tags: ["TypeScript"],
        demo: "https://vital-aid.pages.dev/first-aid",
        //github: "https://github.com/theactualdev/theactualGPA",
	},
	{
		title: "Smart Waste Bin Project – Sensor-Based Waste Management",
		image: "/wastebin.jpg",
		description:
			"Led a team in developing a smart waste bin equipped with an ultrasonic sensor to detect when the bin is full, enabling faster waste disposal and reducing pollution by 35%. Tested the project in Ikoyi, Lagos, where homeowners reported increased awareness and timely waste disposal due to the automated alerts. The system improves waste management efficiency by prompting users for disposal, helping to maintain cleaner environments.",
		//github: "https://github.com/theactualdev/dutiful",
		demo: "https://www.linkedin.com/posts/ladipo-samuel_this-picture-portrays-an-excellent-man-presenting-activity-7103325970379530240-dF_O?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD0BJfMBvqT_kiW5P7tkv7cTT9j0I45XAhw ",
		tags: ["Python", "Django"],
	},
];