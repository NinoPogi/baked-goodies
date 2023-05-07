import { useEffect, useState } from "react";
import Pusher from "pusher-js";

const usePusher = (customerId: string) => {
  const channelName = `customer-${customerId}`;

  const pusher = new Pusher(import.meta.env.VITE_PUSHER_API_KEY!, {
    cluster: import.meta.env.VITE_PUSHER_CLUSTER!,
  });
  const channel = pusher.subscribe(channelName);
  return { pusher, channel };
};

export default usePusher;
