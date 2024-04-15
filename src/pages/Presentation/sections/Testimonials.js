/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";

// Images
import appleLogo from "assets/images/logos/gray-logos/logo-apple.svg";
import facebookLogo from "assets/images/logos/gray-logos/logo-facebook.svg";
import nasaLogo from "assets/images/logos/gray-logos/logo-nasa.svg";
import vodafoneLogo from "assets/images/logos/gray-logos/logo-vodafone.svg";
import digitalOceanLogo from "assets/images/logos/gray-logos/logo-digitalocean.svg";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h2">Confiaron en nosotros</MKTypography>
          <MKTypography variant="h2" color="info" textGradient mb={2}>
            +1.308 alumnos
          </MKTypography>
          <MKTypography variant="body1" color="text" mb={2}>
            Alumnos de todo el pais hicieron nuevos amigos y conocieron nuevos destinos gracias a
            Ray y nos cuentan
          </MKTypography>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 8 }}>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Manuel Nieva"
              date="1 dia atras"
              review="Me encantó porque me buscaron un vuelo super economico en el rango de fecha que yo quería y salio todo mejor de lo que esperaba. Excelente trato!"
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="info"
              name="Mariana Lopez"
              date="1 semana atras"
              review="Me mostraron todos los institutos que tenian promociones para la fecha que necesitaba y salio todo perfecto!"
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Juliana Rodriguez"
              date="3 semanas atras"
              review="Todos un amor. Me ofrecieron todo tipo de hospedajes y pude elegir lo que estaba buscando. Gracias"
              rating={5}
            />
          </Grid>
        </Grid>
        <Divider sx={{ my: 6 }} />
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={appleLogo} alt="Apple" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={facebookLogo} alt="Facebook" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={nasaLogo} alt="Nasa" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={vodafoneLogo} alt="Vodafone" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox
              component="img"
              src={digitalOceanLogo}
              alt="DigitalOcean"
              width="100%"
              opacity={0.6}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
