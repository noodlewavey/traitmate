import CenteredBox from "./CenteredBox";
import { Typography } from "@mui/material";

const ProfileTemplate = () => {
    return (
        <CenteredBox>
            <Typography variant = "h2" style={{maxWidth: "80%", wordWrap:"break-word", overflowWrap: "break-word", marginBottom: '35px'}}>Jasmine Wang</Typography>
            <Typography variant ="body1">Lalala</Typography>"
            <Typography variant="body2">LAla</Typography>
        </CenteredBox>
    );
  };
  
  export default ProfileTemplate;