import React, {useEffect, useState} from "react";
import Typist from "react-typist";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {Typography} from "@mui/material";
import {withStyles} from "@mui/styles";
import useIsMobile from "../../utils/useIsMobile";


export default function AutoTypeTerminal() {

    const isMobile = useIsMobile();

    const WhiteTextTypography = withStyles({
        root: {
            color: "#FFFFFF",
            fontFamily: 'Source Code Pro',
            fontSize: isMobile ? '18pt' : '24pt'
        }
    })(Typography);

    // Counter for auto typing
    let [count, setCount] = useState(0);

    useEffect(() => {
        setCount(1);
    }, [count]);


    return (
        <div style={{
            backgroundColor: 'black',
            paddingTop: '1vh',
            paddingLeft: '1em',
            paddingRight: '1em',
            paddingBottom: '1vh',
            maxWidth: '50%',
            borderRadius: '0.75em',
            textAlign: 'left',
        }}>

            {count ? (
                <>
                    <Typist avgTypingDelay={140} cursor={{
                        show: true,
                        element: <WhiteTextTypography
                            variant='h4'
                            component='h4'
                            display="inline"
                        >|</WhiteTextTypography>
                    }} onTypingDone={() => setCount(0)}>

                        <ArrowForwardIosIcon style={{color: 'white', fontSize: isMobile ? '15pt' : '20pt'}}/>
                        <WhiteTextTypography variant='h4' component='h4'
                                             display="inline">&#8203;</WhiteTextTypography>
                        <WhiteTextTypography variant='h4' component='h4'
                                             display="inline">Codes</WhiteTextTypography>
                        <Typist.Backspace count={4} delay={3000}/>
                        <WhiteTextTypography variant='h4' component='h4'
                                             display="inline">reates</WhiteTextTypography>
                        <Typist.Backspace count={7} delay={3000}/>
                        <WhiteTextTypography variant='h4' component='h4'
                                             display="inline">Innovates</WhiteTextTypography>
                        <Typist.Backspace count={7} delay={3000}/>
                        <WhiteTextTypography variant='h4' component='h4'
                                             display="inline">vents</WhiteTextTypography>
                        <Typist.Backspace count={6} delay={3000}/>
                        <WhiteTextTypography variant='h4' component='h4'
                                             display="inline">mproves</WhiteTextTypography>
                        <Typist.Backspace count={8} delay={3000}/>
                        <WhiteTextTypography variant='h4' component='h4'
                                             display="inline">Designs</WhiteTextTypography>
                        <Typist.Backspace count={5} delay={3000}/>
                        <WhiteTextTypography variant='h4' component='h4'
                                             display="inline">velops</WhiteTextTypography>
                        <Typist.Backspace count={7} delay={3000}/>
                        <WhiteTextTypography variant='h4' component='h4' display="inline">iscovers
                            Solutions</WhiteTextTypography>
                        <Typist.Delay ms={5000}/>
                    </Typist>
                </>
            ) : null}
        </div>

    );
}