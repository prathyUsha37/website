import {
    Group,
    Stack,
    Text,
    useMantineTheme,
} from '@mantine/core';
import classes from './Dts.module.css';
import { GiOnTarget } from "react-icons/gi";
function Dts() {
    const theme = useMantineTheme();
    return (
        // <Group className={classes.wrapper} mt={100}>

        //     <Stack className={classes.rightContainer}>
        //         <Text className={classes.heading}>
        //             {'Digital Transformation Support'}
        //         </Text>
        //         <Text className={classes.description}>
        //             {`Our Digital Transformation Support services are aimed at helping businesses navigate and implement next-generation technologies seamlessly. 
        //   We provide expert teams proficient in custom application development, platform integration, and lifecycle management. 
        //   From conceptualization to execution, we ensure that your digital initiatives align with your strategic goals and deliver high-quality results. 
        //   Whether it’s revamping existing systems or creating entirely new platforms, our specialists ensure scalability, reliability, and compliance with industry standards. 
        //   By partnering with us, your organization can achieve a smoother, faster, and more efficient digital transformation journey, tailored to your operational and commercial requirements.`}

        //         </Text>
        //     </Stack>
        //     <Stack className={classes.leftContainer}>
        //         <FaAward size={150} />
        //     </Stack>
        // </Group>
          <Group className={classes.wrapper} mt={100}>
          <Stack className={classes.leftContainer}>
          <Text className={classes.heading}>
              {'Digital Transformation Support'}
            </Text>
            <Text className={classes.description}>
              {`Our Digital Transformation Support services are aimed at helping businesses navigate and implement next-generation technologies seamlessly. 
           We provide expert teams proficient in custom application development, platform integration, and lifecycle management. 
           From conceptualization to execution, we ensure that your digital initiatives align with your strategic goals and deliver high-quality results. 
          Whether it’s revamping existing systems or creating entirely new platforms, our specialists ensure scalability, reliability, and compliance with industry standards. 
           By partnering with us, your organization can achieve a smoother, faster, and more efficient digital transformation journey, tailored to your operational and commercial requirements`}
            </Text>
          </Stack>
          <Stack className={classes.rightContainer}>
            <GiOnTarget size={150} />
          </Stack>
        </Group>
    );
}
export default Dts;