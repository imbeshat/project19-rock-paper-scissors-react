import React, { useState } from "react";
import ThemeContext from "./Context/ThemeContext";
import HeroSection from "./Components/HeroSection";

const App = () => {
	const defaultTheme = useState("dark");
	return (
		<ThemeContext.Provider value={defaultTheme}>
			<HeroSection />
		</ThemeContext.Provider>
	);
};

export default App;
