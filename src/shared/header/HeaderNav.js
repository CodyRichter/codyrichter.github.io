import React, { useEffect } from "react";
import { Grid, styled, Tab, Tabs } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

import {
  Construction,
  Home,
  Wysiwyg,
  ConnectWithoutContact,
} from "@mui/icons-material";
import useIsMobile from "../../utils/useIsMobile";

export default function HeaderNav() {
  const [menuIndex, setMenuIndexValue] = React.useState(0);
  const activePage = useLocation();
  const isMobile = useIsMobile();

  function LinkTab(props) {
    return <Tab component={Link} to={props.pathname} {...props} />;
  }

  useEffect(() => {
    const pageNameToIndexMap = {
      "": 0,
      projects: 1,
      experience: 2,
      contact: 3,
    };

    setMenuIndexValue(pageNameToIndexMap[activePage.pathname.split("/")[1]]);
  }, [activePage]);

  const SmallTabs = styled(Tabs)`
    height: 60px;
  `;

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={12}>
        <SmallTabs
          value={menuIndex}
          TabIndicatorProps={{
            style: {
              height: "3px",
              borderTopLeftRadius: "1em",
              borderTopRightRadius: "1em",
            },
          }}
          variant="scrollable"
          scrollButtons="auto"
        >
          <LinkTab
            icon={<Home />}
            iconPosition="start"
            label={isMobile ? "" : "Home"}
            pathname="/"
          />
          <LinkTab
            icon={<Construction />}
            iconPosition="start"
            label={isMobile ? "" : "Projects"}
            pathname="/projects"
          />
          <LinkTab
            icon={<Wysiwyg />}
            iconPosition="start"
            label={isMobile ? "" : "Experience"}
            pathname="/experience"
          />
          <LinkTab
            icon={<ConnectWithoutContact />}
            iconPosition="start"
            label={isMobile ? "" : "Contact"}
            pathname="/contact"
          />
        </SmallTabs>
      </Grid>
    </Grid>
  );
}
