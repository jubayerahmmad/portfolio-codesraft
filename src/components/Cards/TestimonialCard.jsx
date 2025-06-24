import { FaQuoteRight, FaRegStar, FaStar } from "react-icons/fa6";
const TestimonialCard = ({ reviews }) => {
  return (
    <div className="relative rounded-xl p-6 bg-cyan-700/40 backdrop-blur-xl w-full">
      <div className="absolute right-4 bottom-4">
        <FaQuoteRight size={50} color="cyan" />
      </div>
      {/* rating */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, index) =>
            index < reviews.rating ? (
              <FaStar key={index} size={20} color="orange" />
            ) : (
              <FaRegStar key={index} size={20} color="orange" />
            )
          )}
        </div>
      </div>
      {/* text */}
      <p className="py-3 text-sm md:text-lg">{reviews.message}</p>
      {/* profile */}
      <div className="flex items-center gap-3">
        <img
          src={reviews.avatar}
          alt="reviewer profile"
          className="rounded-full w-10 border-2 border-cyan-300/70"
        />
        <div>
          <h1 className="font-semibold">{reviews.name}</h1>
          <p className="text-sm">{reviews.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
