import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { UseFormSetValue } from "react-hook-form";
import { Box, Center, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { TileArgs, Value } from "react-calendar/dist/cjs/shared/types";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import "./OrderCalendar.css";
import { ConfirmFormValues } from "../ConfirmModal";
import apiClient from "../../../services/api-client";

interface Props {
  setValue: UseFormSetValue<ConfirmFormValues>;
}

const OrderCalendar = ({ setValue }: Props) => {
  const [selectedDate, setSelectedDate] = useState<Value>();
  const [isRush, setIsRush] = useState<boolean>(false);
  const [stock, setStock] = useState<number>(10);

  const bgColor = useColorModeValue("gray.800", "black");
  const textColor = useColorModeValue("black", "white");

  useEffect(() => {
    apiClient.get("/stock").then((res) => {
      setStock(res.data.stock);
    });
  }, []);

  const handleDateChange = (value: Value) => {
    const isDateRush = (dateString: string) => {
      const date = new Date(dateString);
      const now = new Date();
      const twoDaysFromNow = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 2
      );
      const threeDaysFromNow = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 3
      );
      return date >= twoDaysFromNow && date <= threeDaysFromNow;
    };
    setIsRush(isDateRush(value as unknown as string));
    setSelectedDate(value);
    setValue("promiseDate", value as unknown as string);
  };

  const isDateDisabled = ({ date }: TileArgs) => {
    // Add your custom date disabling logic here
    return false;
  };

  const twoDaysFormNow = new Date();
  twoDaysFormNow.setDate(twoDaysFormNow.getDate() + 2);

  const twoMonthsFromNow = new Date();
  twoMonthsFromNow.setMonth(twoMonthsFromNow.getMonth() + 2);

  const locale = "en-US";
  const formatShortWeekday = (locale: string | undefined, date: Date) =>
    new Intl.DateTimeFormat(locale, { weekday: "short" }).format(date)[0];

  return (
    <Stack align="center">
      <Box
        padding="10px"
        borderRadius="20px"
        style={{
          background: bgColor,
          color: textColor,
        }}
      >
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          minDate={twoDaysFormNow}
          maxDate={twoMonthsFromNow}
          tileDisabled={isDateDisabled}
          minDetail="month"
          next2Label={null}
          prev2Label={null}
          locale={locale}
          formatShortWeekday={formatShortWeekday}
          prevLabel={
            <Center>
              <AiOutlineArrowUp />
            </Center>
          }
          nextLabel={
            <Center>
              <AiOutlineArrowDown />
            </Center>
          }
        />
      </Box>
      <Text>
        Pickup Date:{" "}
        {selectedDate
          ? selectedDate?.toLocaleString([], {
              // year: "numeric",
              month: "long",
              day: "numeric",
            })
          : "Select Your Pickup Date"}
        {isRush ? " (Rush Order) " : null}
      </Text>
      <Text>Slots Remaining: {stock}</Text>
      <Text>*Reservation days prior 2months max</Text>
      <Text>*Rush reservation 2-3days lead time</Text>
    </Stack>
  );
};

export default OrderCalendar;
