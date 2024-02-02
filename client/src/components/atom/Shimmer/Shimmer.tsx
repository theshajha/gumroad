import clsx from 'clsx'

const ShimmerCard = () => {
    return (
        <div className="relative">
            <div className="absolute z-10 bottom-0 right-0 top-0 left-0 bg-gray-300 animate-pulse rounded"></div>

            <div className="flex cursor-pointer flex-col justify-center items-center p-px border rounded border-[#646464] bg-black overflow-hidden shadow-lg transition-transform transform hover:-translate-x-1 hover:-translate-y-1">
                <div
                    className={clsx(
                        'w-60 h-60 bg-cover bg-center animate-pulse'
                    )}
                />
                <div
                    className={clsx(
                        'flex flex-col justify-center items-center gap-6 self-stretch py-4 px-2 border-t border-t-[#4d4d4d] animate-pulse'
                    )}
                >
                    <div
                        className={clsx(
                            'self-stretch text-white text-base text-left font-[mabry pro] leading-[normal] animate-pulse'
                        )}
                    >
                        Loading...
                    </div>
                    <div
                        className={clsx(
                            'flex flex-col justify-center items-center gap-3 self-stretch animate-pulse'
                        )}
                    >
                        <div
                            className={clsx(
                                'flex items-center gap-2.5 self-stretch animate-pulse'
                            )}
                        >
                            <div
                                className={clsx(
                                    'lightgray 50% / cover no-repeat w-5 h-5 rounded-[0.625rem] border-[0.333px] border-[#ec9c42] bg-cover bg-center animate-pulse'
                                )}
                            />
                            <div
                                className={clsx(
                                    'text-white font-[mabry pro] text-sm leading-[normal] underline animate-pulse'
                                )}
                            >
                                Loading...
                            </div>
                        </div>
                        <div
                            className={clsx(
                                'flex items-center gap-2.5 self-stretch animate-pulse'
                            )}
                        >
                            <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {/* SVG Path here */}
                            </svg>
                            <div
                                className={clsx(
                                    'text-white font-[mabry pro] text-sm hover:leading-[normal] animate-pulse'
                                )}
                            >
                                Loading...
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={clsx(
                        'flex relative flex-col justify-center items-start gap-2.5 self-stretch p-2 border-t border-t-[#4d4d4d] animate-pulse'
                    )}
                >
                    <div className="absolute z-0 bottom-0 right-0 top-0 left-0 bg-gray-300 animate-pulse rounded"></div>
                    <svg
                        width={54}
                        height={24}
                        viewBox="0 0 54 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute"
                    >
                        {/* SVG Path here */}
                    </svg>
                    <div
                        className={clsx(
                            'text-black font-[mabry pro] text-sm leading-[normal] z-10 ml-1 animate-pulse'
                        )}
                    ></div>
                </div>
            </div>
        </div>
    )
}
export default ShimmerCard
