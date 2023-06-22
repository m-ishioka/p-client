import {
  createGrpcWebTransport,
  createPromiseClient,
} from '@bufbuild/connect-web'

import {
  ProcessTypeService,
  ProjectService,
  SkillService,
  SkillTypeService,
} from '@api/services/entpb_connectweb'

const transport = createGrpcWebTransport({
  baseUrl: 'http://localhost:8080',
})

export const processTypeClient = createPromiseClient(
  ProcessTypeService,
  transport
)
export const projectClient = createPromiseClient(ProjectService, transport)
export const skillTypeClient = createPromiseClient(SkillTypeService, transport)
export const skillClient = createPromiseClient(SkillService, transport)
