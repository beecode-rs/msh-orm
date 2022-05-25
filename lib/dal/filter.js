"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Or = exports.In = exports.Between = exports.betweenIncludeOperation = exports.Not = exports.LTE = exports.LessThenEqual = exports.LT = exports.LessThen = exports.GTE = exports.GreaterThenEqual = exports.GT = exports.GreaterThen = exports.NEQ = exports.NotEqual = exports.EQ = exports.Equal = exports.ORM_FILTER_OPERATIONS = exports.OrmFilterOperations = void 0;
var OrmFilterOperations;
(function (OrmFilterOperations) {
    OrmFilterOperations["NOT_EQUAL"] = "$<>";
    OrmFilterOperations["GREATER_THEN"] = "$>";
    OrmFilterOperations["GREATER_THEN_EQUAL"] = "$>=";
    OrmFilterOperations["LESS_THEN"] = "$<";
    OrmFilterOperations["LESS_THEN_EQUAL"] = "$<=";
    OrmFilterOperations["NOT"] = "$not";
    OrmFilterOperations["BETWEEN"] = "$between";
    OrmFilterOperations["INCLUDE_FROM"] = "$inc-from";
    OrmFilterOperations["INCLUDE_TO"] = "$inc-to";
    OrmFilterOperations["INCLUDE_BOTH"] = "$inc-both";
    OrmFilterOperations["IN"] = "$in";
    OrmFilterOperations["OR"] = "$or";
})(OrmFilterOperations = exports.OrmFilterOperations || (exports.OrmFilterOperations = {}));
exports.ORM_FILTER_OPERATIONS = [
    '$<>',
    '$>',
    '$>=',
    '$<',
    '$<=',
    '$not',
    '$between',
    '$inc-from',
    '$inc-to',
    '$inc-both',
    '$in',
    '$or',
];
const Equal = (value) => {
    return value;
};
exports.Equal = Equal;
exports.EQ = exports.Equal;
const NotEqual = (value) => {
    return { [OrmFilterOperations.NOT_EQUAL]: value };
};
exports.NotEqual = NotEqual;
exports.NEQ = exports.NotEqual;
const GreaterThen = (value) => {
    return { [OrmFilterOperations.GREATER_THEN]: value };
};
exports.GreaterThen = GreaterThen;
exports.GT = exports.GreaterThen;
const GreaterThenEqual = (value) => {
    return { [OrmFilterOperations.GREATER_THEN_EQUAL]: value };
};
exports.GreaterThenEqual = GreaterThenEqual;
exports.GTE = exports.GreaterThenEqual;
const LessThen = (value) => {
    return { [OrmFilterOperations.LESS_THEN]: value };
};
exports.LessThen = LessThen;
exports.LT = exports.LessThen;
const LessThenEqual = (value) => {
    return { [OrmFilterOperations.LESS_THEN_EQUAL]: value };
};
exports.LessThenEqual = LessThenEqual;
exports.LTE = exports.LessThenEqual;
const Not = (value) => {
    return { [OrmFilterOperations.NOT]: value };
};
exports.Not = Not;
const betweenIncludeOperation = (options) => {
    const { includeTo = false, includeFrom = false } = options !== null && options !== void 0 ? options : {};
    switch (true) {
        case includeFrom && includeTo:
            return OrmFilterOperations.INCLUDE_BOTH;
        case includeTo:
            return OrmFilterOperations.INCLUDE_TO;
        case includeFrom:
            return OrmFilterOperations.INCLUDE_FROM;
        default:
            return undefined;
    }
};
exports.betweenIncludeOperation = betweenIncludeOperation;
const Between = (valueFrom, valueTo, options) => {
    const result = [valueFrom, valueTo];
    const includeOperation = (0, exports.betweenIncludeOperation)(options);
    if (!includeOperation)
        return { [OrmFilterOperations.BETWEEN]: result };
    return { [OrmFilterOperations.BETWEEN]: { [includeOperation]: result } }; // TODO fix any
};
exports.Between = Between;
const In = (...values) => {
    return { [OrmFilterOperations.IN]: values };
};
exports.In = In;
const Or = (...values) => {
    return { [OrmFilterOperations.OR]: values };
};
exports.Or = Or;
//# sourceMappingURL=filter.js.map