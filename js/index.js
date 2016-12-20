var bannerInner=document.getElementsByClassName("bannerInner")[0];
var banner=document.getElementsByClassName("banner")[0];
var divs=bannerInner.getElementsByTagName("div");
var focus=document.getElementsByClassName("focus")[0];
var bannerInner1=bannerInner.getElementsByClassName("bannerInner1")[0];
var bannerInner2=bannerInner.getElementsByClassName("bannerInner2")[0];
var bannerText1=bannerInner1.getElementsByClassName("bannerText1")[0];
var bannerImg1=bannerInner1.getElementsByClassName("bannerImg1")[0];
var bannerImg2=bannerInner2.getElementsByClassName("bannerImg2")[0];
var bannerText2=bannerInner2.getElementsByClassName("bannerText2")[0];
var left=banner.getElementsByClassName("left")[0];
var right=banner.getElementsByClassName("right")[0];
var lis=focus.getElementsByTagName("li");
var step=0;
bannerImg1.style.animation="move 0.5s linear forwards";
var timer=window.setInterval(autoMove,2000);
function autoMove(){
    step++;
    if(step===divs.length){
        step=0
    }
    setImg();
}
function setImg(){
    for(var i=0;i<divs.length;i++){
        var cur=divs[i];
        if(i===step){
            if(i==0){
                bannerImg1.style.animation="move 0.5s linear forwards";
                utils.addClass(bannerText1,"animated zoomIn");
            }
            else{
                bannerImg1.style.animation="";
                utils.removeClass(bannerText1,"animated zoomIn");
            }
            if(i==1){
                bannerImg2.style.animation="move1 0.5s linear forwards";
                bannerText2.style.animation="move2 0.5s linear forwards";
            }else{
                bannerImg2.style.animation="";
                bannerText2.style.animation="";
            }
            utils.css(cur,"zIndex",1);
            animate(cur,{"opacity":1},500,function(){
                var siblings=utils.siblings(this);
                for(var i=0;i<siblings.length;i++){
                    utils.css(siblings[i],"zIndex",0);
                }
            })
        }
        else{
            utils.css(divs[i],"opacity",0)
        }

    }
    for(var j=0;j<lis.length;j++){
       lis[j].className= j===step? "select":"";
    }
}
banner.onmouseover=function(){
    window.clearInterval(timer);
}
banner.onmouseout=function(){
    timer=window.setInterval(autoMove,2000);
}
for(var i=0;i<lis.length;i++){
    lis[i].index=i;
    lis[i].onclick=function(){
        step=this.index;
        setImg();
    }
}
right.onclick=autoMove;
left.onclick=function(){
    if(step==0){
        step=divs.length;
    }
    step--;
    setImg();
}

