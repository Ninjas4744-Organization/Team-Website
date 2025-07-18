import BlossomLogo from "@/public/assets/sponsors/blossom.svg";
import AmalSchool from "@/public/assets/sponsors/AmalSchool.webp";

type SponsorItemProps = {
	title: string;
	description: string;
	logo: string;
	value: string;
};

const Sponsors: SponsorItemProps[] = [
	{
		title: "Blossom-KC",
		description: "Blossom is the change-ready learning transformation platform that turns complexity into clarity. Empowering L&D to cultivate learning, compliance and skills strategies that power growth.",
		logo: BlossomLogo,
		value: "a",
	},
	{
		title: "Amal School",
		description: "Amal school for arts and science. Consists of 2000+ pupils, is our main sponsor who provides us everything we need!",
		logo: AmalSchool,
		value: "b",
	},
];

export default Sponsors;
