serve:
	@hugo serve --buildDrafts > logs/hugo.log 2>&1 &

stop:
	@pgrep hugo | xargs kill

build:
	@./scripts/build

test:
	@./scripts/validate

deploy:
	@./scripts/build && ./scripts/sync
