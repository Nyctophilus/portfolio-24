import { getProjects } from "@/actions";
import PortfolioPage from "./PortfolioPage";

const Portfolio = async () => {
  // sasd
  const projects = await getProjects();
  return <PortfolioPage projects={projects} />;
};

export default Portfolio;
