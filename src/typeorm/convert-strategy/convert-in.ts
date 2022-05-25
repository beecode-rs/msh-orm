import { ConvertStrategy } from './convert-strategy'
import { In } from 'typeorm'

export class ConvertIn implements ConvertStrategy {
  public convert(params: { filter: any }): any {
    const { filter } = params
    return In(filter)
  }
}
