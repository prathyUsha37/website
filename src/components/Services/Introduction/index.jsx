import {
    Stack,
    Text,
    useMantineTheme,
} from '@mantine/core';
import classes from './Introduction.module.css';
function Introduction() {
    const theme = useMantineTheme();
    return (
        <Stack className={classes.wrapper}>
            <Text className={classes.heading}>
                <Text size="xl"
                    fw={900}
                    variant="gradient"
                    gradient={{ from: 'blue', to: 'cyan', deg: 90 }}>What We Provide</Text>
            </Text>
            <Text className={classes.description}>
                {`As a leading software staffing consultancy, we specialize in connecting top-tier tech talent with organizations in need of cutting-edge expertise.
                 We provide tailored staffing solutions to meet diverse project requirements, ranging from short-term contracts to permanent placements.
                  Our extensive network of skilled professionals includes software developers, architects, project managers, QA specialists, and DevOps engineers proficient in the latest technologies.
                   By understanding our clients' unique needs and organizational culture, we deliver talent that seamlessly integrates into their teams, ensuring enhanced productivity and innovation.
                    Our commitment to quality, speed, and transparency makes us a trusted partner in building successful tech teams.`}
            </Text>
        </Stack>
    );
}
export default Introduction;