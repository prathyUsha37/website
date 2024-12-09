import {
  Group,
  Stack,
  Text,
  useMantineTheme,
} from '@mantine/core';
import { motion } from 'framer-motion'; // Import Framer Motion for animations
import { GiOnTarget } from "react-icons/gi";
import classes from './Vision.module.css';

function Vision() {
  const theme = useMantineTheme();
  return (
    <Group
      className={classes.wrapper}
      mt={100}
      style={{
        maxWidth: '1200px', // Restrict the width for a clean layout
        margin: '0 auto', // Center the content horizontally
        padding: '20px', // Add padding around the group
        alignItems: 'center', // Align items vertically
      }}
    >
      {/* Left Container: Text Animation (from left) */}
      <motion.div
        initial={{ opacity: 0, x: -100 }} // Start hidden and slide from left
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
            {'Our Vision'}
          </Text>
          <Text
            style={{
              fontSize: '1rem',
              lineHeight: 1.6,
              color: '#333', // Darker Gray for content text
            }}
          >
            {`We aim to become the leading provider of staffing and recruitment services, 
            known for our innovative approach and personalized solutions. Our vision is to transform the
            way businesses build their teams by focusing on a people-first approach that fosters
            lasting relationships, delivering not only skilled professionals but also cultural fit and
            alignment with your organization’s values.`}
          </Text>
        </Stack>
      </motion.div>

      {/* Right Container: Icon Animation (from right) */}
      <motion.div
        initial={{ opacity: 0, x: 100 }} // Start hidden and slide from right
        animate={{ opacity: 1, x: 0 }} // Fade in and slide into position
        transition={{ duration: 1 }} // Smooth transition
        style={{ flex: 1, textAlign: 'center' }}
      >
        <GiOnTarget size={150} color={theme.colors.blue[6]} />
      </motion.div>
    </Group>
  );
}

export default Vision;
