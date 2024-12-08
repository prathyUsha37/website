import {
  Group,
  Stack,
  Text,
  Button,
  useMantineTheme,
} from '@mantine/core';
import classes from './Introduction.module.css';
import { IoIosArrowForward } from "react-icons/io";
import intro from '/intro.mp4';

function Introduction() {
  const theme = useMantineTheme();

  return (
    <Group
      className={classes.wrapper}
      style={{
        backgroundColor: '#FFF8E1', // Light Cream Background
        margin: 'auto', // 10px left and right margin
        maxWidth: 'calc(100% - 20px)', // Ensures it stays within the screen width (10px left + 10px right)
      }}
    >
      <Stack className={classes.leftContainer}>
        <Text className={classes.heading}>
          {'Your Trusted Partner in Talent and Technology.'}
        </Text>
        <Text className={classes.description}>
          {`Looking to build your dream team or take the next step in your career? 
          We’re here to help! Whether you’re a company seeking exceptional professionals 
          or a job seeker exploring opportunities, we make the connections that matter.`}
        </Text>
        <Button
          className={classes.contactUs}
          rightSection={<IoIosArrowForward size={20} />}
          color={theme.colors.dark[8]}
        >
          {'Contact Us'}
        </Button>
      </Stack>
      <Stack className={classes.rightContainer}>
        <video
          className={classes.video}
          src={intro}
          width={'100%'}
          autoPlay={true}
          loop
          muted
        />
      </Stack>
    </Group>
  );
}

export default Introduction;
