import { NextPage } from 'next'
import Link from 'next/link'

import { Container } from '@components/Container'

const NotFound: NextPage = () => {
  return (
    <Container title="404 – Lee Robinson">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          404 Not found
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          指定されたファイルまたは、ディレクトリは存在しません。
        </p>
        <Link
          href="/"
          className="p-1 sm:p-4 w-64 font-bold mx-auto bg-gray-200 dark:bg-gray-800 text-center rounded-md text-black dark:text-white">
          Return Home
        </Link>
      </div>
    </Container>
  )
}

export default NotFound
