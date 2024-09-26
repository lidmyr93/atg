import { Text } from "@chakra-ui/react";

type TimeProps = {
  startTime: string;
};

const timeFormatter = new Intl.DateTimeFormat("sv-SE", {
  hour: "2-digit",
  minute: "2-digit",
});

const Time = (props: TimeProps) => {
  const { startTime, ...rest } = props;
  const date = new Date(startTime);

  const isValidDate = !isNaN(date.getTime());
  return (
    <Text {...rest}>
      {isValidDate ? timeFormatter.format(date) : "Ingen startid"}
    </Text>
  );
};

export default Time;
