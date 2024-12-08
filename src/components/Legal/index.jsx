import {
  Center,
  Stack,
  Title,
  useMantineTheme
} from "@mantine/core";
import { Footer } from "../Footer";

function Legal() {
  const theme = useMantineTheme();

  return (
    <Stack>
      <Center mih={'100vh'}>
        <Stack>
          <Title>{'Legal'}</Title>
        </Stack>
      </Center>
      <Footer />
    </Stack>
  );
}

export default Legal;
