export function setCookie(field, cookieVal, expieryDays, arr = false) {
    var d = new Date();
    d.setTime(d.getTime() + (expieryDays * 24 * 60 * 60));
    var expires = "expires=" + d.toUTCString();
    if (arr) {
        cookieVal = JSON.stringify(cookieVal);
    }
    document.cookie = field + "=" + cookieVal + "; " + expires;
}

export function getCookie(field, arr = false) {
    var name = field + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            let cookieVal = c.substring(name.length, c.length);
            if (arr) {
                return JSON.parse(cookieVal);
            } else {
                return cookieVal;
            }
        }
    }
    return [];
}