import Card1 from "@/component/card";
import Hero from "@/component/Hero";
import SurviceCard from "@/component/surviceCard";

export default function Home() {
  return (
    <>
      <Hero />
      <div>
        <Card1 />
        <SurviceCard/>
      </div>
    </>
  );
}

