const images = document.querySelectorAll('.image-container img');
let tl = gsap.timeline({ repeat: -1 });

images.forEach((img, i) => {
    let startTime = i * 1.5;


    tl.to(img, {
        opacity: 1,
        scale: 0.6,
        duration: 0.3,
        ease: "back.out(2)"
    }, startTime)


        .to(img, {
            scale: 0.85,
            duration: 0.3,
            ease: "back.out(2)"
        }, startTime + 0.3)


        .to(img, {
            scale: 1.1,
            duration: 0.3,
            ease: "back.out(2)"
        }, startTime + 0.6)


        .to(img, {
            opacity: 0,
            scale: 1.3,
            duration: 0.5,
            ease: "power1.in"
        }, startTime + 1);
});