import React from "react";
import { Typography, Stack, Button } from "@mui/material";
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const Details = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];
  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} Loading="lazy" className="detail-image" />
      <Stack flexDirection="column">
        <Stack mb='30px' sx={{ gap: { lg: "35px", xs: "20px" } }}>
          <Typography variant="h3" textTransform='capitalize'>{name}</Typography>
          <Typography variant="h6">
            Exercises keep you strong, {name} {` `}
            is one of the best exercises to target your {target}. It will help
            you improve your mood and gain energy
          </Typography>
        </Stack>
        {extraDetail.map((item) => (
          <Stack
             mb='25px'
            key={item.name}
            gap="24px"
            flexDirection="row"
            alignItems="center"
          >
            <Button sx={{backgroundColor: '#fff2db', borderRadius: '50%', width: {lg:'80px', xs: '40px'}, height: {lg:'80px', xs: '40px'}}}>
              <img src={item.icon} alt={bodyPart} style={{width: '50px', height: '50px'}}/>
            </Button>
            <Typography textTransform='capitalize' variant="h6">{item.name}</Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Details;
