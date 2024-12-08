import {
  Anchor,
  Center,
  Stack,
  Text,
  Title,
  useMantineTheme
} from "@mantine/core";

function Error404() {
  const theme = useMantineTheme();

  return (
    <Center>
      <Stack>
        <Title>{'404'}</Title>
        <Text size="sm">
          {'Nothing found. Get back to the '}
          <Anchor
            href="/home"
            c={theme.colors.blue[8]}
          >
            {'home page.'}
          </Anchor>
        </Text>
      </Stack>
    </Center>
  );
}

export default Error404;
