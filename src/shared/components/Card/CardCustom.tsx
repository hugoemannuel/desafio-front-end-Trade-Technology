import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

interface IProps {
  img: string;
  id: number;
  name: string;
  handleClick(value?: number): void;
}

const CardCustom = ({ img, name, handleClick, id }: IProps) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={() => handleClick(id)}>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardCustom;