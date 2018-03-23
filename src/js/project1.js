/* a Pen by Diaco m.lotfollahi  : https://diacodesign.com */
TweenMax.set("img",{xPercent:"-50%",yPercent:"-50%"})

var svgNS = "http://www.w3.org/2000/svg";  

var total = 50;
var w = $("#mySVG").width();
var h = $("#mySVG").height();
 
for (i=0; i<total; i++){ 
var myCircle = document.createElementNS(svgNS,"rect"); 
myCircle.setAttributeNS(null,"class","dot"); 
myCircle.setAttributeNS(null,"width",7);
  myCircle.setAttributeNS(null,"height",12);
document.getElementById("mySVG").appendChild(myCircle);  
TweenMax.set($(".dot")[i],{x:Random(w),y:0,rotation:Random(180) ,opacity:1,scale:Random(0.5)+0.5,fill:"hsl(" + random(0,150) + ",50%,50%)"});
 animm($(".dot")[i]);
 }
 
 function animm(elm){   
 TweenMax.to(elm,Random(5)+4,{y:h,ease:Linear.easeNone,repeat:-1, delay:-5});
 TweenMax.to(elm,Random(5)+1,{x:'+=70', repeat:-1,yoyo:true,ease:Sine.easeInOut})
 TweenMax.to(elm,Random(5)+1,{scaleX:0.2,rotation:Random(360), repeat:-1,yoyo:true,ease:Sine.easeInOut})
 TweenMax.to(elm,Random(1)+0.5,{opacity:0, repeat:-1,yoyo:true,ease:Sine.easeInOut})
 };

function Random (max) {
return Math.random()*max;
}

function random(min, max) {
return min + Math.floor( Math.random() * (max - min));
}
/* a Pen by Diaco m.lotfollahi  : https://diacodesign.com */

var loli=$(".loli")
// TweenMax.Set(loli, {x:100, y;100});
TweenMax.from(loli, 4, {rotation:360, opacity:0, y:-400, delay:2, repeat:500});

var loli3=$(".loli2")
TweenMax.to(loli3, {x:400, y:100});
TweenMax.from(loli3, 4, {rotation:360, opacity:0, y:-500, repeat:500});