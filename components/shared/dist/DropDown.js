"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var select_1 = require("@/components/ui/select");
var alert_dialog_1 = require("@/components/ui/alert-dialog");
var input_1 = require("../ui/input");
var category_actions_1 = require("@/lib/serverActions/category.actions");
var DropDown = function (_a) {
    var value = _a.value, onChangeHandler = _a.onChangeHandler;
    var _b = react_1.useState([]), categories = _b[0], setCategories = _b[1];
    var _c = react_1.useState(''), newCategory = _c[0], setNewCategory = _c[1];
    var handleAddCategory = function () {
        category_actions_1.createCategory({
            categoryName: newCategory.trim()
        })
            .then(function (catecory) {
            setCategories(function (prevState) { return __spreadArrays(prevState, [catecory]); });
        });
    };
    react_1.useEffect(function () {
        var getCategories = function () { return __awaiter(void 0, void 0, void 0, function () {
            var categoryList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, category_actions_1.getAllCategories()];
                    case 1:
                        categoryList = _a.sent();
                        categoryList && setCategories(categoryList);
                        return [2 /*return*/];
                }
            });
        }); };
        getCategories();
    }, []);
    return (react_1["default"].createElement(select_1.Select, { onValueChange: onChangeHandler, defaultValue: value },
        react_1["default"].createElement(select_1.SelectTrigger, { className: "select-field" },
            react_1["default"].createElement(select_1.SelectValue, { placeholder: "Category" })),
        react_1["default"].createElement(select_1.SelectContent, null,
            categories.length > 0 && categories.map(function (category) { return (react_1["default"].createElement(select_1.SelectItem, { key: category._id, value: category._id, className: 'select-item p-relugar-14' }, category.name)); }),
            react_1["default"].createElement(alert_dialog_1.AlertDialog, null,
                react_1["default"].createElement(alert_dialog_1.AlertDialogTrigger, { className: 'p-medium-14 flex w-full rounded-sm py-3 pl-8 text-primary-500\r\n            hove:bg-primary-50 focus:text-primary-500' }, "Add new category"),
                react_1["default"].createElement(alert_dialog_1.AlertDialogContent, { className: 'bg-white' },
                    react_1["default"].createElement(alert_dialog_1.AlertDialogHeader, null,
                        react_1["default"].createElement(alert_dialog_1.AlertDialogTitle, null, "New Category"),
                        react_1["default"].createElement(alert_dialog_1.AlertDialogDescription, null,
                            react_1["default"].createElement(input_1.Input, { type: 'text', placeholder: 'Category name', className: 'input-field mt-3', onChange: function (e) { return setNewCategory(e.target.value); } }))),
                    react_1["default"].createElement(alert_dialog_1.AlertDialogFooter, null,
                        react_1["default"].createElement(alert_dialog_1.AlertDialogCancel, null, "Cancel"),
                        react_1["default"].createElement(alert_dialog_1.AlertDialogAction, { onClick: function () { return react_1.startTransition(handleAddCategory); } }, "Add")))))));
};
exports["default"] = DropDown;
