import { Link } from 'react-router'
import styles from './Home.module.scss'

export const Home = () => {
	return (
		<Link className={styles.btn} to='/second'>
			<div className={styles.start}>
				<img className={styles.img} src='/book.webp' alt='' />
				Start!
			</div>
		</Link>
	)
}
