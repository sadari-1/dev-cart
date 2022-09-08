import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Container from "@mui/material/Container";
import Banner from "../asset/wow.jpg";
import Img1 from "../asset/idly.jpg";
import Img2 from "../asset/bajji.jpg";
import Img3 from "../asset/chapati.jpg";
import Img4 from "../asset/poori.jpg";
import Img5 from "../asset/dose.jpg";
import Img6 from "../asset/shavige.jpg";
import Img7 from "../asset/palav.jpg";
import Img8 from "../asset/meals.jpg";
import Img9 from "../asset/gobi.jpg";
import Img10 from "../asset/Paneer.jpg";
import Img11 from "../asset/masalapuri.jpg";
import Img12 from "../asset/vadacurry.jpg";
import Img13 from "../asset/mutton.jpg";
import Img14 from "../asset/Egg.jpg";
import Img15 from "../asset/keema.jpg";
import Img16 from "../asset/chilli.jpg";
import Img17 from "../asset/tandoori.jpg";
import Img18 from "../asset/kabab.jpg";
// import Menu2 from "./Menu2";



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}




export default function Explore(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment >
      <Container fixed >
        <Box sx={{ width: "100%"}} pt={5}>
          <Typography variant="h2" align="center">
            MENU
          </Typography>
          <Box
            sx={{
              backgroundImage: `url(${Banner})`,
              height: "80vh",
              backgroundSize: "cover",
              opacity: "0.9",
            }}
          >
            <Typography
              variant="h4"
              align="center"
              sx={{ padding: "70px", color: "#33691e", fontWeight: "900" }}
            >
              We Deliver your order{" "}
            </Typography>
            <Typography
              variant="h2"
              sx={{ padding: "60px", color: "#ffeb3b", fontWeight: "600" }}
            >
              Taste All the Authentic Foods in Your Home{" "}
            </Typography>
          </Box>

          <Box sx={{ width: "100%" }}>
            <Typography variant="h4" align='center' pt={3}>Popular Foods </Typography>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                centered
              >
                <Tab label="Fast Food" {...a11yProps(0)} />
                <Tab label="Veg Specials" {...a11yProps(1)} />
                <Tab label="Non-Veg Specials" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Grid container align={'center'}>
                <Grid item lg={4} >
                  <Card sx={{ maxWidth: 250,  }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={Img1}
                        alt="green iguana"
                      />
                      <CardContent sx={{ padding: "2px" }}>
                        <Typography gutterBottom variant="h6" component="div">
                          idly
                        </Typography>
                        <Typography variant="body" color="text.secondary">
                          Something hot. Something tasty.
                        </Typography>
                        
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary" variant="contained">
                        ADD
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item lg={4}>
                  <Card sx={{ maxWidth: 250 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={Img2}
                        alt="green iguana"
                      />
                      <CardContent sx={{ padding: "2px" }}>
                        <Typography gutterBottom variant="h6" component="div">
                          Bajji
                        </Typography>
                        <Typography variant="body" color="text.secondary">
                          Something hot. Something tasty.
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary" variant="contained">
                        ADD
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item lg={4}>
                  <Card sx={{ maxWidth: 250 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={Img3}
                        alt="green iguana"
                      />
                      <CardContent sx={{ padding: "2px" }}>
                        <Typography gutterBottom variant="h6" component="div">
                          Chapathi
                        </Typography>
                        <Typography variant="body" color="text.secondary">
                          Something hot. Something tasty.
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary" variant="contained">
                        ADD
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
              <Grid container align={'center'} pt={2}>
                <Grid item lg={4}>
                  <Card sx={{ maxWidth: 250 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={Img4}
                        alt="green iguana"
                      />
                      <CardContent sx={{ padding: "2px" }}>
                        <Typography gutterBottom variant="h6" component="div">
                          Poori
                        </Typography>
                        <Typography variant="body" color="text.secondary">
                          Something hot. Something tasty.
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary" variant="contained">
                        ADD
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item lg={4}>
                  <Card sx={{ maxWidth: 250 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={Img5}
                        alt="green iguana"
                      />
                      <CardContent sx={{ padding: "2px" }}>
                        <Typography gutterBottom variant="h6" component="div">
                          Dose
                        </Typography>
                        <Typography variant="body" color="text.secondary">
                          Something hot. Something tasty.
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary" variant="contained">
                        ADD
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item lg={4}>
                  <Card sx={{ maxWidth: 250 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={Img6}
                        alt="green iguana"
                      />
                      <CardContent sx={{ padding: "2px" }}>
                        <Typography gutterBottom variant="h6" component="div">
                          Shavige
                        </Typography>
                        <Typography variant="body" color="text.secondary">
                          Something hot. Something tasty.
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary" variant="contained">
                        ADD
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
            <Grid container align={'center'}>
                <Grid item lg={4} >
                  <Card sx={{ maxWidth: 250 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={Img7}
                        alt="green iguana"
                      />
                      <CardContent sx={{ padding: "2px" }}>
                        <Typography gutterBottom variant="h6" component="div">
                          Palav
                        </Typography>
                        <Typography variant="body" color="text.secondary">
                          Something hot. Something tasty.
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary" variant="contained">
                        ADD
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item lg={4}>
                  <Card sx={{ maxWidth: 250 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={Img8}
                        alt="green iguana"
                      />
                      <CardContent sx={{ padding: "2px" }}>
                        <Typography gutterBottom variant="h6" component="div">
                          Meals
                        </Typography>
                        <Typography variant="body" color="text.secondary">
                          Something hot. Something tasty.
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary" variant="contained">
                        ADD
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item lg={4}>
                  <Card sx={{ maxWidth: 250 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={Img9}
                        alt="green iguana"
                      />
                      <CardContent sx={{ padding: "2px" }}>
                        <Typography gutterBottom variant="h6" component="div">
                          Gobi
                        </Typography>
                        <Typography variant="body" color="text.secondary">
                          Something hot. Something tasty.
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary" variant="contained">
                        ADD
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
              <Grid container align={'center'} pt={2}>
                <Grid item lg={4}>
                  <Card sx={{ maxWidth: 250 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={Img10}
                        alt="green iguana"
                      />
                      <CardContent sx={{ padding: "2px" }}>
                        <Typography gutterBottom variant="h6" component="div">
                          Paneer Butter masala
                        </Typography>
                        <Typography variant="body" color="text.secondary">
                          Something hot. Something tasty.
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary" variant="contained">
                        ADD
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item lg={4}>
                  <Card sx={{ maxWidth: 250 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={Img11}
                        alt="green iguana"
                      />
                      <CardContent sx={{ padding: "2px" }}>
                        <Typography gutterBottom variant="h6" component="div">
                          Masalapuri
                        </Typography>
                        <Typography variant="body" color="text.secondary">
                          Something hot. Something tasty.
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary" variant="contained">
                        ADD
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item lg={4}>
                  <Card sx={{ maxWidth: 250 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={Img12}
                        alt="green iguana"
                      />
                      <CardContent sx={{ padding: "2px" }}>
                        <Typography gutterBottom variant="h6" component="div">
                          Vadacurry
                        </Typography>
                        <Typography variant="body" color="text.secondary">
                          Something hot. Something tasty.
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary" variant="contained">
                        ADD
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={2}>
            <Grid container align={'center'}>
                <Grid item lg={4} >
                  <Card sx={{ maxWidth: 250 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={Img13}
                        alt="green iguana"
                      />
                      <CardContent sx={{ padding: "2px" }}>
                        <Typography gutterBottom variant="h5" component="div">
                          Biryani
                        </Typography>
                        <Typography variant="body" color="text.secondary">
                          Something hot. Something tasty.
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary" variant="contained">
                        ADD
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item lg={4}>
                  <Card sx={{ maxWidth: 250 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={Img14}
                        alt="green iguana"
                      />
                      <CardContent sx={{ padding: "2px" }}>
                        <Typography gutterBottom variant="h6" component="div">
                          Egg Burji
                        </Typography>
                        <Typography variant="body" color="text.secondary">
                          Something hot. Something tasty.
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary" variant="contained">
                        ADD
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item lg={4}>
                  <Card sx={{ maxWidth: 250 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={Img15}
                        alt="green iguana"
                      />
                      <CardContent sx={{ padding: "2px" }}>
                        <Typography gutterBottom variant="h5" component="div">
                          Keema
                        </Typography>
                        <Typography variant="body" color="text.secondary">
                          Something hot. Something tasty.
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary" variant="contained">
                        ADD
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
              <Grid container align={'center'} pt={2}>
                <Grid item lg={4}>
                  <Card sx={{ maxWidth: 250 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={Img16}
                        alt="green iguana"
                      />
                      <CardContent sx={{ padding: "2px" }}>
                        <Typography gutterBottom variant="h5" component="div">
                          Keema curry
                        </Typography>
                        <Typography variant="body" color="text.secondary">
                          Something hot. Something tasty.
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary" variant="contained">
                        ADD
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item lg={4}>
                  <Card sx={{ maxWidth: 250 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={Img17}
                        alt="green iguana"
                      />
                      <CardContent sx={{ padding: "2px" }}>
                        <Typography gutterBottom variant="h5" component="div">
                          Tandoori
                        </Typography>
                        <Typography variant="body" color="text.secondary">
                          Something hot. Something tasty.
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary" variant="contained">
                        ADD
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item lg={4}>
                  <Card sx={{ maxWidth: 250 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={Img18}
                        alt="green iguana"
                      />
                      <CardContent sx={{ padding: "2px" }}>
                        <Typography gutterBottom variant="h5" component="div">
                          Kabab
                        </Typography>
                        <Typography variant="body" color="text.secondary">
                          Something hot. Something tasty.
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary" variant="contained">
                        ADD
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </TabPanel>
          </Box>
            {/* <Box sx={{height:'100%', justifyContent:'center', display:'flex'}}  mt={4} mb={3}>
            <Menu2 />
            </Box>
          */}
         
        </Box>
      </Container>
     
    </React.Fragment>
    
  );
}
