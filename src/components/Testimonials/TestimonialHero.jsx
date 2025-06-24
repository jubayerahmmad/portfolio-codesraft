const TestimonialHero = () => {
  return (
    <div className="relative w-full">
      <div className="px-4">
        <div
          className="text-center py-16"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/YxqT50d/feedback-rating.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="overlay"></div>

          <div className="relative pt-24 flex flex-col items-center space-y-4">
            <h3 className="section-header">WHAT OTHERS SAY</h3>
            <h2 className="text-2xl md:text-5xl font-extrabold text-white text-center">
              <span className="text-cyan-400">Testimonials</span> & Feedback
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialHero;
