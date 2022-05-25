import { ConvertStrategy } from './convert-strategy'
import { MoreThan } from 'typeorm'

export class ConvertGreater implements ConvertStrategy {
  public convert(params: { filter: any }): any {
    const { filter } = params
    return MoreThan(filter)
  }
}
