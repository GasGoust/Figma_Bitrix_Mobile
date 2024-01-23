const initSlider = () =>{

    const imageList = document.querySelector(".User_slide-wrapper .User_Image-list");
    const slideButtons = document.querySelectorAll(".User_slide-wrapper .slide-button");
    const sliderScrollBar = document.querySelector(".Use_container .User_slider-scrollbar");
    const scrollbarThumb = sliderScrollBar.querySelector(".Use_scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    //Handle scrollbar thumb drag
    scrollbarThumb.addEventListener("mousedown", (e) =>{
        const startX = e.clientX;
        const thumbPOsition = scrollbarThumb.offsetLeft;

        // Update thumb position on mouse move
        const handleMouseMove = (e) =>{
        const deltaX = e.clientX - startX;
        const newThumbPosition =  thumbPOsition + deltaX;
        const maxThumbPosition = sliderScrollBar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
        const boundedPosition = Math.max(0, Math.min (maxThumbPosition, newThumbPosition));
        const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
        scrollbarThumb.style.left = `${boundedPosition}px`;
        imageList.scrollLeft = scrollPosition; 
    }

    // Remove event listeners for mouse up
    const handleMouseUp = () =>{
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp); 
    }
    // Add event listeners for drag interection
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });

    slideButtons.forEach(button =>{
        // Slide images according to the slide button clicks 
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1:1;
            const scrollAmount =  imageList.clientWidth * direction
            imageList.scrollBy({left: scrollAmount, behavior: "smooth"})
        });
    });


    const handleSlideButtons = () =>{
        slideButtons [0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
        slideButtons [1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
        
    }

    // Update scrollbar thumb position based on image scroll
    const updateScrollThumbsPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const scrollThumb = (scrollPosition / maxScrollLeft) * (sliderScrollBar .clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${scrollThumb}px`;
    }

    imageList.addEventListener("scroll", () => {
        handleSlideButtons();
        updateScrollThumbsPosition();
    });
        
    }
window.addEventListener("load", initSlider);