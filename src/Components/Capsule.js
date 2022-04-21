import { useQuery } from "@apollo/client";
import { CAPSULE } from "../graphql/queries";
import { useParams } from "react-router-dom";
import { CapsuleSkeleton } from "./CapsuleSkeleton";

export function Capsule() {
	const { id } = useParams();

	const { error, loading, data } = useQuery(CAPSULE, {
		variables: { id },
	});

	if (loading) return <CapsuleSkeleton />;
	if (error) return <p>error</p>;

	return (
		<div className='flex  justify-center'>
			<div className='basis-full md:basis-8/12 xl:basis-2/5 py-5 px-4 bg-gray-200/50 mt-10 shadow-xl'>
				<div className='flex flex-wrap flex-row'>
					<div className='basis-full sm:basis-1/3 border-r'>
						<li className='border-b py-3 font-normal text-sm'>
							<span className='font-semibold text-base'>Name : </span>
							{data.capsule.dragon.name}
						</li>
						<li className='border-b py-3  font-normal text-sm'>
							<span className='font-semibold text-base'>ID : </span>
							{data.capsule.id}
						</li>
						<li className='border-b py-3  font-normal text-sm'>
							<span className='font-semibold text-base'>Diameter : </span>
							{data.capsule.dragon.diameter.meters}
						</li>
						<li className='border-b py-3  font-normal text-sm'>
							<span className='font-semibold text-base'>Weight : </span>
							{data.capsule.dragon.dry_mass_kg} KG
						</li>
						<li className='border-b py-3  font-normal text-sm'>
							<span className='font-semibold text-base'>Height : </span>
							{data.capsule.dragon.height_w_trunk.meters} M
						</li>
					</div>
					<div className='basis-full sm:pl-4  sm:basis-2/3 content-center grid'>
						<li className='border-y py-3  font-normal text-sm text-justify'>
							<span className='font-semibold text-base'>Description : </span>
							{data.capsule.dragon.description}
						</li>
					</div>
				</div>
			</div>
		</div>
	);
}
