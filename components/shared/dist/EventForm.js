'use client';
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.__esModule = true;
var react_1 = require("react");
var zod_1 = require("@hookform/resolvers/zod");
var react_hook_form_1 = require("react-hook-form");
var button_1 = require("../ui/button");
var form_1 = require("../ui/form");
var input_1 = require("../ui/input");
var checkbox_1 = require("../ui/checkbox");
var validator_1 = require("@/lib/validator");
var constants_1 = require("@/constants");
var DropDown_1 = require("./DropDown");
var textarea_1 = require("@/components/ui/textarea");
var FileUploader_1 = require("./FileUploader");
var image_1 = require("next/image");
var react_datepicker_1 = require("react-datepicker");
require("react-datepicker/dist/react-datepicker.css");
var uploadThings_1 = require("@/lib/uploadThings");
var navigation_1 = require("next/navigation");
var event_actions_1 = require("@/lib/serverActions/event.actions");
var EventForm = function (_a) {
    var userId = _a.userId, type = _a.type;
    var initialValues = constants_1.eventDefaultValues;
    var _b = react_1.useState([]), files = _b[0], setFiles = _b[1];
    var startUpload = uploadThings_1.useUploadThing('imageUploader').startUpload;
    var router = navigation_1.useRouter();
    var form = react_hook_form_1.useForm({
        resolver: zod_1.zodResolver(validator_1.eventFormSchema),
        defaultValues: initialValues
    });
    var onSubmit = function (values) { return __awaiter(void 0, void 0, void 0, function () {
        var uploadedImageUrl, uploadedImages, newEvent, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("userId from EventForm.tsx", userId);
                    uploadedImageUrl = values.imageUrl;
                    if (!(files.length > 0)) return [3 /*break*/, 2];
                    return [4 /*yield*/, startUpload(files)];
                case 1:
                    uploadedImages = _a.sent();
                    if (!uploadedImages) {
                        return [2 /*return*/];
                    }
                    uploadedImageUrl = uploadedImages[0].url;
                    _a.label = 2;
                case 2:
                    ;
                    if (!(type === 'Create')) return [3 /*break*/, 6];
                    _a.label = 3;
                case 3:
                    _a.trys.push([3, 5, , 6]);
                    return [4 /*yield*/, event_actions_1.createEvent({
                            event: __assign(__assign({}, values), { imageUrl: uploadedImageUrl }),
                            userId: userId,
                            path: '/profile'
                        })];
                case 4:
                    newEvent = _a.sent();
                    if (newEvent) {
                        form.reset();
                        router.push("/events/" + newEvent._id);
                    }
                    return [3 /*break*/, 6];
                case 5:
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement(form_1.Form, __assign({}, form),
        React.createElement("form", { onSubmit: form.handleSubmit(onSubmit), className: 'flex flex-col gap-5' },
            React.createElement("div", { className: 'flex flex-col gap-5 md:flex-row' },
                React.createElement(form_1.FormField, { control: form.control, name: 'title', render: function (_a) {
                        var field = _a.field;
                        return (React.createElement(form_1.FormItem, { className: 'w-full' },
                            React.createElement(form_1.FormControl, null,
                                React.createElement(input_1.Input, __assign({ placeholder: 'Event Title' }, field, { className: 'input-field' }))),
                            React.createElement(form_1.FormMessage, null)));
                    } }),
                React.createElement(form_1.FormField, { control: form.control, name: 'categoryId', render: function (_a) {
                        var field = _a.field;
                        return (React.createElement(form_1.FormItem, { className: 'w-full' },
                            React.createElement(form_1.FormControl, null,
                                React.createElement(DropDown_1["default"], { onChangeHandler: field.onChange, value: field.value })),
                            React.createElement(form_1.FormMessage, null)));
                    } })),
            React.createElement("div", { className: 'flex flex-col gap-5 md:flex-row' },
                React.createElement(form_1.FormField, { control: form.control, name: 'description', render: function (_a) {
                        var field = _a.field;
                        return (React.createElement(form_1.FormItem, { className: 'w-full' },
                            React.createElement(form_1.FormControl, { className: 'h-72' },
                                React.createElement(textarea_1.Textarea, __assign({ placeholder: 'Event Description' }, field, { className: 'textarea rounded-2xl' }))),
                            React.createElement(form_1.FormMessage, null)));
                    } }),
                React.createElement(form_1.FormField, { control: form.control, name: 'imageUrl', render: function (_a) {
                        var field = _a.field;
                        return (React.createElement(form_1.FormItem, { className: 'w-full' },
                            React.createElement(form_1.FormControl, { className: 'h-72' },
                                React.createElement(FileUploader_1.FileUploader, { onFieldChange: field.onChange, imageUrl: field.value, setFiles: setFiles })),
                            React.createElement(form_1.FormMessage, null)));
                    } })),
            React.createElement("div", { className: 'flex flex-col gap-5 md:flex-row' },
                React.createElement(form_1.FormField, { control: form.control, name: 'location', render: function (_a) {
                        var field = _a.field;
                        return (React.createElement(form_1.FormItem, { className: 'w-full' },
                            React.createElement(form_1.FormControl, null,
                                React.createElement("div", { className: 'flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2' },
                                    React.createElement(image_1["default"], { src: '/assets/icons/location-grey.svg', alt: 'calendar', width: 24, height: 24 }),
                                    React.createElement(input_1.Input, __assign({ placeholder: 'Event Location or Online' }, field, { className: 'input-field' })))),
                            React.createElement(form_1.FormMessage, null)));
                    } })),
            React.createElement("div", { className: 'flex flex-col gap-5 md:flex-row' },
                React.createElement(form_1.FormField, { control: form.control, name: 'startDateTime', render: function (_a) {
                        var field = _a.field;
                        return (React.createElement(form_1.FormItem, { className: 'w-full' },
                            React.createElement(form_1.FormControl, null,
                                React.createElement("div", { className: 'flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2' },
                                    React.createElement(image_1["default"], { src: '/assets/icons/calendar.svg', alt: 'calendar', width: 24, height: 24, className: 'filter-grey' }),
                                    React.createElement("p", { className: 'ml-3 whitespace-nowrap text-grey-600' }, "Start Date"),
                                    React.createElement(react_datepicker_1["default"], { selected: field.value, onChange: function (date) { return field.onChange(date); }, showTimeSelect: true, timeInputLabel: 'Time:', dateFormat: 'MM/dd/yyyy h:mm aa', wrapperClassName: 'datePicker' }))),
                            React.createElement(form_1.FormMessage, null)));
                    } }),
                React.createElement(form_1.FormField, { control: form.control, name: 'endDateTime', render: function (_a) {
                        var field = _a.field;
                        return (React.createElement(form_1.FormItem, { className: 'w-full' },
                            React.createElement(form_1.FormControl, null,
                                React.createElement("div", { className: 'flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2' },
                                    React.createElement(image_1["default"], { src: '/assets/icons/calendar.svg', alt: 'calendar', width: 24, height: 24, className: 'filter-grey' }),
                                    React.createElement("p", { className: 'ml-3 whitespace-nowrap text-grey-600' }, "End Date"),
                                    React.createElement(react_datepicker_1["default"], { selected: field.value, onChange: function (date) { return field.onChange(date); }, showTimeSelect: true, timeInputLabel: 'Time:', dateFormat: 'MM/dd/yyyy h:mm aa', wrapperClassName: 'datePicker' }))),
                            React.createElement(form_1.FormMessage, null)));
                    } })),
            React.createElement("div", { className: 'flex flex-col gap-5 md:flex-row' },
                React.createElement(form_1.FormField, { control: form.control, name: 'price', render: function (_a) {
                        var field = _a.field;
                        return (React.createElement(form_1.FormItem, { className: 'w-full' },
                            React.createElement(form_1.FormControl, null,
                                React.createElement("div", { className: 'flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2' },
                                    React.createElement(image_1["default"], { src: '/assets/icons/dollar.svg', alt: 'dollar', width: 24, height: 24, className: 'filter-grey' }),
                                    React.createElement(input_1.Input, __assign({ type: 'number', placeholder: 'Price' }, field, { className: 'p-regular-16 border-0 bg-grey-50 outlane-offset-0\r\n                         focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0' })),
                                    React.createElement(form_1.FormField, { control: form.control, name: 'isFree', render: function (_a) {
                                            var field = _a.field;
                                            return (React.createElement(form_1.FormItem, null,
                                                React.createElement(form_1.FormControl, null,
                                                    React.createElement("div", { className: 'flex items-center' },
                                                        React.createElement("label", { htmlFor: 'isFree', className: 'whitespace-nowrap pr-3 leading-none peer-disabled:cursor-not-allowed\r\n                                    peer-disabled:opacity-70' }, "Free Ticket"),
                                                        React.createElement(checkbox_1.Checkbox, { onCheckedChange: field.onChange, checked: field.value, id: 'isFree', className: 'mr-2 h-5 w-5 border-2 border-primary-500' }))),
                                                React.createElement(form_1.FormMessage, null)));
                                        } }))),
                            React.createElement(form_1.FormMessage, null)));
                    } }),
                React.createElement(form_1.FormField, { control: form.control, name: 'url', render: function (_a) {
                        var field = _a.field;
                        return (React.createElement(form_1.FormItem, { className: 'w-full' },
                            React.createElement(form_1.FormControl, null,
                                React.createElement("div", { className: 'flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2' },
                                    React.createElement(image_1["default"], { src: '/assets/icons/link.svg', alt: 'link', width: 24, height: 24 }),
                                    React.createElement(input_1.Input, __assign({ placeholder: 'Url' }, field, { className: 'input-field' })))),
                            React.createElement(form_1.FormMessage, null)));
                    } })),
            React.createElement(button_1.Button, { type: 'submit', size: 'lg', disabled: form.formState.isSubmitting, className: 'button col-span-2 w-fill' }, form.formState.isSubmitting ? ('Submitting...') : type + " Event"))));
};
exports["default"] = EventForm;
