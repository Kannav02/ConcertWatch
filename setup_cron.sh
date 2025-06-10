#!/usr/bin/env bash
#
# setup_cron_simple.sh
# --------------------
# Adds (or refreshes) a cron job that runs your Bun TypeScript project every 30 minutes.
# The job:
#   1. cd's into the project directory
#   2. Executes your src/index.ts using Bun
#
# To use: chmod +x setup_cron_simple.sh && ./setup_cron_simple.sh

# Get the absolute path to the directory this script is in
PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# The command to run (edit the path to your entry file if needed)
CRON_CMD="cd ${PROJECT_DIR} && bun run src/index.ts"

# Cron schedule: every 30 minutes
CRON_EXPR="*/30 * * * * ${CRON_CMD}"

# Install or refresh the cron job (remove any previous identical line, then add new)
( crontab -l 2>/dev/null | grep -Fv "${CRON_CMD}"; echo "${CRON_EXPR}" ) | crontab -

echo "Cron job installed/updated to run every 30 minutes."
