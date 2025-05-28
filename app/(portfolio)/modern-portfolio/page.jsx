import Footer2 from "@/components/footers/Footer2";
import Header8 from "@/components/headers/Header8";
import Portfolio from "@/components/homes/home-8/Portfolio";
import ParallaxContainer from "@/components/common/ParallaxContainer";
import { modernMultipage } from "@/data/menu";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";


import { Playfair_Display } from 'next/font/google'; //звезда *
import { Inter } from 'next/font/google';
import { Russo_One } from 'next/font/google';
import { Dela_Gothic_One, Great_Vibes } from 'next/font/google';
import { Roboto } from 'next/font/google';

import ContentBlock from "@/components/portfolio/contentBlock";
import styles from './modern-portfolio.module.css';
import gridStyles from './grid.module.css'

const playfairDisplay = Playfair_Display({ subsets: ['latin'], weight: ['400', '700'], });
const inter = Inter({ subsets: ['latin'] });
const roboto = Roboto({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700'] });
const russoOne = Russo_One({  weight: '400',  subsets: ['latin'],});
const delaGothicOne = Dela_Gothic_One({ subsets: ['latin'], weight: '400' });
const greatVibes = Great_Vibes({ subsets: ['latin'], weight: '400' });


const onePage = false;
const dark = false;
export const metadata = {
  title:
    "Modern Portfolio || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function ModernPortfolioPage() {
  return (
    <>
      <div className={`theme-modern`}>
        <div className="page" id="top">
          <nav className="main-nav dark transparent stick-fixed wow-menubar">
            <Header8 links={modernMultipage} />
          </nav>{" "}
          <main id="main">
            <ParallaxContainer
              className="page-section pt-90 pb-90 pb-xs-40 bg-dark-alpha-60 parallax-5 light-content"
              style={{
                backgroundImage:
                  "url(/assets/images/portfolio/nav.jpg)",
              }}
              id="home"
            >
              <div className="container position-relative">
                <div className="mb-20">
                  <div className="mb-10">
                    <Link
                      href="/modern-multi-page"
                      className="link-hover-anim align-middle"
                      data-btn-animate="y"
                    >
                      <span className="btn-animate-y">
                        <span className="btn-animate-y-1">
                          <i
                            className="icon-arrow-left2 size-14"
                            aria-hidden="true"
                          ></i>{" "}
                          Back to home
                        </span>
                        <span className="btn-animate-y-2" aria-hidden="true">
                          <i
                            className="icon-arrow-left2 size-14"
                            aria-hidden="true"
                          ></i>{" "}
                          Back to home
                        </span>
                      </span>
                    </Link>
                  </div>
                  <hr className="white mt-0 mb-0" />
                </div>
                <div className="row">
                  <div className="col-9 col-sm-8">
                    <h1 className="hs-title-5 font-alt overflow-hidden mb-0">
                      <span className="d-block wow fadeRotateIn">
                        {" "}
                        Our Brand{" "}
                      </span>
                      <span className="d-block text-end wow fadeRotateIn">
                        AMU
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
              {/* Scroll Down */}
              <div
                className="local-scroll scroll-down-wrap-2 d-none d-lg-block wow fadeInUp"
                data-wow-offset={0}
              >
                <div className="full-wrapper text-end">
                  <span className="scroll-down-2">
                    <Image
                      width="50"
                      height="73"
                      src="/assets/images/demo-modern/arrow-down-1-white.svg"
                      alt="Scroll Down"
                    />
                  </span>
                </div>
              </div>
              {/* End Scroll Down */}
            </ParallaxContainer>
            <section
              className={` scrollSpysection   ${ //убрал page-section из-за пробела
                dark ? "bg-dark-1 light-content" : ""
              } `}
              id="portfolio"
            >
              <div className="container">
              
                {/* End Portfolio Grid */}
              </div>
            </section>

             {/* <Portfolio /> */}
             <div className={`${russoOne.className}`}
              style={{
                width: "100vw",
                display: "flex",
                justifyContent: "center",
                padding: "4rem 2rem",
                boxSizing: "border-box",
              }}
            >
              <div style={{width: "90vw", maxWidth: "1800px", }}>
                
             <div
                   className={`${roboto.className} position-relative`}
                  style={{
                    backgroundImage: "url('/assets/images/portfolio/amu1.jpg')", 
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height: "90vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    className="position-relative bg-white shadow"
                    style={{
                      width: "85%",
                      maxWidth: "1400px",
                      padding: "4rem",
                      boxSizing: "border-box",
                    }}
                  >
                    
                    <div
                      className="position-absolute"
                      style={{ top: "20px", right: "30px" }}
                    >
                      <span 
                        style={{ fontWeight: 300, fontSize: "clamp(0.5rem, 1.8vw, 0.75rem)", letterSpacing: "0.12em", color: "#192ed5" }}
                        className="text-uppercase"
                      >
                        SIMPLICITY FOR PEOPLE WHO HAVE A LIFE
                      </span>
                    </div>

                    <div
                      className="position-absolute"
                      style={{ bottom: "20px", left: "30px" }}
                    >
                      <span 
                        style={{ fontWeight: 300, fontSize: "clamp(0.5rem, 1.8vw, 0.75rem)", color: "#192ed5" }}
                      >2024/2025</span>
                    </div>

                    <div 
                      className={styles.headingWrapper}
                      >
                      <h1
                        
                        style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)", lineHeight: "1.2", marginBottom: 0, fontWeight: 600,  }}
                      >
                        WHO WE <br /> ARE?
                        <span
                          className={`${playfairDisplay.className} ms-2`}
                          style={{ fontSize: "clamp(3rem, 12vw, 10rem)", verticalAlign: "top", fontWeight: 700, color: "#192ed5"}}
                        >
                          *
                        </span>
                      </h1>
                    </div>
                  </div>
                </div>

                {/* второй блок  */}

                <div
                  className="position-relative text-white"
                  style={{
                    backgroundColor: "#192ed5",
                    minHeight: "70vh",
                    padding: "4rem 2rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    // fontSize: "clamp(0.8rem, 2.2vw, 2rem)",
                    lineHeight: "1.6",
                  }}
                  
                >
                  
                  <div style={{ maxWidth: "960px" }}>
                    
                    <p className="small fw-bold text-uppercase mb-1">
                      PROJECT LOCATION ONLINE:{" "}
                      <a
                        href="https://www.wildberries.ru/brands/h-and-m"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-decoration-underline"
                      >
                        https://www.wildberries.ru/brands/h-and-m
                      </a>
                    </p>
                    <h2 className="fw-bold display-6">WILDBERRIES</h2>
                    <p className="mb-4 fw-semibold fst-italic">
                      (#1 online platform in CIS, #9 globally)
                    </p>
                    <p className="mb-4">
                      Ranked in the Top 100 Sellers. Over 550k units sold to date.
                    </p>

                    <p className="fw-semibold mb-1">Our Brand Portfolio</p>
                    <ul>
                      <li>H&M – A key brand in our portfolio</li>
                      <li>Marks & Spencer – Coming soon to our offerings</li>
                    </ul>

                    <p className="small fw-bold text-uppercase mt-5 mb-1">
                      PROJECT LOCATION OFFLINE (coming soon)
                    </p>
                    <h2 className="fw-bold display-6">TASHIR STREET MALL</h2>
                    <p className="mb-3">
                      Part of the Tashir Group of Companies, generating <strong>$1 billion</strong> in revenue
                    </p>
                    <ul>
                      <li>Extensive expertise in commercial real estate</li>
                      <li>Owner of the 4 largest shopping malls in Armenia</li>
                    </ul>

                    <p className="fw-semibold mt-5 mb-1">Retail Chain Opening</p>
                    <ul>
                      <li>Scheduled for 2025</li>
                      <li>First store opening April–May 2025</li>
                      <li>The store will operate as a discounter, offering high-quality clothing and footwear</li>
                      <li>Aimed at providing affordable prices for the entire family</li>
                    </ul>
                  </div>

                  <div className="position-absolute" style={{ bottom: "20px", right: "30px" }}>
                    <span className="small text-white-50">WHY SO BLUE?</span>
                  </div>
                </div>

                {/* третий блок */}

                <div
                  id="image-grid"
                  className="position-relative"
                  style={{
                    backgroundColor: "#fdfbf6",
                  }}
                >
                  <div
                    className={gridStyles.gridContainer}
                  >

                    <div className={gridStyles.gridItem} style={{ gridColumn: "1 / span 2",  gridRow: "1 / span 2" }} >
                      <Image  src="/assets/images/portfolio/grid1.webp"  alt="Grid Image"  fill  style={{ objectFit: "cover" }}  />
                    </div>
                    <div className={gridStyles.gridItem} style={{ gridColumn: "3 / span 2",  gridRow: "1 / span 2" }} >
                      <Image  src="/assets/images/portfolio/grid2.webp"  alt="Grid Image"  fill  style={{ objectFit: "cover" }}  />
                    </div>
                    <div className={gridStyles.gridItem} style={{ gridColumn: "5 / span 2",  gridRow: "1 / span 2" }} >
                      <Image  src="/assets/images/portfolio/grid3.webp"  alt="Grid Image"  fill  style={{ objectFit: "cover" }}  />
                    </div>


                    <div className={gridStyles.gridItem} style={{ gridColumn: "1 / span 1",  gridRow: "3 / span 2" }} >
                      <Image  src="/assets/images/portfolio/grid4.webp"  alt="Grid Image"  fill  style={{ objectFit: "cover" }}  />
                    </div>
                    <div className={gridStyles.gridItem} style={{ gridColumn: "2 / span 1",  gridRow: "3 / span 2" }} >
                      <Image  src="/assets/images/portfolio/grid5.webp"  alt="Grid Image"  fill  style={{ objectFit: "cover" }}  />
                    </div>
                    <div className={gridStyles.gridItem} style={{ gridColumn: "3 / span 2",  gridRow: "3 / span 2" }} >
                      <Image  src="/assets/images/portfolio/grid6.webp"  alt="Grid Image"  fill  style={{ objectFit: "cover" }}  />
                    </div>
                    <div className={gridStyles.gridItem} style={{ gridColumn: "5 / span 2",  gridRow: "3 / span 2" }} >
                      <Image  src="/assets/images/portfolio/grid7.webp"  alt="Grid Image"  fill  style={{ objectFit: "cover" }}  />
                    </div>

                    <div className={`${gridStyles.gridItem} ${gridStyles.gridMoveTop}`} style={{ gridColumn: "1 / span 2",  gridRow: "5 / span 2" }} >
                      <Image  src="/assets/images/portfolio/grid8.webp"  alt="Grid Image"  fill  style={{ objectFit: "cover" }}  />
                    </div>
                    <div className={`${gridStyles.gridItem} ${gridStyles.gridFullWidthMobile}`} style={{ gridColumn: "3 / span 1",  gridRow: "5 / span 2" }} >
                      <Image  src="/assets/images/portfolio/grid9.webp"  alt="Grid Image"  fill  style={{ objectFit: "cover" }}  />
                    </div>
                    <div className={`${gridStyles.gridItem} ${gridStyles.girlGridFullWidthMobile}`} style={{ gridColumn: "4 / span 1",  gridRow: "5 / span 2" }} >
                      <Image  src="/assets/images/portfolio/grid10.webp"  alt="Grid Image"  fill  style={{ objectFit: "cover" }}  />
                    </div>
                    <div className={`${gridStyles.gridItem} ${gridStyles.gridMoveBottom}`} style={{ gridColumn: "5 / span 2",  gridRow: "5 / span 2" }} >
                      <Image  src="/assets/images/portfolio/grid11.webp"  alt="Grid Image"  fill  style={{ objectFit: "cover" }}  />
                    </div>
                    
                  </div>
                </div>

                {/* четвертый блок  */}

                <div
                  className="position-relative"
                  style={{
                    backgroundImage: "url('/assets/images/portfolio/amu2.jpg')", 
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height: "90vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  
                >
                  <div
                    className="position-relative bg-white shadow"
                    style={{
                      width: '85%',
                      maxWidth: '1000px',
                      display: 'flex',         
                      flexDirection: 'column', 
                      justifyContent: 'center', 
                      padding: '4rem',          // отступы слева/справа и сверху/снизу
                      boxSizing: 'border-box',
                      textAlign: 'left'
                    }}
                  >
                    <p
                      className="fw-bold"
                      style={{
                        margin: 0,              
                        marginBottom: '2.5rem',  
                        fontSize: 'clamp(1.5rem, 4vw, 3rem)',
                        color: '#192ed5',
                        lineHeight: 1.4,
                      }}
                    >
                      Well. One more thing.
                    </p>
                    <p
                      className="fw-bold"
                      style={{
                        margin: 0,
                        fontSize: 'clamp(1.5rem, 4vw, 3rem)',
                        color: '#192ed5',
                        lineHeight: 1.4,
                      }}
                    >
                      We’re ready to launch our own <br /> Clothing Brand.
                    </p>
                  </div>
                </div>

                {/* пятый блок */}

                <div
                  id="amu-brand"
                  className={`${roboto.className} ${styles.amuBrand}`}
                >
                  {/* 1) Верхний левый блок */}
                  <div
                    className={styles.topLeft}
                  >
                    {/* маленький логотип в белой коробке */}
                    <div className={styles.logoBox}>

                      ÁMU<sup style={{ 
                        position: "absolute",
                        top: "2.2em",      
                        right: "0.75em",   
                        fontSize: "0.3em",  
                        lineHeight: 1, 
                      }}>™</sup>
                    </div>

                    {/* синяя полоса */}
                    <div
                      className={styles.stripe}
                    />
                    <div
                    style={{
                      position: "absolute",
                      bottom: "-30rem",   
                      left: "7.5rem",
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                      color: "#fff",
                      fontSize: "3rem",
                      fontWeight: 300,
                      marginBottom: "1rem", 
                      whiteSpace: "nowrap",
                      lineHeight: 1,
                    }}
                  >
                    ÁMU
                    <sup style={{ fontSize: "0.6rem", verticalAlign: "super", transform: "rotate(90deg)",  display: "inline-block", }}>™</sup>
                  </div>
                  </div>

                  {/* 2) Центр: большой заголовок */}
                  <h1
                  className={styles.centerTitle}
                >
                  ÁM
                  <span
                    style={{
                      position: "relative",
                      display: "inline-block",
                      lineHeight: 1,
                    }}
                  >
                    U
                    <sup
                      style={{
                        position: "absolute",
                        top: "0.22em",      
                        right: "-0.85em",   
                        fontSize: "0.35em",  
                        lineHeight: 1,
                      }}
                    >
                      ™
                    </sup>
                  </span>
                </h1>

                  {/* 3) Нижний правый слоган */}
                  <div
                    className={styles.bottomRight}
                  >
                    BECAUSE IT’S AMU!
                  </div>
                </div>


              {/* шестой блок */}

                <div
                  className="position-relative text-white"
                  style={{
                    backgroundColor: "#192ed5",
                    minHeight: "70vh",
                    padding: "4rem 2rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                  id="essentials"
                >
                  <div style={{ maxWidth: "960px" }}>
                    <p
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: "600",
                        lineHeight: "1.6",
                        marginBottom: "2rem",
                      }}
                    >
                      AMU focuses on basic bestsellers. Inspired by the brands such as H&M,
                      Uniqlo, Zara and Lululemon, we are committed to delivering essential yet
                      stylish clothing that combines uncompromising quality with streetwear
                      trends. Our current product needs include:
                    </p>

                    <p
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: "700",
                        fontStyle: "italic",
                        lineHeight: "2",
                      }}
                    >
                      T-shirts <br />
                      Sweatshirts <br />
                      Hoodies <br />
                      Joggers <br />
                      Jeans <br />
                      Underwear
                    </p>

                    <p
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: "600",
                        lineHeight: "1.6",
                        marginTop: "2rem",
                      }}
                    >
                      We require all items to be in plain colors, without additional prints,
                      and to include comprehensive size charts that cover plus sizes. We aim to
                      represent pure, uncompromising style, blending essential, liberating
                      clothing with modern streetwear trends.
                    </p>
                  </div>
                </div>

                  {/* седьмой блок */}

                  <div className={styles.letsWorkContainer}>
                    <div className={styles.letsWorkWrapper}>
                      <h1 className={styles.letsWorkText}>
                        LET’S WORK
                      </h1>
                      <div className={styles.letsWorkUnderline}></div>
                      <span className={styles.letsWorkOverlay}>Together</span>
                    </div>
                  </div>
    
                </div>
              </div>
                  

          </main>
          <footer className="footer-1 bg-dark-1 light-content">
            <Footer2 />
          </footer>
        </div>{" "}
      </div>
    </>
  );
}
