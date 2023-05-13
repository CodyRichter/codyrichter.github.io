import React from "react";
import { useLocation } from "react-router-dom";


import { useNavigate } from "react-router-dom";
import { Header, rem } from "@mantine/core";

import useIsMobile from "../../utils/useIsMobile";

export default function HeaderNav() {
  
  const activePage = useLocation();
  const isMobile = useIsMobile();

  const navigate = useNavigate();

  return (
    <Header className='p-2' bg='gray.1' height={rem(55)}>
       
    
    </Header>
  );
}
