"use server";

import dbConnect from "./dbConnect";
import Projects from "./models/ProjectsSchema";

export async function getProjects() {
  try {
    await dbConnect();
    const myProjects = await Projects.find().sort({ _id: -1 }); // Fetch all projects

    return JSON.parse(JSON.stringify(myProjects));
  } catch (error) {
    return { error: "Failed to fetch projects." };
  }
}
