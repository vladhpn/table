import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styles from './styles.module.scss'

const ButtonComponent = () => {
    return(
<Stack spacing={1} direction="row" className={styles.box}>
      <Button variant="contained" className={styles.btn}>Додати</Button>
    </Stack>
    )
}

export default ButtonComponent
