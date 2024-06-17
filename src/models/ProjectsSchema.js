import { Schema, model, models } from "mongoose";

const ProjectSchema = new Schema({
  title: String,
  description: String,
  image: String,
  gitUrl: String,
  previewUrl: String,
  skills: [String],
});

const Projects = models.projects || model("projects", ProjectSchema);
export default Projects;
