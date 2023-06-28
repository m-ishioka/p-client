import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Container } from '../components/Container'

const Home: NextPage = () => {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start w-full max-w-3xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row w-full items-start justify-between">
          <div className="flex flex-col pr-8">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
              石岡 正光
            </h1>
            <h2 className="text-gray-700 dark:text-gray-200 mb-4">
              ソフトウェアエンジニア
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-16">
              フロントエンドエンジニアの領域をメインにエンジニアをしています。
            </p>
          </div>
          <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 ml-auto">
            <Image
              alt="石岡　正光"
              height={176}
              width={176}
              src="/portfolio.jpg"
              sizes="30vw"
              priority
              className="rounded-full filter"
            />
          </div>
        </div>
        <div className="mb-8 prose dark:prose-dark leading-6 w-full max-w-max">
          <h2>Links</h2>
          <ul>
            <li>
              GitHub:{' '}
              <Link target="_blank" href="https://github.com/m-ishioka">
                @m-ishioka
              </Link>
            </li>
            <li>
              Zenn:{' '}
              <Link target="_blank" href="https://zenn.dev/missselfi">
                masa
              </Link>
            </li>
            <li>
              LinkedIn:{' '}
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/%E6%AD%A3%E5%85%89-%E7%9F%B3%E5%B2%A1-a30691258/">
                石岡 正光
              </Link>
            </li>
          </ul>
          <h2>職務要約</h2>
          <p>
            高校卒業後、土木エンジニア、個人事業主を経験し、システム開発会社においてエンジニアとして、システム開発に従事してきました。
            <br />
            <br />
            システム開発においては、自社サービスの最初期の立ち上げに参画し、年間売り上げ3億円規模のサービスへのグロースを経験しています。
            <br />
            また、受託開発においては月間2000万MAUのサービスの運用保守及び、開発に携わった経験があります。
            <br />
            担当業務としては、エンジニアとして、要件定義・基本設計・詳細設計・実装・テスト・運用まで一通りの業務経験をしてきました。
          </p>
          <h2>個人的な制作物</h2>
          <ul>
            <li>
              分析ツール:{' '}
              <Link
                target="_blank"
                href="https://lookerstudio.google.com/reporting/390cabdd-627d-48e5-a304-c07d1530d4d7">
                日経平均先物手口情報
              </Link>
            </li>
            <li>
              分析ツール:{' '}
              <Link
                target="_blank"
                href="https://lookerstudio.google.com/reporting/ddfc2e58-eaf8-4816-aa60-d57288758b94">
                日経平均オプション手口情報
              </Link>
            </li>
          </ul>
          <h2>このサイトで使用している技術スタック</h2>
          <p>
            Typescript・React・Nextjs・go・grpc-web・mysql・docker・Cloud Run.
          </p>
        </div>
        <span className="h-16" />
      </div>
    </Container>
  )
}

export default Home
