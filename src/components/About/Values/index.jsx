import {
  Group,
  Stack,
  Text,
} from '@mantine/core';
import { motion } from 'framer-motion'; // Import Framer Motion for animations
import { FaAward } from "react-icons/fa";
import classes from './Values.module.css';

function Values() {
  return (
    <Group
      className={classes.wrapper}
      mt={100}
      style={{
        maxWidth: '1200px', // Restrict the width for a clean layout
        margin: '0 auto', // Center the content horizontally
        padding: '20px', // Add padding for spacing
        alignItems: 'center', // Align items vertically
      }}
    >
      {/* Left Side: Icon Animation (from left) */}
      <motion.div
        initial={{ opacity: 0, x: -100 }} // Start hidden and slide from left
        animate={{ opacity: 1, x: 0 }} // Fade in and slide into position
        transition={{ duration: 1 }} // Smooth transition
        style={{ flex: 1, textAlign: 'center' }}
      >
        <FaAward size={150} color="#4CAF50" /> {/* Adjust color for the icon */}
      </motion.div>

      {/* Right Side: Text Animation (from right) */}
      <motion.div
        initial={{ opacity: 0, x: 100 }} // Start hidden and slide from right
        animate={{ opacity: 1, x: 0 }} // Fade in and slide into position
        transition={{ duration: 1 }} // Smooth transition
        style={{ flex: 2 }}
      >
        <Stack>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: '2.5rem',
              marginBottom: '20px',
              color: '#1E3A8A', // Vibrant Orange for the heading
            }}
          >
            {'Our Core Values'}
          </Text>
          <Text
            style={{
              fontSize: '1rem',
              lineHeight: 1.6,
              color: '#333', // Darker Gray for description
            }}
          >
            {`We believe that our success is driven by the values we uphold:
            Excellence: We deliver the best talent and services, consistently meeting the highest standards.
            Integrity: Our relationships are built on trust, honesty, and ethical conduct.
            Flexibility: We adapt to the changing needs of our clients and candidates, offering customized solutions.
            Collaboration: We work closely with both clients and candidates, ensuring the best fit and long-term success.
            Innovation: We embrace new ideas and technologies to improve our services and stay ahead of the curve.`}
          </Text>
        </Stack>
      </motion.div>
    </Group>
  );
}

export default Values;
