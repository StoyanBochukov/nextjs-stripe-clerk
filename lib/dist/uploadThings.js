"use strict";
var _a;
exports.__esModule = true;
exports.uploadFiles = exports.useUploadThing = exports.UploadDropzone = exports.UploadButton = void 0;
var react_1 = require("@uploadthing/react");
var hooks_1 = require("@uploadthing/react/hooks");
exports.UploadButton = react_1.generateUploadButton();
exports.UploadDropzone = react_1.generateUploadDropzone();
exports.useUploadThing = (_a = hooks_1.generateReactHelpers(), _a.useUploadThing), exports.uploadFiles = _a.uploadFiles;
