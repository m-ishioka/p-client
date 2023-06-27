import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import dayjs from 'dayjs'
import { NextPage } from 'next'
import { useEffect, useMemo } from 'react'
import ReactMarkdown from 'react-markdown'
import { Treemap } from 'recharts'

import { Project, ProcessType } from '@api/services/entpb_pb'
import { PROJECT_TREE_MAP } from '@constants/project'
import { useElementsResizeObserver } from '@hooks/useElementsResizeObserver'
import { useProcessType } from '@hooks/useProcessType'
import { useProject } from '@hooks/useProject'

import { Container } from '../components/Container'

export type OutOfMessage<
  T extends {
    [x: string]: any
  }
> = Omit<
  T,
  | 'equals'
  | 'equals'
  | 'clone'
  | 'fromBinary'
  | 'fromJson'
  | 'fromJsonString'
  | 'toBinary'
  | 'toJson'
  | 'toJsonString'
  | 'toJSON'
  | 'getType'
>

const ListCard = ({
  IDKey,
  name,
  startDate,
  endDate,
  role,
  scale,
  description,
  skills,
  processTypes,
  processTypeList,
}: OutOfMessage<Project> & {
  processTypeList: OutOfMessage<ProcessType>[]
}) => {
  const processResult = useMemo(() => {
    const includes = processTypes.map(({ id }) => id)
    return (
      <>
        {processTypeList.map(({ id }, index) => (
          <TableCell
            key={index.toString()}
            className="border-r text-3xl text-center">
            {includes.includes(id) ? '●' : ''}
          </TableCell>
        ))}
      </>
    )
  }, [processTypeList, processTypes])
  const _startDate = useMemo(
    () => dayjs(startDate?.toJson() as unknown as Date),
    [startDate]
  )
  const _endDate = useMemo(
    () => dayjs(endDate?.toJson() as unknown as Date),
    [endDate]
  )

  return (
    <Card
      id={IDKey}
      className="w-full mb-10 dark:bg-transparent dark:border-white dark:border dark:shadow-none dark:text-gray-200">
      <CardContent className="m-5 w-100">
        <div className="flex items-center mt-3">
          <h3 className="text-3xl">{name}</h3>
        </div>
        <span className="m-3" />
        <Table className="card-table border-t border-l border-r max-w-4xl w-full table-fixed break-all whitespace-pre-wrap">
          <TableBody>
            <TableRow>
              <TableCell className="border-r font-bold " colSpan={2}>
                期間
              </TableCell>
              <TableCell colSpan={8}>
                {`${_startDate.format('YYYY年MM月')} ~ ${_endDate?.format(
                  'YYYY年MM月'
                )} （${_endDate?.diff(_startDate, 'month')}ヶ月）`}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell rowSpan={2} className="border-r font-bold" colSpan={2}>
                役割 / 規模
              </TableCell>
              <TableCell colSpan={8}>{`${scale}名`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={8}>{role}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="border-r font-bold" colSpan={2}>
                使用言語
              </TableCell>
              <TableCell colSpan={8}>
                {skills
                  .filter(
                    ({ skillType }) =>
                      ((skillType?.id.toString() ?? '0') as unknown) === '1'
                  )
                  .map(({ name }) => name)
                  ?.join(' ,  ')}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="border-r font-bold" colSpan={2}>
                DB
              </TableCell>
              <TableCell colSpan={8}>
                {skills
                  .filter(
                    ({ skillType }) =>
                      ((skillType?.id.toString() ?? '0') as unknown) === '2'
                  )
                  .map(({ name }) => name)
                  ?.join(' ,  ')}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="border-r font-bold" colSpan={2}>
                FW・MW ツール 等
              </TableCell>
              <TableCell colSpan={8}>
                {skills
                  .filter(
                    ({ skillType }) =>
                      ((skillType?.id.toString() ?? '0') as unknown) === '4'
                  )
                  .map(({ name }) => name)
                  ?.join(' ,  ')}
              </TableCell>
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
              {processTypeList.map(({ name }, index) => (
                <TableCell
                  key={index.toString()}
                  className="border-r text-center">
                  {name}
                </TableCell>
              ))}
            </TableRow>
            <TableRow>{processResult}</TableRow>
          </TableHead>
        </Table>
        <div>
          <dl>
            <div className="markdown-body p-5">
              <ReactMarkdown unwrapDisallowed={true}>
                {Buffer.from(description).toString()}
              </ReactMarkdown>
            </div>
          </dl>
        </div>
      </CardContent>
    </Card>
  )
}

const ProjectList = () => {
  const { processTypeList, fetchProcessTypeList } = useProcessType()
  const { projectList, fetchProjectList } = useProject()
  useEffect(() => {
    void fetchProcessTypeList()
    void fetchProjectList()
  }, [])
  const projectLength = projectList?.length
  const _list = []
  for (let index = 0; index < projectLength; index++) {
    const project = projectList[index]
    _list.push(
      <ListCard
        key={index.toString()}
        {...project}
        processTypeList={processTypeList}
      />
    )
  }
  return <>{_list}</>
}

const ProjectPage: NextPage = () => {
  const { ref, width } = useElementsResizeObserver()

  return (
    <Container>
      <div
        ref={ref}
        className="flex flex-col justify-center items-start max-w-4xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1 className="font-bold text-4xl md:text-4xl tracking-tight mb-3 text-black dark:text-white">
              プロジェクト
            </h1>
            <p className="mb-10 text-gray-400">
              経験した主なプロジェクト内容を載せています。
            </p>
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
            const targetEl = document.getElementById(e?.key as string)
            targetEl?.scrollIntoView({ behavior: 'smooth' })
          }}
        />
        <span className="h-16" />
        <ProjectList />
        <span className="h-16" />
      </div>
    </Container>
  )
}

export default ProjectPage
