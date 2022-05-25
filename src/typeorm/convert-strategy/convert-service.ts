import { OrmComparisonOperator, OrmLogicalOperator } from '../../dal/filter'
import { ConvertBetween } from './convert-between'
import { ConvertGreater } from './convert-greater'
import { ConvertIn } from './convert-in'
import { ConvertNot } from './convert-not'
import { ConvertOr } from './convert-or'
import { ConvertStrategy } from './convert-strategy'

export const convertService = {
  getConvertStrategyFromKey: (params: { key: string }): ConvertStrategy | undefined => {
    const { key } = params
    switch (key) {
      case OrmComparisonOperator.IN:
        return new ConvertIn()
      case OrmLogicalOperator.OR:
        return new ConvertOr()
      case OrmLogicalOperator.NOT:
      case OrmComparisonOperator.NOT_EQUAL:
        return new ConvertNot()
      case OrmComparisonOperator.GREATER_THEN:
        return new ConvertGreater()
      case OrmComparisonOperator.BETWEEN:
        return new ConvertBetween()
      default:
        return
    }
  },
}
