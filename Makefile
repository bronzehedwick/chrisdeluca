default: build ## build.

help: ## Prints help for targets with comments.
	@grep -E '^[a-zA-Z._-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-15s\033[0m %s\n", $$1, $$2}'

build: ## Runs `hugo`.
	@hugo --minify --logFile=/tmp/hugo.log

clean: ## Remove build directory.
	@if [ -d public ]; then rm -rf public; fi && mkdir public

sync: ## Push the site to the server.
	@rsync --recursive --delete --rsh=ssh --exclude=".*" --quiet public/ waitstaff_deploy:/usr/local/www/chrisdeluca.me

web: build sync ## Deploys site to server.

serve: ## Start development server in the background.
	@hugo serve --buildFuture --buildDrafts > hugo.log 2>&1 &

stop: ## Kill background hugo process.
	@pgrep hugo | xargs kill -9

note: ## Create new note (micro blog)
	@hugo new note/$$(date +%s).md

record: ## Create new record (vinyl)
	@hugo new --kind record-bundle record/$(TITLE)

music: ## Pulls my record collection from Discogs.
	@curl https://api.discogs.com/users/bronzehedwick/collection/folders/0/releases --user-agent "FooBarApp/3.0" > data/discogs.json

project: ## Create new project
	@hugo new --kind project-bundle project/$(TITLE)

picture: ## Create new picture
	@hugo new --kind picture-bundle picture/$(TITLE)

resume: ## Build resume PDF.
	@perl -0pe 's/\+\+\+\n.*\n.*\n.*\n\+\+\+/# Christopher DeLuca/' content/page/resume.md > /tmp/resume.md && mdpdf --format=letter --style ./themes/novel/assets/styles/pdf.css /tmp/resume.md && rm /tmp/resume.md && mv /tmp/resume.pdf content/page/chris-deluca-resume.pdf

restart: stop serve ## Restart the hugo server.
