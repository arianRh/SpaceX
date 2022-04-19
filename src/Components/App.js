import { ApolloProvider } from "@apollo/client";
import { Header } from "./Header";
import { client } from "../graphql/client";
import { Table } from "./Table";
import "../index.css";

export function App() {
	return (
		<>
			<ApolloProvider client={client}>
				<Header />
				<Table />
			</ApolloProvider>
		</>
	);
}
