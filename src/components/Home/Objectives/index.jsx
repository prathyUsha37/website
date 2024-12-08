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
    outlook: 'cyan', // Ambient cyan for a calming feel
  },
  {
    heading: 'Empowering Job Seekers',
    description: `Discover your next career move with us. We connect talented professionals with companies 
    that align with their skills, ambitions, and goals, opening doors to exciting opportunities.`,
    outlook: 'teal', // Fresh teal for an empowering message
  },
  {
    heading: 'Personalized Staffing Solutions',
    description: `Whether you're hiring for a temporary project or building a long-term team, 
    our customized staffing solutions cater to businesses of all sizes and industries.`,
    outlook: 'yellow', // Friendly yellow for warmth and energy
  },
  {
    heading: 'Seamless Recruitment Process',
    description: `From submitting your requirements to successfully onboarding candidates, 
    we simplify every step of the recruitment journey saving time and resources.`,
    outlook: 'orange', // Vibrant orange for action-oriented focus
  },
];

function Card(props) {
  const { data: { heading, description, outlook } } = props || {};
  const theme = useMantineTheme();

  return (
    <motion.div
      style={{
        backgroundColor: theme.colors[outlook][3], // Softer tones for pleasant visuals
        color: theme.colors.dark[9], // Ensure good contrast for readability
        padding: '20px',
        borderRadius: '10px',
      }}
      whileHover={{
        scale: [null, 1.1],
        boxShadow: [null, `0 0 15px ${theme.colors[outlook][4]}`],
      }}
      transition={{ duration: 0.3 }}
      className={classes.card}
    >
      <Stack>
        <Text className={classes.heading} style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
          {heading}
        </Text>
        <Text className={classes.description} style={{ fontSize: '1rem', lineHeight: 1.5 }}>
          {description}
        </Text>
      </Stack>
    </motion.div>
  );
}

function Objectives() {
  return (
    <Stack className={classes.wrapper} style={{ gap: '20px' }}>
      <Group justify="space-between" style={{ gap: '20px', flexWrap: 'wrap' }}>
        {data.map((d) => (
          <Card data={d} key={d.heading} />
        ))}
      </Group>
    </Stack>
  );
}

export default Objectives;
