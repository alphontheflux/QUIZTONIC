document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("intro-video");
    const videoContainer = document.getElementById("video-container");
    const mainContent = document.getElementById("main-content");

    function showMainContent() {
        videoContainer.classList.add("fade-out");

        setTimeout(() => {
            videoContainer.style.display = "none";
            mainContent.classList.remove("hidden");
            mainContent.style.opacity = "1"; 
        }, 800);
    }

    video.addEventListener("ended", showMainContent);


    setTimeout(showMainContent, 4500);
});
