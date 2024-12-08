import {
  Center,
  Stack,
  Title,
  useMantineTheme
} from "@mantine/core";
import { Footer } from "../Footer";

function About() {
  const theme = useMantineTheme();

  return (
    <Stack>
      <Center mih={'100vh'}>
        <Stack>
          <Title>{'About'}</Title>
        </Stack>
      </Center>
      <Footer />
    </Stack>
  );
}

export default About;
