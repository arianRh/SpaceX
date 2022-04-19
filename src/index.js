import { createRoot } from "react-dom/client";
import { App } from "./Components/App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function Page() {
	return <App />;
}

root.render(<Page />);
