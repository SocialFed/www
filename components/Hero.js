import { ChevronRightIcon, StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'

export default function Hero() {
    return (
        <div className="bg-white pb-8 sm:pb-12 lg:pb-12">
            <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
                <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
                    <div>
                        <div className="">
                            <div>
                                <a href="#" className="inline-flex space-x-4">
                                    <span className="rounded bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-600 tracking-wide uppercase">
                                        Coming Soon
                                    </span>
                                    <span className="inline-flex items-center text-sm font-medium text-indigo-600 space-x-1">
                                        <span>What to expect</span>
                                        <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                                    </span>
                                </a>
                            </div>
                            <div className="mt-6 sm:max-w-xl">
                                <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                                    P2P Federated <br /> Social Media
                                </h1>
                                <p className="mt-6 text-xl text-gray-500">
                                    Own your data, and discover new content through your network, not a centrally controlled algorithm.
                                </p>
                            </div>
                            {/* <div className="mt-6">
                                <div className="inline-flex items-center divide-x divide-gray-300">
                                    <div className="flex-shrink-0 flex pr-5">
                                        <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                                        <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                                        <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                                        <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                                        <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                                    </div>
                                    <div className="min-w-0 flex-1 pl-5 py-1 text-sm text-gray-500 sm:py-3">
                                        <span className="font-medium text-gray-900">Rated 5 stars</span> by over{' '}
                                        <span className="font-medium text-indigo-600">500 beta users</span>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>

                <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
                    <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                        <div className="hidden sm:block">
                            <div className="absolute inset-y-0 left-1/2 w-screen bg-gray-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full" />
                            <svg
                                className="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0"
                                width={404}
                                height={392}
                                fill="none"
                                viewBox="0 0 404 392"
                            >
                                <defs>
                                    <pattern
                                        id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                                        x={0}
                                        y={0}
                                        width={20}
                                        height={20}
                                        patternUnits="userSpaceOnUse"
                                    >
                                        <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                    </pattern>
                                </defs>
                                <rect width={404} height={392} fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)" />
                            </svg>
                        </div>
                        <div className="relative px-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 h-full w-full">
                            <Image alt='SocialFed demonstration hero image' src="hero.jpg" layout="responsive" width={2752} height={1984} priority={true} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}