$(document).ready(() => {
  const europoslowie = [
    "michal.boni@europarl.europa.eu",
    "ryszard.czarnecki@europarl.europa.eu",
    "tadeusz.zwiefka@europarl.europa.eu",
    "lidiajoanna.geringerdeoedenberg@europarl.europa.eu",
    "zdzislaw.krasnodebski@europarl.europa.eu",
    "bogdan.wenta@europarl.europa.eu",
    "boguslaw.liberadzki@europarl.europa.eu"
  ];
  const emailBody = encodeURIComponent(`Szanowne Posłanki, Szanowni Posłowie do Parlamentu Europejskiego,
jako polski wyborca i użytkownik internetu, mam nadzieję że moje prawa zostaną wzięte pod uwagę w trwającej reformie prawa autorskiego. Do tej pory debata wokół tematu toczyła się z pominięciem głosu użytkowników – liczę, że tak się nie stanie 12 września i zagłosują Państwo za tym, aby nowa dyrektywa umożliwiała w internecie aktywności społeczne, naukowe i edukacyjne. 
Prawo autorskie potrzebuje reformy, ale takiej, która uwzględni nie tylko ochronę praw twórców, ale też swobody użytkowników. Nie zgadzam się na sytuację, w której cały internet będzie czyjąś „własnością”, a poruszanie się i działanie w nim będzie nieproporcjonalnie utrudnione. Dlatego też liczę na Państwa głos przeciwko obowiązkowi filtrowania zamieszczanych przez użytkowników treści pod pretekstem ochrony praw autorskich i przeciwko rozszerzaniu prawa autorskiego, a także na Państwa wsparcie przepisów gwarantujących dozwolony użytek i chroniących domenę publiczną. 
Z poważaniem,`);
  const emailTo = europoslowie.splice(Math.floor(Math.random()*europoslowie.length), 1);
  const emailCc = europoslowie.join(",");
  const mailtoHref = `mailto:${emailTo}?cc=${emailCc}&body=${emailBody}`;
  // mail to
  $(".wyslijemail").click(function(e) {
    window.open(mailtoHref);
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
  $(".overlay-wrapper").click(function(e) {
    console.log(e)
    if (e.target === e.currentTarget) {
      $(".overlay").removeClass("on");
      $(".overlay-wrapper").hide();
    }
  })
});