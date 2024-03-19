import "./Banner.css";
const Banner = () => {
  return (
    <section className="banner flex items-center justify-center relative z-0 mt-[-114px]">
      <div className="container text-center ">
        <div className="w-1/2 mx-auto">
          <h2 className="text-5xl text-orange-600 font-title font-semibold">
            Welcome to Our Shop
          </h2>
          <p className="text-gray font-body mt-4">
            Lorem ipsum is a placeholder text commonly used to demonstrate the
            visual form of a document or a typeface without relying on
            meaningful content. Lorem ipsum may be used as a placeholder before
            the final copy is available.
          </p>
          <div className="flex gap-3 mx-auto justify-center mt-8">
            <button className="btn btn-primary bg-orange-600 font-body px-8">
              Shop Now
            </button>
            <button className="btn btn-outline-primary border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white font-body px-8">
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
