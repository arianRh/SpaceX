import { ApolloProvider } from "@apollo/client";
import { Header } from "./Header";
import { client } from "../graphql/client";
import { Capsules } from "./Capsules";
import { Capsule } from "./Capsule";
import { Route, Routes } from "react-router-dom";
import "../index.css";

export function App() {
	return (
		<>
			<ApolloProvider client={client}>
				<Header />
				<Routes>
					<Route path='/' element={<Capsules />} />
					<Route path='capsule/:id' element={<Capsule />} />
				</Routes>
			</ApolloProvider>
		</>
	);
}
