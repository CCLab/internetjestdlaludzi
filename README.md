# Internet jest dla ludzi (reforma) static webiste - Centrum Cyfrowe

http://internetjestdlaludzi.pl

https://centrumcyfrowe.pl/reforma

## Builiding locally

To build and modify this project you need `npm`.

If you're using yarn, like the original author - @zmilonas - replace all `npm` and `npm run` with `yarn`.

1. Install dependencies
```sh
npm install
```

2. Run the bundled style and script generation script and start the webserver
```sh
npm run start
```

*The local copy of the site should be available at the address printed in the console - default is http://localhost:8080*

### For active development

1. Run the watcher on the styles and the scripts, while running the server
```sh
npm run watch
```

## Deployment

```sh
npm run deploy
```

Generation prepares a [wordpress page template](https://developer.wordpress.org/themes/template-files-section/page-template-files/).

After the script is ran, a `template.php` file and `dist` directory are updated with deployment ready code. 

To publish it just copy the `template.php` and `dist/` to remote location in the root theme folder (e.g. `wp-content/themes/cc2018/.`). Image assets are not managed by the deploy script, they are kept in `assets/` directory in the repo and in `dist/images/internetjestdlaludzi` on remote. 
