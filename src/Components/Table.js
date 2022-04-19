import { useQuery } from "@apollo/client";
import { GET_DATA } from "../graphql/queries";
import { Skeleton } from "./Skeleton";

export function Table() {
	const { error, loading, data } = useQuery(GET_DATA);

	if (loading) return <Skeleton />;
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
