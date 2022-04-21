export function CapsuleSkeleton() {
	return (
		<div className='flex  justify-center'>
			<div className='basis-full md:basis-8/12 xl:basis-2/5 py-5 px-4 bg-gray-200/50 mt-10 shadow-xl'>
				<div className='flex flex-wrap flex-row'>
					<div className='basis-full pr-3 sm:basis-1/3 border-r'>
						<div className='border-b my-3 animate-pulse w-full rounded-md h-5 bg-gray-200'></div>
						<div className='border-b my-3 animate-pulse w-full rounded-md h-5 bg-gray-200'></div>
						<div className='border-b my-3 animate-pulse w-full rounded-md h-5 bg-gray-200'></div>
						<div className='border-b my-3 animate-pulse w-full rounded-md h-5 bg-gray-200'></div>
						<div className='border-b my-3 animate-pulse w-full rounded-md h-5 bg-gray-200'></div>
					</div>
					<div className='basis-full sm:pl-4  sm:basis-2/3 content-center grid'>
						<div className='border-b  animate-pulse w-full rounded-md h-40 bg-gray-200'></div>
					</div>
				</div>
			</div>
		</div>
	);
}
