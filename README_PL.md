# Internet jest dla ludzi

http://internetjestdlaludzi.pl

https://centrumcyfrowe.pl/reforma

## Lokalne

Do zbudowania projektu w lokalnym środowisku potrzebny jest `npm` i `node`.

1. Instalacja zależności
```sh
npm install
```

2. Uruchomienie skrypt budującego css, js i uruchomienie procesu lokalnego serwera http w folderze.
```sh
npm run start
```

*Kopia strony powinna być do obejrzenia w przeglądarce pod adresem podanym w konsoli - domyślnie http://localhost:8080*

### Aktywna obserwacja plików

1. Uruchomienie skryptu obserwującego zmiany w folderach z css i js aby budować style i skrypty na żywo
```sh
npm run watch
```

## Publikacja

```sh
npm run deploy
```

Wygenerowany zostaje [template strony wordpressowej (nie motyw)](https://developer.wordpress.org/themes/template-files-section/page-template-files/).

Po skończeniu skryptu w głównym folderze znajduje się `template.php` oraz `dist` jest aktualizowany o wersje gotowe do publikacji (ścieżki do assetów itd. 

Aby opublikować należy nadpisać/dodać `template-internetjestdlaludzi.php` i `dist/` w folderze motywu wordpress (np `wp-content/themes/cc2018/.`). Obrazki nie są publikowane przez skrypt, w lokalnym środowisku używany jest folder `assets/` z repozytorium a na serwerze obrazki należy dodać w ścieżce `[MOTYW]/dist/images/internetjestdlaludzi`. 
