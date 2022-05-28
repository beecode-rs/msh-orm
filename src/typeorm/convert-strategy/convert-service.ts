import { OrmComparisonOperator, OrmLogicalOperator } from '../../dal/filter'
import { ConvertBetween } from './convert-between'
import { ConvertGreater } from './convert-greater'
import { ConvertGreaterOrEqual } from './convert-greater-or-equal'
import { ConvertIn } from './convert-in'
import { ConvertLess } from './convert-less'
import { ConvertLessOrEqual } from './convert-less-or-equal'
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
      case OrmComparisonOperator.GREATER_THEN_EQUAL:
        return new ConvertGreaterOrEqual()
      case OrmComparisonOperator.LESS_THEN:
        return new ConvertLess()
      case OrmComparisonOperator.LESS_THEN_EQUAL:
        return new ConvertLessOrEqual()
      case OrmComparisonOperator.BETWEEN:
        return new ConvertBetween()
      default:
        return
    }
  },
}
