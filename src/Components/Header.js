import React from "react";
import ThemeToggler from "./ThemeToggler";

const Header = () => {
	return (
		<div className="flex flex-row justify-around items-center mx-6 mb-20 w-full">
			<h1 className="text-3xl md:text-5xl">Rock, Paper and Scissors Game</h1>
			<ThemeToggler />
		</div>
	);
};

export default Header;
