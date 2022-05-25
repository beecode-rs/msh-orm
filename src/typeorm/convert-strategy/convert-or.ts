import { ConvertStrategy } from './convert-strategy'

export class ConvertOr implements ConvertStrategy {
  public convert(params: { filter: any }): any {
    const { filter } = params
    return [...filter]
  }
}
