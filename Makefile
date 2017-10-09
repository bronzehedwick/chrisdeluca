build:
	@./scripts/build

serve:
	@hugo serve --buildDrafts > logs/hugo.log 2>&1 &

stop:
	@pgrep hugo | xargs kill

creds:
	@scp credentials.json chrishost:/usr/local/www/_src/chrisdeluca/credentials.json
