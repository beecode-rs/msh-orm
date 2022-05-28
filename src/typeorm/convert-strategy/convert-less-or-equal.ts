import { ConvertStrategy } from './convert-strategy'
import { LessThanOrEqual } from 'typeorm'

export class ConvertLessOrEqual implements ConvertStrategy {
  public convert(params: { filter: any }): any {
    const { filter } = params
    return LessThanOrEqual(filter)
  }
}
