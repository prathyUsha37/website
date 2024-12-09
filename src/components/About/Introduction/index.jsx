import {
  Stack,
  Text,
} from '@mantine/core';
import { motion } from 'framer-motion'; // Import Framer Motion for animations

function Introduction() {
  return (
    <div
      style={{
        background: 'linear-gradient(to right, #1E3A8A, #4CAF50)', // Full-page gradient
        minHeight: '100vh', // Ensure gradient covers the entire viewport
        padding: '40px', // Add padding for spacing
        display: 'flex', // Use flexbox for layout
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }} // Start hidden and slide in from above
        animate={{ opacity: 1, y: 0 }} // Fade in and slide to its position
        transition={{ duration: 1 }} // Smooth 1-second animation
        style={{
          maxWidth: '800px', // Restrict container width
          textAlign: 'center', // Center-align text
          background: 'linear-gradient(to right, white, grey)', // Gray background for the box
          padding: '30px', // Add padding inside the box
          borderRadius: '10px', // Smooth rounded corners
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', // Subtle shadow for better contrast
        }}
      >
        <Stack spacing="md">
          {/* Title */}
          <Text
            style={{
              fontWeight: 'bold', // Bold title
              fontSize: '2.5rem', // Large font size for title
              color: '#1E3A8A', // Navy Blue for the title
            }}
          >
            {'Who We Are'}
          </Text>

          {/* Description */}
          <Text
            style={{
              fontSize: '1.2rem', // Slightly larger text
              fontWeight: 'bold', // Bold letters for content
              lineHeight: 1.6, // Better spacing for readability
              color: '#333', // Darker Gray for content text
            }}
          >
            {`At SM SQUARE, we specialize in connecting businesses with top-tier 
            talent to fuel growth and innovation. With years of experience in the staffing industry, 
            we offer customized solutions that help companies scale their workforce while maintaining quality. 
            Whether you're looking for temporary, permanent, or contract staff, we ensure that your business 
            always has the right people in place.`}
          </Text>
        </Stack>
      </motion.div>
    </div>
  );
}

export default Introduction;
