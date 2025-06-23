import Hero from "../components/Home/Hero";
import MyServices from "../components/Home/MyServices";
import Projects from "../components/Home/Projects";
import WhyMe from "../components/Home/WhyMe";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <WhyMe />
      <MyServices />
      <Projects />
    </div>
  );
};

export default Home;
