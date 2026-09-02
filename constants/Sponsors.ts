import BlossomLogo from "@/public/assets/sponsors/blossom.svg";
import AmalSchool from "@/public/assets/sponsors/AmalSchool.webp";
import AYTLogo from "@/public/assets/sponsors/AYT.png";

type SponsorItemProps = {
	title: string;
	description: string;
	logo: string;
	value: string;
};

const Sponsors: SponsorItemProps[] = [
	{
		title: "Amal School",
		description: "Amal school for arts and science. Consists of 2000+ pupils, is our main sponsor who provides us everything we need!",
		logo: AmalSchool,
		value: "b",
	},
	{
		title: "Blossom-KC",
		description: "Blossom is the change-ready learning transformation platform that turns complexity into clarity. Empowering L&D to cultivate learning, compliance and skills strategies that power growth.",
		logo: BlossomLogo,
		value: "a",
	},
	{
		title: "AYT",
		description: "AYT is our go-to place when we have parts that require special manufacturing such as, laser cutting, welding and much more",
		logo: AYTLogo,
		value: "c",
	},
];

export default Sponsors;
