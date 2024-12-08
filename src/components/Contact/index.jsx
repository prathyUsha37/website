import {
  Center,
  Stack,
  Title,
  useMantineTheme
} from "@mantine/core";
import { Footer } from "../Footer";

function Contact() {
  const theme = useMantineTheme();

  return (
    <Stack>
      <Center mih={'100vh'}>
        <Stack>
          <Title>{'Contact'}</Title>
        </Stack>
      </Center>
      <Footer />
    </Stack>
  );
}

export default Contact;
