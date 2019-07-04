default: build ## build.

help: ## Prints help for targets with comments.
	@grep -E '^[a-zA-Z._-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-15s\033[0m %s\n", $$1, $$2}'

build: ## Runs `hugo`.
	@hugo && find public/ -type f -name "\.*" -print0 | xargs -0 rm

clean: ## Remove build directory.
	@if [ -d public ]; then rm -rf public; fi && mkdir public

sync: ## Push the site to the server.
	@rsync -a -e ssh --delete --omit-dir-times --no-perms --progress public/ waitstaff_deploy:/usr/local/www/chrisdeluca.me

web: clean build minify sync ## Deploys site to server.

serve: ## Start development server in the background.
	@hugo serve --buildDrafts > logs/hugo.log 2>&1 &

stop: ## Kill background hugo process.
	@pgrep hugo | xargs kill

minify: ## Minify the generated HTML.
	@find public/ -type f -name \*.html | xargs -I {} minify --type html --output {} {}

note: ## Create new note (micro blog)
	@hugo new note/$$(date +'%s').md

restart: stop serve ## Restart the hugo server.
