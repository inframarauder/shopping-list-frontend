import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Provider as ItemsProvider } from "./contexts/ItemsContext";

const App = () => {
	return (
		<>
			<Header />
			<ItemsProvider>
				<Main />
			</ItemsProvider>
			<Footer />
		</>
	);
};

export default App;
