import {
  Center,
  Stack,
  Title,
  useMantineTheme
} from "@mantine/core";
import { Footer } from "../Footer";
import Introduction from "./Introduction";
import Partners from "./Partners";
import Objectives from "./Objectives";

function Home() {
  const theme = useMantineTheme();

  return (
    <Stack bg={theme.colors.gray[1]} pt={100}>
      <Center mih={'100vh'}>
        <Stack w='100%' spacing={50}>
          <Introduction />
          <Objectives />
          <Partners />
        </Stack>
      </Center>
      <Footer />
    </Stack>
  );
}

export default Home;
