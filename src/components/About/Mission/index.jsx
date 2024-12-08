import {
  Group,
  Stack,
  Text,
  useMantineTheme,
} from '@mantine/core';
import classes from './Mission.module.css';
import { FaHandsHelping } from "react-icons/fa";

function Mission() {
  const theme = useMantineTheme();

  return (
    <Group className={classes.wrapper}>
      <Stack className={classes.leftContainer}>
        <FaHandsHelping size={150} />
      </Stack>
      <Stack className={classes.rightContainer}>
        <Text className={classes.heading}>
          {'Our Mission'}
        </Text>
        <Text className={classes.description}>
          {`Our mission is simple: to provide businesses with the right people at the right time, 
          driving success and delivering results. We believe in long-term partnerships and are committed 
          to helping organizations grow and evolve by offering flexible staffing solutions tailored to 
          their specific needs. We empower both employers and employees, ensuring that each staffing solution 
          we provide is built on trust, transparency, and excellence.`}
        </Text>
      </Stack>
    </Group>
  );
}

export default Mission;