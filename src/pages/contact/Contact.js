import React from "react";
import Grid from "@mui/material/Grid";
import { CardContent, Container, Link } from "@mui/material";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import useIsMobile from "../../utils/useIsMobile";

export default function Contact() {
  const isMobile = useIsMobile();

  return (
    <Container>
      <Grid
        container
        style={{ marginTop: "8vh" }}
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={6}
      >
        <Grid item xs={7}>
          <Card>
            <CardContent>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <Link href="mailto:cody@richter.codes" target="_blank">
                  <EmailIcon
                    style={{ fontSize: isMobile ? "2em" : "4em" }}
                    className="mr-4"
                  />
                </Link>
                <Typography variant="h6" component="span" display="inline">
                  &nbsp; cody@richter.codes
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={7}>
          <Card>
            <CardContent>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <Link href="https://www.github.com/CodyRichter" target="_blank">
                  <GitHubIcon
                    style={{ fontSize: isMobile ? "2em" : "4em" }}
                    className="mr-4"
                  />
                </Link>
                <Typography variant="h6" component="span" display="inline">
                  &nbsp; @CodyRichter
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={7}>
          <Card>
            <CardContent>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <Link
                  href="https://www.linkedin.com/in/cody-richter/"
                  target="_blank"
                >
                  <LinkedInIcon
                    style={{ fontSize: isMobile ? "2em" : "4em" }}
                    className="mr-4"
                  />
                </Link>

                <Typography variant="h6" component="span" display="inline">
                  &nbsp; @cody-richter
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
