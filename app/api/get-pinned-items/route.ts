import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const userPinnedItems = await getPinnedItems();
  let repositories: GithubRepository[] = [];

  for (const pinnedItem of userPinnedItems.data.user.pinnedItems.nodes) {
    const repositoryData = await getRepository(pinnedItem);

    repositories.push({
      ...pinnedItem,
      ...repositoryData.data.repository,
      languages: repositoryData.data.repository.languages.nodes,
    });
  }

  return NextResponse.json(repositories);
}

export interface GithubRepository {
  name: string;
  description?: string;
  url: string;
  stargazerCount: string;
  owner: {
    login: string;
  };
  languages?: Array<{
    name: string;
    color: string;
  }>;
}

async function doRequest(query: string) {
  const req = await fetch("https://api.github.com/graphql", {
    next: {
      revalidate: 0,
    },
    method: "POST",
    headers: {
      Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
    },
    body: JSON.stringify({
      query,
    }),
  });

  return await req.json();
}

async function getPinnedItems() {
  return doRequest(`{
		user(login: "FurkanGM") {
    	pinnedItems(first: 10) {
				nodes {
					... on Repository {
						name,
						owner {
							login
						},
					}
				}
			}
		}
	}`);
}

async function getRepository(repository: GithubRepository) {
  return doRequest(`{
		repository(name: "${repository.name}", owner: "${repository.owner.login}") {
			description,
			url,
      stargazerCount,
			languages(first: 10, orderBy: {direction: DESC, field: SIZE}) {
				nodes {
					name
					color,
				},
			}
		}
	}`);
}
