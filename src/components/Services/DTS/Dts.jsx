import {
  Group,
  Stack,
  Text,
  useMantineTheme,
} from '@mantine/core';
import classes from './Dts.module.css';
import Lottie from "react-lottie";
import animationData from "../../Animations_Lottie/dts.json";
function Dts() {
  const theme = useMantineTheme();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <Group className={classes.wrapper} mt={100}>
      <Stack className={classes.leftContainer}>
        <Text className={classes.heading}>
        <Text size="xl"
                    fw={900}
                    variant="gradient"
                    gradient={{ from: 'blue', to: 'cyan', deg: 90 }}>Digital Transforamtion Support</Text>
        </Text>
        <Text className={classes.description}>
          {`Our Digital Transformation Support services are aimed at helping businesses navigate and implement next-generation technologies seamlessly. 
                We provide expert teams proficient in custom application development, platform integration, and lifecycle management.
                By partnering with us, your organization can achieve a smoother, faster, and more efficient digital transformation journey, 
                tailored to your operational and commercial requirements`}
        </Text>
      </Stack>
      <Stack className={classes.rightContainer}>
        <Lottie
          options={defaultOptions}
          height={250}
          width={250}
        />
      </Stack>
    </Group>
  );
}
export default Dts;