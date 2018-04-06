var logo=$(".logo");
	square=$(".top_square");
	m=$(".shape_m");
	t1=$(".t_1");
	t2=$(".t_2");
	t3=$(".t_3");
	logomark=$(".logomark");



// TweenMax.from(carousel, 1, {y:100, opacity:0});

// tl = new TimelineMax();

var tl = new TimelineMax();
// TweenMax.from(card, 1, {y:100, opacity:0});

tl.set(square, {yPercent:-80, opacity:0})
tl.set(m, {yPercent:-80, opacity:0})
tl.set(t1, {yPercent:-80, opacity:0})
tl.set(t2, {yPercent:-80, opacity:0})
tl.set(t3, {yPercent:-80, opacity:0})
tl.set(logomark, {opacity:0})



tl.to(t3, 0.2,{yPercent:0, opacity:1, delay:0.7, ease:Bounce.easeOut})
  .to(t2, 0.2,{yPercent:0, opacity:1, ease:Power2.easeOut})
  .to(t1, 0.2,{yPercent:0, opacity:1, ease:Power2.easeOut})
  .to(m, 0.4, {yPercent:0, opacity:1, ease:Bounce.easeOut})
  .to(square, 0.8, {yPercent:0, opacity:1, ease:Bounce.easeOut})
  // .to(logo, 1, {css:{rotationX:180, z:-10}, ease:Bounce.easeIn})
  // .to(logo, 2, {css:{rotationX:360, z:-10}, ease:Bounce.easeOut})
  .to(logomark, 1, {opacity:1})
