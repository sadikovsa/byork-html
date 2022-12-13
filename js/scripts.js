// Custom Scripts

    var ok = document.querySelector("#dropdownBtn")
    var btn = document.querySelector(".dropdown-btn-close")
    var btn1 = document.querySelector(".dropdown-btn-open")

    
    ok.addEventListener("click", function() {
        if(btn.classList.contains("active")){
            console.log("ehhe")
        }
        console.log("salom")
    })



 
// Custom scripts

// Мобильное меню бургер
function burgerMenu() {
    const burger = document.querySelector(".burger");
    const menu = document.querySelector(".menu");
    const body = document.querySelector("body");
    burger.addEventListener("click", () => {
        if (!menu.classList.contains("active")) {
            menu.classList.add("active");
            burger.classList.add("active-burger");
            body.classList.add("locked");
        } else {
            menu.classList.remove("active");
            burger.classList.remove("active-burger");
            body.classList.remove("locked");
        }
    });
    menu.addEventListener("click", (event) => {
        if (event.target) {
            menu.classList.remove("active");
            burger.classList.remove("active-burger");
            body.classList.remove("locked");
        }
    });
    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener("resize", () => {
        if (window.innerWidth > 991.98) {
            menu.classList.remove("active");
            burger.classList.remove("active-burger");
            body.classList.remove("locked");
        }
    });
}
burgerMenu();

// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
    const nav = document.querySelector("nav");
    
    // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
    const breakpoint = 1;
    if (window.scrollY >= breakpoint) {
        nav.classList.add("fixed__nav");
    } else {
        nav.classList.remove("fixed__nav");
    }
}
window.addEventListener("scroll", fixedNav);

// DROPDOWN CATALOG
const catalogBtn = document.getElementById("dropdownBtn");

catalogBtn.onmouseover = function () {
    catalogBtn.classList.add("white");
    document.getElementById("dropdownMenu").classList.add("active-drop");
    document.body.classList.add("lock");
    catalogBtn.querySelector(".dropdown-btn-close").classList.add("active");
    catalogBtn.querySelector(".dropdown-btn-open").classList.add("active");
    // document.getElementById("bgGray").classList.toggle("bg-gray-active");
};
catalogBtn.addEventListener("click", function(){
    if(document.getElementById("dropdownMenu").classList.contains("active-drop")){
        catalogBtn.classList.remove("white");
        document.getElementById("dropdownMenu").classList.remove("active-drop");
        document.body.classList.remove("lock");
        catalogBtn.querySelector(".dropdown-btn-close").classList.remove("active");
        catalogBtn.querySelector(".dropdown-btn-open").classList.remove("active");
    }
})

const header = document.querySelector('header');
const drMenu = document.getElementById("dropdownMenu");

drMenu.style.height = "calc(100vh - " + header.offsetHeight + "px)";


 
// Аккордеон
function accordion() {
    const items = document.querySelectorAll('.accordion__item-trigger')
    items.forEach(item => {
        item.addEventListener('click', () => {
            const parent = item.parentNode
            if (parent.classList.contains('accordion__item-active')) {
                parent.classList.remove('accordion__item-active')
            } else {
                document
                    .querySelectorAll('.accordion__item')
                    .forEach(child => child.classList.remove('accordion__item-active'))   
                parent.classList.add('accordion__item-active')
            }
        })
    })
}
accordion() 


var simplemaps_countrymap_mapdata={
  main_settings: {
    //General settings
		width: "300", //or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    pop_ups: "detect",
    
		//State defaults
		state_description: "State description",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
		//Location defaults
		location_description: "Location description",
    location_url: "",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
		//Label defaults
		label_color: "#d5ddec",
    label_hover_color: "#d5ddec",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
		//Zoom settings
		zoom: "yes",
    manual_zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
		//Popup settings
		popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
		//Advanced settings
		div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website"
  },
  state_specific: {
    UZB354: {
      name: "Bukhoro",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    UZB355: {
      name: "Khorezm"
    },
    UZB356: {
      name: "Karakalpakstan"
    },
    UZB357: {
      name: "Navoi"
    },
    UZB358: {
      name: "Samarkand"
    },
    UZB361: {
      name: "Kashkadarya"
    },
    UZB362: {
      name: "Surkhandarya"
    },
    UZB363: {
      name: "Andijon"
    },
    UZB364: {
      name: "Ferghana"
    },
    UZB365: {
      name: "Namangan"
    },
    UZB370: {
      name: "Jizzakh"
    },
    UZB371: {
      name: "Sirdaryo"
    },
    UZB372: {
      name: "Tashkent"
    },
    UZB4828: {
      name: "Tashkent"
    }
  },
  locations: {
    "0": {
      lat: "41.316667",
      lng: "69.25",
      name: "Tashkent"
    }
  }
}; 
if(window.location.toString().indexOf('product.htm')>0)
{
    // TABS
    
    function tabs(headerSelector, tabSelector, contentSelector, activeClass, display='flex') {
        const header = document.querySelector(headerSelector),
              tab = document.querySelectorAll(tabSelector),
              content = document.querySelectorAll(contentSelector)
        function hideTabContent() {
            content.forEach(item => {
                item.style.display = 'none'
            });
            tab.forEach(item => {
                item.classList.remove(activeClass)
            });
        }
        function showTabContent(i = 0) {
           content[i].style.display = display
           tab[i].classList.add(activeClass)
        }    
        hideTabContent()
        showTabContent()
        header.addEventListener('click', e => {
            const target = e.target
            if (target.classList.contains(tabSelector.replace(/\./, '')) || 
            target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) {
                tab.forEach((item, i) => {
                    if ( target == item || target.parentNode == item ) {
                        hideTabContent()
                        showTabContent(i)
                    }
                });
            }
        })
    }
    
    // ПЕРВЫЙ аргумент - класс всего нашего хедера табов.
    // ВТОРОЙ аргумент - класс конкретного элемента, при клике на который будет переключатся таб.
    // ТРЕТИЙ аргумент - класс того блока, который будет переключаться.
    // ЧЕТВЕРТЫЙ аргумент - класс активности, который будет добавлятся для таба, который сейчас активен.
    tabs( '.tabs__header' ,'.tabs__header-item', '.tabs__content-item', 'active')
}


const swiperHero = new Swiper('.hero__swiper', {
    slidesPerView: 1,
    spaceBetween: 20,

    // autoplay: {
    //     delay: 4000,
    // },

    // If we need pagination
    pagination: {
        el: '.hero__pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.hero-btn-next',
        prevEl: '.hero-btn-prev',
    },


    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {},
        // when window width is >= 480px
        480: {},
    }
});

const swiperReview = new Swiper('.review__swiper', {
    slidesPerView: 1,
    spaceBetween: 30,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


    //   // Responsive breakpoints
    //   breakpoints: {
    //   // when window width is >= 320px
    //   320: {
    //     slidesPerView: 3,
    //     spaceBetween: 20
    //   },
    //   // when window width is >= 480px
    //   480: {
    //     slidesPerView: 3,
    //     spaceBetween: 30
    //   },
    // }
});

const swiperClients = new Swiper('.clients__swiper', {
    slidesPerView: 3,
    spaceBetween: 30,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 30
        },

        700: {
            slidesPerView: 3,
            spaceBetween: 30
        },

        992: {
            slidesPerView: 2,
            spaceBetween: 30
        },

        1400: {
            slidesPerView: 3,
            spaceBetween: 30
        },
    }
});

const swiperLicense = new Swiper('.license__swiper', {
    slidesPerView: 4,
    spaceBetween: 30,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 3,
            spaceBetween: 30
        },

        700: {
            slidesPerView: 4,
            spaceBetween: 30
        },

        992: {
            slidesPerView: 3,
            spaceBetween: 30
        },

        1400: {
            slidesPerView: 4,
            spaceBetween: 30
        },

    }


});


const swiperDocReview = new Swiper('.doc-review__swiper', {
    slidesPerView: 1,
    spaceBetween: 40,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


    //   // Responsive breakpoints
    //   breakpoints: {
    //   // when window width is >= 320px
    //   320: {
    //     slidesPerView: 3,
    //     spaceBetween: 20
    //   },
    //   // when window width is >= 480px
    //   480: {
    //     slidesPerView: 3,
    //     spaceBetween: 30
    //   },
    // }
});


const swiperLizing = new Swiper('.lizing__swiper', {
    slidesPerView: 1,
    spaceBetween: 70,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


    //   // Responsive breakpoints
    //   breakpoints: {
    //   // when window width is >= 320px
    //   320: {
    //     slidesPerView: 3,
    //     spaceBetween: 20
    //   },
    //   // when window width is >= 480px
    //   480: {
    //     slidesPerView: 3,
    //     spaceBetween: 30
    //   },
    // }
});


// Product Swiper

const swiper1 = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 1,
    freeMode: true,
    watchSlidesProgress: true,

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 4,
            spaceBetween: 20
        },

        720: {
            slidesPerView: 4,
            spaceBetween: 20
        },
    }
});

const swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
    },
    thumbs: {
        swiper: swiper1,
    },

    breakpoints: {

    }

});


// TABS

const swiperTabs = new Swiper(".tabs__swiper", {
    // slidesPerView: 5,
    spaceBetween: 10,
    freeMode: true,

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
        },

        730: {
            slidesPerView: 3,
        },

        1000: {
            slidesPerView: 3,
        },

        1200: {
            slidesPerView: 5,
        },
    }
});



// BLOG SLIDER

const swiperBlog = new Swiper('.blog__swiper', {
    slidesPerView: 1,
    spaceBetween: 40,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


    //   // Responsive breakpoints
    //   breakpoints: {
    //   // when window width is >= 320px
    //   320: {
    //     slidesPerView: 3,
    //     spaceBetween: 20
    //   },
    //   // when window width is >= 480px
    //   480: {
    //     slidesPerView: 3,
    //     spaceBetween: 30
    //   },
    // }
});


const swiperClients2 = new Swiper('.clients__swiper2', {
    slidesPerView: 6,
    spaceBetween: 20,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 20
        },

        700: {
            slidesPerView: 3,
            spaceBetween: 20
        },

        992: {
            slidesPerView: 4,
            spaceBetween: 20
        },

        1400: {
            slidesPerView: 5,
            spaceBetween: 20
        },
    }
});


const swiperBenefits = new Swiper('.benefits__swiper', {
    slidesPerView: 4,
    // spaceBetween: 30,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            //   spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            //   spaceBetween: 30
        },

        700: {
            slidesPerView: 3,
            // spaceBetween: 30
        },

        992: {
            slidesPerView: 4,
            // spaceBetween: 30

        },
    }
});



const swiperMission = new Swiper('.mission__plan__slider', {
    slidesPerView: 3.3,
    slidesPerGroup: 3,
    spaceBetween: 5,
    navigation: {
        nextEl: '.mission__plan .swiper-button-next',
        prevEl: '.mission__plan .swiper-button-prev',
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 5
        },

        768: {
            slidesPerView: 1.3,
            slidesPerGroup: 1,
            spaceBetween: 5
        },

        992: {
            slidesPerView: 2.3,
            slidesPerGroup: 2,
            spaceBetween: 5

        },
        1200: {
            slidesPerView: 3.3,
            slidesPerGroup: 3,
            spaceBetween: 5
        }
    }
});



const exibitionSwiper = new Swiper('.exibition__swiper', {
    slidesPerView: "auto",
    spaceBetween: 5,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
           slidesPerView: "auto",
            spaceBetween: 5,
        },
        768: {
            slidesPerView: "auto",
            spaceBetween: 5,
        },

        992: {
            slidesPerView: "auto",
            spaceBetween: 5,
        },

        1200: {
            slidesPerView: "auto",
            spaceBetween: 5,

        },
    }
});


const servicesSwiper = new Swiper('.services__swiper', {
    slidesPerView: "auto",
    // spaceBetween: 30,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            //   spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            //   spaceBetween: 30
        },

        700: {
            slidesPerView: 3,
            // spaceBetween: 30
        },

        992: {
            slidesPerView: 4,
            // spaceBetween: 30

        },
    }
});



const historySwiperThumbs = new Swiper('.historys__swiper__thumbs', {
    initialSlide: 5,
    slidesPerView: 10,
    spaceBetween: 35,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        320: {
            slidesPerView: 3.5,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 6,
            spaceBetween: 35,
        },
        1200: {
            slidesPerView: 9,
            spaceBetween: 35,
            initialSlide: 5,
            
        },
    },
});

const historySwiper = new Swiper('.historys__swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    initialSlide: 4,
    // Navigation arrows
    navigation: {
        nextEl: '.historys__swiper__controls .swiper-button-next',
        prevEl: '.historys__swiper__controls .swiper-button-prev',
    },
    thumbs: {
        swiper: historySwiperThumbs,
    },
}); 
/*
 * anime.js v3.2.1
 * (c) 2020 Julian Garnier
 * Released under the MIT license
 * animejs.com
 */

!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):n.anime=e()}(this,function(){"use strict";var n={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},e={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},t=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],r={CSS:{},springs:{}};function a(n,e,t){return Math.min(Math.max(n,e),t)}function o(n,e){return n.indexOf(e)>-1}function u(n,e){return n.apply(null,e)}var i={arr:function(n){return Array.isArray(n)},obj:function(n){return o(Object.prototype.toString.call(n),"Object")},pth:function(n){return i.obj(n)&&n.hasOwnProperty("totalLength")},svg:function(n){return n instanceof SVGElement},inp:function(n){return n instanceof HTMLInputElement},dom:function(n){return n.nodeType||i.svg(n)},str:function(n){return"string"==typeof n},fnc:function(n){return"function"==typeof n},und:function(n){return void 0===n},nil:function(n){return i.und(n)||null===n},hex:function(n){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(n)},rgb:function(n){return/^rgb/.test(n)},hsl:function(n){return/^hsl/.test(n)},col:function(n){return i.hex(n)||i.rgb(n)||i.hsl(n)},key:function(t){return!n.hasOwnProperty(t)&&!e.hasOwnProperty(t)&&"targets"!==t&&"keyframes"!==t}};function c(n){var e=/\(([^)]+)\)/.exec(n);return e?e[1].split(",").map(function(n){return parseFloat(n)}):[]}function s(n,e){var t=c(n),o=a(i.und(t[0])?1:t[0],.1,100),u=a(i.und(t[1])?100:t[1],.1,100),s=a(i.und(t[2])?10:t[2],.1,100),f=a(i.und(t[3])?0:t[3],.1,100),l=Math.sqrt(u/o),d=s/(2*Math.sqrt(u*o)),p=d<1?l*Math.sqrt(1-d*d):0,v=1,h=d<1?(d*l-f)/p:-f+l;function g(n){var t=e?e*n/1e3:n;return t=d<1?Math.exp(-t*d*l)*(v*Math.cos(p*t)+h*Math.sin(p*t)):(v+h*t)*Math.exp(-t*l),0===n||1===n?n:1-t}return e?g:function(){var e=r.springs[n];if(e)return e;for(var t=0,a=0;;)if(1===g(t+=1/6)){if(++a>=16)break}else a=0;var o=t*(1/6)*1e3;return r.springs[n]=o,o}}function f(n){return void 0===n&&(n=10),function(e){return Math.ceil(a(e,1e-6,1)*n)*(1/n)}}var l,d,p=function(){var n=11,e=1/(n-1);function t(n,e){return 1-3*e+3*n}function r(n,e){return 3*e-6*n}function a(n){return 3*n}function o(n,e,o){return((t(e,o)*n+r(e,o))*n+a(e))*n}function u(n,e,o){return 3*t(e,o)*n*n+2*r(e,o)*n+a(e)}return function(t,r,a,i){if(0<=t&&t<=1&&0<=a&&a<=1){var c=new Float32Array(n);if(t!==r||a!==i)for(var s=0;s<n;++s)c[s]=o(s*e,t,a);return function(n){return t===r&&a===i?n:0===n||1===n?n:o(f(n),r,i)}}function f(r){for(var i=0,s=1,f=n-1;s!==f&&c[s]<=r;++s)i+=e;var l=i+(r-c[--s])/(c[s+1]-c[s])*e,d=u(l,t,a);return d>=.001?function(n,e,t,r){for(var a=0;a<4;++a){var i=u(e,t,r);if(0===i)return e;e-=(o(e,t,r)-n)/i}return e}(r,l,t,a):0===d?l:function(n,e,t,r,a){for(var u,i,c=0;(u=o(i=e+(t-e)/2,r,a)-n)>0?t=i:e=i,Math.abs(u)>1e-7&&++c<10;);return i}(r,i,i+e,t,a)}}}(),v=(l={linear:function(){return function(n){return n}}},d={Sine:function(){return function(n){return 1-Math.cos(n*Math.PI/2)}},Circ:function(){return function(n){return 1-Math.sqrt(1-n*n)}},Back:function(){return function(n){return n*n*(3*n-2)}},Bounce:function(){return function(n){for(var e,t=4;n<((e=Math.pow(2,--t))-1)/11;);return 1/Math.pow(4,3-t)-7.5625*Math.pow((3*e-2)/22-n,2)}},Elastic:function(n,e){void 0===n&&(n=1),void 0===e&&(e=.5);var t=a(n,1,10),r=a(e,.1,2);return function(n){return 0===n||1===n?n:-t*Math.pow(2,10*(n-1))*Math.sin((n-1-r/(2*Math.PI)*Math.asin(1/t))*(2*Math.PI)/r)}}},["Quad","Cubic","Quart","Quint","Expo"].forEach(function(n,e){d[n]=function(){return function(n){return Math.pow(n,e+2)}}}),Object.keys(d).forEach(function(n){var e=d[n];l["easeIn"+n]=e,l["easeOut"+n]=function(n,t){return function(r){return 1-e(n,t)(1-r)}},l["easeInOut"+n]=function(n,t){return function(r){return r<.5?e(n,t)(2*r)/2:1-e(n,t)(-2*r+2)/2}},l["easeOutIn"+n]=function(n,t){return function(r){return r<.5?(1-e(n,t)(1-2*r))/2:(e(n,t)(2*r-1)+1)/2}}}),l);function h(n,e){if(i.fnc(n))return n;var t=n.split("(")[0],r=v[t],a=c(n);switch(t){case"spring":return s(n,e);case"cubicBezier":return u(p,a);case"steps":return u(f,a);default:return u(r,a)}}function g(n){try{return document.querySelectorAll(n)}catch(n){return}}function m(n,e){for(var t=n.length,r=arguments.length>=2?arguments[1]:void 0,a=[],o=0;o<t;o++)if(o in n){var u=n[o];e.call(r,u,o,n)&&a.push(u)}return a}function y(n){return n.reduce(function(n,e){return n.concat(i.arr(e)?y(e):e)},[])}function b(n){return i.arr(n)?n:(i.str(n)&&(n=g(n)||n),n instanceof NodeList||n instanceof HTMLCollection?[].slice.call(n):[n])}function M(n,e){return n.some(function(n){return n===e})}function x(n){var e={};for(var t in n)e[t]=n[t];return e}function w(n,e){var t=x(n);for(var r in n)t[r]=e.hasOwnProperty(r)?e[r]:n[r];return t}function k(n,e){var t=x(n);for(var r in e)t[r]=i.und(n[r])?e[r]:n[r];return t}function O(n){return i.rgb(n)?(t=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e=n))?"rgba("+t[1]+",1)":e:i.hex(n)?(r=n.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(n,e,t,r){return e+e+t+t+r+r}),a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r),"rgba("+parseInt(a[1],16)+","+parseInt(a[2],16)+","+parseInt(a[3],16)+",1)"):i.hsl(n)?function(n){var e,t,r,a=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(n)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(n),o=parseInt(a[1],10)/360,u=parseInt(a[2],10)/100,i=parseInt(a[3],10)/100,c=a[4]||1;function s(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+6*(e-n)*t:t<.5?e:t<2/3?n+(e-n)*(2/3-t)*6:n}if(0==u)e=t=r=i;else{var f=i<.5?i*(1+u):i+u-i*u,l=2*i-f;e=s(l,f,o+1/3),t=s(l,f,o),r=s(l,f,o-1/3)}return"rgba("+255*e+","+255*t+","+255*r+","+c+")"}(n):void 0;var e,t,r,a}function C(n){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(n);if(e)return e[1]}function P(n,e){return i.fnc(n)?n(e.target,e.id,e.total):n}function I(n,e){return n.getAttribute(e)}function D(n,e,t){if(M([t,"deg","rad","turn"],C(e)))return e;var a=r.CSS[e+t];if(!i.und(a))return a;var o=document.createElement(n.tagName),u=n.parentNode&&n.parentNode!==document?n.parentNode:document.body;u.appendChild(o),o.style.position="absolute",o.style.width=100+t;var c=100/o.offsetWidth;u.removeChild(o);var s=c*parseFloat(e);return r.CSS[e+t]=s,s}function B(n,e,t){if(e in n.style){var r=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=n.style[e]||getComputedStyle(n).getPropertyValue(r)||"0";return t?D(n,a,t):a}}function T(n,e){return i.dom(n)&&!i.inp(n)&&(!i.nil(I(n,e))||i.svg(n)&&n[e])?"attribute":i.dom(n)&&M(t,e)?"transform":i.dom(n)&&"transform"!==e&&B(n,e)?"css":null!=n[e]?"object":void 0}function E(n){if(i.dom(n)){for(var e,t=n.style.transform||"",r=/(\w+)\(([^)]*)\)/g,a=new Map;e=r.exec(t);)a.set(e[1],e[2]);return a}}function F(n,e,t,r){var a,u=o(e,"scale")?1:0+(o(a=e,"translate")||"perspective"===a?"px":o(a,"rotate")||o(a,"skew")?"deg":void 0),i=E(n).get(e)||u;return t&&(t.transforms.list.set(e,i),t.transforms.last=e),r?D(n,i,r):i}function A(n,e,t,r){switch(T(n,e)){case"transform":return F(n,e,r,t);case"css":return B(n,e,t);case"attribute":return I(n,e);default:return n[e]||0}}function N(n,e){var t=/^(\*=|\+=|-=)/.exec(n);if(!t)return n;var r=C(n)||0,a=parseFloat(e),o=parseFloat(n.replace(t[0],""));switch(t[0][0]){case"+":return a+o+r;case"-":return a-o+r;case"*":return a*o+r}}function S(n,e){if(i.col(n))return O(n);if(/\s/g.test(n))return n;var t=C(n),r=t?n.substr(0,n.length-t.length):n;return e?r+e:r}function L(n,e){return Math.sqrt(Math.pow(e.x-n.x,2)+Math.pow(e.y-n.y,2))}function j(n){for(var e,t=n.points,r=0,a=0;a<t.numberOfItems;a++){var o=t.getItem(a);a>0&&(r+=L(e,o)),e=o}return r}function q(n){if(n.getTotalLength)return n.getTotalLength();switch(n.tagName.toLowerCase()){case"circle":return o=n,2*Math.PI*I(o,"r");case"rect":return 2*I(a=n,"width")+2*I(a,"height");case"line":return L({x:I(r=n,"x1"),y:I(r,"y1")},{x:I(r,"x2"),y:I(r,"y2")});case"polyline":return j(n);case"polygon":return t=(e=n).points,j(e)+L(t.getItem(t.numberOfItems-1),t.getItem(0))}var e,t,r,a,o}function H(n,e){var t=e||{},r=t.el||function(n){for(var e=n.parentNode;i.svg(e)&&i.svg(e.parentNode);)e=e.parentNode;return e}(n),a=r.getBoundingClientRect(),o=I(r,"viewBox"),u=a.width,c=a.height,s=t.viewBox||(o?o.split(" "):[0,0,u,c]);return{el:r,viewBox:s,x:s[0]/1,y:s[1]/1,w:u,h:c,vW:s[2],vH:s[3]}}function V(n,e,t){function r(t){void 0===t&&(t=0);var r=e+t>=1?e+t:0;return n.el.getPointAtLength(r)}var a=H(n.el,n.svg),o=r(),u=r(-1),i=r(1),c=t?1:a.w/a.vW,s=t?1:a.h/a.vH;switch(n.property){case"x":return(o.x-a.x)*c;case"y":return(o.y-a.y)*s;case"angle":return 180*Math.atan2(i.y-u.y,i.x-u.x)/Math.PI}}function $(n,e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=S(i.pth(n)?n.totalLength:n,e)+"";return{original:r,numbers:r.match(t)?r.match(t).map(Number):[0],strings:i.str(n)||e?r.split(t):[]}}function W(n){return m(n?y(i.arr(n)?n.map(b):b(n)):[],function(n,e,t){return t.indexOf(n)===e})}function X(n){var e=W(n);return e.map(function(n,t){return{target:n,id:t,total:e.length,transforms:{list:E(n)}}})}function Y(n,e){var t=x(e);if(/^spring/.test(t.easing)&&(t.duration=s(t.easing)),i.arr(n)){var r=n.length;2===r&&!i.obj(n[0])?n={value:n}:i.fnc(e.duration)||(t.duration=e.duration/r)}var a=i.arr(n)?n:[n];return a.map(function(n,t){var r=i.obj(n)&&!i.pth(n)?n:{value:n};return i.und(r.delay)&&(r.delay=t?0:e.delay),i.und(r.endDelay)&&(r.endDelay=t===a.length-1?e.endDelay:0),r}).map(function(n){return k(n,t)})}function Z(n,e){var t=[],r=e.keyframes;for(var a in r&&(e=k(function(n){for(var e=m(y(n.map(function(n){return Object.keys(n)})),function(n){return i.key(n)}).reduce(function(n,e){return n.indexOf(e)<0&&n.push(e),n},[]),t={},r=function(r){var a=e[r];t[a]=n.map(function(n){var e={};for(var t in n)i.key(t)?t==a&&(e.value=n[t]):e[t]=n[t];return e})},a=0;a<e.length;a++)r(a);return t}(r),e)),e)i.key(a)&&t.push({name:a,tweens:Y(e[a],n)});return t}function G(n,e){var t;return n.tweens.map(function(r){var a=function(n,e){var t={};for(var r in n){var a=P(n[r],e);i.arr(a)&&1===(a=a.map(function(n){return P(n,e)})).length&&(a=a[0]),t[r]=a}return t.duration=parseFloat(t.duration),t.delay=parseFloat(t.delay),t}(r,e),o=a.value,u=i.arr(o)?o[1]:o,c=C(u),s=A(e.target,n.name,c,e),f=t?t.to.original:s,l=i.arr(o)?o[0]:f,d=C(l)||C(s),p=c||d;return i.und(u)&&(u=f),a.from=$(l,p),a.to=$(N(u,l),p),a.start=t?t.end:0,a.end=a.start+a.delay+a.duration+a.endDelay,a.easing=h(a.easing,a.duration),a.isPath=i.pth(o),a.isPathTargetInsideSVG=a.isPath&&i.svg(e.target),a.isColor=i.col(a.from.original),a.isColor&&(a.round=1),t=a,a})}var Q={css:function(n,e,t){return n.style[e]=t},attribute:function(n,e,t){return n.setAttribute(e,t)},object:function(n,e,t){return n[e]=t},transform:function(n,e,t,r,a){if(r.list.set(e,t),e===r.last||a){var o="";r.list.forEach(function(n,e){o+=e+"("+n+") "}),n.style.transform=o}}};function z(n,e){X(n).forEach(function(n){for(var t in e){var r=P(e[t],n),a=n.target,o=C(r),u=A(a,t,o,n),i=N(S(r,o||C(u)),u),c=T(a,t);Q[c](a,t,i,n.transforms,!0)}})}function _(n,e){return m(y(n.map(function(n){return e.map(function(e){return function(n,e){var t=T(n.target,e.name);if(t){var r=G(e,n),a=r[r.length-1];return{type:t,property:e.name,animatable:n,tweens:r,duration:a.end,delay:r[0].delay,endDelay:a.endDelay}}}(n,e)})})),function(n){return!i.und(n)})}function R(n,e){var t=n.length,r=function(n){return n.timelineOffset?n.timelineOffset:0},a={};return a.duration=t?Math.max.apply(Math,n.map(function(n){return r(n)+n.duration})):e.duration,a.delay=t?Math.min.apply(Math,n.map(function(n){return r(n)+n.delay})):e.delay,a.endDelay=t?a.duration-Math.max.apply(Math,n.map(function(n){return r(n)+n.duration-n.endDelay})):e.endDelay,a}var J=0;var K=[],U=function(){var n;function e(t){for(var r=K.length,a=0;a<r;){var o=K[a];o.paused?(K.splice(a,1),r--):(o.tick(t),a++)}n=a>0?requestAnimationFrame(e):void 0}return"undefined"!=typeof document&&document.addEventListener("visibilitychange",function(){en.suspendWhenDocumentHidden&&(nn()?n=cancelAnimationFrame(n):(K.forEach(function(n){return n._onDocumentVisibility()}),U()))}),function(){n||nn()&&en.suspendWhenDocumentHidden||!(K.length>0)||(n=requestAnimationFrame(e))}}();function nn(){return!!document&&document.hidden}function en(t){void 0===t&&(t={});var r,o=0,u=0,i=0,c=0,s=null;function f(n){var e=window.Promise&&new Promise(function(n){return s=n});return n.finished=e,e}var l,d,p,v,h,g,y,b,M=(d=w(n,l=t),p=w(e,l),v=Z(p,l),h=X(l.targets),g=_(h,v),y=R(g,p),b=J,J++,k(d,{id:b,children:[],animatables:h,animations:g,duration:y.duration,delay:y.delay,endDelay:y.endDelay}));f(M);function x(){var n=M.direction;"alternate"!==n&&(M.direction="normal"!==n?"normal":"reverse"),M.reversed=!M.reversed,r.forEach(function(n){return n.reversed=M.reversed})}function O(n){return M.reversed?M.duration-n:n}function C(){o=0,u=O(M.currentTime)*(1/en.speed)}function P(n,e){e&&e.seek(n-e.timelineOffset)}function I(n){for(var e=0,t=M.animations,r=t.length;e<r;){var o=t[e],u=o.animatable,i=o.tweens,c=i.length-1,s=i[c];c&&(s=m(i,function(e){return n<e.end})[0]||s);for(var f=a(n-s.start-s.delay,0,s.duration)/s.duration,l=isNaN(f)?1:s.easing(f),d=s.to.strings,p=s.round,v=[],h=s.to.numbers.length,g=void 0,y=0;y<h;y++){var b=void 0,x=s.to.numbers[y],w=s.from.numbers[y]||0;b=s.isPath?V(s.value,l*x,s.isPathTargetInsideSVG):w+l*(x-w),p&&(s.isColor&&y>2||(b=Math.round(b*p)/p)),v.push(b)}var k=d.length;if(k){g=d[0];for(var O=0;O<k;O++){d[O];var C=d[O+1],P=v[O];isNaN(P)||(g+=C?P+C:P+" ")}}else g=v[0];Q[o.type](u.target,o.property,g,u.transforms),o.currentValue=g,e++}}function D(n){M[n]&&!M.passThrough&&M[n](M)}function B(n){var e=M.duration,t=M.delay,l=e-M.endDelay,d=O(n);M.progress=a(d/e*100,0,100),M.reversePlayback=d<M.currentTime,r&&function(n){if(M.reversePlayback)for(var e=c;e--;)P(n,r[e]);else for(var t=0;t<c;t++)P(n,r[t])}(d),!M.began&&M.currentTime>0&&(M.began=!0,D("begin")),!M.loopBegan&&M.currentTime>0&&(M.loopBegan=!0,D("loopBegin")),d<=t&&0!==M.currentTime&&I(0),(d>=l&&M.currentTime!==e||!e)&&I(e),d>t&&d<l?(M.changeBegan||(M.changeBegan=!0,M.changeCompleted=!1,D("changeBegin")),D("change"),I(d)):M.changeBegan&&(M.changeCompleted=!0,M.changeBegan=!1,D("changeComplete")),M.currentTime=a(d,0,e),M.began&&D("update"),n>=e&&(u=0,M.remaining&&!0!==M.remaining&&M.remaining--,M.remaining?(o=i,D("loopComplete"),M.loopBegan=!1,"alternate"===M.direction&&x()):(M.paused=!0,M.completed||(M.completed=!0,D("loopComplete"),D("complete"),!M.passThrough&&"Promise"in window&&(s(),f(M)))))}return M.reset=function(){var n=M.direction;M.passThrough=!1,M.currentTime=0,M.progress=0,M.paused=!0,M.began=!1,M.loopBegan=!1,M.changeBegan=!1,M.completed=!1,M.changeCompleted=!1,M.reversePlayback=!1,M.reversed="reverse"===n,M.remaining=M.loop,r=M.children;for(var e=c=r.length;e--;)M.children[e].reset();(M.reversed&&!0!==M.loop||"alternate"===n&&1===M.loop)&&M.remaining++,I(M.reversed?M.duration:0)},M._onDocumentVisibility=C,M.set=function(n,e){return z(n,e),M},M.tick=function(n){i=n,o||(o=i),B((i+(u-o))*en.speed)},M.seek=function(n){B(O(n))},M.pause=function(){M.paused=!0,C()},M.play=function(){M.paused&&(M.completed&&M.reset(),M.paused=!1,K.push(M),C(),U())},M.reverse=function(){x(),M.completed=!M.reversed,C()},M.restart=function(){M.reset(),M.play()},M.remove=function(n){rn(W(n),M)},M.reset(),M.autoplay&&M.play(),M}function tn(n,e){for(var t=e.length;t--;)M(n,e[t].animatable.target)&&e.splice(t,1)}function rn(n,e){var t=e.animations,r=e.children;tn(n,t);for(var a=r.length;a--;){var o=r[a],u=o.animations;tn(n,u),u.length||o.children.length||r.splice(a,1)}t.length||r.length||e.pause()}return en.version="3.2.1",en.speed=1,en.suspendWhenDocumentHidden=!0,en.running=K,en.remove=function(n){for(var e=W(n),t=K.length;t--;)rn(e,K[t])},en.get=A,en.set=z,en.convertPx=D,en.path=function(n,e){var t=i.str(n)?g(n)[0]:n,r=e||100;return function(n){return{property:n,el:t,svg:H(t),totalLength:q(t)*(r/100)}}},en.setDashoffset=function(n){var e=q(n);return n.setAttribute("stroke-dasharray",e),e},en.stagger=function(n,e){void 0===e&&(e={});var t=e.direction||"normal",r=e.easing?h(e.easing):null,a=e.grid,o=e.axis,u=e.from||0,c="first"===u,s="center"===u,f="last"===u,l=i.arr(n),d=l?parseFloat(n[0]):parseFloat(n),p=l?parseFloat(n[1]):0,v=C(l?n[1]:n)||0,g=e.start||0+(l?d:0),m=[],y=0;return function(n,e,i){if(c&&(u=0),s&&(u=(i-1)/2),f&&(u=i-1),!m.length){for(var h=0;h<i;h++){if(a){var b=s?(a[0]-1)/2:u%a[0],M=s?(a[1]-1)/2:Math.floor(u/a[0]),x=b-h%a[0],w=M-Math.floor(h/a[0]),k=Math.sqrt(x*x+w*w);"x"===o&&(k=-x),"y"===o&&(k=-w),m.push(k)}else m.push(Math.abs(u-h));y=Math.max.apply(Math,m)}r&&(m=m.map(function(n){return r(n/y)*y})),"reverse"===t&&(m=m.map(function(n){return o?n<0?-1*n:-n:Math.abs(y-n)}))}return g+(l?(p-d)/y:d)*(Math.round(100*m[e])/100)+v}},en.timeline=function(n){void 0===n&&(n={});var t=en(n);return t.duration=0,t.add=function(r,a){var o=K.indexOf(t),u=t.children;function c(n){n.passThrough=!0}o>-1&&K.splice(o,1);for(var s=0;s<u.length;s++)c(u[s]);var f=k(r,w(e,n));f.targets=f.targets||n.targets;var l=t.duration;f.autoplay=!1,f.direction=t.direction,f.timelineOffset=i.und(a)?l:N(a,l),c(t),t.seek(f.timelineOffset);var d=en(f);c(d),u.push(d);var p=R(u,n);return t.delay=p.delay,t.endDelay=p.endDelay,t.duration=p.duration,t.seek(0),t.reset(),t.autoplay&&t.play(),t},t},en.easing=h,en.penner=v,en.random=function(n,e){return Math.floor(Math.random()*(e-n+1))+n},en}); 
/*! ScrollMagic v2.0.7 | (c) 2019 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */
!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():e.ScrollMagic=t()}(this,function(){"use strict";var _=function(){};_.version="2.0.7",window.addEventListener("mousewheel",function(){});var P="data-scrollmagic-pin-spacer";_.Controller=function(e){var n,r,i="REVERSE",t="PAUSED",o=z.defaults,s=this,a=R.extend({},o,e),l=[],c=!1,f=0,u=t,d=!0,h=0,p=!0,g=function(){0<a.refreshInterval&&(r=window.setTimeout(E,a.refreshInterval))},v=function(){return a.vertical?R.get.scrollTop(a.container):R.get.scrollLeft(a.container)},m=function(){return a.vertical?R.get.height(a.container):R.get.width(a.container)},w=this._setScrollPos=function(e){a.vertical?d?window.scrollTo(R.get.scrollLeft(),e):a.container.scrollTop=e:d?window.scrollTo(e,R.get.scrollTop()):a.container.scrollLeft=e},y=function(){if(p&&c){var e=R.type.Array(c)?c:l.slice(0);c=!1;var t=f,n=(f=s.scrollPos())-t;0!==n&&(u=0<n?"FORWARD":i),u===i&&e.reverse(),e.forEach(function(e,t){e.update(!0)})}},S=function(){n=R.rAF(y)},b=function(e){"resize"==e.type&&(h=m(),u=t),!0!==c&&(c=!0,S())},E=function(){if(!d&&h!=m()){var t;try{t=new Event("resize",{bubbles:!1,cancelable:!1})}catch(e){(t=document.createEvent("Event")).initEvent("resize",!1,!1)}a.container.dispatchEvent(t)}l.forEach(function(e,t){e.refresh()}),g()};this._options=a;var x=function(e){if(e.length<=1)return e;var t=e.slice(0);return t.sort(function(e,t){return e.scrollOffset()>t.scrollOffset()?1:-1}),t};return this.addScene=function(e){if(R.type.Array(e))e.forEach(function(e,t){s.addScene(e)});else if(e instanceof _.Scene)if(e.controller()!==s)e.addTo(s);else if(l.indexOf(e)<0)for(var t in l.push(e),l=x(l),e.on("shift.controller_sort",function(){l=x(l)}),a.globalSceneOptions)e[t]&&e[t].call(e,a.globalSceneOptions[t]);return s},this.removeScene=function(e){if(R.type.Array(e))e.forEach(function(e,t){s.removeScene(e)});else{var t=l.indexOf(e);-1<t&&(e.off("shift.controller_sort"),l.splice(t,1),e.remove())}return s},this.updateScene=function(e,n){return R.type.Array(e)?e.forEach(function(e,t){s.updateScene(e,n)}):n?e.update(!0):!0!==c&&e instanceof _.Scene&&(-1==(c=c||[]).indexOf(e)&&c.push(e),c=x(c),S()),s},this.update=function(e){return b({type:"resize"}),e&&y(),s},this.scrollTo=function(e,t){if(R.type.Number(e))w.call(a.container,e,t);else if(e instanceof _.Scene)e.controller()===s&&s.scrollTo(e.scrollOffset(),t);else if(R.type.Function(e))w=e;else{var n=R.get.elements(e)[0];if(n){for(;n.parentNode.hasAttribute(P);)n=n.parentNode;var r=a.vertical?"top":"left",i=R.get.offset(a.container),o=R.get.offset(n);d||(i[r]-=s.scrollPos()),s.scrollTo(o[r]-i[r],t)}}return s},this.scrollPos=function(e){return arguments.length?(R.type.Function(e)&&(v=e),s):v.call(s)},this.info=function(e){var t={size:h,vertical:a.vertical,scrollPos:f,scrollDirection:u,container:a.container,isDocument:d};return arguments.length?void 0!==t[e]?t[e]:void 0:t},this.loglevel=function(e){return s},this.enabled=function(e){return arguments.length?(p!=e&&(p=!!e,s.updateScene(l,!0)),s):p},this.destroy=function(e){window.clearTimeout(r);for(var t=l.length;t--;)l[t].destroy(e);return a.container.removeEventListener("resize",b),a.container.removeEventListener("scroll",b),R.cAF(n),null},function(){for(var e in a)o.hasOwnProperty(e)||delete a[e];if(a.container=R.get.elements(a.container)[0],!a.container)throw"ScrollMagic.Controller init failed.";(d=a.container===window||a.container===document.body||!document.body.contains(a.container))&&(a.container=window),h=m(),a.container.addEventListener("resize",b),a.container.addEventListener("scroll",b);var t=parseInt(a.refreshInterval,10);a.refreshInterval=R.type.Number(t)?t:o.refreshInterval,g()}(),s};var z={defaults:{container:window,vertical:!0,globalSceneOptions:{},loglevel:2,refreshInterval:100}};_.Controller.addOption=function(e,t){z.defaults[e]=t},_.Controller.extend=function(e){var t=this;_.Controller=function(){return t.apply(this,arguments),this.$super=R.extend({},this),e.apply(this,arguments)||this},R.extend(_.Controller,t),_.Controller.prototype=t.prototype,_.Controller.prototype.constructor=_.Controller},_.Scene=function(e){var n,l,c="BEFORE",f="DURING",u="AFTER",r=D.defaults,d=this,h=R.extend({},r,e),p=c,g=0,a={start:0,end:0},v=0,i=!0,s={};this.on=function(e,i){return R.type.Function(i)&&(e=e.trim().split(" ")).forEach(function(e){var t=e.split("."),n=t[0],r=t[1];"*"!=n&&(s[n]||(s[n]=[]),s[n].push({namespace:r||"",callback:i}))}),d},this.off=function(e,o){return e&&(e=e.trim().split(" ")).forEach(function(e,t){var n=e.split("."),r=n[0],i=n[1]||"";("*"===r?Object.keys(s):[r]).forEach(function(e){for(var t=s[e]||[],n=t.length;n--;){var r=t[n];!r||i!==r.namespace&&"*"!==i||o&&o!=r.callback||t.splice(n,1)}t.length||delete s[e]})}),d},this.trigger=function(e,n){if(e){var t=e.trim().split("."),r=t[0],i=t[1],o=s[r];o&&o.forEach(function(e,t){i&&i!==e.namespace||e.callback.call(d,new _.Event(r,e.namespace,d,n))})}return d},d.on("change.internal",function(e){"loglevel"!==e.what&&"tweenChanges"!==e.what&&("triggerElement"===e.what?y():"reverse"===e.what&&d.update())}).on("shift.internal",function(e){t(),d.update()}),this.addTo=function(e){return e instanceof _.Controller&&l!=e&&(l&&l.removeScene(d),l=e,E(),o(!0),y(!0),t(),l.info("container").addEventListener("resize",S),e.addScene(d),d.trigger("add",{controller:l}),d.update()),d},this.enabled=function(e){return arguments.length?(i!=e&&(i=!!e,d.update(!0)),d):i},this.remove=function(){if(l){l.info("container").removeEventListener("resize",S);var e=l;l=void 0,e.removeScene(d),d.trigger("remove")}return d},this.destroy=function(e){return d.trigger("destroy",{reset:e}),d.remove(),d.off("*.*"),null},this.update=function(e){if(l)if(e)if(l.enabled()&&i){var t,n=l.info("scrollPos");t=0<h.duration?(n-a.start)/(a.end-a.start):n>=a.start?1:0,d.trigger("update",{startPos:a.start,endPos:a.end,scrollPos:n}),d.progress(t)}else m&&p===f&&C(!0);else l.updateScene(d,!1);return d},this.refresh=function(){return o(),y(),d},this.progress=function(e){if(arguments.length){var t=!1,n=p,r=l?l.info("scrollDirection"):"PAUSED",i=h.reverse||g<=e;if(0===h.duration?(t=g!=e,p=0===(g=e<1&&i?0:1)?c:f):e<0&&p!==c&&i?(p=c,t=!(g=0)):0<=e&&e<1&&i?(g=e,p=f,t=!0):1<=e&&p!==u?(g=1,p=u,t=!0):p!==f||i||C(),t){var o={progress:g,state:p,scrollDirection:r},s=p!=n,a=function(e){d.trigger(e,o)};s&&n!==f&&(a("enter"),a(n===c?"start":"end")),a("progress"),s&&p!==f&&(a(p===c?"start":"end"),a("leave"))}return d}return g};var m,w,t=function(){a={start:v+h.offset},l&&h.triggerElement&&(a.start-=l.info("size")*h.triggerHook),a.end=a.start+h.duration},o=function(e){if(n){var t="duration";x(t,n.call(d))&&!e&&(d.trigger("change",{what:t,newval:h[t]}),d.trigger("shift",{reason:t}))}},y=function(e){var t=0,n=h.triggerElement;if(l&&(n||0<v)){if(n)if(n.parentNode){for(var r=l.info(),i=R.get.offset(r.container),o=r.vertical?"top":"left";n.parentNode.hasAttribute(P);)n=n.parentNode;var s=R.get.offset(n);r.isDocument||(i[o]-=l.scrollPos()),t=s[o]-i[o]}else d.triggerElement(void 0);var a=t!=v;v=t,a&&!e&&d.trigger("shift",{reason:"triggerElementPosition"})}},S=function(e){0<h.triggerHook&&d.trigger("shift",{reason:"containerResize"})},b=R.extend(D.validate,{duration:function(t){if(R.type.String(t)&&t.match(/^(\.|\d)*\d+%$/)){var e=parseFloat(t)/100;t=function(){return l?l.info("size")*e:0}}if(R.type.Function(t)){n=t;try{t=parseFloat(n.call(d))}catch(e){t=-1}}if(t=parseFloat(t),!R.type.Number(t)||t<0)throw n&&(n=void 0),0;return t}}),E=function(e){(e=arguments.length?[e]:Object.keys(b)).forEach(function(t,e){var n;if(b[t])try{n=b[t](h[t])}catch(e){n=r[t]}finally{h[t]=n}})},x=function(e,t){var n=!1,r=h[e];return h[e]!=t&&(h[e]=t,E(e),n=r!=h[e]),n},z=function(t){d[t]||(d[t]=function(e){return arguments.length?("duration"===t&&(n=void 0),x(t,e)&&(d.trigger("change",{what:t,newval:h[t]}),-1<D.shifts.indexOf(t)&&d.trigger("shift",{reason:t})),d):h[t]})};this.controller=function(){return l},this.state=function(){return p},this.scrollOffset=function(){return a.start},this.triggerPosition=function(){var e=h.offset;return l&&(h.triggerElement?e+=v:e+=l.info("size")*d.triggerHook()),e},d.on("shift.internal",function(e){var t="duration"===e.reason;(p===u&&t||p===f&&0===h.duration)&&C(),t&&F()}).on("progress.internal",function(e){C()}).on("add.internal",function(e){F()}).on("destroy.internal",function(e){d.removePin(e.reset)});var C=function(e){if(m&&l){var t=l.info(),n=w.spacer.firstChild;if(e||p!==f){var r={position:w.inFlow?"relative":"absolute",top:0,left:0},i=R.css(n,"position")!=r.position;w.pushFollowers?0<h.duration&&(p===u&&0===parseFloat(R.css(w.spacer,"padding-top"))?i=!0:p===c&&0===parseFloat(R.css(w.spacer,"padding-bottom"))&&(i=!0)):r[t.vertical?"top":"left"]=h.duration*g,R.css(n,r),i&&F()}else{"fixed"!=R.css(n,"position")&&(R.css(n,{position:"fixed"}),F());var o=R.get.offset(w.spacer,!0),s=h.reverse||0===h.duration?t.scrollPos-a.start:Math.round(g*h.duration*10)/10;o[t.vertical?"top":"left"]+=s,R.css(w.spacer.firstChild,{top:o.top,left:o.left})}}},F=function(){if(m&&l&&w.inFlow){var e=p===f,t=l.info("vertical"),n=w.spacer.firstChild,r=R.isMarginCollapseType(R.css(w.spacer,"display")),i={};w.relSize.width||w.relSize.autoFullWidth?e?R.css(m,{width:R.get.width(w.spacer)}):R.css(m,{width:"100%"}):(i["min-width"]=R.get.width(t?m:n,!0,!0),i.width=e?i["min-width"]:"auto"),w.relSize.height?e?R.css(m,{height:R.get.height(w.spacer)-(w.pushFollowers?h.duration:0)}):R.css(m,{height:"100%"}):(i["min-height"]=R.get.height(t?n:m,!0,!r),i.height=e?i["min-height"]:"auto"),w.pushFollowers&&(i["padding"+(t?"Top":"Left")]=h.duration*g,i["padding"+(t?"Bottom":"Right")]=h.duration*(1-g)),R.css(w.spacer,i)}},L=function(){l&&m&&p===f&&!l.info("isDocument")&&C()},T=function(){l&&m&&p===f&&((w.relSize.width||w.relSize.autoFullWidth)&&R.get.width(window)!=R.get.width(w.spacer.parentNode)||w.relSize.height&&R.get.height(window)!=R.get.height(w.spacer.parentNode))&&F()},A=function(e){l&&m&&p===f&&!l.info("isDocument")&&(e.preventDefault(),l._setScrollPos(l.info("scrollPos")-((e.wheelDelta||e[l.info("vertical")?"wheelDeltaY":"wheelDeltaX"])/3||30*-e.detail)))};this.setPin=function(e,t){if(t=R.extend({},{pushFollowers:!0,spacerClass:"scrollmagic-pin-spacer"},t),!(e=R.get.elements(e)[0]))return d;if("fixed"===R.css(e,"position"))return d;if(m){if(m===e)return d;d.removePin()}var n=(m=e).parentNode.style.display,r=["top","left","bottom","right","margin","marginLeft","marginRight","marginTop","marginBottom"];m.parentNode.style.display="none";var i="absolute"!=R.css(m,"position"),o=R.css(m,r.concat(["display"])),s=R.css(m,["width","height"]);m.parentNode.style.display=n,!i&&t.pushFollowers&&(t.pushFollowers=!1);var a=m.parentNode.insertBefore(document.createElement("div"),m),l=R.extend(o,{position:i?"relative":"absolute",boxSizing:"content-box",mozBoxSizing:"content-box",webkitBoxSizing:"content-box"});if(i||R.extend(l,R.css(m,["width","height"])),R.css(a,l),a.setAttribute(P,""),R.addClass(a,t.spacerClass),w={spacer:a,relSize:{width:"%"===s.width.slice(-1),height:"%"===s.height.slice(-1),autoFullWidth:"auto"===s.width&&i&&R.isMarginCollapseType(o.display)},pushFollowers:t.pushFollowers,inFlow:i},!m.___origStyle){m.___origStyle={};var c=m.style;r.concat(["width","height","position","boxSizing","mozBoxSizing","webkitBoxSizing"]).forEach(function(e){m.___origStyle[e]=c[e]||""})}return w.relSize.width&&R.css(a,{width:s.width}),w.relSize.height&&R.css(a,{height:s.height}),a.appendChild(m),R.css(m,{position:i?"relative":"absolute",margin:"auto",top:"auto",left:"auto",bottom:"auto",right:"auto"}),(w.relSize.width||w.relSize.autoFullWidth)&&R.css(m,{boxSizing:"border-box",mozBoxSizing:"border-box",webkitBoxSizing:"border-box"}),window.addEventListener("scroll",L),window.addEventListener("resize",L),window.addEventListener("resize",T),m.addEventListener("mousewheel",A),m.addEventListener("DOMMouseScroll",A),C(),d},this.removePin=function(e){if(m){if(p===f&&C(!0),e||!l){var t=w.spacer.firstChild;if(t.hasAttribute(P)){var n=w.spacer.style,r={};["margin","marginLeft","marginRight","marginTop","marginBottom"].forEach(function(e){r[e]=n[e]||""}),R.css(t,r)}w.spacer.parentNode.insertBefore(t,w.spacer),w.spacer.parentNode.removeChild(w.spacer),m.parentNode.hasAttribute(P)||(R.css(m,m.___origStyle),delete m.___origStyle)}window.removeEventListener("scroll",L),window.removeEventListener("resize",L),window.removeEventListener("resize",T),m.removeEventListener("mousewheel",A),m.removeEventListener("DOMMouseScroll",A),m=void 0}return d};var N,O=[];return d.on("destroy.internal",function(e){d.removeClassToggle(e.reset)}),this.setClassToggle=function(e,t){var n=R.get.elements(e);return 0!==n.length&&R.type.String(t)&&(0<O.length&&d.removeClassToggle(),N=t,O=n,d.on("enter.internal_class leave.internal_class",function(e){var n="enter"===e.type?R.addClass:R.removeClass;O.forEach(function(e,t){n(e,N)})})),d},this.removeClassToggle=function(e){return e&&O.forEach(function(e,t){R.removeClass(e,N)}),d.off("start.internal_class end.internal_class"),N=void 0,O=[],d},function(){for(var e in h)r.hasOwnProperty(e)||delete h[e];for(var t in r)z(t);E()}(),d};var D={defaults:{duration:0,offset:0,triggerElement:void 0,triggerHook:.5,reverse:!0,loglevel:2},validate:{offset:function(e){if(e=parseFloat(e),!R.type.Number(e))throw 0;return e},triggerElement:function(e){if(e=e||void 0){var t=R.get.elements(e)[0];if(!t||!t.parentNode)throw 0;e=t}return e},triggerHook:function(e){var t={onCenter:.5,onEnter:1,onLeave:0};if(R.type.Number(e))e=Math.max(0,Math.min(parseFloat(e),1));else{if(!(e in t))throw 0;e=t[e]}return e},reverse:function(e){return!!e}},shifts:["duration","offset","triggerHook"]};_.Scene.addOption=function(e,t,n,r){e in D.defaults||(D.defaults[e]=t,D.validate[e]=n,r&&D.shifts.push(e))},_.Scene.extend=function(e){var t=this;_.Scene=function(){return t.apply(this,arguments),this.$super=R.extend({},this),e.apply(this,arguments)||this},R.extend(_.Scene,t),_.Scene.prototype=t.prototype,_.Scene.prototype.constructor=_.Scene},_.Event=function(e,t,n,r){for(var i in r=r||{})this[i]=r[i];return this.type=e,this.target=this.currentTarget=n,this.namespace=t||"",this.timeStamp=this.timestamp=Date.now(),this};var R=_._util=function(s){var n,e={},a=function(e){return parseFloat(e)||0},l=function(e){return e.currentStyle?e.currentStyle:s.getComputedStyle(e)},r=function(e,t,n,r){if((t=t===document?s:t)===s)r=!1;else if(!u.DomElement(t))return 0;e=e.charAt(0).toUpperCase()+e.substr(1).toLowerCase();var i=(n?t["offset"+e]||t["outer"+e]:t["client"+e]||t["inner"+e])||0;if(n&&r){var o=l(t);i+="Height"===e?a(o.marginTop)+a(o.marginBottom):a(o.marginLeft)+a(o.marginRight)}return i},c=function(e){return e.replace(/^[^a-z]+([a-z])/g,"$1").replace(/-([a-z])/g,function(e){return e[1].toUpperCase()})};e.extend=function(e){for(e=e||{},n=1;n<arguments.length;n++)if(arguments[n])for(var t in arguments[n])arguments[n].hasOwnProperty(t)&&(e[t]=arguments[n][t]);return e},e.isMarginCollapseType=function(e){return-1<["block","flex","list-item","table","-webkit-box"].indexOf(e)};var i=0,t=["ms","moz","webkit","o"],o=s.requestAnimationFrame,f=s.cancelAnimationFrame;for(n=0;!o&&n<4;++n)o=s[t[n]+"RequestAnimationFrame"],f=s[t[n]+"CancelAnimationFrame"]||s[t[n]+"CancelRequestAnimationFrame"];o||(o=function(e){var t=(new Date).getTime(),n=Math.max(0,16-(t-i)),r=s.setTimeout(function(){e(t+n)},n);return i=t+n,r}),f||(f=function(e){s.clearTimeout(e)}),e.rAF=o.bind(s),e.cAF=f.bind(s);var u=e.type=function(e){return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/,"$1").toLowerCase()};u.String=function(e){return"string"===u(e)},u.Function=function(e){return"function"===u(e)},u.Array=function(e){return Array.isArray(e)},u.Number=function(e){return!u.Array(e)&&0<=e-parseFloat(e)+1},u.DomElement=function(e){return"object"==typeof HTMLElement||"function"==typeof HTMLElement?e instanceof HTMLElement||e instanceof SVGElement:e&&"object"==typeof e&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName};var d=e.get={};return d.elements=function(e){var t=[];if(u.String(e))try{e=document.querySelectorAll(e)}catch(e){return t}if("nodelist"===u(e)||u.Array(e)||e instanceof NodeList)for(var n=0,r=t.length=e.length;n<r;n++){var i=e[n];t[n]=u.DomElement(i)?i:d.elements(i)}else(u.DomElement(e)||e===document||e===s)&&(t=[e]);return t},d.scrollTop=function(e){return e&&"number"==typeof e.scrollTop?e.scrollTop:s.pageYOffset||0},d.scrollLeft=function(e){return e&&"number"==typeof e.scrollLeft?e.scrollLeft:s.pageXOffset||0},d.width=function(e,t,n){return r("width",e,t,n)},d.height=function(e,t,n){return r("height",e,t,n)},d.offset=function(e,t){var n={top:0,left:0};if(e&&e.getBoundingClientRect){var r=e.getBoundingClientRect();n.top=r.top,n.left=r.left,t||(n.top+=d.scrollTop(),n.left+=d.scrollLeft())}return n},e.addClass=function(e,t){t&&(e.classList?e.classList.add(t):e.className+=" "+t)},e.removeClass=function(e,t){t&&(e.classList?e.classList.remove(t):e.className=e.className.replace(RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," "))},e.css=function(e,t){if(u.String(t))return l(e)[c(t)];if(u.Array(t)){var n={},r=l(e);return t.forEach(function(e,t){n[e]=r[c(e)]}),n}for(var i in t){var o=t[i];o==parseFloat(o)&&(o+="px"),e.style[c(i)]=o}},e}(window||{});return _}); 
/*
AnimeJS plugin for ScrollMagic.
Powered by AnimeJS: http://animejs.com.
AnimeJS is published under MIT license.
*/
(function(root, factory) {
    if (typeof define === "function" && define.amd) {
      // AMD
      define(["ScrollMagic", "animejs"], factory);
    } else if (typeof exports === "object") {
      // CommonJS is not supporter by AnimeJS
    } else {
      // Browser
      factory(
        root.ScrollMagic || (root.jQuery && root.jQuery.ScrollMagic),
        root.anime || (root.jQuery && root.jQuery.anime)
      );
    }
  })(this, function(ScrollMagic, anime) {
    "use strict";
    var NAMESPACE = "animation.anime";
  
    // (BUILD) - REMOVE IN MINIFY - START
    var console = window.console || {},
      err = Function.prototype.bind.call(
        console.error || console.log || function() {},
        console
      );
    if (!ScrollMagic) {
      err(
        "(" +
          NAMESPACE +
          ") -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs."
      );
    }
    if (!anime) {
      err(
        "(" +
          NAMESPACE +
          ") -> ERROR: AnimeJS could not be found. Please make sure it's loaded before ScrollMagic or use an asynchronous loader like requirejs."
      );
    }
    // (BUILD) - REMOVE IN MINIFY - END
  
    var autoindex = 0;
  
    ScrollMagic.Scene.extend(function() {
      var Scene = this,
        _util = ScrollMagic._util,
        _currentProgress = 0,
        _animation,
        _dataID;
  
      // (BUILD) - REMOVE IN MINIFY - START
      var log = function() {
        if (Scene._log) {
          // not available, when main source minified
          Array.prototype.splice.call(
            arguments,
            1,
            0,
            "(" + NAMESPACE + ")",
            "->"
          );
          Scene._log.apply(this, arguments);
        }
      };
      // (BUILD) - REMOVE IN MINIFY - END
  
      // set listeners
      Scene.on("progress.plugin_anime", function() {
        updateAnimationProgress();
      });
      Scene.on("destroy.plugin_anime", function(e) {
        Scene.off("*.plugin_anime");
        Scene.removeAnime(e.reset);
      });
  
      var animate = function(animation) {
        animation.play();
      };
      var reverse = function(animation) {
        animation.play();
        animation.reverse();
      };
  
      /**
       * Seek animation while scrolling
       * @private
       */
      var updateAnimationProgress = function() {
        if (_animation) {
          var progress = Scene.progress();
          if (progress != _currentProgress) {
            // Need to update progress?
            if (Scene.duration() === 0) {
              // Play animation
              if (progress > 0) {
                // Play Forward
                animate(_animation);
              } else {
                // Play Reverse
                reverse(_animation);
              }
            } else {
              _animation.seek(_animation.duration * progress);
            }
            _currentProgress = progress;
          }
        }
      };
      Scene.setAnime = function(animation) {
        if (_animation) {
          // Kill old instance
          Scene.removeAnime();
        }
        animation.pause();
        _animation = animation;
        _dataID = "ScrollMagic." + NAMESPACE + "[" + autoindex++ + "]";
  
        updateAnimationProgress();
        return Scene;
      };
      Scene.removeAnime = function(reset) {
        if (_animation) {
          if (reset) {
            _animation.seek(0).pause();
          }
          _animation = undefined;
        }
        return Scene;
      };
    });
  });
   
document.addEventListener("DOMContentLoaded", function () {
    // loader
    setTimeout(function () {
        anim();
        mapInfo();
        changeSlide();
        
    }, 400);
});
sliders();
function sliders() {
    
    let commandName = document.querySelector('.command__members__top h3');
    let commandPossition = document.querySelector('.command__members__top p');
    let slides = document.querySelectorAll('.command__members__item');
    let slideName = anime({
        targets: commandName,
        translateX: [-50, 0],
        opacity: [0, 1],
        duration: 300,
        autoplay: false,
        easing: 'linear',
    });
    let slidePosition = anime({
        targets: commandPossition,
        translateX: [50, 0],
        opacity: [0, 1],
        duration: 300,
        autoplay: false,
        easing: 'linear',
    });

    const commandSwiper = new Swiper('.command__members__slider', {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: '.command__members .swiper-button-next',
            prevEl: '.command__members .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1.1,
                slidesPerGroup: 1,
                spaceBetween: 20,
                centeredSlides: true,
            },
            768: {
                slidesPerView: 1.5,
                slidesPerGroup: 1,
                spaceBetween: 10,
                centeredSlides: true,
            },

            992: {
                slidesPerView: "auto",
                slidesPerGroup: 1,
                spaceBetween: 10,
                centeredSlides: true,
            },

            1200: {
                slidesPerView: "auto",
                slidesPerGroup: 1,
                spaceBetween: 20,
                centeredSlides: true,
            },
        },
        on: {
            init: function () {
                if (window.innerWidth > 767) {
                    commandName.textContent = slides[0].querySelector('.command__members__name').textContent;
                    commandPossition.textContent = slides[0].querySelector('.command__members__position').textContent;
                    slideName.play();
                    slidePosition.play();
                }


            },
            slideChange: function () {
                if (window.innerWidth > 767) {
                    commandName.textContent = this.slides[this.activeIndex].querySelector('.command__members__name').textContent;
                    commandPossition.textContent = this.slides[this.activeIndex].querySelector('.command__members__position').textContent;
                    slideName.play();
                    slidePosition.play();
                }

            },
        },
    });
}



function changeSlide() {

    const rangeSlide = document.querySelector('.rangeSlider__range');

    const aimSwiper = new Swiper('.aim__swiper', {
        centeredSlides: true,
        slidesPerView: 2.5,
        navigation: {
            nextEl: '.aim__swiper .swiper-button-next',
            prevEl: '.aim__swiper .swiper-button-prev',
        },
        breakpoints: {
            320: {
                centeredSlides: true,
                slidesPerView: 1,
            },
            768: {
                centeredSlides: true,
                slidesPerView: 1,
            },
            1024: {
                centeredSlides: true,
                slidesPerView: 2.5,
            },
            1200: {
                centeredSlides: true,
                slidesPerView: 2.5,
            },
        },
    });
    if (rangeSlide) {
        rangeSlide.addEventListener('change', function (e) {
            e.preventDefault();
            aimSwiper.slideTo(e.target.value / 4);
        })
    }

}

function mapInfo() {
    let map = document.querySelector('#uzb_map');

    if (map) {
        let cities = map.querySelectorAll('path');
        let mapInfoUzi = document.querySelectorAll('.active__number.uzi');
        let mapInfoRengen = document.querySelectorAll('.active__number.rengen');
        let mapInfoMrt = document.querySelectorAll('.active__number.mrt');
        let mapInfoMskt = document.querySelectorAll('.active__number.mskt');
        let mapPins = document.querySelectorAll('.map__circle');

        const clearInfo = () => {
            cities.forEach(city => city.classList.remove('active'));
            mapInfoUzi.forEach(city => city.classList.remove('active'));
            mapInfoRengen.forEach(city => city.classList.remove('active'));
            mapInfoMrt.forEach(city => city.classList.remove('active'));
            mapInfoMskt.forEach(city => city.classList.remove('active'));
            mapPins.forEach(city => city.classList.remove('active'));
        }

        map.addEventListener('mouseover', function (e) {
            e.preventDefault();

            if (e.target.tagName === 'path') {
                let activeCity = e.target.id;

                clearInfo();
                e.target.classList.add('active');
                mapInfoUzi.forEach(info => {
                    if (info.classList.contains(activeCity)) {

                        info.classList.add('active');
                    }
                });
                mapInfoRengen.forEach(info => {
                    if (info.classList.contains(activeCity)) {

                        info.classList.add('active');
                    }
                });
                mapInfoMrt.forEach(info => {
                    if (info.classList.contains(activeCity)) {

                        info.classList.add('active');
                    }
                });
                mapInfoMskt.forEach(info => {
                    if (info.classList.contains(activeCity)) {

                        info.classList.add('active');
                    }
                });
                mapPins.forEach(pin => {
                    if (pin.classList.contains(activeCity)) {

                        pin.classList.add('active');
                    }
                });


            }
        });


        cities.forEach(city => {
            city.addEventListener('click', function (e) {
                e.preventDefault();
                let activeCity = e.target.id;
                clearInfo();
                e.target.classList.add('active');
                mapInfoUzi.forEach(info => {
                    if (info.classList.contains(activeCity)) {

                        info.classList.add('active');
                    }
                });
                mapInfoRengen.forEach(info => {
                    if (info.classList.contains(activeCity)) {

                        info.classList.add('active');
                    }
                });
                mapInfoMrt.forEach(info => {
                    if (info.classList.contains(activeCity)) {

                        info.classList.add('active');
                    }
                });
                mapInfoMskt.forEach(info => {
                    if (info.classList.contains(activeCity)) {

                        info.classList.add('active');
                    }
                });
                mapPins.forEach(pin => {
                    if (pin.classList.contains(activeCity)) {

                        pin.classList.add('active');
                    }
                });
            })
        })
    }
};


function anim() {
    // init controller
    let controller = new ScrollMagic.Controller();
    // SLIDER FIXED

    let circleSvg = anime({
        targets: '#slider-path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
    });

    let scene1 = new ScrollMagic.Scene({
            triggerElement: ".features",
            duration: 3000,
            triggerHook: 0
        })
        .setAnime(circleSvg)
        .setPin(".features .inner-box")
        .addTo(controller);

    let targetSlider = document.querySelector('.features__slider');
    let pagList = document.querySelectorAll('.features__pagination');

    if (targetSlider) {
        let numb1 = anime({
            targets: '.slider-numb-1',
            translateY: [-50, 0],
            opacity: [0, 1],
            duration: 300,
            autoplay: false,
            easing: 'linear',
        });
        let numb2 = anime({
            targets: '.slider-numb-2',
            translateY: [50, 0],
            opacity: [0, 1],
            duration: 300,
            autoplay: false,
            easing: 'linear',
        });
        let mySwiper = new Swiper('.swiper-container', {
            // Optional parameters
            loop: false,
            slidesPerView: 1,
            effect: 'fade',
            noSwiping: false,
            allowTouchMove: false,
            fadeEffect: {
                crossFade: true
            },
            //            // If we need pagination
            //        pagination: {
            //            el: '.swiper-pagination',
            //            type: 'bullets',
            //            bulletElement: 'span',
            //            clickable: true,
            //            bulletClass: 'pagination',
            //            bulletActiveClass: 'pagination-active',
            //            clickable: false,
            //        },

            //            // Navigation arrows
            //            navigation: {
            //                nextEl: '.swiper-button-next',
            //                prevEl: '.swiper-button-prev',
            //            },

            //            // And if we need scrollbar
            //            scrollbar: {
            //                el: '.swiper-scrollbar',
            //            },
            on: {
                init: function () {
                    document.querySelector('.slider-numb-1').textContent = '0';
                    document.querySelector('.slider-numb-2').textContent = this.activeIndex + 1;
                },
                slideChange: function () {
                    document.querySelector('.slider-numb-2').textContent = this.activeIndex + 1;
                    numb1.play();
                    numb2.play();
                },
            },
        });


        scene1.on("progress", function (event) {

            if (event.scrollDirection === 'FORWARD') {
                if (event.progress <= 0.33) {
                    mySwiper.slideTo(0);
                    pagList[0].classList.add('active');
                } else if (event.progress <= 0.5) {
                    mySwiper.slideTo(1);
                    pagList[1].classList.add('active');
                } else if (event.progress <= 0.66) {
                    mySwiper.slideTo(2);
                    pagList[2].classList.add('active');
                } else {
                    mySwiper.slideTo(3);
                    pagList[3].classList.add('active');
                }
            }
            if (event.scrollDirection === 'REVERSE') {
                if (event.progress >= 0.66) {
                    mySwiper.slideTo(3);
                } else if (event.progress >= 0.5) {
                    mySwiper.slideTo(2);
                    pagList[3].classList.remove('active');
                } else if (event.progress >= 0.33) {
                    mySwiper.slideTo(1);
                    pagList[2].classList.remove('active');
                } else {
                    mySwiper.slideTo(0);
                    pagList[1].classList.remove('active');
                }
            }
            if (event.state === 'BEFORE') {
                pagList[0].classList.remove('active');
            }

        });
        scene1.on("start", function (event) {
            if (event.progress <= 0.33) {
                pagList[0].classList.add('active');
            } else if (event.progress <= 0.5) {
                pagList[0].classList.add('active');
                pagList[1].classList.add('active');
            } else if (event.progress <= 0.66) {
                pagList[0].classList.add('active');
                pagList[1].classList.add('active');
                pagList[2].classList.add('active');
            } else {
                pagList[0].classList.add('active');
                pagList[1].classList.add('active');
                pagList[2].classList.add('active');
                pagList[3].classList.add('active');
            }
        });
    }


    if (window.innerWidth > 1050 && document.querySelector('.command')) {
        let yearItems = document.querySelectorAll('.about-command__year .about-command__item:not(.active)')
        let years = anime.timeline({
            targets: yearItems,
            opacity: [0, 1],
            delay: anime.stagger(200, {
                start: 300
            }) // delay starts at 500ms then increase by 100ms for each elements.
        });
        years.add({
            targets: '#year__line',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 500
        });

        let scene2 = new ScrollMagic.Scene({
                triggerElement: ".command",
                duration: 3000,
                triggerHook: 0
            })
            .setAnime(years)
            .setPin(".command")
            .addTo(controller);
    }

} 
var ZBRangeSlider = function(id) { 
    var self = this;
    var startX = 0, x = 0;
  
    // retrieve touch button
    var slider     = document.getElementById(id)
    var touchLeft  = slider.querySelector('.price__slider-touch-left');
    var touchRight = slider.querySelector('.price__slider-touch-right');
    var lineSpan   = slider.querySelector('.price__slider-line span');
    
    // get some properties
    var min   = parseFloat(slider.getAttribute('se-min'));
    var max   = parseFloat(slider.getAttribute('se-max'));
    
    // retrieve default values
    var defaultMinValue = min;
    if(slider.hasAttribute('se-min-value'))
    {
      defaultMinValue = parseFloat(slider.getAttribute('se-min-value'));  
    }
    var defaultMaxValue = max;
    
    if(slider.hasAttribute('se-max-value'))
    {
      defaultMaxValue = parseFloat(slider.getAttribute('se-max-value'));  
    }
    
    // check values are correct
    if(defaultMinValue < min)
    {
      defaultMinValue = min;
    }
    
    if(defaultMaxValue > max)
    {
      defaultMaxValue = max;
    }
    
    if(defaultMinValue > defaultMaxValue)
    {
      defaultMinValue = defaultMaxValue;
    }
    
    var step  = 0.0;
    
    if (slider.getAttribute('se-step'))
    {
      step  = Math.abs(parseFloat(slider.getAttribute('se-step')));
    }
    
    // normalize flag
    var normalizeFact = 26;
    
    self.slider = slider;
    self.reset = function() {
      touchLeft.style.left = '0px';
      touchRight.style.left = (slider.offsetWidth - touchLeft.offsetWidth) + 'px';
      lineSpan.style.marginLeft = '0px';
      lineSpan.style.width = (slider.offsetWidth - touchLeft.offsetWidth) + 'px';
      startX = 0;
      x = 0;
    };
    
    self.setMinValue = function(minValue)
    {
      var ratio = ((minValue - min) / (max - min));
      touchLeft.style.left = Math.ceil(ratio * (slider.offsetWidth - (touchLeft.offsetWidth + normalizeFact))) + 'px';
      lineSpan.style.marginLeft = touchLeft.offsetLeft + 'px';
      lineSpan.style.width = (touchRight.offsetLeft - touchLeft.offsetLeft) + 'px';
      slider.setAttribute('se-min-value', minValue);
    }
    
    self.setMaxValue = function(maxValue)
    {
      var ratio = ((maxValue - min) / (max - min));
      touchRight.style.left = Math.ceil(ratio * (slider.offsetWidth - (touchLeft.offsetWidth + normalizeFact)) + normalizeFact) + 'px';
      lineSpan.style.marginLeft = touchLeft.offsetLeft + 'px';
      lineSpan.style.width = (touchRight.offsetLeft - touchLeft.offsetLeft) + 'px';
      slider.setAttribute('se-max-value', maxValue);
    }
    
    // initial reset
    self.reset();
    
    // usefull values, min, max, normalize fact is the width of both touch buttons
    var maxX = slider.offsetWidth - touchRight.offsetWidth;
    var selectedTouch = null;
    var initialValue = (lineSpan.offsetWidth - normalizeFact);
  
    // set defualt values
    self.setMinValue(defaultMinValue);
    self.setMaxValue(defaultMaxValue);
    
    // setup touch/click events
    function onStart(event) {
      
      // Prevent default dragging of selected content
      event.preventDefault();
      var eventTouch = event;
  
      if (event.touches)
      {
        eventTouch = event.touches[0];
      }
      
      if(this === touchLeft)
      {
        x = touchLeft.offsetLeft;
      }
      else
      {
        x = touchRight.offsetLeft;
      }
  
      startX = eventTouch.pageX - x;
      selectedTouch = this;
      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onStop);
      document.addEventListener('touchmove', onMove);
      document.addEventListener('touchend', onStop);
      
  
    }
    
    function onMove(event) {
      var eventTouch = event;
  
      if (event.touches)
      {
        eventTouch = event.touches[0];
      }
  
      x = eventTouch.pageX - startX;
      
      if (selectedTouch === touchLeft)
      {
        if(x > (touchRight.offsetLeft - selectedTouch.offsetWidth + 10))
        {
          x = (touchRight.offsetLeft - selectedTouch.offsetWidth + 10)
        }
        else if(x < 0)
        {
          x = 0;
        }
        
        selectedTouch.style.left = x + 'px';
      }
      else if (selectedTouch === touchRight)
      {
        if(x < (touchLeft.offsetLeft + touchLeft.offsetWidth - 10))
        {
          x = (touchLeft.offsetLeft + touchLeft.offsetWidth - 10)
        }
        else if(x > maxX)
        {
          x = maxX;
        }
        selectedTouch.style.left = x + 'px';
      }
      
      // update line span
      lineSpan.style.marginLeft = touchLeft.offsetLeft + 'px';
      lineSpan.style.width = (touchRight.offsetLeft - touchLeft.offsetLeft) + 'px';
      
      // write new value
      calculateValue();
      
      // call on change
      if(slider.getAttribute('on-change'))
      {
        var fn = new Function('min, max', slider.getAttribute('on-change'));
        fn(slider.getAttribute('se-min-value'), slider.getAttribute('se-max-value'));
      }
      
      if(self.onChange)
      {
        self.onChange(slider.getAttribute('se-min-value'), slider.getAttribute('se-max-value'));
      }
      
    }
    
    function onStop(event) {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onStop);
      document.removeEventListener('touchmove', onMove);
      document.removeEventListener('touchend', onStop);
      
      selectedTouch = null;
  
      // write new value
      calculateValue();
      
      // call did changed
      if(slider.getAttribute('did-changed'))
      {
        var fn = new Function('min, max', slider.getAttribute('did-changed'));
        fn(slider.getAttribute('se-min-value'), slider.getAttribute('se-max-value'));
      }
      
      if(self.didChanged)
      {
        self.didChanged(slider.getAttribute('se-min-value'), slider.getAttribute('se-max-value'));
      }
    }
    
    function calculateValue() {
      var newValue = (lineSpan.offsetWidth - normalizeFact) / initialValue;
      var minValue = lineSpan.offsetLeft / initialValue;
      var maxValue = minValue + newValue;
  
      var minValue = minValue * (max - min) + min;
      var maxValue = maxValue * (max - min) + min;
      
      console.log(step);
      if (step !== 0.0)
      {
        var multi = Math.floor((minValue / step));
        minValue = step * multi;
        
        multi = Math.floor((maxValue / step));
        maxValue = step * multi;
      }
      
      slider.setAttribute('se-min-value', minValue);
      slider.setAttribute('se-max-value', maxValue);
    }
    
    // link events
    touchLeft.addEventListener('mousedown', onStart);
    touchRight.addEventListener('mousedown', onStart);
    touchLeft.addEventListener('touchstart', onStart);
    touchRight.addEventListener('touchstart', onStart);
  };
  
  // -------------------
  // How to use? 
  var newRangeSlider = new ZBRangeSlider('my-slider');
  
  newRangeSlider.onChange = function(min, max)
  {
    console.log(min, max, this);

    document.getElementById('price-min').value = min;
  }
  
  newRangeSlider.didChanged = function(min, max)
  {
    console.log(min,max, this);
    document.getElementById('price-max').value = max;
  }
   
 

