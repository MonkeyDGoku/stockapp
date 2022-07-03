import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const COMPANY_API =
  "https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=demo";

const COMPANY_FLAG =
  "https://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg";
export default function CompanyDetails() {
  const [company, setCompany] = React.useState({});
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  React.useEffect(() => {
    fetch(COMPANY_API)
      .then((res) => res.json())
      .then((body) => {
        const company = {
          Symbol: body.Symbol,
          Name: body.Name,
          Description: body.Description,
          Currency: body.Currency,
          Country: body.Country,
          Sector: body.Sector,
          Industry: body.Industry,
          Address: body.Address,
          ProfitMargin: body.ProfitMargin,
          ReturnOnAssetsTTM: body.ReturnOnAssetsTTM,
          ReturnOnEquityTTM: body.ReturnOnEquityTTM,
        };
        setCompany(company);
      });
  });

  return (
    <Card sx={{ width: "100%", backgroundColor: "var(--bg-zinc-900)" }}>
      <CardHeader
        avatar={<Avatar aria-label="recipe" src={COMPANY_FLAG}></Avatar>}
        action={
          <div>
            {/* <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton> */}
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </div>
        }
        title={company.Name}
        subheader={company.Symbol}
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Currency - {company.Currency} , Sector - {company.Sector}, Industry -{" "}
          {company.Industry}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Address - {company.Address}
        </Typography>
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Description:</Typography>
          <Typography paragraph>{company.Description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
