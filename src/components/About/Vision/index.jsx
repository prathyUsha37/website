import {
  Group,
  Stack,
  Text,
  Button,
  useMantineTheme,
} from '@mantine/core';
import classes from './Vision.module.css';
import { IoIosArrowForward } from "react-icons/io";
import intro from '/intro.mp4';
import { GiOnTarget } from "react-icons/gi";

function Vision() {
  const theme = useMantineTheme();

  return (
    <Group className={classes.wrapper} mt={100}>
      <Stack className={classes.leftContainer}>
      <Text className={classes.heading}>
          {'Our Vision'}
        </Text>
        <Text className={classes.description}>
          {`We aim to become the leading provider of staffing and recruitment services, 
          known for our innovative approach and personalized solutions. Our vision is to transform the
           way businesses build their teams by focusing on a people-first approach that fosters
            lasting relationships, delivering not only skilled professionals but also cultural fit and
             alignment with your organization’s values.`}
        </Text>
      </Stack>
      <Stack className={classes.rightContainer}>
        <GiOnTarget size={150} />
      </Stack>
    </Group>
  );
}

export default Vision;