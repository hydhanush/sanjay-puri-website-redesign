import type { Metadata } from "next";
import ProjectsPage from "./ProjectsPage";

export const metadata: Metadata = {
  title: "Projects — Sanjay Puri Architects",
  description:
    "Selected works across residential, cultural, commercial, and hospitality typologies by Sanjay Puri Architects.",
};

export default function Page() {
  return <ProjectsPage />;
}
