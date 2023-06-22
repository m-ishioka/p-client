import { useCallback, useState } from 'react'

import { skillClient } from '@api/client'
import { ListSkillRequest_View, Skill } from '@api/services/entpb_pb'

export const useSkill = () => {
  const [skillList, setSkillList] = useState<Skill[]>([])
  const fetchSkillList = useCallback(async () => {
    const result = await skillClient
      .list({
        view: ListSkillRequest_View.WITH_EDGE_IDS,
      })
      .then((res) => res?.skillList ?? [])
    setSkillList(result)
  }, [])

  return {
    skillList,
    fetchSkillList,
  }
}
