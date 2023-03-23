import { getBaseUrl } from '@/utils/helper'
import { GithubRepository } from '@/app/api/get-pinned-items/route'
import { use } from 'react'
import { GetServerSideProps } from 'next'

async function getData() {
  let res = await fetch(`${getBaseUrl()}/api/get-pinned-items`, {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default function Home() {
  const pinnedItems = use(getData())

  return (
    <div className="flex flex-col gap-4">
      <div className="text-3xl font-semibold">Pinned Repositories</div>
      {pinnedItems &&
        pinnedItems.map((pinnedItem: GithubRepository) => (
          <a
            href={pinnedItem.url}
            target="_blank"
            className="flex flex-col bg-athens-gray-200 hover:bg-athens-gray-300 p-4 rounded-md"
            key={pinnedItem.name}
          >
            <div className="font-semibold text-xl">{pinnedItem.name}</div>
            <div className="mt-1">{pinnedItem.owner.login}</div>
            <div className="flex gap-2 mt-2">
              {pinnedItem.languages &&
                pinnedItem.languages.map((language) => (
                  <div
                    className="text-xs px-2 py-1 rounded-md text-white"
                    style={{ backgroundColor: language.color }}
                    key={language.name}
                  >
                    {language.name}
                  </div>
                ))}
            </div>
            {pinnedItem.description && (
              <div className="mt-2">{pinnedItem.description}</div>
            )}
          </a>
        ))}
    </div>
  )
}
