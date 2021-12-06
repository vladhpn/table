import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import GroupIcon from '@mui/icons-material/Group';
import DevicesIcon from '@mui/icons-material/Devices';
import InfoIcon from '@mui/icons-material/Info';
import FeedbackIcon from '@mui/icons-material/Feedback';
import EngineeringIcon from '@mui/icons-material/Engineering';

const Menu = () => {
    return(
        <Paper sx={{ width: 200, maxWidth: '100%' }}>
        <MenuList>
          <MenuItem>
            <ListItemIcon>
                <GroupIcon fontSize="medium"/>
            </ListItemIcon>
            <ListItemText>Пользователи</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <DevicesIcon fontSize="medium" />
            </ListItemIcon>
            <ListItemText>Устройства</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <InfoIcon fontSize="medium" />
            </ListItemIcon>
            <ListItemText>Информация</ListItemText>
          </MenuItem>
          {/* <Divider /> */}
          <MenuItem>
            <ListItemIcon>
              <FeedbackIcon fontSize="medium" />
            </ListItemIcon>
            <ListItemText>Отчеты</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <EngineeringIcon fontSize="medium" />
            </ListItemIcon>
            <ListItemText>Сервис инженер</ListItemText>
          </MenuItem>
          
        </MenuList>
      </Paper>
    )
}

export default Menu