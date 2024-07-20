import { getProjects } from "@/actions";
import HomePage from "@/components/containers/HomePage";

const Homepage = async () => {
  const projects = await getProjects();

  return <HomePage projects={projects} />;
};

export default Homepage;
