import { Group, useMantineTheme, Text, Container, Box, Stack, Anchor } from '@mantine/core';
import classes from './Footer.module.css';
import { useLocation } from 'react-router-dom';

import { SiSmashingmagazine } from "react-icons/si";
import { ImLocation } from "react-icons/im";

export function Footer() {
  const location = useLocation();
  const theme = useMantineTheme();

  return (
    <footer className={classes.footer}>
      <Box className={classes.innerContainer}>
        <Group justify="space-between" w="100%" maw={'1400px'} align='flex-start'>
          <Stack>
            <SiSmashingmagazine color='white' size={50} />
            <Stack gap={2}>
              <Text className={classes.name}>SM SQAURE</Text>
              <Text className={classes.description}>
                Empowering Businesses, Connecting Talent
              </Text>
              <Text className={classes.description}>
                Your Growth, Our Mission
              </Text>
            </Stack>
          </Stack>

          <Stack gap={2}>
            <ImLocation color='white' size={20} mt={10}/>
            <Text className={classes.description} mt={10}>9201 University City Blvd</Text>
            <Text className={classes.description}>Charlotte NC 28270</Text>
            <Text className={classes.description}>USA</Text>
          </Stack>

          <Stack gap={2}>
            <Text className={classes.name} mt={10}>Support</Text>
            <Anchor className={classes.description} mt={5} href={'/'} underline="never">Help Center</Anchor>
            <Anchor className={classes.description} href={'/'} underline="never">Policies</Anchor>
            <Anchor className={classes.description} href={'/'} underline="never">PTerms & Conditions</Anchor>
          </Stack>

          <Stack gap={2}>
            <Text className={classes.name} mt={10}>Company</Text>
            <Anchor className={classes.description}  mt={5} href={'/about'} underline="never">About</Anchor>
            <Anchor className={classes.description} href={'/careers'} underline="never">Careers</Anchor>
            <Anchor className={classes.description} href={'/services'} underline="never">Services</Anchor>
            <Anchor className={classes.description} href={'/contact'} underline="never">Contact</Anchor>
          </Stack>
        </Group>
      </Box>
      <Container fluid className={classes.copyrightContainer}>
        <Text className={classes.copyright}>@Copyright 2024 SM SQAURE</Text>
      </Container>
    </footer>
  );
}