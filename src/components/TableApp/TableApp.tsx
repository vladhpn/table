import CreateIcon from '@mui/icons-material/Create';
import IconButton from '@mui/material/IconButton';
import { DataGrid, GridRenderCellParams, GridColumns} from '@mui/x-data-grid';
import { makeStyles } from '@mui/styles';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const columns:GridColumns = [
  { field: 'id', 
    headerName: 'Код', 
    headerClassName: 'header-theme',
    width: 130 , 
    sortable: false, 
  },
  { field: 'name', 
    headerName: 'ПІБ', 
    headerClassName: 'header-theme',
    width: 200, 
    sortable: false, 
  },
  {
    field: 'project',
    headerName: 'Проект',
    headerClassName: 'header-theme',
    type: 'string',
    width: 200,
    sortable: false,
  },
  {
    field: 'stack',
    headerName: 'Технології',
    headerClassName: 'header-theme',
    // description: 'This column has a value getter and is not sortable.',
    type: 'string',
    sortable: false,
    width: 200,
  },
  {
    field: 'team',
    headerName: 'Команда',
    headerClassName: 'header-theme',
    type: 'string',
    width: 200,
    sortable: false,
  },
  {
    field: 'notes',
    headerName: 'Замітки',
    headerClassName: 'header-theme',
    type: 'string',
    width: 200,
    sortable: false,
    
  },
  {
    field: 'btn',
    headerName: 'd',
    headerClassName: 'header-theme',
    sortable: false,
    width: 100,
    renderCell: (params: GridRenderCellParams) => (
      <strong>
    <IconButton >
    <CreateIcon />
    </IconButton>
      </strong>)
  },
];

const rows = [
  { id: 1, name: 'Бонд', project: '077', stack: 'js', team: 'Team A', notes: 'OK' , btn: " " },
  { id: 2, name: 'Бонд', project: '077', stack: 'js', team: 'Team A', notes: 'OK' },
  { id: 3, name: 'Бонд', project: '077', stack: 'js', team: 'Team A', notes: 'OK' },
  { id: 4, name: 'Бонд', project: '077', stack: 'js', team: 'Team A', notes: 'OK' },
  { id: 5, name: 'Бонд', project: '077', stack: 'js', team: 'Team A', notes: 'OK' },
  { id: 6, name: 'Бонд', project: '077', stack: 'js', team: 'Team A', notes: 'OK' },
  { id: 7, name: 'Бонд', project: '077', stack: 'js', team: 'Team A', notes: 'OK' },
];

const useStyles = makeStyles({
  root: {
    '& .header-theme': {
      backgroundColor: 'rgb(155, 155, 155)',
    },
  },
});

function TableApp() {
  const classes = useStyles();
  return (
    
    <div style={{ height: '90vh', width: '100%' }} className={classes.root}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        disableColumnMenu
        // checkboxSelection
      />
    </div>
  );
}

export default TableApp