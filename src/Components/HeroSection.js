import React, { useEffect, useState, useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import AppTheme from "../Color";
import Header from "./Header";

const HeroSection = () => {
	const theme = useContext(ThemeContext)[0];
	const currentTheme = AppTheme[theme];

	const [userChoice, setUserChoice] = useState(0);
	const [computerChoice, setComputerChoice] = useState(0);
	const [result, setResult] = useState();
	const choices = ["Rock", "Paper", "Scissors"];

	const handleClick = (value) => {
		setUserChoice(value);
		generateComputerChoice();
	};

	const generateComputerChoice = () => {
		const randomChoice = choices[Math.floor(Math.random() * choices.length)];
		setComputerChoice(randomChoice);
	};

	useEffect(() => {
		if (
			userChoice + computerChoice === "ScissorsPaper" ||
			userChoice + computerChoice === "RockScissors" ||
			userChoice + computerChoice === "PaperRock"
		) {
			setResult("Player Wins!!");
		} else if (
			userChoice + computerChoice === "PaperScissors" ||
			userChoice + computerChoice === "ScissorsRock" ||
			userChoice + computerChoice === "RockPaper"
		) {
			setResult("Computer Wins!!");
		} else {
			setResult("Draw!!");
		}
	}, [userChoice, computerChoice]);

	return (
		<div
			className="h-screen bg-[#9e78ff] flex flex-col items-center justify-center"
			style={{
				backgroundColor: `${currentTheme.backgroundColor}`,
			}}
		>
			<Header />
			<div className="flex my-12 text-lg">
				<h1 className="capitalize mx-4">
					User Choice: <span className="bg-[#7846f763] px-2 py-1 rounded font-semibold">{userChoice}</span>
				</h1>
				<h1 className="capitalize mx-4">
					Computer Choice: <span className="bg-[#7846f763] px-2 py-1 rounded font-semibold">{computerChoice}</span>
				</h1>
			</div>
			<div>
				{choices.map((choice, index) => (
					<button className="capitalize px-6 py-2 bg-green-600 mr-3 ml-3 rounded hover:translate-y-1" key={index} onClick={() => handleClick(choice)}>
						{choice}
					</button>
				))}
			</div>
			<div className="bg-[#7846f763] my-12 py-20 text-4xl italic bold w-full md:w-[50%] lg:w-[40%] flex justify-center">
				<h1>{result}</h1>
			</div>
		</div>
	);
};

export default HeroSection;
