export declare enum OrmComparisonOperator {
    NOT_EQUAL = "$<>",
    GREATER_THEN = "$>",
    GREATER_THEN_EQUAL = "$>=",
    LESS_THEN = "$<",
    LESS_THEN_EQUAL = "$<=",
    BETWEEN = "$between",
    IN = "$in"
}
export declare enum OrmLogicalOperator {
    NOT = "$not",
    OR = "$or",
    AND = "$and"
}
export declare const ORM_COMPARISON_OPERATIONS: readonly ["$<>", "$>", "$>=", "$<", "$<=", "$between", "$in", "$not"];
export declare type OrmComparisonOperationsType = typeof ORM_COMPARISON_OPERATIONS[number];
export declare const ORM_LOGICAL_OPERATIONS: readonly ["$or", "$and"];
export declare type OrmLogicalOperationsType = typeof ORM_LOGICAL_OPERATIONS[number];
export declare const ORM_FILTER_OPERATIONS: readonly ["$<>", "$>", "$>=", "$<", "$<=", "$between", "$in", "$not", "$or", "$and"];
export declare type OrmFilterOperationsType = typeof ORM_FILTER_OPERATIONS[number];
export declare type OrmFilterOperationsKey = OrmFilterOperationsType | string;
export declare type OrmFilterOption = {
    [k: OrmFilterOperationsKey]: OrmFilterOption | any;
};
export declare type OrmFilterOptions = {
    filter: OrmFilterOption;
};
/**
 * Equal
 */
export declare const Equal: (value: OrmFilterOption) => OrmFilterOption;
export declare const EQ: (value: OrmFilterOption) => OrmFilterOption;
/**
 * Not Equal
 */
export declare const NotEqual: (value: OrmFilterOption) => {
    [OrmComparisonOperator.NOT_EQUAL]: OrmFilterOption;
};
export declare const NEQ: (value: OrmFilterOption) => {
    [OrmComparisonOperator.NOT_EQUAL]: OrmFilterOption;
};
/**
 * Greater Then
 */
export declare const GreaterThen: (value: OrmFilterOption) => {
    [OrmComparisonOperator.GREATER_THEN]: OrmFilterOption;
};
export declare const GT: (value: OrmFilterOption) => {
    [OrmComparisonOperator.GREATER_THEN]: OrmFilterOption;
};
/**
 * Greater Then Or Equal
 */
export declare const GreaterThenEqual: (value: OrmFilterOption) => {
    [OrmComparisonOperator.GREATER_THEN_EQUAL]: OrmFilterOption;
};
export declare const GTE: (value: OrmFilterOption) => {
    [OrmComparisonOperator.GREATER_THEN_EQUAL]: OrmFilterOption;
};
/**
 * Less Then
 */
export declare const LessThen: (value: OrmFilterOption) => {
    [OrmComparisonOperator.LESS_THEN]: OrmFilterOption;
};
export declare const LT: (value: OrmFilterOption) => {
    [OrmComparisonOperator.LESS_THEN]: OrmFilterOption;
};
/**
 * Less Then Or Equal
 */
export declare const LessThenEqual: (value: OrmFilterOption) => {
    [OrmComparisonOperator.LESS_THEN_EQUAL]: OrmFilterOption;
};
export declare const LTE: (value: OrmFilterOption) => {
    [OrmComparisonOperator.LESS_THEN_EQUAL]: OrmFilterOption;
};
/**
 * Not
 */
export declare const Not: (value: OrmFilterOption) => {
    [OrmLogicalOperator.NOT]: OrmFilterOption;
};
/**
 * Between
 */
export declare const Between: (valueFrom: any, valueTo: any) => {
    [OrmComparisonOperator.BETWEEN]: [any, any];
};
/**
 * In
 */
export declare const In: (...values: any[]) => {
    [OrmComparisonOperator.IN]: any[];
};
/**
 * Or
 */
export declare const Or: (...values: OrmFilterOption[]) => {
    [OrmLogicalOperator.OR]: OrmFilterOption[];
};
/**
 * And
 */
export declare const And: (...values: OrmFilterOption[]) => {
    [OrmLogicalOperator.AND]: OrmFilterOption[];
};
//# sourceMappingURL=filter.d.ts.map