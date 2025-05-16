import Footer2 from "@/components/footers/Footer2";
import Header8 from "@/components/headers/Header8";
import Portfolio from "@/components/homes/home-8/Portfolio";
import ParallaxContainer from "@/components/common/ParallaxContainer";
import { modernMultipage } from "@/data/menu";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import { Russo_One } from 'next/font/google';
const russoOne = Russo_One({  weight: '400',  subsets: ['latin'],});
import { Dela_Gothic_One, Great_Vibes } from 'next/font/google';
import ContentBlock from "@/components/portfolio/contentBlock";


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
      <div className="theme-modern">
        <div className="page" id="top">
          <nav className="main-nav dark transparent stick-fixed wow-menubar">
            <Header8 links={modernMultipage} />
          </nav>{" "}
          <main id="main">
            <ParallaxContainer
              className="page-section pt-90 pb-90 pb-xs-40 bg-dark-alpha-60 parallax-5 light-content"
              style={{
                backgroundImage:
                  "url(/assets/images/demo-modern/section-bg-6.jpg)",
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
              className={`page-section scrollSpysection   ${
                dark ? "bg-dark-1 light-content" : ""
              } `}
              id="portfolio"
            >
              <div className="container">
              
                {/* End Portfolio Grid */}
              </div>
            </section>

             {/* <Portfolio /> */}
             <div
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
                  className="position-relative"
                  style={{
                    backgroundImage: "url('/assets/images/portfolio/port1.jpg')", 
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
                      maxWidth: "1000px",
                      padding: "4rem",
                      boxSizing: "border-box",
                    }}
                  >
                    
                    <div
                      className="position-absolute"
                      style={{ top: "20px", right: "30px" }}
                    >
                      <span className="small text-uppercase text-primary fw-bold">
                        SIMPLICITY FOR PEOPLE WHO HAVE A LIFE
                      </span>
                    </div>

                    <div
                      className="position-absolute"
                      style={{ bottom: "20px", left: "30px" }}
                    >
                      <span className="small text-primary fw-bold">2024/2025</span>
                    </div>

                    <div style={{ paddingTop: "40px", paddingBottom: "40px" }}>
                      <h1
                        className="fw-bold"
                        style={{ fontSize: "3.5rem", lineHeight: "1.2", marginBottom: 0 }}
                      >
                        WHO WE <br /> ARE?
                        <span
                          className="text-primary ms-2"
                          style={{ fontSize: "2.5rem", verticalAlign: "top" }}
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
                    padding: "4rem 2rem",
                  }}
                >
                  <div
                    className="container-fluid"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(6, 1fr)",
                      gridAutoRows: "150px",
                      gap: "10px",
                    }}
                  >

                    <div style={{ gridColumn: "1 / span 2",  gridRow: "1 / span 2",  position: "relative",  overflow: "hidden",  }} >
                      <Image  src="/assets/images/portfolio/port1.jpg"  alt="Grid Image"  fill  style={{ objectFit: "cover" }}  />
                    </div>
                    <div style={{ gridColumn: "3 / span 2",  gridRow: "1 / span 1",  position: "relative",  overflow: "hidden",  }} >
                      <Image  src="/assets/images/portfolio/port1.jpg"  alt="Grid Image"  fill  style={{ objectFit: "cover" }}  />
                    </div>
                    <div style={{ gridColumn: "5 / span 2",  gridRow: "1 / span 2",  position: "relative",  overflow: "hidden",  }} >
                      <Image  src="/assets/images/portfolio/port1.jpg"  alt="Grid Image"  fill  style={{ objectFit: "cover" }}  />
                    </div>
                    <div style={{ gridColumn: "3 / span 2",  gridRow: "2 / span 1",  position: "relative",  overflow: "hidden",  }} >
                      <Image  src="/assets/images/portfolio/port1.jpg"  alt="Grid Image"  fill  style={{ objectFit: "cover" }}  />
                    </div>

                    <div style={{ gridColumn: "1 / span 1",  gridRow: "3 / span 2",  position: "relative",  overflow: "hidden",  }} >
                      <Image  src="/assets/images/portfolio/port1.jpg"  alt="Grid Image"  fill  style={{ objectFit: "cover" }}  />
                    </div>
                    <div style={{ gridColumn: "2 / span 2",  gridRow: "3 / span 2",  position: "relative",  overflow: "hidden",  }} >
                      <Image  src="/assets/images/portfolio/port1.jpg"  alt="Grid Image"  fill  style={{ objectFit: "cover" }}  />
                    </div>
                    <div style={{ gridColumn: "4 / span 1",  gridRow: "3 / span 2",  position: "relative",  overflow: "hidden",  }} >
                      <Image  src="/assets/images/portfolio/port1.jpg"  alt="Grid Image"  fill  style={{ objectFit: "cover" }}  />
                    </div>
                    <div style={{ gridColumn: "5 / span 2",  gridRow: "3 / span 2",  position: "relative",  overflow: "hidden",  }} >
                      <Image  src="/assets/images/portfolio/port1.jpg"  alt="Grid Image"  fill  style={{ objectFit: "cover" }}  />
                    </div>

                    <div style={{ gridColumn: "1 / span 2",  gridRow: "5 / span 2",  position: "relative",  overflow: "hidden",  }} >
                      <Image  src="/assets/images/portfolio/port1.jpg"  alt="Grid Image"  fill  style={{ objectFit: "cover" }}  />
                    </div>
                    <div style={{ gridColumn: "3 / span 1",  gridRow: "5 / span 2",  position: "relative",  overflow: "hidden",  }} >
                      <Image  src="/assets/images/portfolio/port1.jpg"  alt="Grid Image"  fill  style={{ objectFit: "cover" }}  />
                    </div>
                    <div style={{ gridColumn: "4 / span 1",  gridRow: "5 / span 2",  position: "relative",  overflow: "hidden",  }} >
                      <Image  src="/assets/images/portfolio/port1.jpg"  alt="Grid Image"  fill  style={{ objectFit: "cover" }}  />
                    </div>
                    <div style={{ gridColumn: "5 / span 2",  gridRow: "5 / span 2",  position: "relative",  overflow: "hidden",  }} >
                      <Image  src="/assets/images/portfolio/port1.jpg"  alt="Grid Image"  fill  style={{ objectFit: "cover" }}  />
                    </div>

                  </div>
                </div>

                {/* четвертый блок  */}

                <div
                  className="position-relative"
                  style={{
                    backgroundImage: "url('/assets/images/portfolio/port1.jpg')", 
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
                    className={`position-relative bg-white shadow ${russoOne.className}`}
                    style={{
                      width: "100vw",
                      maxWidth: "800px",
                      padding: "4rem",
                      boxSizing: "border-box",
                      textAlign: "left",
                    }}
                  >
                    <div>
                      <p
                        className="fw-bold"
                        style={{
                          fontSize: "1.8rem",
                          color: "#192ed5", 
                          marginBottom: "2rem",
                          lineHeight: "1.4",
                        }}
                      >
                        Well. One more thing.
                      </p>
                      <p
                        className="fw-bold"
                        style={{
                          fontSize: "1.8rem",
                          color: "#192ed5",
                          lineHeight: "1.4",
                        }}
                      >
                        We’re ready to launch our own <br /> Clothing Brand.
                      </p>
                    </div>
                  </div>
                </div>

                {/* пятый блок */}

                <div
                  className="position-relative text-white"
                  style={{
                    backgroundImage: "url('/assets/images/portfolio/port1.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center right",
                    backgroundRepeat: "no-repeat",
                    height: "90vh",
                    padding: "4rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                  id="amu-brand"
                >
                  <div
                    className="position-relative"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "4rem",
                      color: "#192ed5", 
                    }}
                  >
                    
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <div
                        style={{
                          writingMode: "vertical-rl",
                          transform: "rotate(180deg)",
                          fontSize: "1.2rem",
                          fontWeight: "bold",
                        }}
                      >
                        ÁMU™
                      </div>
                      <div
                        style={{
                          width: "12px",
                          height: "180px",
                          backgroundColor: "#192ed5",
                          marginTop: "1rem",
                        }}
                      />
                    </div>

                    <div>
                      <h1
                        style={{
                          fontSize: "6rem",
                          margin: 0,
                          color: "#192ed5",
                          fontWeight: 700,
                          letterSpacing: "2px",
                        }}
                      >
                        ÁMU<span style={{ fontSize: "1.5rem", verticalAlign: "super" }}>™</span>
                      </h1>
                    </div>
                  </div>

                  <div
                    className="position-absolute"
                    style={{
                      bottom: "30px",
                      right: "40px",
                      fontSize: "0.75rem",
                      color: "#fff",
                      opacity: 0.7,
                    }}
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

                  <div
                    id="lets-work"
                    style={{
                      height: "90vh",
                      backgroundColor: "#fdfbf6",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <h1
                      className={delaGothicOne.className}
                      style={{
                        fontSize: "7vw",
                        fontWeight: 400,
                        color: "#192ed5",
                        textTransform: "uppercase",
                        margin: 0,
                        position: "relative",
                      }}
                    >
                      LET’S WORK
                      <span
                        className={greatVibes.className}
                        style={{
                          position: "absolute",
                          left: "50%",
                          top: "50%",
                          transform: "translate(-50%, -50%)",
                          fontSize: "2vw",
                          color: "#000",
                          whiteSpace: "nowrap",
                          pointerEvents: "none",
                        }}
                      >
                        Together
                      </span>
                    </h1>

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
