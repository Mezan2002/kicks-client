import Categories from "@/components/home/Categories";
import HeroBanner from "@/components/home/HeroBanner";
import NewDrops from "@/components/home/NewDrops";
import Reviews from "@/components/home/Reviews";

const Home = () => {
  return (
    <div className="mx-4 md:mx-[60px]">
      <HeroBanner />
      <NewDrops />
      <Categories />
      <Reviews />
    </div>
  );
};

export default Home;
