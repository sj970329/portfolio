

var targetMenu = document.querySelector(".targetMenu");
var onTaget = document.querySelectorAll(".targetMenu ul li");
var section = document.querySelectorAll("section");
var sectionCounter = 0; 
var offset = 0;
var count=0;
document.addEventListener('wheel', scrollAni);
window.addEventListener('load', activeMenu);
targetMenu.addEventListener('click', gosection);

function scrollAni(e){
    count++;
    var gosectioncount = count%5;
    if(e.wheelDelta<0){
        if(gosectioncount == 4 && sectionCounter<5)sectionCounter++;
    }else{
        if(gosectioncount == 4 && sectionCounter>0)sectionCounter--;
    }
    
    offset = innerHeight*sectionCounter;

    $("html, body").stop().animate({scrollTop:offset},600,"easeInOutExpo");

    setTimeout(activeMenu,300);
    onTargetMenu();
}

function activeMenu(){
    section.forEach(function(ele){ele.classList.remove("active");});
    section[sectionCounter].classList.add("active");
}

function gosection(e){
    sectionCounter = Number(e.target.getAttribute("datanum"));
    offset = innerHeight*sectionCounter;
    $("html, body").stop().animate({scrollTop:offset},600,"easeInOutExpo");
    setTimeout(activeMenu,300);
    onTargetMenu();
}

function onTargetMenu(){
    onTaget.forEach(function(menu){
        menu.children[0].classList.remove("on");
    });
    onTaget[sectionCounter].children[0].classList.add("on");
}

// 스크롤 막기 시작
$('html, body').css({'overflow': 'hidden', 'height': '100%'});
$('#element').on('scroll touchmove mousewheel', function(event) {
event.preventDefault();
event.stopPropagation();
return false;
});
//스크롤 막기 끝

$('.aaa').click(
    function(){
        var src = $(this).children('img').attr('src');
        $('#popup').fadeIn();
        $('#popup').children('img').attr('src', src);
    }
);

$('#popup').children('img').click(
    function(){
        $('#popup').fadeOut();
    }
);

$('.bbb').click(
    function(){
        var src = 'img/반려견 이벤트.png';
        console.log(src);
        $('#popup').fadeIn();
        $('#popup').children('img').attr('src', src);
    }
);