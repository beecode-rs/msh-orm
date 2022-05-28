export enum OrmComparisonOperator {
  NOT_EQUAL = '$<>',
  GREATER_THEN = '$>',
  GREATER_THEN_EQUAL = '$>=',
  LESS_THEN = '$<',
  LESS_THEN_EQUAL = '$<=',
  BETWEEN = '$between',
  IN = '$in',
}

export enum OrmLogicalOperator {
  NOT = '$not',
  OR = '$or',
  AND = '$and',
}

export const ORM_COMPARISON_OPERATIONS = ['$<>', '$>', '$>=', '$<', '$<=', '$between', '$in', '$not'] as const
export type OrmComparisonOperationsType = typeof ORM_COMPARISON_OPERATIONS[number]

export const ORM_LOGICAL_OPERATIONS = ['$or', '$and'] as const
export type OrmLogicalOperationsType = typeof ORM_LOGICAL_OPERATIONS[number]

export const ORM_FILTER_OPERATIONS = [...ORM_COMPARISON_OPERATIONS, ...ORM_LOGICAL_OPERATIONS] as const
export type OrmFilterOperationsType = typeof ORM_FILTER_OPERATIONS[number]

export type OrmFilterOperationsKey = OrmFilterOperationsType | string

export type OrmFilterOption = { [k: OrmFilterOperationsKey]: OrmFilterOption | any }
export type OrmFilterOptions = { filter: OrmFilterOption }

/**
 * Equal
 */

export const Equal = (value: OrmFilterOption): OrmFilterOption => {
  return value
}
export const EQ = Equal

/**
 * Not Equal
 */

export const NotEqual = (value: OrmFilterOption): { [OrmComparisonOperator.NOT_EQUAL]: OrmFilterOption } => {
  return { [OrmComparisonOperator.NOT_EQUAL]: value }
}
export const NEQ = NotEqual

/**
 * Greater Then
 */

export const GreaterThen = (value: OrmFilterOption): { [OrmComparisonOperator.GREATER_THEN]: OrmFilterOption } => {
  return { [OrmComparisonOperator.GREATER_THEN]: value }
}
export const GT = GreaterThen

/**
 * Greater Then Or Equal
 */

export const GreaterThenEqual = (value: OrmFilterOption): { [OrmComparisonOperator.GREATER_THEN_EQUAL]: OrmFilterOption } => {
  return { [OrmComparisonOperator.GREATER_THEN_EQUAL]: value }
}
export const GTE = GreaterThenEqual

/**
 * Less Then
 */

export const LessThen = (value: OrmFilterOption): { [OrmComparisonOperator.LESS_THEN]: OrmFilterOption } => {
  return { [OrmComparisonOperator.LESS_THEN]: value }
}
export const LT = LessThen

/**
 * Less Then Or Equal
 */

export const LessThenEqual = (value: OrmFilterOption): { [OrmComparisonOperator.LESS_THEN_EQUAL]: OrmFilterOption } => {
  return { [OrmComparisonOperator.LESS_THEN_EQUAL]: value }
}
export const LTE = LessThenEqual

/**
 * Not
 */

export const Not = (value: OrmFilterOption): { [OrmLogicalOperator.NOT]: OrmFilterOption } => {
  return { [OrmLogicalOperator.NOT]: value }
}

/**
 * Between
 */

export const Between = (
  valueFrom: any,
  valueTo: any
): {
  [OrmComparisonOperator.BETWEEN]: [any, any]
} => {
  const result: [any, any] = [valueFrom, valueTo]
  return { [OrmComparisonOperator.BETWEEN]: result }
}

/**
 * In
 */

export const In = (...values: any[]): { [OrmComparisonOperator.IN]: any[] } => {
  return { [OrmComparisonOperator.IN]: values }
}

/**
 * Or
 */

export const Or = (...values: OrmFilterOption[]): { [OrmLogicalOperator.OR]: OrmFilterOption[] } => {
  return { [OrmLogicalOperator.OR]: values }
}

/**
 * And
 */

export const And = (...values: OrmFilterOption[]): { [OrmLogicalOperator.AND]: OrmFilterOption[] } => {
  return { [OrmLogicalOperator.AND]: values }
}
