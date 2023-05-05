import { useState, useEffect } from "react";
import Pusher, { Channel, Options } from "pusher-js";
import dotenv from "dotenv";

interface PusherEvent {
  event: string;
  data: unknown;
}

function usePusher(
  channelName: string,
  eventName: string,
  options?: Options,
  callback?: (data: unknown) => void
): Channel | null {
  dotenv.config();

  const [channel, setChannel] = useState<Channel | null>(null);

  useEffect(() => {
    const pusher = new Pusher(process.env.PUSHER_API_KEY!, {
      cluster: process.env.PUSHER_CLUSTER!,
      ...options,
    });

    const channel = pusher.subscribe(channelName);
    setChannel(channel);

    return () => {
      pusher.unsubscribe(channelName);
      pusher.disconnect();
    };
  }, [channelName, options]);

  useEffect(() => {
    const eventHandler = ({ event, data }: PusherEvent) => {
      if (eventName === event && callback) {
        callback(data);
      }
    };

    if (channel) {
      channel.bind(eventName, eventHandler);
    }

    return () => {
      if (channel) {
        channel.unbind(eventName, eventHandler);
      }
    };
  }, [channel, eventName, callback]);

  return channel;
}

export default usePusher;
