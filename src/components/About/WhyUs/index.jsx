import {
  Group,
  Stack,
  Text,
  useMantineTheme,
} from '@mantine/core';
import classes from './WhyUs.module.css';
import { motion } from "framer-motion";

const data = [
  {
    heading: 'Industry Expertise',
    description: `With years of experience in the staffing and recruitment industry, we understand your needs.`
  },
  {
    heading: 'Tailored Solutions',
    description: `We offer customized staffing solutions based on your specific business goals.`
  },
  {
    heading: 'Results-Driven',
    description: `We focus on delivering measurable results with every placement, ensuring long-term success.`
  },
  {
    heading: 'Dedicated Support',
    description: `From the initial consultation to the final placement, continuous support to both clients and candidates.`
  }
]

function Card(props) {
  const { data: { heading, description } } = props || {};
  const theme = useMantineTheme();

  return (
    <motion.div
      whileHover={{
        scale: [null, 1.1],
        boxShadow: [null, `0 0 10px ${theme.colors.gray[4]}`],
      }}
      transition={{ duration: 0.3 }}
      className={classes.card}
    >
      <Stack>
        <Text className={classes.heading}>
          {heading}
        </Text>
        <Text className={classes.description}>
          {description}
        </Text>
      </Stack>
    </motion.div>
  )
}

function WhyUs() {
  const theme = useMantineTheme();

  return (
    <Stack className={classes.wrapper} gap={40}>
      <Text className={classes.title}> {'Why Choose Us ?'}</Text>
      <Group justify='space-between'>
        {data.map(d => (
          <Card data={d} key={d.heading} />
        ))}
      </Group>
    </Stack>
  );
}

export default WhyUs;