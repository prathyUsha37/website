import {
  Center,
  Stack,
  Title,
  useMantineTheme
} from "@mantine/core";
import Introduction from "./Introduction";
import { Footer } from "../Footer";
import ItSolutions from "./ITSolutions/ItSolutions";
import Dts from "./DTS/Dts";
function Services() {
  const theme = useMantineTheme();

  return (
    <Stack style={{ background: "linear-gradient(#ced4da, #dbe4ff)", width: "95%", margin: "auto" }} pt={100}>
      <Center mih={'100vh'}>
        <Stack w='100%' spacing={50}>
          <Introduction/>
          <ItSolutions/>
          <Dts/>
        </Stack>
      </Center>
      <Footer />
    </Stack>
  );
}

export default Services;
