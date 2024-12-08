import {
    Group,
    Stack,
    Text,
    useMantineTheme,
  } from '@mantine/core';
  import classes from './ItSolutions.module.css';
  import { FaHandsHelping } from "react-icons/fa";
  function ItSolutions() {
    const theme = useMantineTheme();
    return (
      <Group className={classes.wrapper}>
        <Stack className={classes.leftContainer}>
          <FaHandsHelping size={150} />
        </Stack>
        <Stack className={classes.rightContainer}>
          <Text className={classes.heading}>
            {'IT Talent Solutions'}
          </Text>
          <Text className={classes.description}>
            {`We specialize in providing highly skilled professionals in Digital Engineering, Cloud SaaS, 
            and emerging technologies to meet your organization’s unique demands. Our tailored staffing solutions 
            are designed to align with your specific project timelines, budgets, and quality standards. 
            Whether you need short-term staff augmentation or long-term talent integration,
             we ensure you have the right expertise for every stage of your project. Our comprehensive
              talent pool includes developers, analysts, and certified experts who excel in creating innovative, scalable, and impactful solutions.
             With SM Square, you can trust us to deliver talent that drives measurable business outcomes.`}
          </Text>
        </Stack>
      </Group>
    );
  }
  export default ItSolutions;