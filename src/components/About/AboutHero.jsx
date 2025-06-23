const AboutHero = () => {
  return (
    <div className="relative w-full">
      <div className="px-4">
        <div
          className="text-center py-16"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/HSvKcmc/fotis-fotopoulos-LJ9-KY8p-IH3-E-unsplash.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          {/* overlay */}
          <div className="overlay"></div>
          <div className="relative pt-24 flex justify-center flex-col items-center space-y-4 ">
            <h3 className="section-header">GET TO KNOW ME</h3>
            <h2 className="text-2xl md:text-5xl font-extrabold">
              <span className="text-cyan-400">My Journey</span> in Web
              Development
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
