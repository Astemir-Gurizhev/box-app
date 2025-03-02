
import { Link } from 'react-router'
import styles from './Header.module.scss'

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.row}>
				<Link to={'/'}>
					<div className={styles.logo}>
						<img className={styles.icon} src='/logo.webp' alt='' />
						Mathify
					</div>
				</Link>
			
			</div>
		</header>
	)
}