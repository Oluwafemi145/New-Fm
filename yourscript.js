document.addEventListener("DOMContentLoaded", function() {
    const popupContainer = document.getElementById("popup-container");
    const popupContent = document.getElementById("popup-content");

    const contentArray = [
        "Prince From Abuja Just ordered Three Bottles of the prostate solution 3 min ago and is about to be permanenly free from frequent urination!",
        "Mr Abdulwasiu From Ilorin Just ordered Three Bottles of the prostate solution 10 min ago and is escaping prostate problems!",
        "Mr Atanegbe From Warri Just ordered Two Bottles of the prostate solution 7 min ago and would see his psa level comimg down!",
        "Mr Musa From Minna Just ordered Two Bottles of the prostate solution 7 min ago!!",
	    "Mr Engr. Felix From Benin City Just ordered One bottle of the Prostate Solution 1 sec ago and would be free from his painful urination",
	    "Mr Abayomi from Osun Just three minutes ago, he placed an order for three bottles of the prostate solution, and he will soon be permanently free from Urinary Track Infection!",
	    "John from Port Harcourt just ordered four bottles of th Prostate Shrink Solution Capsule and in some days he"ll be free gradually from frequent urination and erectile dysfunction",
    ];

    let contentIndex = 0;

    function showPopup() {
        popupContent.textContent = contentArray[contentIndex];
        popupContainer.style.display = "block";

        setTimeout(function() {
            popupContainer.style.display = "none";
            contentIndex = (contentIndex + 1) % contentArray.length;
        }, 5000); // Hide the pop-up after 10 seconds (simulating a notification)
    }

    function initialPopupWithDelay() {
        setTimeout(function() {
            showPopup();
            setInterval(showPopup, 5000); // Show the pop-up every minute
        }, 5000); // Initial delay of 2 minutes
    }

    initialPopupWithDelay();
});

