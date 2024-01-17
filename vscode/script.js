// document.addEventListener("DOMContentLoaded", function() {
//     const links = document.querySelectorAll("a");
//     links.forEach(link => {
//         link.addEventListener("click", function(event) {
//             event.preventDefault();
//             const href = this.getAttribute("href");
//             document.body.classList.add("fade-out");
//             setTimeout(function() {
//                 window.location.href = href;
//             }, 500);
//         });
//     });
// });


// can cookie?

function isCookieConsentAllowed() {
    var cookies = document.cookie.split(";");
    
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.startsWith("cookieConsent=")) {
            return cookie.substring("cookieConsent=".length) === "allowed";
        }
    }
    
    return false;
}

// set cookie
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

// get cookie 
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}


const toggleButton = document.getElementById('darkModeToggle');
const body = document.body;

// check cookie
const darkModeCookie = getCookie('darkMode');
console.log('Dark mode cookie on page load:', darkModeCookie);

// eat cookie
if (darkModeCookie === 'true') {
    body.classList.add('dark');
}

// update cookie
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark');
    const newDarkModeValue = body.classList.contains('dark');
    setCookie('darkMode', newDarkModeValue.toString(), 365);
    console.log('Dark mode toggled. New cookie value:', newDarkModeValue);
});

// no cookie :(
function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

cookieConsent = getCookie("cookieConsent")
console.log(cookieConsent)
if (cookieConsent !== "allowed") {
    const consentBox = document.getElementById('cookie-consent');
    consentBox.classList.add('show');
    console.log("test")
    document.addEventListener('DOMContentLoaded', function () {

        const allowButton = document.querySelector('.cookie-consent-allow');
        const denyButton = document.querySelector('.cookie-consent-deny');

        allowButton.addEventListener('click', function () {
            console.log('consented')
            setCookie('cookieConsent', 'allowed', 365);
            consentBox.classList.remove('show');
            consentBox.classList.add('gtfo')
            // consent cookie

        });

        denyButton.addEventListener('click', function () {
            consentBox.classList.remove('show');
            consentBox.classList.add('gtfo')
            console.log('')
            // no consent cookie :(
            setCookie('cookieConsent', 'denied', 365)

        })
            ;
    });
};

window.onload = function() {
    if (!isCookieConsentAllowed()) {
        deleteAllCookies();
        console.log("Cookies deleted");
    } else {
        console.log("Cookies not deleted");
    }
};



//cookieConsent !== "allowed"
