import Link from 'next/link'

export default function about() {
    return (
        <div>
            <div class="flex items-center justify-center h-screen bg-gray-200">
                <div class="container">
                    <div class="bg-white rounded-lg shadow-lg p-5 md:p-20 mx-2">
                        <div class="text-center">
                            <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                                Coming Soon!
                            </h2>
                            <h3 class='text-xl md:text-3xl mt-10'>This page is currently under construction</h3>
                            <p class="text-md md:text-xl mt-10">Apologies for the inconvience</p>
                        </div>
                        <div class="flex flex-wrap mt-10 justify-center">
                            <div class="m-3">
                                <Link href="/">
                                    <a href="../" title="Quicktoolz On Facebook"
                                        class="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-blue-600 hover:border-blue-600 hover:bg-blue-600 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                                        <span class="mx-auto">Home</span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}