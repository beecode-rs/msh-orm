export declare enum OrmFilterOperations {
    NOT_EQUAL = "$<>",
    GREATER_THEN = "$>",
    GREATER_THEN_EQUAL = "$>=",
    LESS_THEN = "$<",
    LESS_THEN_EQUAL = "$<=",
    NOT = "$not",
    BETWEEN = "$between",
    INCLUDE_FROM = "$inc-from",
    INCLUDE_TO = "$inc-to",
    INCLUDE_BOTH = "$inc-both",
    IN = "$in",
    OR = "$or"
}
export declare const ORM_FILTER_OPERATIONS: readonly ["$<>", "$>", "$>=", "$<", "$<=", "$not", "$between", "$inc-from", "$inc-to", "$inc-both", "$in", "$or"];
export declare type OrmFilterOperationsType = typeof ORM_FILTER_OPERATIONS[number];
export declare type FilterOperationsKey = OrmFilterOperationsType | string;
export declare type FilterOption = {
    [k: FilterOperationsKey]: FilterOption | any;
};
export declare type OrmFilterOptions = {
    filter: FilterOption;
};
export declare const Equal: (value: FilterOption) => FilterOption;
export declare const EQ: (value: FilterOption) => FilterOption;
export declare const NotEqual: (value: FilterOption) => {
    [OrmFilterOperations.NOT_EQUAL]: FilterOption;
};
export declare const NEQ: (value: FilterOption) => {
    [OrmFilterOperations.NOT_EQUAL]: FilterOption;
};
export declare const GreaterThen: (value: FilterOption) => {
    [OrmFilterOperations.GREATER_THEN]: FilterOption;
};
export declare const GT: (value: FilterOption) => {
    [OrmFilterOperations.GREATER_THEN]: FilterOption;
};
export declare const GreaterThenEqual: (value: FilterOption) => {
    [OrmFilterOperations.GREATER_THEN_EQUAL]: FilterOption;
};
export declare const GTE: (value: FilterOption) => {
    [OrmFilterOperations.GREATER_THEN_EQUAL]: FilterOption;
};
export declare const LessThen: (value: FilterOption) => {
    [OrmFilterOperations.LESS_THEN]: FilterOption;
};
export declare const LT: (value: FilterOption) => {
    [OrmFilterOperations.LESS_THEN]: FilterOption;
};
export declare const LessThenEqual: (value: FilterOption) => {
    [OrmFilterOperations.LESS_THEN_EQUAL]: FilterOption;
};
export declare const LTE: (value: FilterOption) => {
    [OrmFilterOperations.LESS_THEN_EQUAL]: FilterOption;
};
export declare const Not: (value: FilterOption) => {
    [OrmFilterOperations.NOT]: FilterOption;
};
export declare const betweenIncludeOperation: (options?: {
    includeFrom?: boolean | undefined;
    includeTo?: boolean | undefined;
} | undefined) => OrmFilterOperations.INCLUDE_BOTH | OrmFilterOperations.INCLUDE_FROM | OrmFilterOperations.INCLUDE_TO | undefined;
export declare const Between: (valueFrom: FilterOption, valueTo: FilterOption, options?: {
    includeFrom?: boolean | undefined;
    includeTo?: boolean | undefined;
} | undefined) => {
    [OrmFilterOperations.BETWEEN]: [FilterOption, FilterOption] | {
        [OrmFilterOperations.INCLUDE_BOTH]: [FilterOption, FilterOption];
    } | {
        [OrmFilterOperations.INCLUDE_FROM]: [FilterOption, FilterOption];
    } | {
        [OrmFilterOperations.INCLUDE_TO]: [FilterOption, FilterOption];
    };
};
export declare const In: (...values: FilterOption[]) => {
    [OrmFilterOperations.IN]: FilterOption[];
};
export declare const Or: (...values: FilterOption[]) => {
    [OrmFilterOperations.OR]: FilterOption[];
};
//# sourceMappingURL=filter.d.ts.map