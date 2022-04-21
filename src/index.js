import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./Components/App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function Page() {
	return (
		<BrowserRouter>
			<App />
		</BrowserRouter>
	);
}

root.render(<Page />);
