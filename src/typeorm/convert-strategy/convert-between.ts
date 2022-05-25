import { ConvertStrategy } from './convert-strategy'
import { Between } from 'typeorm'

export class ConvertBetween implements ConvertStrategy {
  public convert(params: { filter: any }): any {
    const { filter } = params
    return Between(filter[0], filter[1])
  }
}
