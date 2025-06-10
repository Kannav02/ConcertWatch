import { fetch } from "undici";

const { TM_API_KEY, TM_API_URL } = process.env;

if (!TM_API_KEY || !TM_API_URL) {
  throw new Error("TM_API_KEY, TM_API_URL is not set");
}

//  this was for fetching the event id
export const getEvents = async (): Promise<any> => {
    const apiUrl = `${TM_API_URL}&apikey=${TM_API_KEY}`; // Now appending correctly
    console.log(apiUrl);
    const response = await fetch(apiUrl);
    const data = (await response.json()) as any;
    const eventId = data._embedded.events[0].id;
    console.log(eventId);
    return eventId;
};

// this function is to actually fetch the price
export const fetchPrice = async (eventId: string): Promise<any> => {
  const response = await fetch(
    `https://app.ticketmaster.com/inventory-status/v1/availability?apikey=${TM_API_KEY}&eventId=${eventId}`
  );
  const data = (await response.json()) as any;
  console.log(data);
  return data;
};

getEvents();
