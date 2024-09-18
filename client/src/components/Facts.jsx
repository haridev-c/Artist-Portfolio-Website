function Facts() {
  return (
    <>
      <section className="flex min-h-[80vh] flex-col items-center">
        <h1 className="my-8 text-primaryBlue">WHY CHOOSE ME</h1>
        <h4 className="mb-14 px-2 text-center text-4xl font-thin">
          The Leading Design Studio In The State
        </h4>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-around">
          {/* First Card */}
          <div className="m-2 flex h-[80vw] flex-col items-center justify-center bg-imageFrame sm:h-[30vw] sm:w-1/3">
            <p className="text-7xl text-primaryBlue">15</p>
            <p className="my-6 font-bold">Award Winning</p>
            <p className="px-10 text-center">
              Have participated in various competitions as well as been
              recognized in various exhibitions for my works
            </p>
          </div>

          <div className="m-2 flex h-[80vw] flex-col items-center justify-center bg-imageFrame sm:h-[35vw] sm:w-1/3">
            <p className="text-7xl text-primaryBlue">10</p>
            <p className="my-6 font-bold">Years Experience</p>
            <p className="px-10 text-center">
              Have worked for over a decade and satisfied customers throughout
              the state as well as the country
            </p>
          </div>

          <div className="m-2 flex h-[80vw] flex-col items-center justify-center bg-imageFrame sm:h-[30vw] sm:w-1/3">
            <p className="text-7xl text-primaryBlue">500</p>
            <p className="my-6 font-bold">Happy Clients</p>
            <p className="px-10 text-center">
              More than 500 happy customers throughout my 10 years career of
              creating art
            </p>
          </div>
        </div>
      </section>
      {/* <!-- Facts End --> */}
    </>
  );
}

export default Facts;
