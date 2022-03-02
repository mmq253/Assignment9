import { blue } from "@mui/material/colors";
import { borderRadius } from "@mui/system";

export const styles = {
  button: (bgColor='white') => {
    return {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '5px',
      border:'1px solid white',
      width: '219px',
      height: '53px',
      color: '#2947A9',
      backgroundColor: bgColor
    }
  }


}