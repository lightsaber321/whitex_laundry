import React, { useState, useCallback } from 'react';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Reveal from './components/Reveal';
import SplashScreen from './components/SplashScreen';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const handleSplashFinish = useCallback(() => setShowSplash(false), []);

  return (
    <>
      {showSplash && <SplashScreen onFinish={handleSplashFinish} />}
      <Navbar />

      {/* HERO */}
      <section id="hero">
        <div>
          <p className="hero-est">Est. 1963 &nbsp;·&nbsp; Family-Owned &nbsp;·&nbsp; Trusted for Generations</p>
          <h1 className="hero-title">Clean is a<br /><em>Family Tradition</em></h1>
          <div className="hero-divider"></div>
          <p className="hero-sub">Serving Cuttack for 62 years. Three generations of our family have cared for your clothes with the same hands, the same heart, and the same promise.</p>
          <div className="hero-cta">
            <a href="#story" className="btn-primary">Our Story</a>
            <a href="#services" className="btn-outline">Our Services</a>
          </div>
        </div>
        <span className="hero-years" aria-hidden="true">62</span>
      </section>

      {/* STORY */}
      <section id="story">
        <div className="story-grid">
          <Reveal>
            <div className="story-visual">
              <div className="story-frame">
                <div className="story-frame-inner">
                  &#9783;<br />
                  <span style={{ fontSize: '1.5rem', opacity: 0.4 }}>1963</span>
                </div>
              </div>
              <div className="story-badge">
                <span>62</span>
                <span>Years of<br />Service</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <span className="section-label">Our Origin</span>
            <h2 className="section-title">Started with<br /><em>Grandfather's Hands</em></h2>
            <p className="section-body">
              In 1963, our grandfather opened a small laundry shop with nothing but a pair of reliable hands, an unwavering work ethic, and a belief that every garment deserves care.
              <br /><br />
              What began as a one-room shop on a modest street has grown into a business that has served tens of thousands of families — yet never lost the personal touch he instilled from day one.
              <br /><br />
              Today, we carry forward that same spirit. Every stitch we treat, every fabric we press, honors the man who started it all.
            </p>
            <blockquote className="story-quote">
              "Do it right, or don't do it at all." — Grandfather's first rule, still our last.
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <div id="stats">
        <div className="stats-grid">
          <Reveal delay={0.1}>
            <div className="stat-number">62</div>
            <div className="stat-divider"></div>
            <div className="stat-label">Years in Service</div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="stat-number">3</div>
            <div className="stat-divider"></div>
            <div className="stat-label">Generations of Family</div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="stat-number">50K+</div>
            <div className="stat-divider"></div>
            <div className="stat-label">Happy Customers</div>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="stat-number">100%</div>
            <div className="stat-divider"></div>
            <div className="stat-label">Handcrafted Care</div>
          </Reveal>
        </div>
      </div>

      {/* TIMELINE */}
      <section id="timeline">
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <span className="section-label">Six Decades of Legacy in Odisha</span>
          <h2 className="section-title">How We <em>Grew</em></h2>
          <p className="section-body" style={{ margin: '0 auto' }}>A story written one garment at a time, across generations.</p>
        </div>
        <div className="timeline-wrap">
          <Reveal delay={0.1}>
            <div className="tl-item">
              <div className="tl-left">
                <div className="tl-title">The First Shop Opens</div>
                <div className="tl-desc">Grandfather laid the foundation with a single washing unit and a dream to serve the neighbourhood faithfully.</div>
              </div>
              <div className="tl-center"><div className="tl-dot"></div><div className="tl-year">1963</div></div>
              <div className="tl-right"></div>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="tl-item">
              <div className="tl-left"></div>
              <div className="tl-center"><div className="tl-dot"></div><div className="tl-year">2000</div></div>
              <div className="tl-right">
                <div className="tl-title">Expansion & Dry Cleaning</div>
                <div className="tl-desc">We added dry-cleaning services and expanded to a larger premises, welcoming our father into the business.</div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="tl-item">
              <div className="tl-left">
                <div className="tl-title">Second Generation Takes Over</div>
                <div className="tl-desc">Our parents modernised the operations while honouring every tradition grandfather had set in stone.</div>
              </div>
              <div className="tl-center"><div className="tl-dot"></div><div className="tl-year">2010</div></div>
              <div className="tl-right"></div>
            </div>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="tl-item">
              <div className="tl-left"></div>
              <div className="tl-center"><div className="tl-dot"></div><div className="tl-year">2008</div></div>
              <div className="tl-right">
                <div className="tl-title">Community Award</div>
                <div className="tl-desc">Recognised as the most trusted laundry service in the city — a tribute to decades of honest work.</div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.5}>
            <div className="tl-item">
              <div className="tl-left">
                <div className="tl-title">Third Generation Joins</div>
                <div className="tl-desc">We joined the family business, bringing modern techniques while keeping the soul of what grandfather built alive.</div>
              </div>
              <div className="tl-center"><div className="tl-dot"></div><div className="tl-year">2018</div></div>
              <div className="tl-right"></div>
            </div>
          </Reveal>
          <Reveal delay={0.6}>
            <div className="tl-item">
              <div className="tl-left"></div>
              <div className="tl-center"><div className="tl-dot"></div><div className="tl-year">2025</div></div>
              <div className="tl-right">
                <div className="tl-title">62 Years & Still Going</div>
                <div className="tl-desc">Today we serve thousands of families — and the heart of the business remains exactly where grandfather left it.</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section id="values">
        <Reveal delay={0.1}>
          <div className="values-header">
            <span className="section-label">What We Stand For</span>
            <h2 className="section-title">Principles <em>Passed Down</em></h2>
          </div>
        </Reveal>
        <div className="values-grid">
          <Reveal delay={0.2}>
            <div className="value-card">
              <span className="value-icon">🤝</span>
              <div className="value-name">Honest Work</div>
              <p className="value-text">No shortcuts, no excuses. Every garment is treated with the same diligence whether it belongs to a first-time customer or a 30-year regular.</p>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="value-card">
              <span className="value-icon">👨‍👩‍👧‍👦</span>
              <div className="value-name">Family First</div>
              <p className="value-text">We treat every customer's clothes the way we'd treat our own family's — with genuine care, attention, and a personal touch.</p>
            </div>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="value-card">
              <span className="value-icon">⏳</span>
              <div className="value-name">Time-Tested Quality</div>
              <p className="value-text">Sixty-two years of craft means we have seen every fabric, every stain, every challenge. That experience is your assurance.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services">
        <div className="services-inner">
          <Reveal delay={0.1}>
            <span className="section-label">What We Offer</span>
            <h2 className="section-title">Services Crafted<br /><em>With Care</em></h2>
          </Reveal>
          <div className="services-grid">
            <Reveal delay={0.2}>
              <div className="service-item">
                <div className="service-num">01</div>
                <div>
                  <div className="service-name">Wash & Fold</div>
                  <p className="service-desc">Gentle machine-wash with premium detergents, dried and folded with precision. The cornerstone of our craft.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="service-item">
                <div className="service-num">02</div>
                <div>
                  <div className="service-name">Dry Cleaning</div>
                  <p className="service-desc">Solvent-based care for delicate fabrics, formal wear, and heirlooms. Trusted by generations of families for their finest garments.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="service-item">
                <div className="service-num">03</div>
                <div>
                  <div className="service-name">Steam Ironing & Press</div>
                  <p className="service-desc">Crisp, wrinkle-free results using professional-grade steam presses. Shirts, sarees, suits — done to perfection every time.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.5}>
              <div className="service-item">
                <div className="service-num">04</div>
                <div>
                  <div className="service-name">Stain Treatment</div>
                  <p className="service-desc">60+ years of stain expertise. We've seen it all — oil, ink, rust, turmeric — and we know exactly what each one needs.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials">
        <span className="section-label">Voices of Trust</span>
        <h2 className="section-title" style={{ color: 'var(--cream)' }}>What Customers <em>Say</em></h2>
        <div className="testimonials-grid">
          <Reveal delay={0.1}>
            <div className="testi-card">
              <div className="testi-stars">★★★★★</div>
              <p className="testi-text">"My family has been coming here for over 30 years. The quality is always excellent and consistent."</p>
              <div className="testi-author">— Binita Mohanty</div>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="testi-card">
              <div className="testi-stars">★★★★★</div>
              <p className="testi-text">"I trusted them with my wedding lehenga worth ₹2 lakh. They handled it with extreme care and it came back looking brand new."</p>
              <div className="testi-author">— Sunita Sahoo</div>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="testi-card">
              <div className="testi-stars">★★★★★</div>
              <p className="testi-text">"My grandfather used to come here, and now even my children use their services. That is three generations of trust in Whitex."</p>
              <div className="testi-author">— Biswajit Dash</div>
            </div>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="testi-card">
              <div className="testi-stars">★★★★★</div>
              <p className="testi-text">"I have been a regular here for many years. Their attention to detail and fair pricing are why I never go anywhere else."</p>
              <div className="testi-author">— Dasharathi Nayak</div>
            </div>
          </Reveal>
          <Reveal delay={0.5}>
            <div className="testi-card">
              <div className="testi-stars">★★★★★</div>
              <p className="testi-text">"They are the only ones I trust with my silk sarees. Their steam press service is professional, gentle, and always delivered on time."</p>
              <div className="testi-author">— Lopamudra Jena</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <div style={{ textAlign: 'center' }}>
          <Reveal delay={0.1}>
            <span className="section-label">Common Questions</span>
            <h2 className="section-title">Frequently <em>Asked</em></h2>
          </Reveal>
        </div>
        <div className="faq-grid">
          <Reveal delay={0.2}>
            <div className="faq-item">
              <div className="faq-question">Where is Whitex Laundry located?</div>
              <div className="faq-answer">We are based at <strong>FV6Q+5M3 Fruit Market, Mahatab Rd, Chhatra Bazar, Cuttack, Odisha 753012</strong>. We exclusively serve customers in Cuttack, upholding our deep roots in Odisha.</div>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="faq-item">
              <div className="faq-question">Do you offer dry cleaning for heavy sarees?</div>
              <div className="faq-answer">Yes, we specialize in premium dry cleaning for silk sarees, lehengas, and formal wear. We have 62 years of experience handling delicate fabrics with care.</div>
            </div>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="faq-item">
              <div className="faq-question">What is the delivery time?</div>
              <div className="faq-answer">Our standard turnaround is 24 to 48 hours. Express services are available for those in a hurry.</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section id="cta">
        <Reveal delay={0.1}>
          <span className="section-label">Reach Out</span>
          <h2 className="section-title">Experience 62 Years of<br /><em>Family Care</em></h2>
          <p className="section-body" style={{ margin: '0 auto 2.5rem', textAlign: 'center' }}>
            Whether it's your everyday wear or your most precious garment, we'll treat it the way grandfather always insisted — with honesty, skill, and heart.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', alignItems: 'center' }}>
            <a href="tel:08763315590" className="btn-primary">Call 08763315590</a>
            <a href="https://wa.me/918763315590" className="btn-outline">WhatsApp Us</a>
          </div>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">Whitex Laundry</div>
        <div style={{ textAlign: 'right' }}>
          <div>Clean is a Family Tradition</div>
          <div>Family Owned &nbsp;·&nbsp; Three Generations</div>
          <div>© 2025 Whitex Laundry. All rights reserved.</div>
        </div>
      </footer>
      {/* FLOATING ACTION BUTTONS */}
      <div className="floating-contacts">
        <a href="tel:08763315590" className="float-btn float-call" aria-label="Call Us">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
        </a>
        <a href="https://wa.me/918763315590" className="float-btn float-wa" aria-label="WhatsApp Us">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>
        </a>
      </div>
    </>
  );
}

export default App;
