import {
  createGrpcWebTransport,
  createPromiseClient,
} from '@bufbuild/connect-web'
import { useEffect } from 'react'

import {
  ProcessTypeService,
  ProjectService,
  SkillService,
  SkillTypeService,
} from '@api/services/entpb_connectweb'
import {
  ListProcessTypeResponse,
  ListProjectRequest_View,
  ListProjectResponse,
  ListSkillResponse,
  ListSkillTypeResponse,
  ListSkillRequest_View,
} from '@api/services/entpb_pb'

const transport = createGrpcWebTransport({
  // baseUrl: 'http://localhost:8080',
  baseUrl: 'https://p-ishioka.com/api/',
})

const processTypeClient = createPromiseClient(ProcessTypeService, transport)
const projectClient = createPromiseClient(ProjectService, transport)
const skillTypeClient = createPromiseClient(SkillTypeService, transport)
const skillClient = createPromiseClient(SkillService, transport)

export const useClient = () => {
  const create = async () => {
    // const processType: PartialMessage<CreateProcessTypeRequest> = {
    //   processType: {
    //     name: 'hoge',
    //   },
    // }
    // const hoge = await client.create(processType)
    // console.log('hoge', hoge)
    // const client = new ProcessTypeServiceClient('/api/proxy')
    // const request = new CreateProcessTypeRequest()
    // const processType = new ProcessType()
    // processType.setName('name')
    // request.setProcessType(processType)
    // const call = client.create(request, {}, (err, response) => {
    //   console.log(response?.getPtpidList())
    // })
    // call.on('status', (status) => {
    //   console.log('status', status)
    //   // if (status.metadata) {
    //   //   console.log('Received metadata')
    //   //   console.log(status.metadata)
    //   // }
    // })
    // call.on('data', (data) => {
    //   console.log('data', data)
    // })
    // const client = new ProcessTypeServiceClient(
    //   '/api/proxy'
    //   // credentials.createInsecure() as any
    // )
    // const req = new CreateProcessTypeRequest()
    // const processType = new ProcessType()
    // processType.setName('client')
    // req.setProcessType(processType)
    // try {
    //   // const req = new GetProcessTypeRequest()
    //   // const result = await client.get(new GetProcessTypeRequest(), {})
    //   console.log('req', req)
    //   const result = await client.create(req, {}, (error, ret) => {
    //     console.log('error', error, 'ret', ret)
    //     console.log(ret?.getId())
    //   })
    //   result.on('status', (status) => {
    //     console.log('status', status)
    //     if (status.metadata) {
    //       console.log('Received metadata')
    //       console.log(status.metadata)
    //     }
    //   })
    //   // console.log('result', result.on())
    // } catch (error) {
    //   console.log('error', error)
    // }
  }

  const get = async () => {
    // const project: PartialMessage<ListProjectRequest> = {
    //   pageSize: 1,
    //   pageToken: '',
    //   view: ListProjectRequest_View.WITH_EDGE_IDS,
    // }
    // projectGetClient.list(project).then((result) => {
    //   // console.log('result', result)
    // })
    const processType = await processTypeClient
      .list({})
      .then(
        (res) =>
          (
            res.toJson() as unknown as
              | Pick<ListProcessTypeResponse, 'processTypeList'>
              | undefined
          )?.processTypeList
      )
    console.log('processType', processType)

    const skillType = await skillTypeClient
      .list({})
      .then(
        (res) =>
          (
            res.toJson() as unknown as
              | Pick<ListSkillTypeResponse, 'skillTypeList'>
              | undefined
          )?.skillTypeList
      )
    console.log('skillType', skillType)

    const skill = await skillClient
      .list({
        view: ListSkillRequest_View.WITH_EDGE_IDS,
      })
      .then(
        (res) =>
          (
            res.toJson() as unknown as
              | Pick<ListSkillResponse, 'skillList'>
              | undefined
          )?.skillList
      )
    console.log('skill', skill)

    const project = await projectClient
      .list({
        view: ListProjectRequest_View.WITH_EDGE_IDS,
      })
      .then(
        (res) =>
          (
            res.toJson() as unknown as
              | Pick<ListProjectResponse, 'projectList'>
              | undefined
          )?.projectList
      )
    console.log('project', project)
  }

  useEffect(() => {
    // hoge.create()
    get()
  }, [])

  return {
    create,
    get,
  }
}
