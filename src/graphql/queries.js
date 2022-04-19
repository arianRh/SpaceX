import { gql } from "@apollo/client";

export const GET_DATA = gql`
	query GetRates {
		capsules {
			dragon {
				name
			}
			landings
			missions {
				name
			}
			original_launch
			status
			id
		}
	}
`;
