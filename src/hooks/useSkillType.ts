import { useCallback, useState } from 'react'

import { skillTypeClient } from '@api/client'
import { SkillType } from '@api/services/entpb_pb'

export const useSkillType = () => {
  const [skillTypeList, setSkillTypeList] = useState<SkillType[]>([])
  const fetchSkillTypeList = useCallback(async () => {
    const result = await skillTypeClient
      .list({})
      .then((res) => res.skillTypeList ?? [])
    setSkillTypeList(result)
  }, [])

  return {
    skillTypeList,
    fetchSkillTypeList,
  }
}
