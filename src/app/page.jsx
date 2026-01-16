import Banner from "@/component/Banner";
import Card1 from "@/component/card";
import Hero from "@/component/Hero";
import ProjectSummaryUi from "@/component/ProjectSummary";
import SurviceCard from "@/component/surviceCard";

export default function Home() {
  return (
    <>
      <div>
        <Banner/>
        <ProjectSummaryUi/>
        <Hero />
      <div>
        <Card1 />
        <SurviceCard/>
      </div>
      </div>
    </>
  );
}

