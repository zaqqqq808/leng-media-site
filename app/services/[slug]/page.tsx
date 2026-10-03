import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'
import Ticker from '@/components/Ticker'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'
import VideoScrollHeroWrapper from '@/components/VideoScrollHeroWrapper'
import WebsiteFaqAccordion from '@/components/WebsiteFaqAccordion'
import CalendlyPopupLink from '@/components/CalendlyPopupLink'
import ClientLogo from '@/components/ClientLogo'
import WhatsAppLink from '@/components/WhatsAppLink'
import ScrollToLink from '@/components/ScrollToLink'
import StickyMobileCta from '@/components/StickyMobileCta'
import styles from './page.module.css'
import { SERVICES } from '@/lib/services'
import { FunnelDiagram, TrafficChart } from './charts'
import JsonLd from '@/components/JsonLd'
import { breadcrumbJsonLd, faqJsonLd } from '@/lib/seo'

// Same client list as the homepage trusted-by grid
const CLIENTS = [
  { name: "Barry's Bootcamp",              domain: 'barrysbootcamp.com' },
  { name: 'National Geographic Traveller', domain: 'natgeo.com' },
  { name: 'Ninety Percent',               domain: 'ninetypercent.com' },
  { name: 'Horizon Group',                domain: 'horizongroup.co.uk' },
  { name: 'Haier',                        domain: 'haier.com' },
  { name: 'Skin + Me',                    domain: 'skinandme.com' },
  { name: 'Fox',                          domain: 'fox.com' },
  { name: 'WhichPodcast',                 domain: 'whichpodcast.com' },
  { name: 'Chesneys',                     domain: 'chesneys.co.uk' },
]

// Website-builds headline callouts, straight after the hero.
const BUILD_PROOF = [
  { value: '100%', label: 'of our clients see an uplift in conversion rate', tag: 'CRO built in' },
  { value: 'Google + AI', label: 'Built to rank fast on Google and in AI search', tag: 'SEO and GEO' },
  { value: 'Mobile first', label: 'Designed for the thumb first, then scaled up to desktop', tag: 'Built for phones' },
  { value: 'Fully custom', label: 'No templates or page builders. You own the code.', tag: 'Built in Next.js' },
]

// Website-builds "why us": what it takes for a site to actually sell.
const BUILD_WHY = [
  { title: 'Converts on mobile', body: 'Floating call to action, reviews and delivery info above the fold, and the key facts top left, where the eye lands first.' },
  { title: 'Knows your customer', body: 'We find your audience’s real needs and pain points, then say them on the page in as few words as possible.' },
  { title: 'Understands offers', body: 'The game theory behind bundles and email capture popups, so more visits turn into orders and subscribers.' },
  { title: 'Sees the whole funnel', body: 'Email marketing, Meta ads, SEO, AI search (GEO) and Reddit. The site is built to work with every one of them.' },
  { title: 'Makes content that spreads', body: 'We’ve made viral videos for many clients, and we build the site around the content that sells.' },
]

// Tags a Calendly link with the service that led to the booking, so the
// leng-media-intro-call event (shared by several services) can still be
// told apart in the leads sheet.
function withCalendlyService(href: string, service: string) {
  if (!href.includes('calendly.com')) return href
  const sep = href.includes('?') ? '&' : '?'
  return `${href}${sep}utm_campaign=${encodeURIComponent(service)}`
}

// Tags a /business-enquiry link with the service so the form pre-selects it.
function withFormService(href: string, service: string) {
  if (!href.startsWith('/business-enquiry')) return href
  return `${href}?service=${encodeURIComponent(service)}`
}

export async function generateStaticParams() {
  return Object.keys(SERVICES).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const s = SERVICES[slug]
  if (!s) return {}
  const url = `https://www.lengmedia.com/services/${slug}`
  const pageTitle = `${s.metaTitle ?? s.name} – Leng Media`
  return {
    title: pageTitle,
    description: s.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: pageTitle,
      description: s.metaDescription,
      url,
      siteName: 'Leng Media',
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: pageTitle }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: s.metaDescription,
      images: ['/og-image.jpg'],
    },
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const s = SERVICES[slug]
  if (!s) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `https://www.lengmedia.com/services/${slug}`,
    name: s.name,
    description: s.metaDescription,
    url: `https://www.lengmedia.com/services/${slug}`,
    provider: {
      '@type': 'Organization',
      '@id': 'https://www.lengmedia.com/#organization',
      name: 'Leng Media',
      url: 'https://www.lengmedia.com',
    },
    areaServed: [
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'Country', name: 'United States' },
    ],
    serviceType: s.name,
  }

  const schema = [
    jsonLd,
    breadcrumbJsonLd([
      { name: 'Home', path: '/' },
      { name: s.name, path: `/services/${slug}` },
    ]),
    ...(s.websiteFaq ? [faqJsonLd(s.websiteFaq)] : []),
  ]

  const offerSection = s.offer && (
        <section className={styles.offerSection}>
          <div className={styles.offerInner}>
            <ScrollReveal>
              <span className="section-label">// The Offer</span>
              <h2 className={styles.offerHeading}>{s.offer.heading}</h2>
            </ScrollReveal>
            <div className={styles.offerGrid}>
              <ScrollReveal delay={1}>
                <div className={styles.offerCell}>
                  <span className={styles.offerCellLabel}>// What you get</span>
                  <p className={styles.offerCellText}>{s.offer.what}</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={2}>
                <div className={styles.offerCell}>
                  <span className={styles.offerCellLabel}>// Timeframe</span>
                  <p className={styles.offerCellText}>{s.offer.time}</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={3}>
                <div className={styles.offerCell}>
                  <span className={styles.offerCellLabel}>// The risk</span>
                  <p className={styles.offerCellText}>{s.offer.risk}</p>
                </div>
              </ScrollReveal>
            </div>
            <div className={styles.offerFooter}>
              {s.offer.ctaHref.includes('calendly.com') ? (
                <CalendlyPopupLink href={withCalendlyService(s.offer.ctaHref, s.name)} className={styles.heroCtaBtn}>{s.offer.ctaLabel}</CalendlyPopupLink>
              ) : (
                <Link href={withFormService(s.offer.ctaHref, s.name)} className={styles.heroCtaBtn}>{s.offer.ctaLabel}</Link>
              )}
              {s.offer.qualifier && <span className={styles.offerQualifier}>{s.offer.qualifier}</span>}
            </div>
          </div>
        </section>
  )

  return (
    <>
      <JsonLd data={schema} />
      {/* HERO */}
      {slug === 'website-builds' ? (
        <VideoScrollHeroWrapper>
          <Link href="/#services" className={styles.back}>← All Services</Link>
          <p className={styles.num}>{s.num} / 07</p>
          <h1 className={styles.title}>Websites worth staring at.</h1>
          <p className={styles.tagline}>{s.tagline}</p>
          <div className={styles.heroCtas}>
            <CalendlyPopupLink href={withCalendlyService('https://calendly.com/zaq-lengmedia/website-build-discovery-call', 'Website Building')} className={styles.heroCtaBtn}>Get Your Quote →</CalendlyPopupLink>
            <ScrollToLink targetId="examples" className={styles.heroCtaBtnGhost}>See Our Work</ScrollToLink>
          </div>
        </VideoScrollHeroWrapper>
      ) : (
        <section className={styles.hero}>
          <div className={styles.heroGrid} />
          <div className={styles.heroScanlines} />
          <div className={styles.heroContent}>
            <Link href="/#services" className={styles.back}>← All Services</Link>
            <p className={styles.num}>{s.num} / 07</p>
            <h1 className={styles.title}>{s.name}</h1>
            <p className={styles.tagline}>{s.tagline}</p>
          </div>
        </section>
      )}

      {slug !== 'website-builds' && <Ticker />}

      {/* PROOF BAND — website-builds only, the most reassuring facts first */}
      {slug === 'website-builds' && (
        <section className={styles.proofBand} aria-label="Highlights">
          {BUILD_PROOF.map((p, i) => (
            <ScrollReveal key={p.label} delay={(i + 1) as 1|2|3|4} className={styles.bandItem}>
              <span className={styles.bandValue}>{p.value}</span>
              <span className={styles.bandLabel}>{p.label}</span>
              <span className={styles.bandTag}>// {p.tag}</span>
            </ScrollReveal>
          ))}
        </section>
      )}

      {/* WHY US — website-builds only, what makes a site sell */}
      {slug === 'website-builds' && (
        <section className={styles.whySection}>
          <ScrollReveal>
            <span className="section-label">// Why Leng Media</span>
            <h2 className={styles.seoHeading}>Building a site is easy now. Selling from it isn&apos;t.</h2>
            <p className={styles.whyIntro}>A good-looking site doesn&apos;t mean anyone will buy. You need an agency that knows what makes people buy, especially on mobile.</p>
          </ScrollReveal>
          <ol className={styles.whyList}>
            {BUILD_WHY.map((w, i) => (
              <ScrollReveal key={w.title}>
                <li className={styles.whyRow}>
                  <span className={styles.whyNum}>{String(i + 1).padStart(2, '0')}</span>
                  <h3 className={styles.whyTitle}>{w.title}</h3>
                  <p className={styles.whyBody}>{w.body}</p>
                </li>
              </ScrollReveal>
            ))}
          </ol>
          <ScrollReveal>
            <p className={styles.whyClose}>All of it goes into your site.</p>
          </ScrollReveal>
        </section>
      )}

      {/* PERFORMANCE — website-builds only, SEO + CRO results */}
      {slug === 'website-builds' && (
        <section className={`${styles.performanceSection} theme-dark`}>
          <ScrollReveal>
            <span className="section-label">// Real results</span>
            <h2 className={styles.seoHeading}>A site that performs.</h2>
            <p className={styles.performanceCopy}>Real screenshots from a real client, Ayla Property, before and after we rebuilt their site.</p>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <div className={styles.performanceImageWrap}>
              <span className={styles.performanceImageLabel}>// Google Search Console · 3 months</span>
              <p className={styles.performanceImageCaption}>Three months after launch: 6.28K clicks and 448K impressions, still climbing week over week.</p>
              <Image src="/gsc-search-performance.png" alt="Google Search Console: clicks and impressions climbing over 3 months" width={1818} height={865} sizes="(max-width: 768px) 100vw, 720px" className={styles.performanceImage} />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <div className={styles.performanceImageWrap}>
              <span className={styles.performanceImageLabel}>// Google Search Console · 6 months</span>
              <p className={styles.performanceImageCaption}>We were already running Ayla Property&apos;s SEO on their old WordPress site. When we rebuilt it as a custom Next.js build in May, clicks and impressions jumped anyway — the platform itself was the bottleneck, not the strategy.</p>
              <Image src="/gsc-wordpress-switch.png" alt="Google Search Console clicks and impressions climbing after switching from WordPress to a custom build" width={2222} height={944} sizes="(max-width: 768px) 100vw, 720px" className={styles.performanceImage} />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <div className={styles.performanceImageWrap}>
              <span className={styles.performanceImageLabel}>// Conversion rate · Jan – Aug 2026</span>
              <p className={styles.performanceImageCaption}>Same site, same period. Weekly split testing and heat map reviews pushed conversion rate from 0.2% to 1.1% and rising.</p>
              <Image src="/conversion-rate-growth.png" alt="Conversion rate climbing steadily from 0.2% in January to 1.1% by August after weekly split testing and CRO work" width={1744} height={902} sizes="(max-width: 768px) 100vw, 720px" className={styles.performanceImage} />
            </div>
          </ScrollReveal>
        </section>
      )}

      {/* TRUSTED BY — website-builds only */}
      {slug === 'website-builds' && (
        <section className={styles.clientsSection}>
          <ScrollReveal style={{ marginBottom: 36 }}>
            <span className="section-label">// Trusted by</span>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <div className={styles.clientGrid}>
              {CLIENTS.map(c => (
                <div key={c.name} className={styles.clientLogo}>
                  <ClientLogo name={c.name} domain={c.domain} />
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>
      )}

      {/* EXAMPLES — interactive concept showcase */}
      {s.examples && (
        <section id="examples" className={styles.examples}>
          <ScrollReveal className={styles.examplesHead}>
            <span className="section-label">// Examples of what we can do</span>
            <h2 className={styles.examplesTitle}>{s.examples.heading}</h2>
            <p className={styles.examplesIntro}>{s.examples.intro}</p>
          </ScrollReveal>
          <div className={styles.examplesGrid}>
            {s.examples.items.map((ex, i) => (
              <ScrollReveal key={ex.name} delay={((i % 3) + 1) as 1|2|3}>
                <a href={ex.url} target="_blank" rel="noopener noreferrer" className={styles.exCard}>
                  <span className={styles.exNum}>{String(i + 1).padStart(2, '0')}</span>
                  <span className={styles.exName}>{ex.name}</span>
                  <span className={styles.exTag}>{ex.tag}</span>
                </a>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <a href={s.examples.galleryUrl} target="_blank" rel="noopener noreferrer" className={styles.examplesCta}>
              View the full gallery →
            </a>
          </ScrollReveal>
        </section>
      )}

      {/* BODY */}
      {slug !== 'website-builds' && (
        <section className={styles.body}>
          <div className={styles.bodyLeft}>
            <ScrollReveal>
              <span className="section-label">// Overview</span>
            </ScrollReveal>
            {s.description.map((p, i) => (
              <ScrollReveal key={i} delay={(Math.min(i+1,4)) as 1|2|3|4}>
                <p className={styles.bodyText}>{p}</p>
              </ScrollReveal>
            ))}
          </div>
          {s.outcomes.length > 0 && (
            <div className={styles.bodyRight}>
              <ScrollReveal delay={2}>
                <span className="section-label">// Deliverables</span>
                <ul className={styles.outcomes}>
                  {s.outcomes.map(o => (
                    <li key={o} className={styles.outcome}>
                      <span className={styles.outcomeDot}>◆</span>{o}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>
          )}
        </section>
      )}

      {/* SHOWCASE — interactive examples */}
      {s.showcase && (
        <section className={styles.showcase}>
          {s.showcase.imageRevamp && (
            <ScrollReveal>
              <div className={styles.showcaseBlock}>
                <BeforeAfterSlider
                  before={s.showcase.imageRevamp.before}
                  after={s.showcase.imageRevamp.after}
                />
                <div className={styles.showcaseText}>
                  <span className={styles.showcaseLabel}>// Image Revamping</span>
                  <h2 className={styles.showcaseHeading}>{s.showcase.imageRevamp.heading}</h2>
                  <p className={styles.showcaseCopy}>{s.showcase.imageRevamp.copy}</p>
                </div>
              </div>
            </ScrollReveal>
          )}
          {s.showcase.chatbot && (
            <ScrollReveal delay={1}>
              <div className={`${styles.showcaseBlock} ${styles.showcaseBlockReverse}`}>
                {s.showcase.chatbot.image ? (
                  <Image src={s.showcase.chatbot.image} alt="AI chatbot lead generation" width={1376} height={768} sizes="(max-width: 768px) 100vw, 50vw" className={styles.showcaseImg} />
                ) : (
                  <div className={styles.showcasePlaceholder}>// Screenshot coming soon</div>
                )}
                <div className={styles.showcaseText}>
                  <span className={styles.showcaseLabel}>// AI Chatbot</span>
                  <h2 className={styles.showcaseHeading}>{s.showcase.chatbot.heading}</h2>
                  <p className={styles.showcaseCopy}>{s.showcase.chatbot.copy}</p>
                </div>
              </div>
            </ScrollReveal>
          )}
          {s.showcase.agents && (
            <ScrollReveal delay={2}>
              <div className={styles.showcaseBlock}>
                {s.showcase.agents.image ? (
                  <Image src={s.showcase.agents.image} alt="AI business automation Make.com workflow" width={1376} height={768} sizes="(max-width: 768px) 100vw, 50vw" className={styles.showcaseImg} />
                ) : (
                  <div className={styles.showcasePlaceholder}>// AI Agents</div>
                )}
                <div className={styles.showcaseText}>
                  <span className={styles.showcaseLabel}>// AI Agents</span>
                  <h2 className={styles.showcaseHeading}>{s.showcase.agents.heading}</h2>
                  <p className={styles.showcaseCopy}>{s.showcase.agents.copy}</p>
                </div>
              </div>
            </ScrollReveal>
          )}
        </section>
      )}

      {/* PORTFOLIO — website showcase */}
      {s.portfolio && (
        <section id="portfolio" className={styles.portfolio}>
          <ScrollReveal style={{ marginBottom: 56 }}>
            <span className="section-label">// Our work</span>
            <h2 className={styles.portfolioTitle}>Sites we&apos;ve built.</h2>
          </ScrollReveal>
          {s.portfolio.projects.map((project, i) => (
            <ScrollReveal key={project.name} delay={(i % 2 === 0 ? 1 : 2) as 1|2}>
              <div className={styles.portfolioItem}>
                <div className={styles.portfolioText}>
                  <p className={styles.portfolioNum}>// {String(i + 1).padStart(2, '0')}</p>
                  <h3 className={styles.portfolioName}>{project.name}</h3>
                  {project.url ? (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className={styles.portfolioUrl}>
                      {project.urlLabel} ↗
                    </a>
                  ) : (
                    <span className={styles.portfolioUrlPending}>{project.urlLabel}</span>
                  )}
                  <div className={styles.portfolioMeta}>
                    <div className={styles.portfolioBlock}>
                      <span className={styles.portfolioBlockLabel}>// The challenge</span>
                      <p className={styles.portfolioBlockText}>{project.challenge}</p>
                    </div>
                    <div className={styles.portfolioBlock}>
                      <span className={styles.portfolioBlockLabel}>// Our approach</span>
                      <p className={styles.portfolioBlockText}>{project.solution}</p>
                    </div>
                  </div>
                  <div className={styles.portfolioInlineCta}>
                    <span className={styles.portfolioInlineCtaText}>Want something like this?</span>
                    <CalendlyPopupLink href={withCalendlyService('https://calendly.com/zaq-lengmedia/website-build-discovery-call', 'Website Building')} className={styles.portfolioInlineCtaLink}>Book a call →</CalendlyPopupLink>
                  </div>
                </div>
                <div className={styles.portfolioScreenshots}>
                  {project.desktopImg && (
                    <div className={styles.portfolioDesktop}>
                      <div className={styles.portfolioDesktopImgWrap}>
                        <Image src={project.desktopImg} alt={`${project.name} desktop`} fill sizes="(max-width:900px) 100vw, 50vw" style={{objectFit:'cover',objectPosition:'top'}} />
                      </div>
                      <span className={styles.portfolioImgLabel}>// Desktop</span>
                    </div>
                  )}
                  <div className={styles.portfolioMobile}>
                    <div className={styles.portfolioMobileImgWrap}>
                      <Image src={project.mobileImg} alt={`${project.name} mobile`} fill sizes="210px" style={{objectFit:'cover',objectPosition:'top'}} />
                    </div>
                    <span className={styles.portfolioImgLabel}>// Mobile</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </section>
      )}

      {slug === 'website-builds' && offerSection}

      {/* PROCESS — how it works */}
      {s.process && (
        <section className={styles.processSection}>
          <ScrollReveal style={{ marginBottom: 48 }}>
            <span className="section-label">// How it works</span>
            <h2 className={styles.processHeading}>From call to launch in days.</h2>
          </ScrollReveal>
          <div className={styles.processGrid}>
            {s.process.steps.map((step) => (
              <div key={step.num} className={styles.processStep}>
                <span className={styles.processNum}>// {step.num}</span>
                <h3 className={styles.processTitle}>{step.title}</h3>
                <p className={styles.processBody}>{step.body}</p>
                <span className={styles.processTime}>{step.time}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SEO — 4 pillars + traffic chart */}
      {s.seoPillars && (
        <section className={styles.seoSection}>
          <div className={styles.seoPillarsWrap}>
            <ScrollReveal style={{ marginBottom: 48 }}>
              <span className="section-label">// Our Process</span>
              <h2 className={styles.seoHeading}>The four pillars of ecommerce SEO.</h2>
            </ScrollReveal>
            <div className={styles.seoPillarsGrid}>
              {s.seoPillars.pillars.map((pillar, i) => (
                <ScrollReveal key={pillar.num} delay={(i % 2 === 0 ? 1 : 2) as 1|2}>
                  <div className={styles.seoPillarCard}>
                    <p className={styles.seoPillarNum}>// {pillar.num}</p>
                    <h3 className={styles.seoPillarTitle}>{pillar.title}</h3>
                    <p className={styles.seoPillarBody}>{pillar.body}</p>
                    {pillar.items && (
                      <ul className={styles.seoPillarItems}>
                        {pillar.items.map(item => (
                          <li key={item} className={styles.seoPillarItem}>
                            <span className={styles.seoPillarDot}>◆</span>{item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
          {s.seoPillars.proofImages && s.seoPillars.proofImages.length > 0 ? (
            <div className={`${styles.seoChart} theme-dark`}>
              <ScrollReveal>
                <span className="section-label">// Real Results</span>
                <h2 className={styles.seoHeading}>What the traffic looks like.</h2>
                <p className={styles.seoCopy}>Real clients. Names omitted, results are not.</p>
              </ScrollReveal>
              <ScrollReveal delay={1}>
                <div className={styles.seoProofImages}>
                  {s.seoPillars.proofImages.map(img => (
                    <img key={img.src} src={img.src} alt={img.alt} className={styles.seoProofImg} />
                  ))}
                </div>
              </ScrollReveal>
            </div>
          ) : (
            <div className={`${styles.seoChart} theme-dark`}>
              <ScrollReveal>
                <span className="section-label">// Real Results</span>
                <h2 className={styles.seoHeading}>What the traffic looks like.</h2>
                <p className={styles.seoCopy}>A real client. The name is omitted. The results are not.</p>
              </ScrollReveal>
              <ScrollReveal delay={1}>
                <TrafficChart />
              </ScrollReveal>
            </div>
          )}
        </section>
      )}

      {/* PROOF — platform funnel + live results */}
      {s.proof && (
        <>
          <section className={styles.proofFunnel}>
            <ScrollReveal>
              <h2 className={styles.proofHeadline}>{s.proof.funnelTagline}</h2>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <div className={styles.funnelDesktop}>
                <FunnelDiagram />
              </div>
              <div className={styles.funnelMobile}>
                <div className={styles.funnelMobileCols}>
                  <div className={styles.funnelMobileGroup}>
                    <p className={styles.funnelMobileGroupLabel}>// Digital</p>
                    {['META','GOOGLE ADS','TIKTOK','LINKEDIN','DISPLAY'].map(c => (
                      <span key={c} className={styles.funnelMobileChip}>{c}</span>
                    ))}
                  </div>
                  <div className={styles.funnelMobileGroup}>
                    <p className={styles.funnelMobileGroupLabel}>// Traditional</p>
                    {['DAYTIME TV','PRESS ADS','DIRECT MAIL'].map(c => (
                      <span key={c} className={`${styles.funnelMobileChip} ${styles.funnelMobileChipMuted}`}>{c}</span>
                    ))}
                  </div>
                </div>
                <div className={styles.funnelMobileArrow}>↓</div>
                <div className={styles.funnelMobileStrategy}>SMART STRATEGY</div>
                <div className={styles.funnelMobileArrow}>↓</div>
                <div className={styles.funnelMobileResult}>ROI &amp; PROFIT</div>
              </div>
            </ScrollReveal>
          </section>
          <section className={styles.proofStats}>
            <ScrollReveal style={{marginBottom:40}}>
              <span className="section-label">{s.proof.statsLabel}</span>
            </ScrollReveal>
            <div className={styles.proofGrid}>
              {s.proof.stats.map((stat, i) => (
                <ScrollReveal key={i} delay={(i < 2 ? 1 : 2) as 1|2}>
                  <div className={styles.proofStat}>
                    <span className={styles.proofValue}>{stat.value}</span>
                    <span className={styles.proofLabel}>{stat.label}</span>
                    <span className={styles.proofSub}>{stat.sub}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            {s.proof.proofImage && (
              <ScrollReveal style={{marginTop:2}}>
                <div className={styles.proofImageWrap}>
                  <span className={styles.proofImageLabel}>// Campaign Screenshot · May–Jun 2025</span>
                  <Image src={s.proof.proofImage} alt="Meta Ads Manager: May to Jun 2025 campaign results" width={2114} height={766} sizes="(max-width: 768px) 100vw, 1100px" className={styles.proofImage} />
                  <p className={styles.proofImageCaption}>A snapshot of one of our clients&apos; campaigns.<br />If you&apos;d like to know how we can help you just <CalendlyPopupLink href={withCalendlyService('https://calendly.com/zaq-lengmedia/leng-media-intro-call', s.name)} className={styles.proofImageLink}>book a call</CalendlyPopupLink>.</p>
                </div>
              </ScrollReveal>
            )}
          </section>
        </>
      )}

      {/* WEBSITE FAQ */}
      {s.websiteFaq && (
        <section className={styles.websiteFaq}>
          <ScrollReveal>
            <span className="section-label">// Common questions</span>
            <h2 className={styles.websiteFaqHeading}>What you need to know before booking.</h2>
          </ScrollReveal>
          <WebsiteFaqAccordion items={s.websiteFaq} />
        </section>
      )}

      {slug !== 'website-builds' && offerSection}

      {/* CTA */}
      <section className={`${styles.cta} theme-dark`}>
        <ScrollReveal>
          <span className="section-label">// Get in touch</span>
          {slug === 'website-builds' ? (
            <>
              <h2 className="section-title">Ready to <em>get noticed?</em></h2>
              <p className={styles.ctaSub}>Book a 20-minute call. We will scope your project and send a quote within 24 hours.</p>
              <CalendlyPopupLink href={withCalendlyService('https://calendly.com/zaq-lengmedia/website-build-discovery-call', 'Website Building')} className="btn-primary" style={{fontSize:12,padding:'18px 52px'}}>Get Your Quote →</CalendlyPopupLink>
              <WhatsAppLink href="https://wa.me/447928668478?text=Hi%2C%20I%27m%20interested%20in%20a%20website%20build" className={styles.ctaWa}>Or message us on WhatsApp</WhatsAppLink>
            </>
          ) : (
            <>
              <h2 className="section-title">Want to <em>chat?</em></h2>
              <p className={styles.ctaSub}>Book a call. We&apos;ll look at where you are and tell you honestly if we can help.</p>
              <CalendlyPopupLink href={withCalendlyService('https://calendly.com/zaq-lengmedia/leng-media-intro-call', s.name)} className="btn-primary" style={{fontSize:12,padding:'18px 52px'}}>Book a Call</CalendlyPopupLink>
            </>
          )}
        </ScrollReveal>
      </section>

      {/* RELATED SERVICES */}
      {s.related.length > 0 && (
        <section className={styles.related}>
          {s.reading && (
            <ScrollReveal className={styles.reading}>
              <span className="section-label">// Further reading</span>
              <ul className={styles.readingList}>
                {s.reading.map(r => (
                  <li key={r.href}><Link href={r.href} className={styles.readingLink}>{r.label} →</Link></li>
                ))}
              </ul>
            </ScrollReveal>
          )}
          <ScrollReveal style={{marginBottom:40}}>
            <span className="section-label">// Related Services</span>
          </ScrollReveal>
          <div className={styles.relatedGrid}>
            {s.related.map(relSlug => {
              const rel = SERVICES[relSlug]
              if (!rel) return null
              return (
                <Link key={relSlug} href={`/services/${relSlug}`} className={styles.relatedCard}>
                  <div>
                    <p style={{fontFamily:'var(--font-mono)',fontSize:'9px',letterSpacing:'2px',color:'var(--accent-ink)',textTransform:'uppercase',marginBottom:10}}>{rel.num} / 07</p>
                    <span className={styles.relatedName}>{rel.name}</span>
                  </div>
                  <span className={styles.relatedArrow}>↗</span>
                </Link>
              )
            })}
          </div>
        </section>
      )}

      {/* STICKY MOBILE CTA — website-builds only */}
      {slug === 'website-builds' && (
        <StickyMobileCta
          href={withCalendlyService('https://calendly.com/zaq-lengmedia/website-build-discovery-call', 'Website Building')}
          whatsappHref="https://wa.me/447928668478?text=Hi%2C%20I%27m%20interested%20in%20a%20website%20build"
        />
      )}
    </>
  )
}
