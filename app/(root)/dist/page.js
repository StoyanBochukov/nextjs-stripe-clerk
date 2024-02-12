"use strict";
exports.__esModule = true;
var Collection_1 = require("@/components/shared/Collection");
var button_1 = require("@/components/ui/button");
var image_1 = require("next/image");
var link_1 = require("next/link");
function Home() {
    return (React.createElement(React.Fragment, null,
        React.createElement("section", { className: "bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10" },
            React.createElement("div", { className: "wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0" },
                React.createElement("div", { className: "flex flex-col justify-center gap-8" },
                    React.createElement("h1", { className: "h1-bold" }, "Host, Connect, Celebrate: Yoour Events, Our Platform!"),
                    React.createElement("p", { className: "p-regular-20 md:p-regular-24" }, "Book and learn helpful tips from 3168+ mentors in world-class companies with our globar community."),
                    React.createElement(button_1.Button, { size: 'lg', asChild: true, className: "button w-full sm:w-fit" },
                        React.createElement(link_1["default"], { href: '#events' }, "Explore Now"))),
                React.createElement(image_1["default"], { src: '/assets/images/hero.png', alt: "hero", width: 1000, height: 1000, className: "max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]" }))),
        React.createElement("section", { id: "events", className: "wrapper my-8 flex flex-col gap-8 md:gap-12" },
            React.createElement("h2", { className: "h2-bold" },
                "Trusted by ",
                React.createElement("br", null),
                " Thousands of Events"),
            React.createElement("div", { className: "flex w-full flex-col gap-5 md:flex-row" }, "search category"),
            React.createElement(Collection_1["default"], { data: [], emptyTitle: 'No Events Found', emptyStateSubtext: 'Come back later', collectionType: 'All_Events', limit: 6, page: 1, totalPages: 2 }))));
}
exports["default"] = Home;
