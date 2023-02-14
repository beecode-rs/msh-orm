"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertService = void 0;
const filter_1 = require("../../dal/filter");
const convert_between_1 = require("./convert-between");
const convert_greater_1 = require("./convert-greater");
const convert_greater_or_equal_1 = require("./convert-greater-or-equal");
const convert_in_1 = require("./convert-in");
const convert_less_1 = require("./convert-less");
const convert_less_or_equal_1 = require("./convert-less-or-equal");
const convert_not_1 = require("./convert-not");
const convert_or_1 = require("./convert-or");
exports.convertService = {
    getConvertStrategyFromKey: (params) => {
        const { key } = params;
        switch (key) {
            case filter_1.OrmComparisonOperator.IN:
                return new convert_in_1.ConvertIn();
            case filter_1.OrmLogicalOperator.OR:
                return new convert_or_1.ConvertOr();
            case filter_1.OrmLogicalOperator.NOT:
            case filter_1.OrmComparisonOperator.NOT_EQUAL:
                return new convert_not_1.ConvertNot();
            case filter_1.OrmComparisonOperator.GREATER_THEN:
                return new convert_greater_1.ConvertGreater();
            case filter_1.OrmComparisonOperator.GREATER_THEN_EQUAL:
                return new convert_greater_or_equal_1.ConvertGreaterOrEqual();
            case filter_1.OrmComparisonOperator.LESS_THEN:
                return new convert_less_1.ConvertLess();
            case filter_1.OrmComparisonOperator.LESS_THEN_EQUAL:
                return new convert_less_or_equal_1.ConvertLessOrEqual();
            case filter_1.OrmComparisonOperator.BETWEEN:
                return new convert_between_1.ConvertBetween();
            default:
                return;
        }
    },
};
//# sourceMappingURL=convert-service.js.map