import CenteredBox from "./CenteredBox";
import { Typography } from "@mui/material";
import CircularFrame from "./CircularFrame";

const ProfileTemplate = () => {
    return (
        <CenteredBox>
            <Typography variant = "h2" style={{maxWidth: "80%", wordWrap:"break-word", overflowWrap: "break-word", marginBottom: '35px'}}>Jasmine Wang</Typography>
            <CircularFrame imageUrl="https://st3.depositphotos.com/1017228/18861/i/450/depositphotos_188618952-stock-photo-portrait-of-asian-lovely-woman.jpg" />
            <Typography variant ="body1">Lalala</Typography>"
            <Typography variant="body2">LAla</Typography>
        </CenteredBox>
    );
  };
  
  export default ProfileTemplate;