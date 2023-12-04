import Testimonial from "./Testimonial";

const Testimonials = () => {
  return (
    <div className="section py-10 mb-16">
      <h2 className="text-4xl pb-1 border-b-2 border-primaryColor2">
        Testimonial
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7 mt-10">
        <Testimonial
          title={"Brian"}
          description={
            "Bought an iphone from this online shop, and the service is pretty good!"
          }
        />
        <Testimonial
          title={"Mary Jane"}
          description={"definitely love their service!"}
        />
        <Testimonial
          title={"Oris Watson"}
          description={
            "Customer service is pretty good and polite. I got the product easily"
          }
        />
        <Testimonial
          title={"James"}
          description={
            "First time experience buying a laptop from online and must say, it was really good!"
          }
        />
      </div>
    </div>
  );
};

export default Testimonials;
