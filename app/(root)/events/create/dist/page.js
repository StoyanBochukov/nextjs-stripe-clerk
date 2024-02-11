"use strict";
exports.__esModule = true;
var EventForm_1 = require("@/components/shared/EventForm");
var nextjs_1 = require("@clerk/nextjs");
var CreateEvent = function () {
    var sessionClaims = nextjs_1.auth().sessionClaims;
    var userId = sessionClaims === null || sessionClaims === void 0 ? void 0 : sessionClaims.userId;
    console.log("userId from CreateEvent main page", sessionClaims);
    return (React.createElement(React.Fragment, null,
        React.createElement("section", { className: "bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10" },
            React.createElement("h3", { className: "wrapper h3-bold text-center sm:text-left" }, "Create Event")),
        React.createElement("div", { className: "wrapper my-8" },
            React.createElement(EventForm_1["default"], { userId: userId, type: 'Create' }))));
};
exports["default"] = CreateEvent;
