import { ConvertStrategy } from './convert-strategy'
import { Not } from 'typeorm'

export class ConvertNot implements ConvertStrategy {
  public convert(params: { filter: any }): any {
    const { filter } = params
    return Not(filter)
  }
}
