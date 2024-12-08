import {
  Group,
  Stack,
  Text,
  Button,
  useMantineTheme,
  Grid,
  Box,
} from '@mantine/core';
import classes from './Partners.module.css';
import { SiTheboringcompany } from "react-icons/si";
import { BiLogoInvision } from "react-icons/bi";
import { SiAcer } from "react-icons/si";
import { SiAirtel } from "react-icons/si";
import { SiAidungeon } from "react-icons/si";
import Parallax from '../../Parallax';
import { BsMastodon } from "react-icons/bs";

function Partners() {
  const theme = useMantineTheme();

  return (
    <Stack className={classes.wrapper}>
      <Text className={classes.heading}>
        {'Our Trusted Partners'}
      </Text>
      <Text className={classes.description}>
        {`We are proud to collaborate with leading companies and organizations across industries. 
          Together, we create opportunities, deliver exceptional talent, and drive mutual success.`}
      </Text>
      
      <section>
        <Parallax baseVelocity={1}>
          <span> <SiTheboringcompany size={75} /></span>
          <span> <SiAidungeon size={75} /></span>
          <span><SiAcer size={75} /></span>
          <span><BiLogoInvision size={75} /></span>
          <span> <SiAirtel size={75} /></span>
          <span> <BsMastodon size={75} /></span>
          <span> <SiTheboringcompany size={75} /></span>
          <span> <SiAidungeon size={75} /></span>
          <span><SiAcer size={75} /></span>
          <span><BiLogoInvision size={75} /></span>
          <span> <SiAirtel size={75} /></span>
          <span> <BsMastodon size={75} /></span>
          <span> <SiTheboringcompany size={75} /></span>
          <span> <SiAidungeon size={75} /></span>
          <span><SiAcer size={75} /></span>
          <span><BiLogoInvision size={75} /></span>
          <span> <SiAirtel size={75} /></span>
          <span> <BsMastodon size={75} /></span>
        </Parallax>
      </section>
    </Stack>
  );
}

export default Partners;