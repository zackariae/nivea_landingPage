
gsap.registerPlugin(ScrollTrigger);


//left side
gsap.from('.lside',{
            opacity:0,
            x:-20,
            duration: 2,
            ease: Expo.easeInOut  }  );

//right side
gsap.from('.rside',{
        opacity:0,
        x:20,
        duration: 2,
        ease: Expo.easeInOut  }  
);

//top side
gsap.from('.tside',{
        opacity:0,
        y:20,
        duration: 2,
        ease: Expo.easeInOut  }  
);

// Buttom side
gsap.from('.bside',{
    
        opacity:0,
        y:-20,
        duration: 2,
        ease: Expo.easeInOut  }  
);


gsap.from('.img-r',{
        x:50,
        duration: 3,
        ease: Expo.easeInOut  }  
);
gsap.from('.img-l',{
        x:-50,
        duration: 3,
        ease: Expo.easeInOut  }  
);


gsap.from('.onebyone',{
    opacity:0,
    x:-20,
    duration: 2,
    ease: "power3.inOut",
    stagger:.2
});


//prod01 lefr
gsap.from('.l-prod01',{
    scrollTrigger: {
                trigger: ".section01",
                start: "top 100%",
                end: "+=1000",
                scrub: 1,},
            opacity:0,
            x:-30,
            duration: .8,
            ease: Expo.easeInOut , }  );

gsap.from('.r-prod01',{
            scrollTrigger: {
                trigger: ".section01",
                start: "top 100%",
                end: "+=1000",
                scrub: 1,},
            opacity:0,
            x:30,
            duration: .8,
            ease: Expo.easeInOut  }  );

//prod02
gsap.from('.l-prod02',{
            scrollTrigger:{
                    trigger:'.l-prod02',
                    start:"top 100%",
                    end:"+=1000",
                    toggleActions: "restart none none none",
                    scrub:4,},
                  

            opacity:0,
            x:-30,
            duration: 1,
            ease: Expo.easeInOut , }  );


gsap.from('.r-prod02',{
    scrollTrigger:{
                    trigger:'.r-prod02',
                    start:"top 100%",
                    end:"+=1000",
                    toggleActions: "restart none none none",
                    scrub:4,
            
                },
            opacity:0,
            x:30,
            duration: 1,
            ease: Expo.easeInOut  }  );


             //prod03
gsap.from('.l-prod03',{
            scrollTrigger:{
                    trigger:'.l-prod03',
                    start:"top 100%",
                    end:"+=1000",
                    toggleActions: "restart none none none",
                    scrub:4,},
                  

            opacity:0,
            x:-30,
            duration: 1,
            ease: Expo.easeInOut , }  );


gsap.from('.r-prod03',{
    scrollTrigger:{
                    trigger:'.r-prod03',
                    start:"top 100%",
                    end:"+=1000",
                    toggleActions: "restart none none none",
                    scrub:4,
            
                },
            opacity:0,
            x:30,
            duration: 1,
            ease: Expo.easeInOut  }  );


//one by one list
gsap.from('.questions',{
    scrollTrigger:{
                    trigger:'.faq',
                    start:"top 100%",
                    end:"+=1000",
                    toggleActions: "restart none none none",
                    scrub:4,
            
                },
    opacity:0,
    x:30,
    duration: .8,
    ease: "power3.inOut",
    stagger:.05
});



const tl = gsap.timeline({
scrollTrigger: {
trigger: ".sun",
start: "top top",
end: "+=1000",
scrub: 1,
pin: true,
}
});
tl.to('.sun',
{
x: -500,
y: 500,
scaleY: .5,
scaleX: .5,
rotation: 180,
ease: "power3.inOut",

});
tl.to('.sun',
{   x: 70,
y: 300,
rotation: 0,
opacity:0,
ease: "power3.inOut",
});

