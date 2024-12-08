import {
  Stack,
  Text,
  useMantineTheme,
} from '@mantine/core';
import classes from './Introduction.module.css';

function Introduction() {
  const theme = useMantineTheme();

  return (
    <Stack className={classes.wrapper}>
      <Text className={classes.heading}>
        {'Who We Are'}
      </Text>
      <Text className={classes.description}>
        {`At SQ SQUARE, we specialize in connecting businesses with top-tier 
        talent to fuel growth and innovation. With years of experience in the staffing industry, 
        we offer customized solutions that help companies scale their workforce while maintaining quality. 
        Whether you're looking for temporary, permanent, or contract staff, we ensure that your business 
        always has the right people in place.`}
      </Text>
    </Stack>
  );
}

export default Introduction;