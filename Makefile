build:
	@hugo

web:
	@git po && git pd

serve:
	@hugo serve --buildDrafts > logs/hugo.log 2>&1 &

stop:
	@pgrep hugo | xargs kill

restart: stop serve
