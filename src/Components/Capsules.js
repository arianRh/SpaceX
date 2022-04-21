import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { CAPSULES } from "../graphql/queries";
import { CapsulesSkeleton } from "./CapsulesSkeleton";

export function Capsules() {
	const { error, loading, data } = useQuery(CAPSULES);

	if (loading) return <CapsulesSkeleton />;
	if (error) return <p>error</p>;

	return (
		<div className='flex justify-center'>
			<div className='basis-full md:basis-11/12 xl:basis-2/4 overflow-x-auto'>
				<div className='relative overflow-x-auto shadow-md sm:rounded-lg h-96'>
					<table className='w-full text-sm text-left text-gray-500'>
						<thead className='text-xs sticky top-0 text-gray-700 uppercase bg-gray-50/90'>
							<tr>
								<th className='px-6 py-3'>Name</th>
								<th className='px-6 py-3'>Landings</th>
								<th className='px-6 py-3'>Mission name</th>
								<th className='px-6 py-3'>Original lunch</th>
								<th className='px-6 py-3'>Status</th>
								<th className='px-6 py-3'>More info</th>
							</tr>
						</thead>
						<tbody>
							{data.capsules.map((res) => {
								return (
									<tr
										key={res.id}
										className='bg-white border-b hover:bg-gray-100/25 '
									>
										<th
											scope='row'
											className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'
										>
											{res.dragon.name}
										</th>
										<td className='px-6 py-4'>{res.landings}</td>
										<td className='px-6 py-4'>{res.missions[0]?.name}</td>
										<td className='px-6 py-4'>{res.original_launch}</td>
										<td className='px-6 py-4'>{res.status}</td>
										<td className='px-6 py-4'>
											<Link
												to={`/capsule/${res.id}`}
												className='text-blue-500 hover:text-blue-800 hover:underline'
											>
												More
											</Link>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
