import { Check } from "lucide-react";

function About() {
  return (
    <>
      <section className="flex h-[80vh] flex-col bg-white sm:flex-row">
        {/* Row containing two images */}
        <div className="p-2 sm:w-1/2">
          <div className="inline-block h-full w-1/2">
            <div>
              <div id="imageFrame" className="bg-imageFrame m-2 p-4">
                <img src="img/about-1.jpg" alt="" />
              </div>
            </div>
          </div>

          <div className="inline-block h-full w-1/2">
            <div className="flex flex-col">
              <div id="imageFrame" className="bg-imageFrame m-2 p-4">
                <img className="" src="img/about-2.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* First section ends */}

        <div className="px-4 sm:w-1/2">
          <h2 className="my-4 text-primaryBlue">ABOUT ME</h2>
          <h1 className="my-4 text-4xl font-thin">
            I&apos;m a Creative And Professional Artist
          </h1>
          <p className="my-4 text-justify">
            In my cozy studio, I blend pigments and whispers of inspiration. My
            art is a journey—a fusion of alchemy and authenticity. With every
            canvas, I aim to evoke wonder, provoke thought, and ignite joy.
            Thank you for joining me on this artistic adventure. Let’s create
            magic, one artwork at a time.
          </p>
          <p className="my-4 text-justify">
            As an artist, I don’t merely paint; I breathe life into visions.
            When you commission a piece, you’re not hiring a mere artist—you’re
            gaining a collaborator who listens, interprets, and infuses heart
            into every stroke. Whether it’s a cherished portrait, a captivating
            landscape, or a custom illustration, I immerse myself in your story.
            Your satisfaction isn’t just my goal; it’s my masterpiece. Let’s
            transform your ideas into timeless art together.
          </p>
          <ul className="flex flex-wrap">
            <li className="flex w-1/2">
              <Check className="mx-2" /> Quality Arts
            </li>
            <li className="flex w-1/2">
              <Check className="mx-2" /> Custom Works
            </li>
            <li className="flex w-1/2">
              <Check className="mx-2" /> Online Delivery
            </li>
            <li className="flex w-1/2">
              <Check className="mx-2" /> Home Delivery
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default About;
