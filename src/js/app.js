$(document).ready(() => {
  const europoslowie = [
    "michal.boni@europarl.europa.eu",
    "ryszardantoni.legutko@europarl.europa.eu",
    "ryszard.czarnecki@europarl.europa.eu",
    "tadeusz.zwiefka@europarl.europa.eu",
    "lidiajoanna.geringerdeoedenberg@europarl.europa.eu",
    "zdzislaw.krasnodebski@europarl.europa.eu",
    "bogdan.wenta@europarl.europa.eu",
    "boguslaw.liberadzki@europarl.europa.eu",
  ];
  const emailBody = encodeURIComponent(`Szanowni Państwo, 
Piszę do Państwa w związku z planowanym na 12 września głosowaniem nad Dyrektywą w sprawie praw autorskich na jednolitym rynku cyfrowym. Jako polski wyborca i użytkownik internetu pragnę wyrazić sprzeciw wobec propozycji przyjętych dotychczas przez Komisję Prawną Parlamentu Europejskiego. 
Proponowane przepisy niosą zagrożenie ograniczenia naszych swobód jako użytkowników.  Dlatego liczę na Państwa głos przeciwko obowiązkowi filtrowania treści na platformach internetowych oraz tworzeniu nowych praw pokrewnych dla wydawców. Proszę również o wsparcie przepisów gwarantujących szeroki zakres dozwolonego użytku dla działań edukacyjnych i naukowych.
Z wyrazami szacunku,`);
  const emailTo = europoslowie.splice(Math.floor(Math.random()*europoslowie.length), 1);
  const emailCc = [...europoslowie, "atarkowski@centrumcyfrowe.pl"];
  const emailBcc = emailCc.join(",");
  const emailSubject = encodeURIComponent('Prosimy o ochronę praw użytkowników w głosowaniu nad nową Dyrektywą prawnoautorską');
  const mailtoHref = `mailto:${emailTo}?subject=${emailSubject}&bcc=${emailBcc}&body=${emailBody}`;
  // mail to
  $(".wyslijemail").each(function() {
    $(this).attr('href', mailtoHref);
  });
  // smooth anchor scroll
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 400);
          return false;
        }
      }
    });
  });
  // overlay
  $(".card").click(function(){
    const overlayContent = $(this).find('.overlay-content');
    if (overlayContent.length) {
      $(".overlay > .container").html($(overlayContent).html())
      $(".overlay-wrapper").show();
      $(".overlay").addClass("on");
    }
  })
  $(".overlay-wrapper, .zamknij").click(function(e) {
    if (e.target === e.currentTarget) {
      e.preventDefault();
      $(".overlay").removeClass("on");
      $(".overlay-wrapper").hide();
    }
  })

  const swiper = new Swiper('.swiper-footer-logos', {
      autoplay: {
          delay: 4000,
          disableOnInteraction: false
      },
      speed: 1000,
      freeMode: false,
      slidesPerView: '1',
      effect: 'fade',
      fadeEffect: {
          crossFade: true
      },
  });
});