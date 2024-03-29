import dayjs from 'dayjs'

export const PROJECT_LIST = [
  {
    id: 'wordpress',
    name: 'wordpress開発業務',
    start_at: dayjs('2019-7'),
    end_at: dayjs('2019-9'),
    team_size: 1,
    role: 'PG',
    language: ['PHP', 'JavaScript', 'pug', 'Sass', 'HTML', 'CSS', 'SQL'],
    db: ['MySQL'],
    os: ['Linux', 'CentOS'],
    mw: [
      'Apache',
      'nginx',
      'KUSANAGI',
      'Wordpress',
      'GitHub',
      'GitBacket',
      'GCP',
      'VScode',
    ],
    process: [false, true, true, true, true, true, true],
    work: 'フロントコーディング wordpress 組み込み 環境構築',
    skill:
      '顧客調整を含めた、プロジェクトの進め方のノウハウ REST及びWEBに関する関連知識',
    content:
      '受託開発でしたので、工期の範囲内でお客様の要件にリソース内で最大限応えられるような提案を意識して仕事に取り組みました。',
    weight: 50,
  },
  {
    id: 'cm',
    name: '自社サービス開発業務（Web・スマホアプリ）',
    start_at: dayjs('2019-7'),
    end_at: dayjs('2023-1'),
    team_size: 6,
    role: 'SE/AE・PG',
    language: [
      'Javascript',
      'TypeScript',
      'ReactNative',
      'React',
      'Next.js',
      'PHP',
      'Smarty',
      'Swift',
      'AndroidJava',
      'SQL',
      'pug',
      'Sass',
      'HTML',
      'CSS',
    ],
    db: ['Postgres', 'GCS (Google Cloud Storage)'],
    os: ['Linux', 'CentOS'],
    mw: [
      'nginx',
      'GitHub',
      'GitBacket',
      'GCP',
      'Xcode',
      'AndroidStudio',
      'Docker',
      'VScode',
    ],
    process: [true, true, true, true, true, true, true],
    work: 'スマホアプリフロントエンド構築・バックエンド構築 Webフロントエンド構築・API構築 決済システム構築',
    skill:
      'アプリケーション構造設計 Web/スマホアプリケーションパフォーマンスチューニング',
    content:
      '自社サービスの立ち上げよりプログラマーとして参画し、2019年4月以降はメインのシステムエンジニアとして、主に追加機能の用件定義〜実装まで担当し、自社サービスのグロースに貢献しました。',
    weight: 50,
  },
  {
    id: 'ma',
    name: '月間PV2000万規模のサービス開発業務',
    start_at: dayjs('2020-9'),
    end_at: dayjs('2021-3'),
    team_size: 20,
    role: 'SE/PG',
    language: ['PHP', 'Symfony', 'TypeScript', 'Vue', 'Ruby', 'Sass'],
    db: ['MySQL', 'MongoDB', 'S3'],
    os: ['Linux', 'CentOS'],
    mw: ['Apache', 'AWS', 'GitHub', 'VScode'],
    process: [false, true, true, true, true, true, true],
    work: '基本設計書、詳細設計書、テスト仕様書などのドキュメント作成　バックエンドシステム構築　フロントエンド構築　テスト自動化ツールの作成',
    skill: '業務システム設計のノウハウ スクラム開発のノウハウ',
    content:
      '広告業務の自動化・リテンションメール配信システム構築など・業務系システムの構築をメインに行なっておりました。',
    weight: 50,
  },
  {
    id: 'cmtob',
    name: 'to B向け自社サービスの開発業務',
    start_at: dayjs('2021-6'),
    end_at: dayjs('2021-11'),
    team_size: 3,
    role: 'SE/PG',
    language: ['TypeScript', 'React', 'NestJS', 'Electron'],
    db: ['MySQL'],
    os: ['Linux', 'CentOS'],
    mw: ['nginx', 'GitHub', 'GCP', 'Docker', 'VScode'],
    process: [true, true, true, true, true, true, true],
    work: '要件定義書、基本設計書、詳細設計書、テスト仕様書などのドキュメント作成　バックエンドシステム構築　フロントエンド構築　CI/CD構築',
    skill: 'ソケット通信に関連するノウハウ CI/CDに関するノウハウ',
    content:
      'リードエンジニアとして参画、プロジェクトのリリースまで顧客折衝・用件定義〜テスト・リリースフェーズまでをメインで担当しました。',
    weight: 50,
  },
  {
    id: 'pay',
    name: 'to b向け決済システムの開発業務',
    start_at: dayjs('2022-4'),
    end_at: dayjs('2022-11'),
    team_size: 2,
    role: 'SE/PG',
    language: ['PHP', 'pug', 'Sass'],
    db: ['PostgreSQL'],
    os: ['Linux', 'CentOS'],
    mw: ['wordpress', 'nginx', 'GitHub', 'GCP', 'Docker', 'VScode'],
    process: [false, true, true, true, true, true, true],
    work: 'フロントエンド・API構築',
    skill: '',
    content:
      '決済のプラットフォーム構築を受託し、基本設計〜実装までを担当しています。',
    weight: 50,
  },
  {
    id: 'ec',
    name: 'ECサイトシステム開発',
    start_at: dayjs('2022-4'),
    end_at: dayjs('2022-6'),
    team_size: 2,
    role: 'SE/PG',
    language: ['PHP', 'Symfony', 'Sass'],
    db: ['MySQL'],
    os: ['Linux', 'CentOS'],
    mw: ['ec-cube', 'nginx', 'GitHub', 'GCP', 'VScode'],
    process: [true, true, true, true, true, true, true],
    work: 'フロントエンド・バックエンド構築',
    skill: '',
    content:
      'ECサイト構築を受託、プロジェクトマネージャーとして顧客折衝・用件定義〜リリースまでを一貫して担当しています。',
    weight: 50,
  },
]

export const PROJECT_TREE_MAP = PROJECT_LIST.map(
  ({ name, id, weight, start_at, end_at }) => ({
    name,
    key: id,
    size: weight * (end_at.unix() - start_at.unix()),
  })
)
