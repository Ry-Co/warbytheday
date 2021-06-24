const MainCTA = () => {
  return (
    <div className="flex flex-col max-w-screen md:h-56 bg-white rounded-lg shadow-lg overflow-hidden md:flex-row my-10">
      <div className="md:flex items-center justify-center md:w-1/2 md:bg-gray-800">
        <div className="py-6 px-8 md:py-0">
          <h2 className="text-gray-700 text-2xl font-bold md:text-gray-100">
            Daily WW2 History Newsletter!
          </h2>
          <p className="mt-2 text-gray-600 md:text-gray-300">
            Look back on the most important events of the war with our daily newsletter. 
          </p>
          <p className="mt-2 text-gray-600 md:text-gray-300">
            Want to see what we have to offer? Checkout the <b className="md:text-gray-50">sample below!</b>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center pb-6 md:py-0 md:w-1/2  border-gray-700">
        <form>
          <div className="flex flex-col rounded-lg overflow-hidden sm:flex-row">
            <input
              className="w-full py-3 px-4 bg-gray-200 text-gray-800 border-gray-300 border-2 outline-none placeholder-gray-500 focus:bg-gray-100"
              type="text"
              name="email"
              placeholder="Enter your email"
            />
            <button onClick={() =>{console.log('SUBSCRIBE BUTTON IN MAINCTA')}} className="py-3 px-4 bg-gray-700 text-gray-100 font-semibold uppercase hover:bg-gray-600">
              subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MainCTA