import Avatar from "@/components/Avatar";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import {
	IoArrowDown,
	IoLogoGithub,
	IoLogoLinkedin,
	IoMailOutline
} from "react-icons/all";

export default function Home() {
	return (
		<main>
			<div className="container">
				<div className="max-w-2xl w-full mx-auto">
					<div className="flex items-center gap-6 p-3">
						<div
							className={
								"flex-shrink-0 relative aspect-square w-[5.625rem] rounded-full overflow-hidden m-3 ring-4 ring-offset-8 ring-offset-athens-gray-100 dark:ring-offset-ebony-900 ring-primary"
							}>
							<Avatar />
						</div>
						<div className={"flex-shrink-0 flex flex-col"}>
							<div className={"flex items-center font-semibold text-3xl"}>
								<span>Furkan GEZEK</span>
							</div>
							<div
								className={
									"font-normal text-neutrals-700 dark:text-neutrals-20"
								}>
								Fullstack Developer
							</div>
							<div className={"mt-2"}>
								<a href="https://github.com/FurkanGM">
									<IoLogoGithub size={24} />
								</a>
							</div>
						</div>
						<div className={"w-full flex justify-end"}>
							<ThemeSwitcher />
						</div>
					</div>
					<div className="mt-4 p-3 flex gap-3">
						<a
							href={"#"}
							className="w-full rounded-lg p-3 bg-primary-500 hover:bg-primary-600 font-medium text-white flex items-center justify-center cursor-pointer">
							<span>Download CV</span>
							<IoArrowDown className={"ml-2"} size={20} />
						</a>
						<a
							href={"mailto:contact@furkan.app"}
							className="rounded-lg py-3 px-6 bg-white hover:bg-athens-gray-50 dark:bg-neutrals-700 font-medium text-primary-500 flex items-center justify-center cursor-pointer">
							<IoMailOutline size={20} />
						</a>
						<a
							href={"https://www.linkedin.com/in/furkan-gezek/"}
							className="rounded-lg py-3 px-6 bg-white hover:bg-athens-gray-50 dark:bg-neutrals-700 font-medium text-primary-500 flex items-center justify-center cursor-pointer">
							<IoLogoLinkedin size={20} />
						</a>
					</div>
				</div>
			</div>
		</main>
	);
}
