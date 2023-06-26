import Link from 'next/link'
import { PropsWithChildren } from 'react'

const ExternalLink = ({
  href,
  children,
}: PropsWithChildren<{ href: string }>) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}>
    {children}
  </a>
)

export const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-start max-w-4xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link
            href="/"
            className="text-gray-500 hover:text-gray-600 transition">
            私について
          </Link>
          <Link
            href="/skill"
            className="text-gray-500 hover:text-gray-600 transition">
            スキル
          </Link>
          <Link
            href="/project"
            className="text-gray-500 hover:text-gray-600 transition">
            プロジェクト
          </Link>
          <Link
            href="/design"
            className="text-gray-500 hover:text-gray-600 transition">
            デザイン
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://github.com/m-ishioka">
            GitHub
          </ExternalLink>
          <ExternalLink href="https://zenn.dev/missselfi">Zenn</ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/%E6%AD%A3%E5%85%89-%E7%9F%B3%E5%B2%A1-a30691258/">
            LinkedIn
          </ExternalLink>
        </div>
      </div>
    </footer>
  )
}
