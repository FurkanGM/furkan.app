import { NextResponse } from "next/server";
import { User } from "@octokit/graphql-schema";
import { graphql } from "@octokit/graphql";

export async function GET(request: Request) {
  const user = await getUser();

  return NextResponse.json(user);
}

async function getUser(): Promise<User> {
  const { user } = await graphql<{
    user: User;
  }>(
    `
      {
        user(login: "FurkanGM") {
          pinnedItems(first: 10) {
            nodes {
              ... on Repository {
                id
                name
                description
                url
                stargazerCount
                owner {
                  login
                }
                languages(first: 10, orderBy: { direction: DESC, field: SIZE }) {
                  nodes {
                    ... on Language {
                      name
                      color
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
    {
      headers: {
        authorization: `bearer ${process.env.GITHUB_TOKEN}`,
      },
    }
  );

  return user;
}
