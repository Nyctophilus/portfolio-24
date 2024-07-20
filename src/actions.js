"use server";

import { revalidatePath } from "next/cache";
import dbConnect from "./dbConnect";
import Projects from "./models/ProjectsSchema";

// export const revalidate = 0

export async function getProjects() {
  // noStore();
  try {
    await dbConnect();
    const myProjects = await Projects.find().sort({ _id: -1 }); // Fetch all projects

    revalidatePath("/");
    revalidatePath("/portfolio");
    return JSON.parse(JSON.stringify(myProjects));
  } catch (error) {
    return { error: "Failed to fetch projects." };
  }
}

