import { Anchor, Group, useMantineTheme } from '@mantine/core';
import classes from './Header.module.css';
import { DiSmashingMagazine } from "react-icons/di";
import { useLocation } from 'react-router-dom';


const links = [
  { link: '/', label: 'Home' },
  { link: '/about', label: 'About' },
  { link: '/services', label: 'Services' },
  { link: '/legal', label: 'Legal' },
  { link: '/careers', label: 'Careers' },
  { link: '/contact', label: 'Contact' },
];

export function Header() {
  const location = useLocation();
  const theme = useMantineTheme();

  return (
    <header className={classes.header}>
      <Group justify="space-between" w="100%">
        <DiSmashingMagazine size={50} />
        <Group justify="space-between" w="50%">
          {links.map((l) => (
            <Anchor
              onClick={(e) => {
                if (location.pathname === l.link) {
                  e.preventDefault();
                }
              }}
              key={l.label}
              size="md"
              href={l.link}
              underline="never"
              fz={'1rem'}
              c={theme.colors.gray[8]}
              fw={location.pathname === l.link ? 700 : 500}
            >
              {l.label}
            </Anchor>
          ))}
        </Group>
      </Group>
    </header>
  );
}