default: build minify ## build and minify.

help: ## Prints help for targets with comments.
	@grep -E '^[a-zA-Z._-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-15s\033[0m %s\n", $$1, $$2}'

build: ## Runs `hugo`.
	@hugo

web: ## Pushes both to Github and to deploy, which build the site.
	@git po && git pd

serve: ## Start development server in the background.
	@hugo serve --buildDrafts > logs/hugo.log 2>&1 &

stop: ## Kill background hugo process.
	@pgrep hugo | xargs kill

minify: ## Minify the generated HTML.
	@find public/ -type f -name \*.html | xargs -I {} minify --type html --output {} {}

restart: stop serve ## Restart the hugo server.
