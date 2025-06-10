# Concert Watch 🎵

A simple application that monitors Ticketmaster for concert events and sends notifications via Discord webhook.

## Setup

1. Install dependencies:

   ```bash
   bun install
   ```

2. Create `.env` file:

   ```bash
   WEBHOOK_URL=your_discord_webhook_url
   TM_API_KEY=your_ticketmaster_api_key
   PRICE_LIMIT=your_price_limit
   TM_API_URL=your_ticketmaster_api_url
   ```

3. Run:
   ```bash
   bun run src/index.ts
   ```

## Automation

Set up automatic monitoring every 30 minutes:

```bash
chmod +x setup_cron.sh
./setup_cron.sh
```

## Environment Variables

- `WEBHOOK_URL` - Discord webhook URL for notifications
- `TM_API_KEY` - Ticketmaster API key for event data
- `PRICE_LIMIT` - Price limit for notifications
- `TM_API_URL` - Ticketmaster API URL for event data

## Features

- Fetches Coldplay events from Ticketmaster
- Sends Discord notifications
- Price monitoring (couldn't implement this as I don't have the inventory API which is proprietary)

## Makefile

This repo also has a Makefile to make the setup and automation easier.

```bash
make install
make setup-cron
make stop-cron
```