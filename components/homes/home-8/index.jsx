import React from "react";
import Image from "next/image";
import Service from "./Service";
import Portfolio from "./Portfolio";
import Blog from "./Blog";
import Marquee from "./Marquee";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Link from "next/link";
import Accordion from "./Accordion";
import YandexMap from "@/components/maps/YandexMap";

export default function Home8({
  onePage = false,
  dark = false,
  eadge2 = false,
}) {
  return (
    <>
      <section
        className={`page-section  scrollSpysection ${
          dark ? "bg-dark-2 " : "bg-dark-1"
        }  light-content`}
        id="about"
      >
        {dark || eadge2 ? <></> : <div className="edge-top-figure-1" />}
        {/* Env Round Edge */}
        <div className="container position-relative">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div
                className="section-descr-extralarge mb-100 mb-md-60 wow linesAnimIn"
                data-splitting="lines"
              >
                <h2 className="section-title-inline-1">Trendsetter</h2>
                is an international fashion startup developing a multibrand store offering clothing, footwear, and accessories. Our selection features some of the most popular global brands, including H&M, Reserved, Sinsay, House, and more.
              </div>
              {/* Accordion */}
              <Accordion />
              {/* End Accordion */}
              {/* <div className="local-scroll text-center">
                {onePage ? (
                  <>
                    <a
                      href="#established"
                      className="btn btn-mod btn-w btn-ellipse"
                      data-btn-animate="ellipse"
                    >
                      <span className="btn-ellipse-inner">
                        <span className="btn-ellipse-unhovered">
                          Learn more{" "}
                          <span className="visually-hidden">about us</span>
                        </span>
                        <span
                          className="btn-ellipse-hovered"
                          aria-hidden="true"
                        >
                          Learn more{" "}
                          <span className="visually-hidden">about us</span>
                        </span>
                      </span>
                    </a>
                  </>
                ) : (
                  <>
                    <Link
                      href={`/modern-about${dark ? "-dark" : ""}`}
                      className="btn btn-mod btn-w btn-ellipse"
                      data-btn-animate="ellipse"
                    >
                      <span className="btn-ellipse-inner">
                        <span className="btn-ellipse-unhovered">
                          Learn more{" "}
                          <span className="visually-hidden">about us</span>
                        </span>
                        <span
                          className="btn-ellipse-hovered"
                          aria-hidden="true"
                        >
                          Learn more{" "}
                          <span className="visually-hidden">about us</span>
                        </span>
                      </span>
                    </Link>
                  </>
                )}
              </div> */}
              <div
                className="page-section scrollSpysection  pb-0"
                id="established"
              >
                <div className="position-relative text-center pt-140 pt-sm-100 pb-140 pb-sm-100">
                  <div className="position-relative z-index-1">
                    <h2 className="hs-title-5 font-alt overflow-hidden mb-60 mb-sm-40">
                      <span className="d-inline-block wow fadeRotateIn">
                        Established
                      </span>
                      <span className="d-inline-block wow fadeRotateIn">
                        in 2023
                      </span>
                    </h2>
                    {/* <div className="row">
                      <div className="col-md-6 offset-md-3 col-lg-4 offset-lg-4">
                        <p className="section-descr mb-0">
                          We believe that things should be useful yet beautiful.
                        </p>
                      </div>
                    </div> */}
                  </div>
                  <div className="section-image-behind">
                    <Image
                      src="/assets/images/demo-modern/section-image-2.jpg"
                      loading="lazy"
                      width={820}
                      height={1270}
                      alt="Image Description"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className={`page-section scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="services"
      >
        <div className="container">
          <div className="mb-100 mb-md-40">
            <div className="row">
              <div className="col-sm-6">
                <h2 className="section-caption mb-0 mb-xs-10 black">
                  Our Shop (Services)
                </h2>
              </div>
              <div className="col-sm-6 local-scroll mt-n10 mb-n10 text-sm-end">
                {onePage ? (
                  <>
                    <a
                      href="#portfolio"
                      className="link-hover-anim align-middle"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        See projects{" "}
                        <i
                          className="icon-arrow-right2 size-14"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true"
                      >
                        See projects{" "}
                        <i
                          className="icon-arrow-right2 size-14"
                          aria-hidden="true"
                        ></i>
                      </span>
                    </a>
                  </>
                ) : (
                  <>
                    {/* <Link
                      href={`/modern-services${dark ? "-dark" : ""}`}
                      className="link-hover-anim align-middle"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        See all services{" "}
                        <i
                          className="icon-arrow-right2 size-14"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true"
                      >
                        See all services{" "}
                        <i
                          className="icon-arrow-right2 size-14"
                          aria-hidden="true"
                        ></i>
                      </span>
                    </Link> */}
                  </>
                )}
              </div>
            </div>
            <hr
              className={` ${dark ? "white opacity-1" : "black"}  mt-3 mb-0`}
            />
          </div>
          {/* Services Grid ???????????????????????????????????????????????????? Shop now*/}
          <div className="row">
            <div className="col-10 col-sm-9">
              <h3 className="hs-title-5 font-alt overflow-hidden mb-100 mb-md-40">
                <span className="d-block wow fadeRotateIn"> Your Access to Global Fashion </span>
                {/* <span className="d-block text-end wow fadeRotateIn">
                  {" "}
                  Designe{" "}
                </span> */}
              </h3>
            </div>
          </div>
          <div
            className="section-descr-extralarge wow linesAnimIn mt-5 mt-md-6"
            data-wow-offset="0"
            data-splitting="lines"
          >
            <p>
              
              Trendsetter Á Multibrand is a multibrand fashion store bringing together the world’s most loved clothing labels — from H&M to Reserved, Sinsay, and more.
            </p>
            <p>
              We curate stylish, affordable, and ready-to-wear pieces that fit your everyday life.
              Exclusively available on Wildberries since 2023 — and now expanding offline in Armenia.
            </p>
            <p>
              Global fashion, local access.
              Trendsetter makes it easy to wear what you love.
            </p>
          </div>

            {/* <div className="col-12 mt-5 mt-md-6">
              <YandexMap />
            </div> */}
            <div className="row justify-content-center mt-5 mt-md-6">
              <div className="col-auto text-center">
                <Link
                  href={`/modern-services${dark ? "-dark" : ""}`}
                  className="btn btn-mod btn-white btn-circle btn-ellipse"
                  data-btn-animate="ellipse"
                >
                  <span className="btn-ellipse-inner">
                    <span className="btn-ellipse-unhovered">
                      To the Shop{" "}
                      <i className="icon-arrow-right2 size-14" aria-hidden="true"></i>
                    </span>
                    <span className="btn-ellipse-hovered" aria-hidden="true">
                      To the Shop{" "}
                      <i className="icon-arrow-right2 size-14" aria-hidden="true"></i>
                    </span>
                  </span>
                </Link>
              </div>
            </div>

          {/* End Services Grid */}
          <div className="row ">
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            
              {/* <hr
                className={` ${dark ? "white opacity-1" : "black"}  mt-0 mb-20`}
              /> */}

              {/* <div className="row">
                <div className="col-sm-6 col-md-7 text-center text-sm-start mb-xs-20">
                  <p className="section-descr mb-0 black">
                    We use the power of design to solve complex problems and
                    cultivate business solutions.
                  </p>
                </div>
                <div className="col-sm-6 col-md-5 text-center text-sm-end local-scroll">
                  {onePage ? (
                    <>
                      <a
                        href="#contact"
                        className={`btn btn-mod ${
                          dark ? "btn-border-w" : "btn-border"
                        }  btn-medium btn-circle`}
                        data-btn-animate="y"
                      >
                        <span className="btn-animate-y">
                          <span className="btn-animate-y-1">
                            Get a proposal
                          </span>
                          <span className="btn-animate-y-2" aria-hidden="true">
                            Get a proposal
                          </span>
                        </span>
                      </a>
                    </>
                  ) : (
                    <>
                      <Link
                        href={`/modern-contact${dark ? "-dark" : ""}`}
                        className="btn btn-mod btn-border btn-medium btn-circle"
                        data-btn-animate="y"
                      >
                        <span className="btn-animate-y">
                          <span className="btn-animate-y-1">
                            Get a proposal
                          </span>
                          <span className="btn-animate-y-2" aria-hidden="true">
                            Get a proposal
                          </span>
                        </span>
                      </Link>
                    </>
                  )}
                </div>
              </div> */}
            </div>
          </div>
          
        </div>
      </section>
      <section
        className={`page-section scrollSpysection  pt-0 pb-0  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="portfolio"
      >
        <div className="container">
          <div className="mb-100 mb-md-40">
            <div className="row">
              <div className="col-sm-6">
                <h2 className="section-caption mb-0 mb-xs-10 black">
                  OUR BRAND (Portfolio)
                </h2>
              </div>
              <div className="col-sm-6 local-scroll mt-n10 mb-n10 text-sm-end">
                {onePage ? (
                  <>
                    <a
                      href="#contact"
                      className="link-hover-anim align-middle"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        Start a project{" "}
                        <i
                          className="icon-arrow-right2 size-14"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true"
                      >
                        Start a project{" "}
                        <i
                          className="icon-arrow-right2 size-14"
                          aria-hidden="true"
                        ></i>
                      </span>
                    </a>
                  </>
                ) : (
                  <>
                    <Link
                      href={`/modern-portfolio${dark ? "-dark" : ""}`}
                      className="link-hover-anim align-middle"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        See all project{" "}
                        <i
                          className="icon-arrow-right2 size-14"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true"
                      >
                        See all project{" "}
                        <i
                          className="icon-arrow-right2 size-14"
                          aria-hidden="true"
                        ></i>
                      </span>
                    </Link>
                  </>
                )}
              </div>
            </div>
            <hr
              className={` ${dark ? "white opacity-1" : "black"}  mt-3 mb-0`}
            />
          </div>
          <div className="row">
            <div className="col-10 col-sm-9">
              <h3 className="hs-title-5 font-alt overflow-hidden mb-100 mb-md-40">
                <span className="d-block wow fadeRotateIn"> AMU </span>
                {/* <span className="d-block text-end wow fadeRotateIn">
                  {" "}
                  Designe{" "}
                </span> */}
              </h3>
            </div>
          </div>
          {/* <Portfolio /> */}

          <div
              className="section-descr-extralarge wow linesAnimIn mb-4"
              data-wow-offset="0"
              data-splitting="lines"
            >
              {/* <h2 className="section-title-inline-1">Про Amu</h2> */}
              At AMU, we specialize in elevated everyday basics—timeless pieces designed to become your wardrobe’s go-to staples. Inspired by industry leaders like H&M, Uniqlo, Zara, and Lululemon, our mission is to deliver essential clothing that blends effortless style with premium quality.
            </div>

            <div
              className="section-descr-extralarge wow linesAnimIn mb-4"
              data-wow-offset="0"
              data-splitting="lines"
            >
              We focus on core bestsellers that reflect modern streetwear sensibilities while staying true to minimalism and function. 
            </div>

            <div
              className="section-descr-extralarge wow linesAnimIn mb-4"
              data-wow-offset="0"
              data-splitting="lines"
            >
              We focus on core bestsellers that reflect modern streetwear sensibilities while staying true to minimalism and function. 
            </div>

            <Service />
            
            <div
              className="section-descr-extralarge wow linesAnimIn mb-4"
              data-wow-offset="0"
              data-splitting="lines"
            >
              All items are produced in plain, solid colors—no prints or graphics—ensuring versatility and timeless appeal. We have detailed size charts that include plus sizes to ensure our clothing is inclusive, well-fitting, and accessible to everyone.
            </div>

            <div
              className="section-descr-extralarge wow linesAnimIn mb-4"
              data-wow-offset="0"
              data-splitting="lines"
            >
              At AMU, we believe in pure, uncompromising style—liberating essentials designed to move with you.
            </div>

            

          {/* End Portfolio Grid */}
        </div>
      </section>
      <section
        className={`page-section scrollSpysection  pb-0  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="blog"
      >
        <div className="container">
          <div className="mb-100 mb-md-40">
            {/* <div className="row">
              <div className="col-sm-6">
                <h2 className="section-caption mb-0 mb-xs-10 black">
                  Our Blog
                </h2>
              </div>
              <div className="col-sm-6 local-scroll mt-n10 mb-n10 text-sm-end">
                {onePage ? (
                  <>
                    <a
                      href="#contact"
                      className="link-hover-anim align-middle"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        All news{" "}
                        <i
                          className="icon-arrow-right2 size-14"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true"
                      >
                        All news{" "}
                        <i
                          className="icon-arrow-right2 size-14"
                          aria-hidden="true"
                        ></i>
                      </span>
                    </a>
                  </>
                ) : (
                  <>
                    <Link
                      href={`/modern-blog${dark ? "-dark" : ""}`}
                      className="link-hover-anim align-middle"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        All news{" "}
                        <i
                          className="icon-arrow-right2 size-14"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true"
                      >
                        All news{" "}
                        <i
                          className="icon-arrow-right2 size-14"
                          aria-hidden="true"
                        ></i>
                      </span>
                    </Link>
                  </>
                )}
              </div>
            </div> */}
            <hr
              className={` ${dark ? "white opacity-1" : "black"}  mt-3 mb-0`}
            />
          </div>
          <Blog />
          {/* End Newsletter Form */}
        </div>
      </section>
      <div
        className={`page-section overflow-hidden  ${
          dark ? "light-content" : ""
        } `}
      >
        <Marquee />
      </div>
      <section
        className={`page-section pt-0 pb-0  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
      >
        <Testimonials />
      </section>
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="contact"
      >
        <div className="container">
          <div className="mb-100 mb-md-40">
            <div className="row">
              <div className="col-sm-6">
                <h2 className="section-caption mb-0 mb-xs-10 black">Contact</h2>
              </div>
              {/* <div className="col-sm-6 local-scroll mt-n10 mb-n10 text-sm-end"> */}
                {/* Change the email address in the href attribute */}
                {/* <a
                  href="mailto:ibthemes21@gmail.com"
                  className="link-hover-anim align-middle"
                  data-link-animate="y"
                >
                  <span className="link-strong link-strong-unhovered">
                    Say hi{" "}
                    <i
                      className="icon-arrow-right2 size-14"
                      aria-hidden="true"
                    ></i>
                  </span>
                  <span
                    className="link-strong link-strong-hovered"
                    aria-hidden="true"
                  >
                    Say hi{" "}
                    <i
                      className="icon-arrow-right2 size-14"
                      aria-hidden="true"
                    ></i>
                  </span>
                </a>
              </div> */}
            </div>
            <hr
              className={` ${dark ? "white opacity-1" : "black"}  mt-3 mb-0`}
            />
          </div>
          <div className="row">
            <div className="col-11 col-sm-10">
              <h3 className="hs-title-5 font-alt overflow-hidden mb-100 mb-md-40">
                <span className="d-block wow fadeRotateIn"> Let’s </span>
                <span className="d-block text-end wow fadeRotateIn">
                Get in Touch
                </span>
              </h3>
            </div>
          </div>

          <Contact />
        </div>
      </section>
    </>
  );
}
