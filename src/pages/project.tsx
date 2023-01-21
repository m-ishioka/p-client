import { Suspense, useEffect, useMemo, useRef, useState } from 'react'

import Container from '../components/Container'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import { PROJECT_LIST, PROJECT_TREE_MAP } from '@constants/project'
import { Treemap } from 'recharts'

function ListCard({
  id,
  name,
  start_at,
  end_at,
  team_size,
  role,
  language,
  db,
  os,
  mw,
  process,
  work,
  skill,
  content,
}: typeof PROJECT_LIST[number]) {
  const processResult = useMemo(() => {
    return (
      <>
        {process.map((result) => (
          <TableCell className="border-r text-3xl text-center">
            {result ? '●' : ''}
          </TableCell>
        ))}
      </>
    )
  }, [])
  return (
    <Card
      id={id}
      className="w-full mb-10 dark:bg-transparent dark:border-white dark:border dark:shadow-none dark:text-gray-200">
      <CardContent className="m-5 w-100">
        <div className="flex items-center mt-3">
          <Typography className="text-3xl " variant="h3" component="div">
            {name}
          </Typography>
        </div>
        <span className="m-3" />
        <Table className="card-table border-t border-l border-r max-w-4xl w-full table-fixed break-all whitespace-pre-wrap">
          <TableBody>
            <TableRow>
              <TableCell className="border-r font-bold " colSpan={2}>
                期間
              </TableCell>
              <TableCell colSpan={8}>
                {`${start_at?.format('YYYY年MM月')} ~ ${end_at?.format(
                  'YYYY年MM月'
                )} （${end_at?.diff(start_at, 'month')}ヶ月）`}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell rowSpan={2} className="border-r font-bold" colSpan={2}>
                役割 / 規模
              </TableCell>
              <TableCell colSpan={8}>{`${team_size}名`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={8}>{role}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="border-r font-bold" colSpan={2}>
                使用言語
              </TableCell>
              <TableCell colSpan={8}>{language?.join(' ,  ')}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="border-r font-bold" colSpan={2}>
                DB
              </TableCell>
              <TableCell colSpan={8}>{db?.join(' ,  ')}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="border-r font-bold" colSpan={2}>
                サーバーOS
              </TableCell>
              <TableCell colSpan={8}>{os?.join(' ,  ')}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="border-r font-bold" colSpan={2}>
                FW・MW ツール 等
              </TableCell>
              <TableCell colSpan={8}>{mw?.join(' ,  ')}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Table className="card-table mt-5 border-t border-l border-r w-full max-w-4xl text-center table-fixed break-all whitespace-pre-wrap">
          <TableHead>
            <TableRow>
              <TableCell colSpan={7} className="text-center h-10 font-bold">
                担当工程
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="border-r text-center">要件定義</TableCell>
              <TableCell className="border-r text-center">基本設計</TableCell>
              <TableCell className="border-r text-center">詳細設計</TableCell>
              <TableCell className="border-r text-center">実装・単体</TableCell>
              <TableCell className="border-r text-center">統合テスト</TableCell>
              <TableCell className="border-r text-center">総合テスト</TableCell>
              <TableCell className="border-r text-center">保守・運用</TableCell>
            </TableRow>
            <TableRow>{processResult}</TableRow>
          </TableHead>
        </Table>
        <div>
          <dl>
            <dt className="text-l font-bold mb-2 mt-4">担当業務</dt>
            <dd>{work}</dd>
            <dt className="text-l font-bold mb-2 mt-4">習得スキル</dt>
            <dd>{skill}</dd>
            <dt className="text-l font-bold mb-2 mt-4">コメント</dt>
            <dd>{content}</dd>
          </dl>
        </div>
      </CardContent>
    </Card>
  )
}

const useResizeObserver = (elements, callback) => {
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      callback(entries)
    })

    for (const elem of elements) {
      elem.current && resizeObserver.observe(elem.current)
    }

    return () => resizeObserver.disconnect()
  }, [])
}

export default function Project() {
  const list = useMemo(() => {
    const _list = []
    const projectLength = PROJECT_LIST.length
    for (let index = 0; index < projectLength; index++) {
      const project = PROJECT_LIST[index]
      _list.push(<ListCard {...project} />)
    }

    return _list
  }, [])

  const [width, setWidth] = useState(0)
  const ref = useRef(null)

  const handleResize = (entries) => {
    const width = entries[0].contentRect.width
    setWidth(Math.floor(width))
  }

  useResizeObserver([ref], handleResize)

  return (
    <Container>
      <div
        ref={ref}
        className="flex flex-col justify-center items-start max-w-4xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <Typography
              variant="h1"
              className="font-bold text-4xl md:text-4xl tracking-tight mb-1 text-black dark:text-white">
              プロジェクト
            </Typography>
            <Typography
              variant="body1"
              className="mb-10 text-gray-400"
              color="text.secondary">
              経験した主なプロジェクト内容を載せています。
            </Typography>
          </div>
        </div>
        <Treemap
          className="treemap"
          isAnimationActive={false}
          width={width}
          height={width * 0.6}
          data={PROJECT_TREE_MAP}
          dataKey="size"
          aspectRatio={5 / 4}
          onClick={(e) => {
            const targetEl = document.getElementById(e?.key)
            targetEl?.scrollIntoView({ behavior: 'smooth' })
          }}
          // type="nest"
          // fill="#20A4F3"
          // stroke="#ffffff"
        />
        <span className="h-16" />
        {list}
        <span className="h-16" />
      </div>
    </Container>
  )
}
