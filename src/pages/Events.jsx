import React from 'react';
import './Events.css';

const getYouTubeId = (url) => {
  try {
    const u = new URL(url);
    if (u.hostname === 'youtu.be') return u.pathname.replace('/', '') || null;
    if (u.searchParams.get('v')) return u.searchParams.get('v');

    const match = u.pathname.match(/\/embed\/([^/]+)/);
    return match?.[1] || null;
  } catch {
    return null;
  }
};

const getYouTubeThumbnail = (url) => {
  const id = getYouTubeId(url);
  return id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : '';
};

const EventsPage = () => {
  const karaokeUrl = 'https://www.youtube.com/watch?v=4Eb3JacDA64';
  const karaokeThumbnail = getYouTubeThumbnail(karaokeUrl);
  const kaggaUrl = 'https://www.youtube.com/watch?v=f886sdsY1-w';
  const kaggaThumbnail = getYouTubeThumbnail(kaggaUrl);
  const mothersDayUrl = 'https://youtu.be/birrKVwPzDE';
  const mothersDayThumbnail = getYouTubeThumbnail(mothersDayUrl);

  return (
    <div className="events-page">
      <main className="events-main">
        <section className="events-hero">
          <div className="container">
            <h1 className="events-title">Events</h1>

            <div className="event-highlight">
              <div className="event-grid">
                <a className="event-thumb" href={karaokeUrl} target="_blank" rel="noreferrer">
                  <img src={karaokeThumbnail} alt="Donation event video thumbnail" loading="lazy" />
                  <span className="event-thumb-play" aria-hidden="true">▶</span>
                </a>

                <div className="event-details">
                <h3>Food for Cause – SSCF Karaoke Night</h3>
                  <p>
                    On November 22nd, Raise & Learn proudly hosted our <strong>Food for Cause</strong> initiative at the SSCF Karaoke Night, bringing together music, community, and meaningful impact.
                  </p>
                  <p>
                    Through the generous support of attendees, we raised funds by serving food during the event — and donated 100% of the proceeds to support cancer patients.
                  </p>
                  <p>
                    What started as a night of songs and celebration became an opportunity to give back. At Raise & Learn, we believe every gathering can become a platform for compassion and change.
                  </p>

                  <p className="event-video-link">
                    
                    <a href={karaokeUrl} target="_blank" rel="noreferrer">
                      Food for Cause at the SSCF Karaokke November 22, 2025
                    </a>
                  
                    <br />
                    
                  </p>
                </div>
              </div>
              
            </div>
            <div className="event-highlight">
              <div className="event-grid">
                <a className="event-thumb" href={kaggaUrl} target="_blank" rel="noreferrer">
                  <img src={kaggaThumbnail} alt="Donation event video thumbnail" loading="lazy" />
                  <span className="event-thumb-play" aria-hidden="true">▶</span>
                </a>

                <div className="event-details">
                <h3>Kagga 101 – A Book Release with a Purpose</h3>
                <br />
                  <p>
                    Raise & Learn proudly hosted <strong>Kagga 101</strong>, a special book release event held in our own backyard. Written by author Ram Gopal, the book explores the life and legacy of DVG, celebrating his wisdom, values, and timeless contributions.
                  </p>
                  <p>
                    More than a literary gathering, this event was a celebration of culture, community, and compassion. Thanks to the generous support of attendees, we were able to donate 100% of the funds raised to support cancer patients.
                  </p>
                  <p>
                    At Raise & Learn, every event is an opportunity to empower, educate, and elevate — and Kagga 101 was a meaningful example of how community-driven initiatives can create real impact.
                  </p>
                  <p className="event-video-link">
                    <a href={kaggaUrl} target="_blank" rel="noreferrer">
                      Kagga 101 – A Book Release with a Purpose
                    </a>
                  </p>
                </div>
              </div>
              
            </div>

            <div className="event-highlight">
              <div className="event-grid">
                <a className="event-thumb" href={mothersDayUrl} target="_blank" rel="noreferrer">
                  <img src={mothersDayThumbnail} alt="Mothers day 2025 event video thumbnail" loading="lazy" />
                  <span className="event-thumb-play" aria-hidden="true">▶</span>
                </a>

                <div className="event-details">
                <h3>Our Launch – Mother’s Day 2025</h3>
                <br />
                  <p>
                    Raise & Learn was officially launched on Mother’s Day 2025 — a day that symbolizes care, strength, and the power of nurturing futures.
                  </p>
                  <p>
                    In this memorable inaugural event, we raised $2,000, with 100% of the funds dedicated to supporting STEM education for underprivileged children.
                  </p>
                  <p>
                    We are proud to collaborate with SEWA International in this effort, working together to expand access to science, technology, engineering, and math opportunities for students who need it most.
                  </p>
                  <p>
                    This launch marked the beginning of our mission to empower communities through education and healthcare — turning meaningful moments into lasting impact.
                  </p>
                  <p className="event-video-link">
                    <a href={mothersDayUrl} target="_blank" rel="noreferrer">
                      Mothers Day 2025 Launch Event
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <p className="event-followup event-followup--in-card">
              Thank you to everyone who supports Raise and Learn. Your time, donations, and encouragement help us
              continue providing meaningful support to families in need.
            </p>
          </div>
        </section>
        
      </main>
      
    </div>
  );
};

export default EventsPage;
