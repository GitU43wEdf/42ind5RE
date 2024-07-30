$(document).ready(function() {

    //debugger;
    $('a').each(function(index, element) {
        let str1 = $(element).attr('href');
        let str2 = "mailto";
        if (str1 && str1.indexOf(str2) != -1) {
            console.log($(element));
            let text, name, dotLength, domain, tld;
            text = $(element).text();
            if (text) {
                name = text.split('@')[0];
                dotLength = text.split('@')[1].split('.').length;
                if (dotLength > 2) {
                    domain = text.split('@')[1].split('.')[0];
                    tld = text.split('@')[1].split('.')[1] + '.' + text.split('@')[1].split('.')[2];
                    if (!name) {
                        name = '';
                    }
                    if (!domain) {
                        domain = '';
                    }
                    if (!tld) {
                        tld = '';
                    }
                } else {
                    domain = text.split('@')[1].split('.')[0];
                    tld = text.split('@')[1].split('.')[1];
                    if (!name) {
                        name = '';
                    }
                    if (!domain) {
                        domain = '';
                    }
                    if (!tld) {
                        tld = '';
                    }
                }

                $(element).replaceWith('<a href="#" class="frag" data-name="' + name + '" data-domain="' + domain + '" data-tld="' + tld + '"  ></a>');
            }
        }
    });

    $(document).on('click', '.frag', function() {
        let name = $(this).data('name');
        let domain = $(this).data('domain');
        let tld = $(this).data('tld');
        window.location.href = 'mailto:' + name + '@' + domain + '.' + tld;
    })
});