import { ConvertStrategy } from './convert-strategy'
import { LessThan } from 'typeorm'

export class ConvertLess implements ConvertStrategy {
  public convert(params: { filter: any }): any {
    const { filter } = params
    return LessThan(filter)
  }
}
