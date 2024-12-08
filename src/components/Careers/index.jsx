import {
  Center,
  Stack,
  Title,
  useMantineTheme
} from "@mantine/core";
import { Footer } from "../Footer";

function Careers() {
  const theme = useMantineTheme();

  return (
    <Stack>
      <Center mih={'100vh'}>
        <Stack>
          <Title>{'Careers'}</Title>
        </Stack>
      </Center>
      <Footer />
    </Stack>
  );
}

export default Careers;
