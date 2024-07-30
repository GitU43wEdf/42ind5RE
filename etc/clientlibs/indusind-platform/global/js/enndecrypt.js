
function makeid() {
    for (var t = "", r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", o = 0; o < 16; o++) t += r.charAt(Math.floor(Math.random() * r.length));
    return t
}

function encryptMessage(t, r, o) {
    return CryptoJS.AES.encrypt(t, r, {
        iv: o,
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC
    })
}

function decryptMessage(t, r, o) {
    return CryptoJS.AES.decrypt(t, r, {
        iv: o,
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC
    }).toString(CryptoJS.enc.Utf8)
}