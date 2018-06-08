default: build minify

build:
	@hugo

web:
	@git po && git pd

serve:
	@hugo serve --buildDrafts > logs/hugo.log 2>&1 &

stop:
	@pgrep hugo | xargs kill

minify:
	@find public/ -type f -name \*.html | xargs -I {} minify --type html --output {} {}; \
		find public/ -type f -name \*.css | xargs -I {} minify --type css --output {} {}; \
		find public/ -type f -name \*.js | xargs -I {} minify --type js --output {} {}

restart: stop serve
