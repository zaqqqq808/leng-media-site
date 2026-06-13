import styles from './ClientLogo.module.css'

interface Props {
  name: string
  domain: string
}

const LOGOS: Record<string, React.ReactNode> = {
  'barrysbootcamp.com': (
    <svg className={styles.logo} width="120" height="44" viewBox="0 0 120 44" fill="none">
      <text x="0" y="22" fontFamily="Arial Black,Arial,sans-serif" fontSize="22" fontWeight="900" fill="currentColor" letterSpacing="-0.5">{"BARRY'S"}</text>
      <text x="2" y="38" fontFamily="Arial,sans-serif" fontSize="8" fontWeight="400" fill="currentColor" letterSpacing="4.5">BOOTCAMP</text>
    </svg>
  ),
  'natgeo.com': (
    <svg className={styles.logo} width="130" height="52" viewBox="0 0 130 52" fill="none">
      <rect x="1" y="1" width="50" height="50" stroke="currentColor" strokeWidth="2" fill="none"/>
      <text x="60" y="16" fontFamily="Arial,sans-serif" fontSize="8.5" fontWeight="700" fill="currentColor" letterSpacing="0.5">NATIONAL</text>
      <text x="60" y="28" fontFamily="Arial,sans-serif" fontSize="8.5" fontWeight="700" fill="currentColor" letterSpacing="0.5">GEOGRAPHIC</text>
      <text x="60" y="40" fontFamily="Arial,sans-serif" fontSize="7" fontWeight="400" fill="currentColor" letterSpacing="1.5">TRAVELLER</text>
    </svg>
  ),
  'ninetypercent.com': (
    <svg className={styles.logo} width="160" height="28" viewBox="0 0 160 28" fill="none">
      <text x="0" y="20" fontFamily="Arial,sans-serif" fontSize="11" fontWeight="600" fill="currentColor" letterSpacing="3">NINETY PERCENT</text>
    </svg>
  ),
  'horizongroup.co.uk': (
    <svg className={styles.logo} width="130" height="40" viewBox="0 0 130 40" fill="none">
      <text x="0" y="16" fontFamily="Arial,sans-serif" fontSize="13" fontWeight="300" fill="currentColor" letterSpacing="4">HORIZON</text>
      <line x1="0" y1="22" x2="128" y2="22" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
      <text x="0" y="36" fontFamily="Arial,sans-serif" fontSize="9" fontWeight="400" fill="currentColor" letterSpacing="6">GROUP</text>
    </svg>
  ),
  'haier.com': (
    <svg className={styles.logo} width="110" height="44" viewBox="0 0 110 44" fill="none">
      <text x="0" y="32" fontFamily="Arial,sans-serif" fontSize="34" fontWeight="700" fill="currentColor" letterSpacing="-1">haier</text>
      <line x1="0" y1="38" x2="108" y2="38" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  'skinandme.com': (
    <svg className={styles.logo} width="100" height="28" viewBox="0 0 100 28" fill="none">
      <text x="0" y="20" fontFamily="Georgia,serif" fontSize="16" fontWeight="400" fill="currentColor" letterSpacing="1">skin</text>
      <text x="46" y="18" fontFamily="Arial,sans-serif" fontSize="14" fontWeight="300" fill="currentColor">+</text>
      <text x="60" y="20" fontFamily="Georgia,serif" fontSize="16" fontWeight="400" fill="currentColor" letterSpacing="1">me</text>
    </svg>
  ),
  'fox.com': (
    <svg className={styles.logo} width="80" height="44" viewBox="0 0 80 44" fill="none">
      <text x="0" y="38" fontFamily="'Arial Black',Arial,sans-serif" fontSize="40" fontWeight="900" fill="currentColor" letterSpacing="-1">FOX</text>
    </svg>
  ),
  'whichpodcast.com': (
    <svg className={styles.logo} width="196" height="28" viewBox="0 0 196 28" fill="none">
      <text x="0" y="21" fontFamily="'Arial Black',Arial,sans-serif" fontSize="18" fontWeight="900" fill="#00C48C">WHICH</text>
      <text x="87" y="21" fontFamily="'Arial Black',Arial,sans-serif" fontSize="18" fontWeight="900" fill="currentColor">PODCAST</text>
    </svg>
  ),
  'chesneys.co.uk': (
    <svg className={styles.logo} width="148" height="28" viewBox="0 0 148 28" fill="none">
      <text x="0" y="20" fontFamily="Georgia,'Times New Roman',serif" fontSize="13" fontWeight="400" fill="currentColor" letterSpacing="3.5">CHESNEYS</text>
    </svg>
  ),
}

export default function ClientLogo({ name, domain }: Props) {
  return <>{LOGOS[domain] ?? <span className={styles.wordmark}>{name}</span>}</>
}
