serve:
	@hugo serve --buildDrafts > logs/hugo.log 2>&1 &

stop:
	@pgrep hugo | xargs kill

build:
	@./scripts/build

test:
	@echo "No tests yet"

deploy:
	@./scripts/build && ./scripts/sync
