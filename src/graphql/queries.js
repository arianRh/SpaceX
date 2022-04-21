import { gql } from "@apollo/client";

export const CAPSULES = gql`
	query Capsules {
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

export const CAPSULE = gql`
	query Capsule($id: ID!) {
		capsule(id: $id) {
			dragon {
				description
				diameter {
					meters
				}
				dry_mass_kg
				height_w_trunk {
					meters
				}
				wikipedia
				name
			}
			id
		}
	}
`;
