import React, { useEffect } from "react";
// import "./pro";
import { NavLink } from "react-router-dom";
import ProductImg from "./products/APCL2.png";
import perfume from "./products/APCL22.png";
import home from "./products/APCL21.png";
import personal from "./products/APCL4.png";
import pack from "./products/APCL14.png";
import "./scss/style.css";
import jQuery from 'jquery'


const ProHome = () => {
    useEffect(() => {
        const center = { x: 325, y: 175 };
        const serv_dist = 250;
        const pointer_dist = 172;
        const pointer_time = 2;
        const icon_size = 40;
        const circle_radius = 35;
        const text_top_margin = 18;
        const tspan_delta = 16;

        //name is used as the title for the bubble
        //icon is the id of the corresponding svg symbol
        const services_data = [
            { name: "Aerosols", icon: "aerosol" },
            { name: "Perfumes", icon: "perfume" },
            { name: "Packaging", icon: "packaging" },
            { name: "Personal Care", icon: "personal" },
            { name: "Home Care", icon: "homecare" },
        ];

        const services = document.getElementById("service-collection");
        const nav_container = document.getElementById("circle-nav-services");
        const symbol_copy = document.getElementById("circle-nav-copy");
        const use_copy = document.querySelector("use.nav-copy");

        //Keeps code DRY avoiding namespace for element creation
        function createSVGElement(el) {
            return document.createElementNS("http://www.w3.org/2000/svg", el);
        }

        //Quick setup for multiple attributes
        function setAttributes(el, options) {
            Object.keys(options).forEach(function (attr) {
                el.setAttribute(attr, options[attr]);
            });
        }

        //Service bubbles are created dynamically
        function addService(serv, index) {
            let group = createSVGElement("g");
            group.setAttribute("class", "service serv-" + index);

            /* This group is needed to apply animations in
              the icon and its background at the same time */
            let icon_group = createSVGElement("g");
            icon_group.setAttribute("class", "icon-wrapper");

            let circle = createSVGElement("circle");
            setAttributes(circle, {
                r: circle_radius,
                cx: center.x,
                cy: center.y,
            });
            let circle_shadow = circle.cloneNode();
            setAttributes(circle, {
                class: "shadow",
            });
            icon_group.appendChild(circle_shadow);
            icon_group.appendChild(circle);

            let symbol = createSVGElement("use");
            setAttributes(symbol, {
                x: center.x - icon_size / 2,
                y: center.y - icon_size / 2,
                width: icon_size,
                height: icon_size,
            });
            symbol.setAttributeNS(
                "http://www.w3.org/1999/xlink",
                "xlink:href",
                "#" + serv.icon
            );
            icon_group.appendChild(symbol);

            group.appendChild(icon_group);

            let text = createSVGElement("text");
            setAttributes(text, {
                x: center.x,
                y: center.y + circle_radius + text_top_margin,
            });

            let tspan = createSVGElement("tspan");
            if (serv.name.indexOf("\n") >= 0) {
                let tspan2 = tspan.cloneNode();
                let name = serv.name.split("\n");
                jQuery(tspan).text(name[0]);
                jQuery(tspan2).text(name[1]);

                setAttributes(tspan2, {
                    x: center.x,
                    dy: tspan_delta,
                });

                text.appendChild(tspan);
                text.appendChild(tspan2);
            } else {
                jQuery(tspan).text(serv.name);
                text.appendChild(tspan);
            }

            group.appendChild(text);
            services.appendChild(group);

            let service_bubble = jQuery(".serv-" + index);

            //Uses tween to look for right position
            twn_pivot_path.seek(index);
            window.TweenLite.set(service_bubble, {
                x: pivot_path.x,
                y: pivot_path.y,
                transformOrigin: "center center",
            });

            service_bubble.click(serviceClick);
        }

        //Creates pointer
        function createPointer() {
            let service_pointer = createSVGElement("circle");

            setAttributes(service_pointer, {
                cx: center.x - pointer_dist,
                cy: center.y,
                r: 10,
                class: "pointer",
            });

            nav_container.appendChild(service_pointer);

            service_pointer = document.querySelector("svg .pointer");

            let pointer_circle = [
                { x: 0, y: 0 },
                { x: pointer_dist, y: pointer_dist },
                { x: pointer_dist * 2, y: 0 },
                { x: pointer_dist, y: -pointer_dist },
                { x: 0, y: 0 },
            ];

            twn_pointer_path.to(service_pointer, pointer_time, {
                bezier: {
                    values: pointer_circle,
                    curviness: 1.5,
                },
                ease: window.Power0.easeNone,
                transformOrigin: "center center",
            });
        }

        //Defines behavior for service bubbles
        function serviceClick(ev) {
            //There's always an active service
            jQuery(".service.active").removeClass("active");

            let current = jQuery(ev.currentTarget);
            current.addClass("active");

            //There's a "serv-*" class for each bubble
            let current_class = current.attr("class").split(" ")[1];
            let class_index = current_class.split("-")[1];

            //Hides current text of the main bubble
            jQuery(use_copy).addClass("changing");

            //Sets pointer to the right position
            twn_pointer_path.tweenTo(class_index * (pointer_time / (2 * 3.9)));

            //After it's completely hidden, the text changes and becomes visible
            setTimeout(() => {
                let viewBoxY = 300 * class_index;
                symbol_copy.setAttribute("viewBox", "0 " + viewBoxY + " 300 300");
                jQuery(use_copy).removeClass("changing");
            }, 250);
        }

        //Array describes points for a whole circle in order to get
        //the right curve
        let half_circle = [
            { x: -serv_dist, y: 0 },
            { x: 0, y: serv_dist },
            { x: serv_dist, y: 0 },
            { x: 0, y: -serv_dist },
            { x: -serv_dist, y: 0 },
        ];

        //A simple object is used in the tween to retrieve its values
        var pivot_path = { x: half_circle[0].x, y: half_circle[0].y };

        //The object is animated with a duration based on how many bubbles
        //should be placed
        var twn_pivot_path = window.TweenMax.to(pivot_path, 7.9, {
            bezier: {
                values: half_circle,
                curviness: 1.5,
            },
            ease: window.Linear.easeNone,
        });

        services_data.reduce((count, serv) => {
            addService(serv, count);
            return ++count;
        }, 0);

        //The variable is modified inside the function
        //but its also used later to toggle its class
        var twn_pointer_path = new window.TimelineMax({ paused: true });
        createPointer();

        //Adding it immediately triggers a bug for the transform
        setTimeout(() => jQuery("#service-collection .serv-0").addClass("active"), 200);

    })
    return (
        <>
            <div class="container">
                <svg id="circle-nav-services" width="100%" height="100%" viewBox="0 0 650 550">
                    <defs>
                        <filter id="service-shadow" height="2" width="2" y="-.5" x="-.5">
                            <feOffset result="offOut" in="SourceGraphic" dx="0" dy="5" />
                            <feGaussianBlur result="blurOut" in="offOut" stdDeviation="12" />
                            <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
                        </filter>
                    </defs>

                    <symbol id="circle-nav-copy" viewBox="0 0 300 300">
                        {/* <defs>
                            <style>
                                .cls-1 {
                                    font - size: 28px;
            font-family: Roboto-Bold, Roboto;
            font-weight: 700;
          }

          .cls-2 {
                                    letter - spacing: -0.02em;
          }

          .cls-3 {
                                    letter - spacing: -0.01em;
          }

          .cls-4 {
                                    letter - spacing: -0.01em;
          }

          .cls-5 {
                                    font - size: 16px;
            font-family: Roboto-Regular, Roboto;
          }

          .cls-6 {
                                    letter - spacing: -0.01em;
          }

          .cls-7 {
                                    letter - spacing: -0.01em;
          }

          .cls-8 {
                                    letter - spacing: -0.02em;
          }

          .cls-9 {
                                    letter - spacing: -0.01em;
          }

          .cls-10 {
                                    letter - spacing: 0.01em;
          }

          .cls-11 {
                                    letter - spacing: -0.01em;
          }

          .cls-12 {
                                    letter - spacing: -0.04em;
          }

          .cls-13 {
                                    letter - spacing: -0.02em;
          }

          .cls-14 {
                                    letter - spacing: 0.01em;
          }

          .cls-15 {
                                    letter - spacing: -0.01em;
          }

          .cls-16 {
                                    letter - spacing: -0.06em;
          }

          .cls-17 {
                                    letter - spacing: -0.02em;
          }

          .cls-18 {
                                    letter - spacing: 0.01em;
          }

          .cls-19 {
                                    letter - spacing: 0.02em;
          }

          .cls-20 {
                                    letter - spacing: -0.01em;
          }

          .cls-21 {
                                    letter - spacing: -0.03em;
          }
        </style>
                        </defs> */}
                    </symbol>
                    <symbol id="aerosol" viewBox="-60 0 480 500">
                        <path d="m185.26 148.04v-45.465c0-9.7109-7.4609-17.195-18.5-19.406v-38.719c0-14.566-9.8359-25.977-22.395-25.977h-75.605c-12.555 0-22.391 11.41-22.391 25.977v38.719c-11.039 2.2031-18.5 9.6914-18.5 19.406v45.465c-16.184 5.7773-27.871 21.906-27.871 40.863v280.7c0 23.375 20.66 42.391 46.059 42.391h121.01c25.402 0 46.066-19.016 46.066-42.391v-280.7c0-18.957-11.684-35.086-27.871-40.863zm-2.1289 270.59h-52.535v-0.023438-179.46-0.03125h52.535zm-125.26-306.13h97.391v33.258h-97.391zm78.891-64.027v34.027h-60.391v-34.027zm30.309 433.52h-121.01c-8.7031 0-16.059-5.6758-16.059-12.391v-280.7c0-7.125 5.043-13.145 11.008-13.145h131.12c5.9688 0 11.008 6.0195 11.008 13.145v20.215h-56.273c-14.727 0-26.262 13.191-26.262 30.031v179.46c0 16.836 11.535 30.023 26.262 30.023h56.273v20.973c0 6.7148-7.3555 12.391-16.062 12.391z" />
                        <path d="m367.22 33.246 19.695-3.4727c8.1602-1.4375 13.605-9.2188 12.168-17.375-1.4375-8.1602-9.2188-13.605-17.375-12.168l-19.699 3.4727c-8.1562 1.4375-13.605 9.2188-12.164 17.379 1.4375 8.1562 9.2188 13.605 17.375 12.164z" />
                        <path d="m312.77 12.387-19.695 3.4727c-8.1562 1.4375-13.605 9.2188-12.168 17.379 1.4414 8.1562 9.2188 13.605 17.379 12.164l19.695-3.4727c8.1562-1.4375 13.605-9.2188 12.168-17.375-1.4414-8.1602-9.2188-13.605-17.379-12.168z" />
                        <path d="m243.84 24.543-19.695 3.4727c-8.1562 1.4375-13.605 9.2188-12.168 17.375 1.4414 8.1602 9.2188 13.605 17.379 12.168l19.695-3.4727c8.1602-1.4375 13.605-9.2188 12.168-17.379-1.4414-8.1562-9.2188-13.605-17.379-12.164z" />
                        <path d="m249.05 76.695-19.695-3.4727c-8.1602-1.4375-15.938 4.0117-17.379 12.168-1.4375 8.1562 4.0078 15.938 12.168 17.375l19.695 3.4766c8.1602 1.4375 15.938-4.0117 17.379-12.168 1.4375-8.1602-4.0078-15.938-12.168-17.379z" />
                        <path d="m386.92 101.01-19.695-3.4727c-8.1562-1.4414-15.938 4.0078-17.375 12.168-1.4414 8.1562 4.0078 15.938 12.164 17.375l19.699 3.4727c8.1562 1.4414 15.938-4.0078 17.375-12.168 1.4375-8.1562-4.0078-15.938-12.168-17.375z" />
                        <path d="m317.98 88.852-19.695-3.4727c-8.1602-1.4375-15.941 4.0078-17.379 12.168-1.4375 8.1562 4.0078 15.938 12.168 17.375l19.695 3.4766c8.1562 1.4375 15.938-4.0117 17.375-12.168 1.4414-8.1602-4.0078-15.941-12.164-17.379z" />
                    </symbol>
                    <symbol id="perfume" viewBox="-60 0 440 500">
                        <path d="m242.86 120.59h-36.91v-30.438c0-7.3594-5.3008-13.469-12.293-14.742v-60.406c0-8.2852-6.7148-15-15-15h-71.766c-8.2852 0-15 6.7148-15 15v60.406c-6.9922 1.2734-12.293 7.3828-12.293 14.742v30.438h-36.91c-23.539 0-42.688 19.148-42.688 42.688v306.04c0 23.539 19.148 42.688 42.688 42.688h200.17c23.539 0 42.688-19.148 42.688-42.688v-306.04c0-23.539-19.148-42.688-42.688-42.688zm-66.91-15.438v14.844h-66.352v-14.844zm-12.293-75.148v45.148h-41.766v-45.148zm91.891 439.31c0 6.9961-5.6914 12.688-12.688 12.688h-200.17c-6.9961 0-12.688-5.6914-12.688-12.688v-306.04c0-6.9961 5.6914-12.688 12.688-12.688h200.17c6.9961 0 12.688 5.6914 12.688 12.688z" />
                        <path d="m197.02 173.45h-108.5c-10.914 0-21.148 4.2812-28.812 12.055-7.6641 7.7734-11.805 18.062-11.652 28.98 0 0.089843 0.003906 0.17969 0.007812 0.26953l6.5117 204.04c0.38672 21.938 18.508 39.758 40.469 39.758h95.457c21.961 0 40.082-17.82 40.465-39.758l6.5156-204.04c0.003906-0.089844 0.003906-0.17969 0.007813-0.26953 0.14844-10.918-3.9883-21.207-11.652-28.98-7.6641-7.7734-17.902-12.055-28.82-12.055zm3.9609 244.5c-0.003907 0.089843-0.007813 0.17969-0.007813 0.26953-0.078125 5.6953-4.7773 10.328-10.469 10.328h-95.461c-5.6953 0-10.391-4.6328-10.473-10.328 0-0.089844 0-0.17969-0.003906-0.26953l-6.5117-203.99c-0.015626-2.7852 1.0547-5.4062 3.0156-7.3906 1.9805-2.0117 4.6289-3.1211 7.4531-3.1211h108.5c2.8242 0 5.4727 1.1094 7.457 3.1211 1.957 1.9844 3.0273 4.6055 3.0156 7.3906z" />
                        <path d="m155.58 51c0 7.0742-5.7344 12.805-12.805 12.805-7.0742 0-12.805-5.7305-12.805-12.805 0-7.0703 5.7305-12.805 12.805-12.805 7.0703 0 12.805 5.7344 12.805 12.805z" />
                    </symbol>
                    <symbol id="packaging" viewBox="0 0 512 512">
                        <path d="m491.73 112.97-232.47-112.23c-2.061-0.994-4.461-0.994-6.521 0l-232.47 112.23c-2.592 1.251-4.239 3.876-4.239 6.754v272.55c0 2.878 1.647 5.503 4.239 6.754l232.47 112.23c1.03 0.497 2.146 0.746 3.261 0.746s2.23-0.249 3.261-0.746l232.47-112.23c2.592-1.251 4.239-3.876 4.239-6.754v-272.55c0-2.88-1.648-5.503-4.239-6.755zm-235.73-97.143 215.22 103.9-62.387 30.118c-0.395-0.301-0.812-0.579-1.27-0.8l-213.76-103.19 62.195-30.025zm-79.133 38.505 214.9 103.75-44.015 21.249-214.82-103.7 43.926-21.291zm219.93 117.97v78.546l-41.113 19.848v-78.546l41.113-19.848zm84.169 215.26-217.47 104.98v-255.89l51.873-25.042c3.73-1.801 5.294-6.284 3.493-10.015-1.801-3.729-6.284-5.295-10.015-3.493l-52.851 25.515-20.796-10.04c-3.731-1.803-8.214-0.237-10.015 3.493s-0.237 8.214 3.493 10.015l19.818 9.567v255.89l-217.47-104.98v-255.89l165.6 79.945c1.051 0.508 2.162 0.748 3.255 0.748 2.788 0 5.466-1.562 6.759-4.241 1.801-3.73 0.237-8.214-3.493-10.015l-162.37-78.386 74.505-35.968 225.29 108.76c0.033 0.046 0.07 0.087 0.104 0.132v89.999c0 2.581 1.327 4.98 3.513 6.353 1.214 0.762 2.599 1.147 3.988 1.147 1.112 0 2.227-0.247 3.26-0.746l56.113-27.089c2.592-1.251 4.239-3.875 4.239-6.754v-90.495l69.169-33.392v255.89z" />
                        <path d="m92.926 358.48-34.115-16.469c-3.732-1.803-8.214-0.237-10.015 3.493s-0.237 8.214 3.493 10.015l34.115 16.469c1.051 0.508 2.162 0.748 3.255 0.748 2.788 0 5.466-1.562 6.759-4.241 1.802-3.731 0.238-8.213-3.492-10.015z" />
                        <path d="m124.32 338.04-65.465-31.604c-3.731-1.801-8.214-0.237-10.015 3.494-1.8 3.73-0.236 8.214 3.494 10.015l65.465 31.604c1.051 0.507 2.162 0.748 3.255 0.748 2.788 0 5.466-1.562 6.759-4.241 1.801-3.732 0.237-8.216-3.493-10.016z" />
                    </symbol>
                    <symbol id="personal" viewBox="0 0 512 512">
                        <path d="m497 173.16h-10.078v-20.359c0-19.285-15.883-34.973-35.402-34.973h-13.066c-6.8867-36.5-38.727-62.488-79.418-62.488h-129.61c-8.8047-4.4492-37.645-20.516-55.52-48.098-3.6992-5.6953-10.508-8.4102-16.953-6.7617-10.688 2.7461-12.578 13.758-13.828 21.043-0.84766 4.9375-1.7227 11.641-2.6094 19.918-0.5625 5.2656-1.0547 10.477-1.4492 14.941-33.906 5.1836-59.445 29.215-65.527 61.441h-13.055c-19.52 0-35.402 15.691-35.402 34.977v20.359h-10.078c-8.2852 0-15 6.7148-15 15v135.81c0 61.273 48.625 111.12 108.39 111.12h295.21c59.77 0 108.39-49.848 108.39-111.12v-135.81c0-8.2852-6.7148-15-15-15zm-344.04-87.82c7.8555 0 14.383-6.0625 14.957-13.898 0.53125-7.1953 1.2148-14.988 1.9492-22.25 23.52 23.031 48.719 34.277 50.102 34.883 1.9023 0.83594 3.9531 1.2656 6.0273 1.2656h133.04c23.766 0 42.262 13.008 48.523 32.488h-303.12c6.2617-19.48 24.758-32.488 48.523-32.488zm-97.887 67.461c0-2.6953 2.4727-4.9766 5.4023-4.9766h391.04c2.9297 0 5.4023 2.2812 5.4023 4.9766v20.359h-401.84zm426.92 171.17c0 44.73-35.168 81.125-78.395 81.125h-295.21c-43.227 0-78.395-36.395-78.395-81.125v-120.81h452z" />
                        <path d="m92.09 362.04h327.82c12.5 0 22.668-10.168 22.668-22.668v-81.098c0-12.5-10.168-22.668-22.668-22.668h-327.82c-12.5 0-22.668 10.168-22.668 22.668v81.098c0 12.5 10.168 22.668 22.668 22.668zm7.332-96.434h313.16v66.434h-313.16z" />
                    </symbol>
                    <symbol id="homecare" viewBox="-60 0 480 512">
                        <path d="m270.98 0h-179.61c-3.6406 0-7.1602 1.3242-9.8984 3.7305l-29.875 26.242c-3.2422 2.8477-5.1016 6.9531-5.1016 11.27v35.738c0 8.2852 6.7188 15 15 15h18.48v18.137h-3.8867c-14.012 0-25.406 11.75-25.406 26.188v35.195c-31.859 27.785-50.684 71.156-50.684 117.62v207.88c0 8.2852 6.7148 15 15 15h224.96c8.2852 0 15-6.7148 15-15v-207.88c0-46.465-18.82-89.836-50.684-117.62v-35.195c0-14.438-11.395-26.188-25.402-26.188h-3.8867v-18.137h18.941c2.9922 0 5.9141-0.89453 8.3906-2.5664l4.4297-2.9922c3.6758 3.8438 8.0781 8.8203 12.09 14.367 8.5703 11.848 13.113 25.062 13.148 25.164 2.1016 6.2773 7.9492 10.242 14.219 10.242 1.582 0 3.1875-0.25391 4.7695-0.78125 7.8516-2.6328 12.086-11.133 9.457-18.988-0.23828-0.71094-5.9492-17.543-17.285-33.215-3.7031-5.1211-7.6094-9.7852-11.227-13.777l0.10156-0.070313h38.965c8.2812 0 15-6.7148 15-15v-39.363c-0.003906-8.2852-6.7188-15-15.004-15zm-96.707 140.12v23.445h-93.59v-23.445zm-103.26 53.445h41.465v73.789h-80.793c4.6172-29.566 18.551-55.98 39.328-73.789zm-41.016 288.44v-184.65h194.96v184.65zm193.27-214.65h-80.789v-73.789h41.461c20.781 17.809 34.711 44.223 39.328 73.789zm-78.285-157.23h-35.008v-18.137h35.008zm44.352-48.137h-112.84v-13.949l20.531-18.031h115.4v16.395zm66.645-22.613h-13.551v-9.3672h13.551z" />
                    </symbol>

                    {/* <!-- arc travelled by the pointer --> */}
                    <svg x="150" y="0" width="350" height="350" viewBox="0 0 500 500">
                        <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="250.2542" y1="496.283" x2="250.2542" y2="-.2102">
                            <stop offset="0" stop-color="#0F68A9" />
                            <stop offset="1" stop-color="#3DDEED" stop-opacity="0" />
                        </linearGradient>
                        <path fill="url(#a)" d="M250.3 0c137 0 248.1 111.1 248.1 248.1S387.3 496.2 250.3 496.2 2.2 385.1 2.2 248.1 113.2 0 250.3 0C112.5 0 .8 111.7.8 249.5S112.5 499 250.3 499s249.5-111.7 249.5-249.5S388 0 250.3 0z" />
                    </svg>

                    <g id="service-collection">
                        {/* <!-- this gets filled dynamically --> */}
                    </g>
                    <circle cx="325" cy="170" r="140" class="center " />
                    <use x="185" y="30" width="280" height="280" href="#circle-nav-copy" class="nav-copy" />
                    <rect data-url="/industries" id="learn-more" x="280" y="250" width="90" height="30" />
                    <text x="290" y="270" class="learn-more-text">Learn more</text>
                </svg>
            </div>
        </>
    );
};

export default ProHome;