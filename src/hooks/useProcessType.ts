import { useCallback, useState } from 'react'

import { processTypeClient } from '@api/client'
import { ProcessType } from '@api/services/entpb_pb'

export const useProcessType = () => {
  const [processTypeList, setProcessTypeList] = useState<ProcessType[]>([])
  const fetchProcessTypeList = useCallback(async () => {
    const result = await processTypeClient.list({}).then((res) =>
      (res.processTypeList ?? []).sort(() => {
        return -1
      })
    )
    setProcessTypeList(result)
  }, [])

  return {
    processTypeList,
    fetchProcessTypeList,
  }
}
