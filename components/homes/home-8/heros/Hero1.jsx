import React from "react";
import Image from "next/image";
export default function Hero1() {
  return (
    <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120 ">
      {/* Home Section Content */}
      <div className="home-content pb-sm-60 text-start position-relative">
        <h1 className="hs-title-5 font-alt overflow-hidden mb-30 mb-sm-20">
          <span className="d-block text-center wow fadeRotateIn">
            <Image
              className="hs-image-2 wow fadeInRight"
              data-wow-delay="0.8s"
              data-wow-offset={0}
              src="/assets/images/demo-modern/hs-image-2.jpg"
              width={208}
              height={208}
              alt="Image Description"
            />{" "}
            Trendsetter
          </span>
          <span
            className="d-block wow fadeRotateIn"
            data-wow-delay="0.2s"
            data-wow-offset={0}
            style={{ color: "blue" }}
          >
            A 
          </span>
          <span
            className="d-block text-center wow fadeRotateIn"
            data-wow-delay="0.4s"
            data-wow-offset={0}
          >
            multibrand{" "}
            <Image
              className="hs-image-3 wow fadeInLeft"
              data-wow-delay="0.8s"
              data-wow-offset={0}
              src="/assets/images/demo-modern/hs-image-3.jpg"
              alt="Image Description"
              width={362}
              height={208}
              style={{ height: "fit-content", width: "fit-content" }}
            />
          </span>
        </h1>
        <h2
          className="hs-title-6 font-alt text-center mb-sm-20 wow fadeInUp"
          data-wow-delay="0.6s"
          data-wow-offset={0}
        >
          Specialized in Branding, Web Design and Photography
        </h2>
        <p className="hs-paragraph-2 wow clipRightIn" data-wow-delay="0.8s">
          We are a full-service creative studio creating beautiful digital
          experiences and products. Our mission is to make work process
          meaningful.
        </p>

        <div
          className="hs-line d-none d-sm-block wow fadeIn parallax-mousemove"
          data-offset={60}
          data-wow-delay="0.8s"
        >
          {" "}
        </div>
      </div>
      {/* End Home Section Content */}
      {/* Scroll Down */}
      <div
        className="local-scroll scroll-down-wrap-2 wow fadeInUp"
        data-wow-offset={0}
      >
        <div className="full-wrapper text-end">
          <a href="#about" className="scroll-down-2">
            <Image
              src="/assets/images/demo-modern/arrow-down.svg"
              alt="Scroll Down"
              width={51}
              height={132}
            />
          </a>
        </div>
      </div>
      {/* End Scroll Down */}
      {/* Social Media Links */}
      <div className="hs-social left wow fadeInUp" data-wow-offset={0}>
          {/* Instagram */}
          <a
            href="https://www.instagram.com/trendsetter.a.multibrand/"
            className="hs-social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="visually-hidden">Instagram</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 2 .2 2.5.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.5.4 1.3.4 2.5.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 2-.4 2.5a3.5 3.5 0 0 1-.9 1.4c-.4.4-.8.7-1.4.9-.5.2-1.3.4-2.5.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-2-.2-2.5-.4a3.5 3.5 0 0 1-1.4-.9 3.5 3.5 0 0 1-.9-1.4c-.2-.5-.4-1.3-.4-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-2 .4-2.5.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.5-.2 1.3-.4 2.5-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.4 0-4.7.1-1.1.1-1.7.2-2.1.4-.5.2-.9.5-1.2.8-.3.3-.6.7-.8 1.2-.2.4-.3 1-.4 2.1-.1 1.3-.1 1.6-.1 4.7s0 3.4.1 4.7c.1 1.1.2 1.7.4 2.1.2.5.5.9.8 1.2.3.3.7.6 1.2.8.4.2 1 .3 2.1.4 1.3.1 1.6.1 4.7.1s3.4 0 4.7-.1c1.1-.1 1.7-.2 2.1-.4a3 3 0 0 0 1.2-.8c.3-.3.6-.7.8-1.2.2-.4.3-1 .4-2.1.1-1.3.1-1.6.1-4.7s0-3.4-.1-4.7c-.1-1.1-.2-1.7-.4-2.1a3 3 0 0 0-.8-1.2c-.3-.3-.7-.6-1.2-.8-.4-.2-1-.3-2.1-.4-1.3-.1-1.6-.1-4.7-.1zm0 3.8a5.2 5.2 0 1 1 0 10.4 5.2 5.2 0 0 1 0-10.4zm0 1.8a3.4 3.4 0 1 0 0 6.8 3.4 3.4 0 0 0 0-6.8zm6.4-.9a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z" />
            </svg>
          </a>

          {/* Telegram */}
          <a
            href="https://t.me/trendsetteramultibrand"
            className="hs-social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="visually-hidden">Telegram</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M22.5 2.3L1.8 10.5c-1.4.6-1.4 1.3-.2 1.7l5.4 1.7L18.8 7.6c.7-.4 1.2-.2.8.3L9.8 15.4l-.4 4.5c.6 0 .8-.2 1.1-.5l2.7-2.5 5.5 4c1 .6 1.7.3 2-.9l3.6-16.8c.3-1.5-.6-2.1-1.6-1.7z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/trendsetter-%D0%B0%CC%81-multibrand/"
            className="hs-social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="visually-hidden">LinkedIn</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.45 20.45h-3.555v-5.569c0-1.33-.023-3.042-1.854-3.042-1.857 0-2.141 1.45-2.141 2.946v5.665H9.344V9h3.414v1.561h.049c.476-.9 1.637-1.848 3.367-1.848 3.6 0 4.268 2.368 4.268 5.448v6.284zM5.337 7.433a2.065 2.065 0 1 1 0-4.13 2.065 2.065 0 0 1 0 4.13zm1.777 13.017H3.56V9h3.554v11.45zM22.225 0H1.771C.792 0 0 .774 0 1.73v20.541C0 23.226.792 24 1.771 24h20.451c.98 0 1.778-.774 1.778-1.73V1.73C24 .774 23.206 0 22.225 0z" />
            </svg>
          </a>
        </div>

      {/* End Social Media Links */}
    </div>
  );
}
