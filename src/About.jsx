import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";

function Infocard() {
  return (
    <Card
      className="about_card"
      sx={{
        minWidth: 275,
        bgcolor: "#aaa",
        boxShadow: 2,
        width: 1 / 2,
        mx: "auto",
        mt: 10,
        borderRadius: 2,
        p: 1,
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          About the Project
        </Typography>
        <Typography variant="body2">
          <p>
            TV Ratings is a web-based application created to display movie
            ratings in a simple and accessible way. The platform is in its early
            development stage, and currently focuses exclusively on films.
          </p>
          <p>
            Our initial version doesn't include individual user accounts. For
            now, the data is updated collaboratively by the project developers —
            serving as both curators and testers of the system.{" "}
          </p>
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small">Learn More about the Developers</Button>
      </CardActions>
    </Card>
  );
}

function About() {
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  return (
    <>
      {Infocard()}
      <h1>About the project</h1>
      <p>
        TV Ratings is a web-based application created to display movie ratings
        in a simple and accessible way. The platform is in its early development
        stage, and currently focuses exclusively on films.
      </p>
      <p>
        Our initial version doesn't include individual user accounts. For now,
        the data is updated collaboratively by the project developers — serving
        as both curators and testers of the system.{" "}
      </p>

      <h2>Project Goals</h2>
      <p>
        Our goal is to build a community-driven platform where people can
        explore ratings and reviews for a wide variety of entertainment content.
        We're starting with movies, but we plan to expand to include:
      </p>
      <ul>
        <li>TV Shows</li>
        <li>Cartoons</li>
        <li>Anime</li>
      </ul>

      <h2>Current Stage</h2>
      <p>
        <ul>
          <li>Movies only</li>
          <li> No individual user accounts yet</li>
          <li> Database updated by developers</li>
        </ul>
      </p>

      <h2>What's Next?</h2>
      <p>
        In future updates, we plan to implement a user system that will allow
        anyone to:
        <ul>
          <li>Create their own account</li>
          <li>Submit ratings and reviews</li>
          <li>Customize watchlists and preferences</li>
          <li>Contribute to a dynamic, crowd-powered platform</li>
        </ul>
      </p>
    </>
  );
}

export default About;
