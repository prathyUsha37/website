import {
  Group,
  Stack,
  Text,
} from '@mantine/core';
import { motion } from 'framer-motion'; // Import Framer Motion for animations
import { FaHandsHelping } from "react-icons/fa";
import classes from './Mission.module.css';

function Mission() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }} // Section animation starts hidden and slides in
      animate={{ opacity: 1, y: 0 }} // Fully visible and aligned
      transition={{ duration: 1 }} // Smooth 1-second animation
      style={{
        maxWidth: '1200px', // Restrict content width
        margin: '0 auto', // Center horizontally
        padding: '20px',
      }}
    >
      <Group
        style={{
          justifyContent: 'space-between', // Align icon on the left and content on the right
          alignItems: 'center', // Vertically align content
        }}
      >
        {/* Left Side: Icon Animation */}
        <motion.div
          initial={{ opacity: 0, x: -100 }} // Icon starts from the left
          animate={{ opacity: 1, x: 0 }} // Moves into position
          transition={{ duration: 1.2 }} // Smooth transition for icon
          style={{ flex: 1, textAlign: 'center' }}
        >
          <FaHandsHelping size={150} color="#4CAF50" /> {/* Icon styling */}
        </motion.div>

        {/* Right Side: Text Animation */}
        <motion.div
          initial={{ opacity: 0, x: 100 }} // Text starts from the right
          animate={{ opacity: 1, x: 0 }} // Moves into position
          transition={{ duration: 1.2 }} // Smooth transition for text
          style={{ flex: 2, textAlign: 'justify' }}
        >
          <Stack>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: '2.5rem',
                color: '#1E3A8A', // Bold orange for heading
                marginBottom: '10px',
              }}
            >
              {'Our Mission'}
            </Text>
            <Text
              style={{
                fontSize: '1rem',
                lineHeight: 1.6,
                color: '#333', // Darker gray for description
              }}
            >
              {`Our mission is simple: to provide businesses with the right people at the right time, 
              driving success and delivering results. We believe in long-term partnerships and are committed 
              to helping organizations grow and evolve by offering flexible staffing solutions tailored to 
              their specific needs. We empower both employers and employees, ensuring that each staffing solution 
              we provide is built on trust, transparency, and excellence.`}
            </Text>
          </Stack>
        </motion.div>
      </Group>
    </motion.div>
  );
}

export default Mission;
