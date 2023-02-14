"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.And = exports.Or = exports.In = exports.Between = exports.Not = exports.LTE = exports.LessThenEqual = exports.LT = exports.LessThen = exports.GTE = exports.GreaterThenEqual = exports.GT = exports.GreaterThen = exports.NEQ = exports.NotEqual = exports.EQ = exports.Equal = exports.ORM_FILTER_OPERATIONS = exports.ORM_LOGICAL_OPERATIONS = exports.ORM_COMPARISON_OPERATIONS = exports.OrmLogicalOperator = exports.OrmComparisonOperator = void 0;
var OrmComparisonOperator;
(function (OrmComparisonOperator) {
    OrmComparisonOperator["NOT_EQUAL"] = "$<>";
    OrmComparisonOperator["GREATER_THEN"] = "$>";
    OrmComparisonOperator["GREATER_THEN_EQUAL"] = "$>=";
    OrmComparisonOperator["LESS_THEN"] = "$<";
    OrmComparisonOperator["LESS_THEN_EQUAL"] = "$<=";
    OrmComparisonOperator["BETWEEN"] = "$between";
    OrmComparisonOperator["IN"] = "$in";
})(OrmComparisonOperator = exports.OrmComparisonOperator || (exports.OrmComparisonOperator = {}));
var OrmLogicalOperator;
(function (OrmLogicalOperator) {
    OrmLogicalOperator["NOT"] = "$not";
    OrmLogicalOperator["OR"] = "$or";
    OrmLogicalOperator["AND"] = "$and";
})(OrmLogicalOperator = exports.OrmLogicalOperator || (exports.OrmLogicalOperator = {}));
exports.ORM_COMPARISON_OPERATIONS = ['$<>', '$>', '$>=', '$<', '$<=', '$between', '$in', '$not'];
exports.ORM_LOGICAL_OPERATIONS = ['$or', '$and'];
exports.ORM_FILTER_OPERATIONS = [...exports.ORM_COMPARISON_OPERATIONS, ...exports.ORM_LOGICAL_OPERATIONS];
/**
 * Equal
 */
const Equal = (value) => {
    return value;
};
exports.Equal = Equal;
exports.EQ = exports.Equal;
/**
 * Not Equal
 */
const NotEqual = (value) => {
    return { [OrmComparisonOperator.NOT_EQUAL]: value };
};
exports.NotEqual = NotEqual;
exports.NEQ = exports.NotEqual;
/**
 * Greater Then
 */
const GreaterThen = (value) => {
    return { [OrmComparisonOperator.GREATER_THEN]: value };
};
exports.GreaterThen = GreaterThen;
exports.GT = exports.GreaterThen;
/**
 * Greater Then Or Equal
 */
const GreaterThenEqual = (value) => {
    return { [OrmComparisonOperator.GREATER_THEN_EQUAL]: value };
};
exports.GreaterThenEqual = GreaterThenEqual;
exports.GTE = exports.GreaterThenEqual;
/**
 * Less Then
 */
const LessThen = (value) => {
    return { [OrmComparisonOperator.LESS_THEN]: value };
};
exports.LessThen = LessThen;
exports.LT = exports.LessThen;
/**
 * Less Then Or Equal
 */
const LessThenEqual = (value) => {
    return { [OrmComparisonOperator.LESS_THEN_EQUAL]: value };
};
exports.LessThenEqual = LessThenEqual;
exports.LTE = exports.LessThenEqual;
/**
 * Not
 */
const Not = (value) => {
    return { [OrmLogicalOperator.NOT]: value };
};
exports.Not = Not;
/**
 * Between
 */
const Between = (valueFrom, valueTo) => {
    const result = [valueFrom, valueTo];
    return { [OrmComparisonOperator.BETWEEN]: result };
};
exports.Between = Between;
/**
 * In
 */
const In = (...values) => {
    return { [OrmComparisonOperator.IN]: values };
};
exports.In = In;
/**
 * Or
 */
const Or = (...values) => {
    return { [OrmLogicalOperator.OR]: values };
};
exports.Or = Or;
/**
 * And
 */
const And = (...values) => {
    return { [OrmLogicalOperator.AND]: values };
};
exports.And = And;
//# sourceMappingURL=filter.js.map