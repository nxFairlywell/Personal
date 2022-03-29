/*let movingDown = true;
let topToBottom = false;
let spannerInterval  = window.setInterval(function(){
    let maSpanner = document.querySelector("#maSpanner");
    let span = document.querySelector("#maSpanner span");
    let maSpannerOffsetTop = maSpanner.offsetTop;
    let maSpannerOffsetHeight = maSpanner.offsetHeight;
    let spanOffsetTop = span.offsetTop;
    let spanOffsetHeight = span.offsetHeight;
    if (movingDown){
        if (spanOffsetHeight < (maSpannerOffsetHeight * 2)){
            span.style.height = spanOffsetHeight+1+"px";
        }else{
            movingDown = false;
        }
    }else{
        if (!topToBottom){
            span.style.bottom = "-200%";
            span.style.height = "200%";
            
            topToBottom = true;
        }else{
            if (spanOffsetHeight > 0){
                span.style.height = spanOffsetHeight-1+"px";
            }
        }
    }
},50);*/

$(document).ready(function(){
    let sections = {
        WhoAmI: {
            bright: false,
            element: document.getElementById("WhoAmI")
        },
        Services: {
            bright: false,
            element: document.getElementById("Services")
        },
        Skills: {
            bright: false,
            element: document.getElementById("Skills")
        },
        Contact: {
            bright: false,
            element: document.getElementById("Contact")
        },
    }
    function BrightChecking(){
        let section = sections.WhoAmI;
        let scrollTop = this.scrollY;
        let scrollHeight = this.document.body.scrollHeight;
        let sectionTop = section.element.offsetTop;
        if ((scrollTop%sectionTop)%sectionTop >= sectionTop/2){
            if (!section.bright){
                section.element.getElementsByClassName("section-title")[0].style.opacity = "1";
                section.element.getElementsByClassName("components")[0].style.bottom = "0%";
                section.element.getElementsByClassName("components")[0].style.opacity = "1";
                section.bright = true;
            }
        }
        section = sections.Services;
        scrollTop = this.scrollY;
        scrollHeight = this.document.body.scrollHeight;
        sectionTop = section.element.offsetTop;
        if ((scrollTop%sectionTop)%sectionTop >= sectionTop/2){
            if (!section.bright){
                section.element.getElementsByClassName("section-title")[0].style.opacity = "1";
                section.element.getElementsByClassName("components")[0].style.bottom = "0%";
                section.element.getElementsByClassName("components")[0].style.opacity = "1";
                section.bright = true;
            }
        }
        section = sections.Skills;
        scrollTop = this.scrollY;
        scrollHeight = this.document.body.scrollHeight;
        sectionTop = section.element.offsetTop;
        if ((scrollTop%sectionTop)%sectionTop >= sectionTop/2){
            if (!section.bright){
                section.element.getElementsByClassName("section-title")[0].style.opacity = "1";
                section.element.getElementsByClassName("components")[0].style.bottom = "0%";
                section.element.getElementsByClassName("components")[0].style.opacity = "1";
                section.bright = true;
            }
        }
        section = sections.Contact;
        scrollTop = this.scrollY;
        scrollHeight = this.document.body.scrollHeight;
        sectionTop = section.element.offsetTop;
        if ((scrollTop%sectionTop)%sectionTop >= sectionTop/2){
            if (!section.bright){
                section.element.getElementsByClassName("section-title")[0].style.opacity = "1";
                section.element.getElementsByClassName("components")[0].style.bottom = "0%";
                section.element.getElementsByClassName("components")[0].style.opacity = "1";
                section.bright = true;
            }
        }
    }
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
    window.addEventListener("scroll",function(ev){
        BrightChecking();
    })
    $('.nav-link.tabs').on("click",function(ev){
        let section = sections[$(this).attr("data-id")];
        if (!section.bright){
            section.element.getElementsByClassName("section-title")[0].style.opacity = "1";
            section.element.getElementsByClassName("components")[0].style.bottom = "0%";
            section.element.getElementsByClassName("components")[0].style.opacity = "1";
            section.bright = true;
        }
    })
    $('.clickable-brands').on("click",function(ev){
        let url = $(this).attr("data-url");
        if (url){
            document.location.href=url;
        }
    })
    window.addEventListener("resize",function(ev){
        let vid = document.getElementById("maBGVid");
        let row = document.getElementById("row-e4a");
        row.style.height = vid.offsetHeight*.75+"px";
    })
    document.getElementById("BackToTopBox").addEventListener("click",function(ev){
        window.location.href = "#"
    })
    $('.content-item').on("click",function(ev){
        let url = $(this).attr("data-url");
        if (url){
            window.open(url, "_blank");
        }
    })
})
