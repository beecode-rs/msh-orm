import { timeUtil } from '@beecode/msh-node-util/lib/time-util'
import { ValueTransformer } from 'typeorm'

export const databaseUtil = {
  timestampToUnixTransformer: {
    from(date?: Date): number | undefined {
      return date ? timeUtil.dateToUnix(date) : undefined
    },
    to(unix?: number): Date | undefined {
      return unix ? timeUtil.unixToDate(unix) : undefined
    },
  } as ValueTransformer,
  jsonTransformer: {
    from(jsonString?: string): any | undefined {
      return jsonString && JSON.parse(jsonString)
    },
    to(jsonData?: any): Date | undefined {
      return jsonData && JSON.stringify(jsonData)
    },
  } as ValueTransformer,
}
