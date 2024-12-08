import {
  Group,
  Stack,
  Text,
  useMantineTheme,
} from '@mantine/core';
import classes from './Values.module.css';
import { FaAward } from "react-icons/fa";
function Values() {
  const theme = useMantineTheme();
  return (
    <Group className={classes.wrapper} mt={100}>
      <Stack className={classes.leftContainer}>
        <FaAward size={150} />
      </Stack>
      <Stack className={classes.rightContainer}>
        <Text className={classes.heading}>
          {'Our Core Values'}
        </Text>
        <Text className={classes.description}>
          {`We believe that our success is driven by the values we uphold
            Excellence: We deliver the best talent and services, consistently meeting the highest standards
             Integrity: Our relationships are built on trust, honesty, and ethical conduct.
             Flexibility: We adapt to the changing needs of our clients and candidates, offering customized solutions.
            Collaboration: We work closely with both clients and candidates, ensuring the best fit and long-term success.
             Innovation: We embrace new ideas and technologies to improve our services and stay ahead of the curve.`}

        </Text>
      </Stack>
    </Group>
  );
}
export default Values;