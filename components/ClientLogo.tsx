import styles from './ClientLogo.module.css'

interface Props {
  name: string
  domain: string
}

export default function ClientLogo({ name }: Props) {
  return <span className={styles.wordmark}>{name}</span>
}
