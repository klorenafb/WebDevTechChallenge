<script type = "text/javascript">
var url = window.location.href;
var locale = url.split("/")[5];
var onlineGreeting, offlineGreeting;

var livechat = function () {
    window.$zopim || (function (d, s) {
        var z = $zopim = function (c) {
                z._.push(c)
            },
            $ = z.s = d.createElement(s),
            e = d.getElementsByTagName(s)[0];
        z.set = function (o) {
            z.set._.push(o)
        };
        z._ = [];
        z.set._ = [];
        $.async = !0;
        $.setAttribute('charset', 'utf-8');
        $.src = '//v2.zopim.com/?';
        z.t = +new Date;
        $.type = 'text/javascript';
        e.parentNode.insertBefore($, e)
    })(document, 'script');
};
/*var greetings = function () {
    $zopim(function () {
        $zopim.livechat.setGreetings({
            'online': onlineGreeting,
            'offline': offlineGreeting
        });
    });
};*/
if (locale === "es") {
    livechat();
    $zopim(function () {
        $zopim.livechat.departments.setVisitorDepartment('spanish');
        /*onlineGreeting = "Habla con nosotras";
        offlineGreeting = "Nuestros consejeros no están disponibles en este momento, por favor deje un mensaje y pronto nos contactaremos con usted.";*/
        $zopim.livechat.prechatForm.setGreetings("Habla con nosotras");
        $zopim.livechat.offlineForm.setGreetings("Nuestros consejeros no están disponibles en este momento, por favor deje un mensaje y pronto nos contactaremos con usted.");
        //greetings();
    });
};
else if (locale === "pt-pt") {
    livechat();
    $zopim(function () {
        $zopim.livechat.departments.setVisitorDepartment('portuguese');
        $zopim.livechat.prechatForm.setGreetings("Fale com a gente");
        $zopim.livechat.offlineForm.setGreetings("Nossos conselheiros não estão disponíveis no momento, deixe uma mensagem e entraremos em contato com você em breve.");
    });
};
else if (locale === "fr") {
    livechat();
    $zopim(function () {
        $zopim.livechat.departments.setVisitorDepartment('french');
        $zopim.livechat.prechatForm.setGreetings("Parlez-nous");
        $zopim.livechat.offlineForm.setGreetings("Nos conseillers ne sont pas disponibles pour le moment, laissez un message et nous vous contacterons rapidement.");
    });
};
else if (locale === "hi") {
    livechat();
    $zopim(function () {
        $zopim.livechat.departments.setVisitorDepartment('hindi');
        $zopim.livechat.prechatForm.setGreetings("हम से बात करे");
        $zopim.livechat.offlineForm.setGreetings("हमारे सलाहकार फिलहाल उपलब्ध नहीं हैं, कृपया एक संदेश छोड़ दें और हम जल्द ही आपसे संपर्क करेंगे।");
    });
};
else if (locale === "pl") {
    livechat();
    $zopim(function () {
        $zopim.livechat.departments.setVisitorDepartment('polish');
        $zopim.livechat.prechatForm.setGreetings("Porozmawiaj z nami");
        $zopim.livechat.offlineForm.setGreetings("Nasi doradcy nie są w tej chwili obecni, zostaw wiadomość i wkrótce się z Tobą skontaktujemy.");
    });
};else if (locale === "en") {
    livechat();
    $zopim(function () {
        $zopim.livechat.departments.setVisitorDepartment('english');
        $zopim.livechat.prechatForm.setGreetings("Chat with us");
        $zopim.livechat.offlineForm.setGreetings("Our counselors are not available at the moment, please leave a message and we will contact you soon.);
    });
};
</script>