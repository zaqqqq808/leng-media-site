import styles from './ClientLogo.module.css'

interface Props {
  name: string
  domain: string
}

const LOGOS: Record<string, React.ReactNode> = {
  'barrysbootcamp.com': (
    <svg className={styles.logo} width="140" height="44" viewBox="0 0 140 44" fill="none">
      <text x="70" y="22" textAnchor="middle" fontFamily="Arial Black,Arial,sans-serif" fontSize="22" fontWeight="900" fill="currentColor" letterSpacing="-0.5">{"BARRY'S"}</text>
      <text x="70" y="38" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="8" fontWeight="400" fill="currentColor" letterSpacing="4.5">BOOTCAMP</text>
    </svg>
  ),
  'natgeo.com': (
    <svg className={styles.logo} width="140" height="52" viewBox="0 0 140 52" fill="none">
      <g transform="translate(12,1)">
        <rect x="0" y="0" width="50" height="50" stroke="currentColor" strokeWidth="2" fill="none"/>
        <text x="58" y="15" fontFamily="Arial,sans-serif" fontSize="8.5" fontWeight="700" fill="currentColor" letterSpacing="0.5">NATIONAL</text>
        <text x="58" y="27" fontFamily="Arial,sans-serif" fontSize="8.5" fontWeight="700" fill="currentColor" letterSpacing="0.5">GEOGRAPHIC</text>
        <text x="58" y="39" fontFamily="Arial,sans-serif" fontSize="7" fontWeight="400" fill="currentColor" letterSpacing="1.5">TRAVELLER</text>
      </g>
    </svg>
  ),
  'ninetypercent.com': (
    <svg className={styles.logo} width="170" height="28" viewBox="0 0 170 28" fill="none">
      <text x="85" y="20" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="11" fontWeight="600" fill="currentColor" letterSpacing="3">NINETY PERCENT</text>
    </svg>
  ),
  'horizongroup.co.uk': (
    <svg className={styles.logo} width="140" height="40" viewBox="0 0 140 40" fill="none">
      <text x="70" y="16" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="13" fontWeight="300" fill="currentColor" letterSpacing="4">HORIZON</text>
      <line x1="10" y1="22" x2="130" y2="22" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
      <text x="70" y="36" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="9" fontWeight="400" fill="currentColor" letterSpacing="6">GROUP</text>
    </svg>
  ),
  'haier.com': (
    <svg className={styles.logo} width="120" height="44" viewBox="0 0 120 44" fill="none">
      <text x="60" y="32" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="34" fontWeight="700" fill="currentColor" letterSpacing="-1">haier</text>
      <line x1="5" y1="38" x2="115" y2="38" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  'skinandme.com': (
    <svg className={styles.logo} width="110" height="28" viewBox="0 0 110 28" fill="none">
      <g transform="translate(55,0)">
        <text x="-6" y="20" textAnchor="end" fontFamily="Georgia,serif" fontSize="16" fontWeight="400" fill="currentColor" letterSpacing="1">skin</text>
        <text x="0" y="18" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="14" fontWeight="300" fill="currentColor">+</text>
        <text x="6" y="20" textAnchor="start" fontFamily="Georgia,serif" fontSize="16" fontWeight="400" fill="currentColor" letterSpacing="1">me</text>
      </g>
    </svg>
  ),
  'fox.com': (
    <svg className={styles.logo} width="100" height="44" viewBox="0 0 100 44" fill="none">
      <text x="50" y="38" textAnchor="middle" fontFamily="'Arial Black',Arial,sans-serif" fontSize="38" fontWeight="900" fill="currentColor" letterSpacing="-1">FOX</text>
    </svg>
  ),
  'whichpodcast.com': (
    <svg className={styles.logo} width="200" height="28" viewBox="0 0 200 28" fill="none">
      <g transform="translate(100,0)">
        <text x="-3" y="21" textAnchor="end" fontFamily="'Arial Black',Arial,sans-serif" fontSize="18" fontWeight="900" fill="#00C48C">WHICH</text>
        <text x="3" y="21" textAnchor="start" fontFamily="'Arial Black',Arial,sans-serif" fontSize="18" fontWeight="900" fill="currentColor">PODCAST</text>
      </g>
    </svg>
  ),
  'chesneys.co.uk': (
    <svg className={styles.logo} width="160" height="28" viewBox="0 0 160 28" fill="none">
      <text x="80" y="20" textAnchor="middle" fontFamily="Georgia,'Times New Roman',serif" fontSize="13" fontWeight="400" fill="currentColor" letterSpacing="3.5">CHESNEYS</text>
    </svg>
  ),
}

export default function ClientLogo({ name, domain }: Props) {
  return <>{LOGOS[domain] ?? <span className={styles.wordmark}>{name}</span>}</>
}
