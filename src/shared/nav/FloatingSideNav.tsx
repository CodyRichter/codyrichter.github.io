"use client";

import { Button, Card, Center, Collapse, Divider, Stack } from "@mantine/core";
import { RiHome2Line, RiMenu3Line } from "react-icons/ri";

import { BsArrowLeft } from "react-icons/bs";
import { FiMessageSquare } from "react-icons/fi";
import { HiOutlineDocument } from "react-icons/hi";
import { MdOutlinePerson } from "react-icons/md";
import type { ReactNode } from "react";
import type { SectionName } from "@/sections";
import { TbHammer } from "react-icons/tb";
import classes from "./FloatingSideNav.module.css";
import { useDisclosure } from "@mantine/hooks";

interface NavItem {
  section: SectionName;
  label: string;
  icon: ReactNode;
  gradient: { from: string; to: string };
}

const NAV_ITEMS: NavItem[] = [
  {
    section: "home",
    label: "Home",
    icon: <RiHome2Line />,
    gradient: { from: "indigo", to: "cyan" },
  },
  {
    section: "about",
    label: "About",
    icon: <MdOutlinePerson />,
    gradient: { from: "cyan", to: "teal" },
  },
  {
    section: "projects",
    label: "Projects",
    icon: <TbHammer />,
    gradient: { from: "teal", to: "blue" },
  },
  {
    section: "timeline",
    label: "Experience",
    icon: <HiOutlineDocument />,
    gradient: { from: "blue", to: "teal" },
  },
  {
    section: "contact",
    label: "Contact",
    icon: <FiMessageSquare />,
    gradient: { from: "teal", to: "lightblue" },
  },
];

export default function FloatingSideNav({
  scrollToSectionByName,
}: {
  scrollToSectionByName: (name: SectionName) => void;
}) {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <>
      <Button
        variant="gradient"
        gradient={{ from: "indigo", to: "cyan" }}
        size="md"
        className={opened ? classes.burgerOpen : classes.burgerClosed}
        onClick={toggle}
        aria-label={opened ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={opened}
      >
        {opened ? <BsArrowLeft /> : <RiMenu3Line />}
      </Button>
      <Collapse expanded={opened} className={classes.collapse}>
        <Card withBorder radius="md" className={classes.card}>
          <Center>
            <Stack>
              {NAV_ITEMS.map(({ section, label, icon, gradient }) => (
                <Stack key={section} gap="md">
                  <Button
                    variant="gradient"
                    gradient={gradient}
                    leftSection={icon}
                    onClick={() => scrollToSectionByName(section)}
                  >
                    {label}
                  </Button>
                  <Divider />
                </Stack>
              ))}
            </Stack>
          </Center>
        </Card>
      </Collapse>
    </>
  );
}
