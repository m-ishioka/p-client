import { useCallback, useState } from 'react'

import { projectClient } from '@api/client'
import { ListProjectRequest_View, Project } from '@api/services/entpb_pb'

export const useProject = () => {
  const [projectList, setProjectList] = useState<Project[]>([])
  const fetchProjectList = useCallback(async () => {
    const result = await projectClient
      .list({
        view: ListProjectRequest_View.WITH_EDGE_IDS,
      })
      .then((res) => {
        return res?.projectList ?? []
      })
    setProjectList(result)
  }, [])

  return {
    projectList,
    fetchProjectList,
  }
}
