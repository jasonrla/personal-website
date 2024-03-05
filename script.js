document.addEventListener('DOMContentLoaded', function() {
    var techIcons = document.querySelectorAll('.tech-icon');
    techIcons.forEach(function(icon) {
        icon.addEventListener('mouseover', function() {
            var experience = this.getAttribute('data-experience');
            this.nextElementSibling.textContent = experience + ' years';
            this.nextElementSibling.style.display = 'inline';
        });
        icon.addEventListener('mouseout', function() {
            this.nextElementSibling.style.display = 'none';
        });
    });


    const progressBars = document.querySelectorAll(".progress-bar");

    progressBars.forEach(bar => {
        const progress = parseInt(bar.getAttribute("data-progress"));
        bar.style.setProperty("--progress", progress);
        const textNode = bar.querySelector("span");
        animateProgressBar(bar, textNode, progress);
    });
});


function animateProgressBar(bar, textNode, targetProgress) {
    let currentProgress = 0;
    const step = targetProgress / 100; // adjust the speed of animation by changing the divisor
    
        function updateProgress() {
        if (currentProgress < targetProgress) {
            currentProgress += step;
            textNode.textContent = Math.floor(currentProgress) + " years of experience";
            bar.style.setProperty("--progress", currentProgress);
            requestAnimationFrame(updateProgress);
        } else {
            textNode.textContent = targetProgress + " years of experience";
        }
        }
    
        updateProgress();
}

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Trigger click on "About Me" tab on page load
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.tab-link').click();
});