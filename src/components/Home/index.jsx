import {
  Center,
  Stack,
  Title,
  useMantineTheme
} from "@mantine/core";
import { Footer } from "../Footer";

function Home() {
  const theme = useMantineTheme();

  return (
    <Stack bg={theme.colors.gray[1]}>
      <Center mih={'100vh'}>
        <Stack>
          <Title>{'Home'}</Title>
        </Stack>
      </Center>
      <Footer />
    </Stack>
  );
}

export default Home;
