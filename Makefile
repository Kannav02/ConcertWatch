
.PHONY: install setup-cron stop-cron


install:
	bun install
	@echo " Project setup complete!"


setup-cron: install
	@echo "Setting up cron job..."
	chmod +x setup_cron.sh
	./setup_cron.sh
	@echo "Cron job configured to run every 30 minutes"

stop-cron: 
	@echo "Stopping cron job..."
	@crontab -l 2>/dev/null | grep -v "concert-watch" | grep -v "src/index.ts" | crontab - || true
	@echo "Cron job removed" 