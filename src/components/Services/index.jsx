import {
  Center,
  Stack,
  Title,
  useMantineTheme
} from "@mantine/core";
import { Footer } from "../Footer";

function Services() {
  const theme = useMantineTheme();

  return (
    <Stack>
      <Center mih={'100vh'}>
        <Stack>
          <Title>{'Services'}</Title>
        </Stack>
      </Center>
      <Footer />
    </Stack>
  );
}

export default Services;
