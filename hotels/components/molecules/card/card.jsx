import styles from "./card.module.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const CardHotel = ({ hotel }) => {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          className={styles.imageHotel}
          sx={{ height: 140 }}
          image={hotel.photo}
          title={hotel.name}
        />
        <CardContent className={styles.containerInfo}>
          <Typography
            gutterBottom
            variant="h3"
            component="div"
            className={styles.titleHotel}
          >
            {hotel.name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className={styles.descriptionHotel}
          >
            {hotel.description}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className={styles.priceHotel}
          >
            Price : {hotel.price}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className={styles.coutryCityHotel}
          >
            Country : {hotel.country}, City : {hotel.city}
          </Typography>
        </CardContent>
        <CardActions className={styles.containerButton}>
          <Button size="small" className={styles.buttonCardHotel}>
            see more
          </Button>
          <Button size="small" className={styles.buttonCardHotel}>
            book it
          </Button>
        </CardActions>
      </Card>
    </>
  );
};
