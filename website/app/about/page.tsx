import type { Metadata } from "next";
import AboutPage from "./AboutPage";

export const metadata: Metadata = {
  title: "About — Sanjay Puri Architects",
  description:
    "Three decades of contextually designed, sustainably built architecture. The story of Sanjay Puri Architects.",
};

export default function Page() {
  return <AboutPage />;
}
