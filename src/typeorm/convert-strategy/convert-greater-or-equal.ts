import { ConvertStrategy } from './convert-strategy'
import { MoreThanOrEqual } from 'typeorm'

export class ConvertGreaterOrEqual implements ConvertStrategy {
  public convert(params: { filter: any }): any {
    const { filter } = params
    return MoreThanOrEqual(filter)
  }
}
