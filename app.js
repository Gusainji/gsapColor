var rect = document.querySelector("#center");

rect.addEventListener("mousemove", function(details){
    var rectloc = rect.getBoundingClientRect();
    //console.log(details.clientX - rectloc.left)
    var insiderectVal = details.clientX - rectloc.left;

    if(insiderectVal < rectloc.width/2){
        // console.log("left");
        var rectColor = gsap.utils.mapRange(0,rectloc.width/2,255,0,insiderectVal);
        gsap.to(rect, {
          backgroundColor: `rgb(${rectColor},0,0)`,
          ease: Power4,
        });

    }else{
        // console.log("right");
          var rectColor = gsap.utils.mapRange(
            rectloc.width / 2,
            rectloc.width,
            0,
            255,
            insiderectVal,
          );
          gsap.to(rect, {
            backgroundColor: `rgb(0,0,${rectColor})`,
            ease: Power4,
          });

    }
});

rect.addEventListener("mouseleave",function()
{
    gsap.to(rect,{
        backgroundColor : "white"
    })
})
