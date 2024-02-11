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
exports.__esModule = true;
exports.FileUploader = void 0;
var react_1 = require("react");
// import type { FileWithPath } from '@uploadthing/react'
var hooks_1 = require("@uploadthing/react/hooks");
var client_1 = require("uploadthing/client");
var button_1 = require("@/components/ui/button");
var utils_1 = require("@/lib/utils");
var react_2 = require("react");
function FileUploader(_a) {
    var imageUrl = _a.imageUrl, onFieldChange = _a.onFieldChange, setFiles = _a.setFiles;
    var _b = react_2.useState([]), file = _b[0], setFile = _b[1];
    var onDrop = react_1.useCallback(function (acceptedFiles) {
        setFiles(acceptedFiles);
        onFieldChange(utils_1.convertFileToUrl(acceptedFiles[0]));
    }, []);
    var _c = hooks_1.useDropzone({
        onDrop: onDrop,
        accept: 'image/*' ? client_1.generateClientDropzoneAccept(['image/*']) : undefined
    }), getRootProps = _c.getRootProps, getInputProps = _c.getInputProps;
    return (React.createElement("div", __assign({}, getRootProps(), { className: "flex-center bg-dark-3 flex h-72 cursor-pointer flex-col overflow-hidden rounded-xl bg-grey-50" }),
        React.createElement("input", __assign({}, getInputProps(), { className: "cursor-pointer" })),
        imageUrl ? (React.createElement("div", { className: "flex h-full w-full flex-1 justify-center " },
            React.createElement("img", { src: imageUrl, alt: "image", width: 250, height: 250, className: "w-full object-cover object-center" }))) : (React.createElement("div", { className: "flex-center flex-col py-5 text-grey-500" },
            React.createElement("img", { src: "/assets/icons/upload.svg", width: 77, height: 77, alt: "file upload" }),
            React.createElement("h3", { className: "mb-2 mt-2" }, "Drag photo here"),
            React.createElement("p", { className: "p-medium-12 mb-4" }, "SVG, PNG, JPG"),
            React.createElement(button_1.Button, { type: "button", className: "rounded-full" }, "Select from computer")))));
}
exports.FileUploader = FileUploader;
