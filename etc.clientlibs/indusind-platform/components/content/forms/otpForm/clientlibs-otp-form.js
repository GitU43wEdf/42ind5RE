function showOtp() {
    $("#getUR").hide();
    $(".global_error").hide();
    $("#otpForm").show();
}

function timer() {
    $('#resendcode').hide();
    $('#some_div').show();
    var timer2 = $('#some_div').attr('data-timer'); //"3:00";
    var interval = setInterval(function() {
        var timer = timer2.split(':');
        var minutes = parseInt(timer[0], 10);
        var seconds = parseInt(timer[1], 10);
        --seconds;
        minutes = (seconds < 0) ? --minutes : minutes;
        seconds = (seconds < 0) ? 59 : seconds;
        seconds = (seconds < 10) ? '0' + seconds : seconds;
        $('#some_div').html("OTP Expires in  " + minutes + ':' + seconds + '<span id="minToSec"> Minutes.</span>');
        if (minutes < 0) clearInterval(interval);
        if ((seconds <= 0) && (minutes <= 0)) {
            clearInterval(interval);
            $('#some_div').hide();
            $('#resendcode').show();
        }
        if (minutes <= 0) {
            $('#minToSec').html(' Seconds.');
        } else {
            $('#minToSec').html(' Minutes.');
        }
        timer2 = minutes + ':' + seconds;
    }, 1000);
}