import {
  Center,
  Stack,
  Text,
  Group,
  Box,
  Radio,
  Button,
  TextInput,
  Textarea,
  useMantineTheme
} from "@mantine/core";
import { Footer } from "../Footer";
import classes from './Contact.module.css';
import { IoIosAt } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

function Contact() {
  const theme = useMantineTheme();

  return (
    <Stack bg={theme.colors.gray[1]}>
      <Center mih={'100vh'}>
        <Group className={classes.wrapper}>
          <Stack className={classes.leftContainer}>
            <Text className={classes.heading}>
              {'Get in Touch With Us'}
            </Text>
            <Text className={classes.description}>
              {`We’d love to hear from you! Whether you’re a company looking for top-tier talent or a professional 
          seeking new career opportunities, we’re here to help. Reach out today and let’s start a 
          conversation about how we can work together to achieve your goals.`}
            </Text>
          </Stack>

          <Stack className={classes.rightContainer}>
            <Box className={classes.form}>
              <Stack w='100%'>
                <Radio.Group>
                  <Group mt="xs">
                    <Radio value="job_seeker" label="Job Seeker" color={theme.colors.dark[8]}/>
                    <Radio value="employer" label="Employer" color={theme.colors.dark[8]}/>
                  </Group>
                </Radio.Group>
                <TextInput
                  leftSectionPointerEvents="none"
                  leftSection={<FaUser size={16} />}
                  label="Name"
                  placeholder="Your Name"
                />
                <TextInput
                  leftSectionPointerEvents="none"
                  leftSection={<IoIosAt size={20} />}
                  label="Email"
                  placeholder="Your email"
                />
                <TextInput
                  leftSectionPointerEvents="none"
                  leftSection={<FaPhone size={15} />}
                  label="Phone"
                  placeholder="Your phone"
                />
                <Textarea
                  label="Message"
                  placeholder="Your message"
                  minRows={4}
                />
                <Button
                  className={classes.submit}
                  color={theme.colors.dark[8]}
                >
                  {'Submit'}
                </Button>
              </Stack>
            </Box>
          </Stack>
        </Group>
      </Center>
      <Footer />
    </Stack>
  );
}

export default Contact;
