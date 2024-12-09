import {
  Group,
  Stack,
  Text,
} from '@mantine/core';
import { motion } from "framer-motion";
import classes from './WhyUs.module.css';

const data = [
  {
    heading: 'Industry Expertise',
    description: `With years of experience in the staffing and recruitment industry, we understand your needs.`,
    color: '#FFB6C1', // Light Pink
  },
  {
    heading: 'Tailored Solutions',
    description: `We offer customized staffing solutions based on your specific business goals.`,
    color: '#87CEEB', // Sky Blue
  },
  {
    heading: 'Results-Driven',
    description: `We focus on delivering measurable results with every placement, ensuring long-term success.`,
    color: '#98FB98', // Pale Green
  },
  {
    heading: 'Dedicated Support',
    description: `From the initial consultation to the final placement, continuous support to both clients and candidates.`,
    color: '#FFD700', // Gold
  }
];

function Card(props) {
  const { data: { heading, description, color } } = props || {};
  return (
    <motion.div
      whileHover={{
        scale: [null, 1.05],
        boxShadow: [null, `0 0 10px ${color}`],
      }}
      transition={{ duration: 0.3 }}
      className={classes.card}
      style={{
        backgroundColor: color, // Set background dynamically
        borderRadius: '10px', // Optional rounded corners
        padding: '20px',
        color: '#000', // Text color
        minHeight: '200px', // Set consistent height for all cards
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Stack>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: '1.5rem',
            marginBottom: '10px',
          }}
        >
          {heading}
        </Text>
        <Text
          style={{
            fontSize: '1rem',
            lineHeight: 1.5,
          }}
        >
          {description}
        </Text>
      </Stack>
    </motion.div>
  );
}

function WhyUs() {
  return (
    <Stack
      className={classes.wrapper}
      gap={40}
      style={{
        padding: '20px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      <Text
        className={classes.title}
        style={{
          fontWeight: 'bold',
          fontSize: '2rem',
          textAlign: 'center',
          marginBottom: '20px',
        }}
      >
        {'Why Choose Us ?'}
      </Text>
      <Group
        justify="space-between"
        style={{
          gap: '20px',
          alignItems: 'stretch', // Ensures all cards stretch to the same height
        }}
      >
        {data.map(d => (
          <Card data={d} key={d.heading} />
        ))}
      </Group>
    </Stack>
  );
}

export default WhyUs;
