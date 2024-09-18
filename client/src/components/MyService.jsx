function MyService() {
  return (
    <section className="my-10 flex flex-col items-center bg-imageFrame">
      <h1 className="my-4 text-primaryBlue">MY SERVICES</h1>
      <h2 className="my-6 text-center text-4xl font-thin sm:w-1/3">
        I Provide The Best Professional Artwork In The State
      </h2>
      <div className="flex w-full flex-col sm:flex-row sm:justify-around">
        {/* Works Categories */}
        <div>
          <div className="bg-white p-4 pb-8 sm:h-[400px]">
            <img
              className="h-full w-full object-cover"
              src="img/pencil-portraits/pencil-portrait-1.jpg"
              alt="A Pencil Portrait"
            />
          </div>
          <p className="bg-white text-center text-2xl font-bold text-primaryBlue">
            Pencil Portraits
          </p>
        </div>

        <div>
          <div className="bg-white p-4 pb-8 sm:h-[400px]">
            <img
              className="h-full w-full object-cover"
              src="img/color-portrait/color-portrait-1.jpg"
              alt="A Color Portrait"
            />
          </div>
          <p className="bg-white text-center text-2xl font-bold text-primaryBlue">
            Color Portraits
          </p>
        </div>

        <div>
          <div className="bg-white p-4 pb-8 sm:h-[400px]">
            <img
              className="h-full w-full object-cover"
              src="img/custom-works/fabric-painting.jpg"
              alt=""
            />
          </div>
          <p className="bg-white text-center text-2xl font-bold text-primaryBlue">
            Custom Works
          </p>
        </div>

        <div>
          <div className="bg-white p-4 pb-8 sm:h-[400px]">
            <img
              src="img/caricature/single.jpg"
              className="h-full w-full object-cover"
              alt=""
            />
          </div>
          <p className="bg-white text-center text-2xl font-bold text-primaryBlue">
            Caricature
          </p>
        </div>
      </div>
    </section>
  );
}

export default MyService;
