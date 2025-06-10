import "dotenv/config";
import { fetch } from "undici";
import { fetchPrice, getEvents } from "./tm";

const { WEBHOOK_URL } = process.env;

if (!WEBHOOK_URL) {
  throw new Error("WEBHOOK_URL is not set");
}

const sendWebhook = async (message: string) => {
  const response = await fetch(WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: message,
    }),
  });
  if (!response.ok) {
    throw new Error("Failed to send webhook");
  }
  const data = await response.json();
  console.log(data);
  return data;
};

const main = async () => {
  const eventId = await getEvents();
  // this wouldn't work for now as I don't have the inventory API
  //   const price = await fetchPrice(eventId);
  sendWebhook(`Event ID: ${eventId}`);
};

main();
