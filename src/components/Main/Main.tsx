import Menu from '../Menu/Menu'
import TableApp from '../TableApp'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import styles from './styles.module.scss'

const Main = () => {
    return(
       <div className={styles.box}>
        <Menu />
        <div className={styles.box2}>
        <ButtonComponent />
        <TableApp />
        </div>
        </div>
    )
}

export default Main