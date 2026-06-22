import CourtardHousePage from "./CourtardHousePage";

function slugToName(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (slug === "the-courtyard-house") {
    return <CourtardHousePage />;
  }

  const name = slugToName(slug);
  return (
    <CourtardHousePage
      notice={`${name} is coming soon. The Courtyard House is available.`}
    />
  );
}
