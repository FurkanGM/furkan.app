import React from "react";
import { HiStar } from "react-icons/hi2";
import { Repository } from "@octokit/graphql-schema";

type RepositoryItemProps = {
  data: Repository;
};

const RepositoryItem = ({ data: repository }: RepositoryItemProps) => {
  return (
    <a
      href={repository.url}
      target="_blank"
      className="flex flex-col rounded-md bg-athens-gray-200 p-4 hover:bg-athens-gray-300 dark:bg-neutrals-700 dark:hover:bg-neutrals-600"
      key={repository.name}
      aria-label={repository.name}
    >
      <div className="flex items-center">
        <div className="text-xl font-semibold">{repository.name}</div>
        <div className="ml-2 flex items-center font-medium">
          <HiStar className="mr-1 text-yellow-500" /> {repository.stargazerCount}
        </div>
      </div>
      <div className="mt-1">{repository.owner.login}</div>
      <div className="mt-2 flex flex-wrap gap-2">
        {repository.languages?.nodes &&
          repository.languages.nodes
            .filter((language) => language)
            .map(
              (language) =>
                language && (
                  <div
                    className="rounded-md px-2 py-1 text-xs text-white"
                    style={{ backgroundColor: language.color as string }}
                    key={language.name}
                  >
                    {language.name}
                  </div>
                )
            )}
      </div>
      {repository.description && <div className="mt-2">{repository.description}</div>}
    </a>
  );
};

export default RepositoryItem;
