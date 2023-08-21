import { getBaseUrl } from "@/utils/helper";
import { User } from "@octokit/graphql-schema";
import RepositoryItem from "@/components/RepositoryItem";

export const metadata = {
  title: "Furkan GEZEK | Full Stack Developer",
};

async function getGithubUser() {
  let res = await fetch(`${getBaseUrl()}/api/user`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const user: User = await getGithubUser();

  return (
    <div className="flex flex-col gap-4">
      <div className="text-3xl font-semibold">Pinned Repositories</div>
      {user?.pinnedItems?.nodes &&
        user.pinnedItems.nodes.map((pinnedItem: any) => (
          <RepositoryItem data={pinnedItem} key={pinnedItem.id} />
        ))}
    </div>
  );
}
