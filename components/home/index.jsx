import Categories from "@/components/home/Categories";
import HeroBanner from "@/components/home/HeroBanner";
import NewDrops from "@/components/home/NewDrops";

const Home = () => {
  return (
    <div className="mx-[60px]">
      <HeroBanner />
      <NewDrops />
      <Categories />
    </div>
  );
};

export default Home;
