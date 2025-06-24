import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import testimonials from "../../data/testimonials";
import TestimonialCard from "../Cards/testimonialCard";
import { useState } from "react";

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const handlePrev = () => {
    setCurrentReview((prev) => {
      const previous = prev - 1;
      return prev === 0 ? 0 : previous;
    });
  };
  const handleNext = () => {
    setCurrentReview((prev) => {
      const next = prev + 1;
      return next === testimonials.length ? 0 : next;
    });
  };
  return (
    <section className="w-full bg-cyan-900/30 backdrop-blur-xs py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between gap-8 py-12 overflow-hidden">
          {/* sliders */}
          <div
            className={`h-44 space-y-3 transition-transform duration-500 ease-in-out`}
            style={{
              transform: `translateY(-${currentReview * 125}%)`,
            }}
          >
            {testimonials.map((reviews, i) => (
              <TestimonialCard key={i} reviews={reviews} />
            ))}
          </div>

          {/* slider controller */}
          <div className="flex items-center gap-3">
            <div className="flex flex-col gap-3">
              <button
                disabled={currentReview === 0}
                onClick={handlePrev}
                className="p-2 rounded-full bg-cyan-500/80 hover:bg-cyan-800 disabled:bg-cyan-800 cursor-pointer"
              >
                <FaChevronUp size={20} />
              </button>

              <button
                onClick={handleNext}
                className="p-2 rounded-full bg-cyan-500/80 hover:bg-cyan-800 cursor-pointer"
              >
                <FaChevronDown size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
