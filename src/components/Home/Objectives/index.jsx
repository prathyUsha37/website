import {
  Group,
  Stack,
  Text,
  useMantineTheme,
} from '@mantine/core';
import classes from './Objectives.module.css';
import { motion } from "framer-motion";

const data = [
  {
    heading: 'Talent Acquisition Made Simple',
    description: `We help businesses find the right talent by understanding their unique requirements.
     Our vast network and tailored approach ensure a perfect match for every role.`,
     outlook: 'green'
  },
  {
    heading: 'Empowering Job Seekers',
    description: `Discover your next career move with us. We connect talented professionals with companies 
    that align with their skills, ambitions, and goals, opening doors to exciting opportunities.`,
    outlook: 'yellow'
  },
  {
    heading: 'Personalized Staffing Solutions',
    description: `Whether you're hiring for a temporary project or building a long-term team, 
    our customized staffing solutions cater to businesses of all sizes and industries.`,
    outlook: 'orange'
  },
  {
    heading: 'Seamless Recruitment Process',
    description: `From submitting your requirements to successfully onboarding candidates, 
    we simplify every step of the recruitment journey saving time and resources.`,
    outlook: 'blue',
  }
]

function Card(props) {
  const { data: { heading, description, outlook} } = props || {};
  const theme = useMantineTheme();

  return (
    <motion.div style={{backgroundColor: theme.colors[outlook][4]}}
      whileHover={{
        scale: [null, 1.1],
        boxShadow: [null, `0 0 10px ${theme.colors[outlook][4]}`],
      }}
      transition={{ duration: 0.3 }}
      className={classes.card}
    >
      <Stack>
        <Text className={classes.heading} >
          {heading}
        </Text>
        <Text className={classes.description}>
          {description}
        </Text>
      </Stack>
    </motion.div>
  )
}

function Objectives() {
  const theme = useMantineTheme();

  return (
    <Stack className={classes.wrapper}>
      <Group justify='space-between'>
        {data.map(d => (
          <Card data={d} key={d.heading} />
        ))}
      </Group>
    </Stack>
  );
}

export default Objectives;