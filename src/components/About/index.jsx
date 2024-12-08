import {
  Center,
  Stack,
  useMantineTheme
} from "@mantine/core";
import { Footer } from "../Footer";
import Introduction from "./Introduction";
import Mission from "./Mission";
import Vision from "./Vision";
import Values from "./Values";
import WhyUs from "./WhyUs";

function About() {
  const theme = useMantineTheme();

  return (
    <Stack bg={theme.colors.gray[1]} pt={100}>
      <Center mih={'100vh'}>
        <Stack w='100%' spacing={50}>
          <Introduction />
          <Mission />
          <Vision />
          <Values />
          <WhyUs />
        </Stack>
      </Center>
      <Footer />
    </Stack>
  );
}

export default About;
