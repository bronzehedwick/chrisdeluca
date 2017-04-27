build:
	@./scripts/build

serve:
	@hugo serve --buildDrafts > logs/hugo.log 2>&1 &

stop:
	@pgrep hugo | xargs kill

deploy:
	@./scripts/build && ./scripts/sync

deployServer:
	@./scripts/sync-server
