'use client';

import Footer2 from "@/components/footers/Footer2";
import HeaderWithLocale from "@/components/headers/HeaderWithLocale";
import ParallaxContainer from "@/components/common/ParallaxContainer";
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import Image from "next/image";
import Link from "next/link";

export default function GiftCardPageClient() {
  const params = useParams();
  const locale = params.locale;
  const t = useTranslations();

  return (
    <div className="theme-modern">
      <div className="page" id="top">
        <nav className="main-nav dark transparent stick-fixed wow-menubar">
          <HeaderWithLocale locale={locale} />
        </nav>

        <main id="main">
          <ParallaxContainer
            className="page-section pt-90 pb-90 pb-xs-40 bg-dark-alpha-60 parallax-5 light-content"
            style={{ backgroundImage: "url(/assets/images/demo-modern/section-bg-3.jpg)" }}
            id="home"
          >
            <div className="container position-relative">
              <div className="mb-20">
                <div className="mb-10">
                  <Link href={`/${locale}/home`} className="link-hover-anim align-middle" data-btn-animate="y">
                    <span className="btn-animate-y">
                      <span className="btn-animate-y-1">
                        <i className="icon-arrow-left2 size-14" /> {t('home.buttonBackToHome')}
                      </span>
                      <span className="btn-animate-y-2" aria-hidden="true">
                        <i className="icon-arrow-left2 size-14" /> {t('home.buttonBackToHome')}
                      </span>
                    </span>
                  </Link>
                </div>
                <hr className="white mt-0 mb-0" />
              </div>
              <div className="row">
                <div className="col-12 text-center">
                  <h1 className="hs-title-5 font-alt overflow-hidden mb-0">
                    <span className="d-block wow fadeRotateIn">
                      {t('gift.title')}
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </ParallaxContainer>

          <section className="page-section" id="gift-card-info">
            <div className="container">
              <p className="lead text-center">{t('gift.description')}</p>
              <div className="text-center mt-40">
                <Image
                  src="/assets/images/demo-modern/smile.png"
                  width={250}
                  height={250}
                  alt="Gift Card"
                />
              </div>
            </div>
          </section>
        </main>

        <footer className="footer-1 bg-dark-1 light-content">
          <Footer2 />
        </footer>
      </div>
    </div>
  );
}
