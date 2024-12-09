import {
    Group,
    Stack,
    Text,
    useMantineTheme,
  } from '@mantine/core';
  import Lottie from 'react-lottie';
  import animationdata from "../../Animations_Lottie/its.json"
  import classes from './ItSolutions.module.css';
  function ItSolutions() {
    const theme = useMantineTheme();
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationdata,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
    return (
      <Group className={classes.wrapper}>
        <Stack className={classes.leftContainer}>
        <Lottie
          options={defaultOptions}
          height={250}
          width={250}
        />
        </Stack>
        <Stack className={classes.rightContainer}>
          <Text className={classes.heading}>
          <Text size="xl"
                    fw={900}
                    variant="gradient"
                    gradient={{ from: 'blue', to: 'cyan', deg: 90 }}>IT Talent Solutions</Text>
          </Text>
          <Text className={classes.description}>
            {`We specialize in providing highly skilled professionals in Digital Engineering, Cloud SaaS, 
            and emerging technologies to meet your organization’s unique demands. Our tailored staffing solutions 
            are designed to align with your specific project timelines, budgets, and quality standards. 
            Whether you need short-term staff augmentation or long-term talent integration,
             we ensure you have the right expertise for every stage of your project.`}
          </Text>
        </Stack>
      </Group>
    );
  }
  export default ItSolutions;