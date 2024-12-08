import {
  Anchor,
  Center,
  Stack,
  Text,
  Title,
  useMantineTheme
} from "@mantine/core";
import { Footer } from "../Footer";

function Error404() {
  const theme = useMantineTheme();

  return (
    <Stack>
      <Center mih={'100vh'}>
        <Stack>
          <Title>{'404'}</Title>
          <Text size="sm" c={theme.colors.gray[6]}>
            {'Nothing found. Get back to the '}
            <Anchor
              href="/"
              fw={600}
              c={theme.colors.gray[8]}
            >
              {'home page.'}
            </Anchor>
          </Text>
        </Stack>
      </Center>
      <Footer />
    </Stack>
  );
}

export default Error404;
