import React from 'react';
import EventImageTemplate from '../components/ui/EventImageTemplate';

/**
 * EventImageTemplateDemo - Visual showcase of all available themes and configurations
 *
 * This component demonstrates all 8 color themes and various configurations
 * of the EventImageTemplate component. Use this as a reference when choosing
 * themes for your events.
 */
const EventImageTemplateDemo = () => {
  const themes = [
    { name: 'purple', description: 'General events, evening programs', example: 'KAR' },
    { name: 'pink', description: "Mother's Day, celebrations", example: 'MOM' },
    { name: 'blue', description: 'Professional, book releases', example: 'BOK' },
    { name: 'green', description: 'Environmental, health programs', example: 'ECO' },
    { name: 'orange', description: 'BBQ, outdoor events', example: 'BBQ' },
    { name: 'teal', description: 'Community, technology events', example: 'TEC' },
    { name: 'indigo', description: 'Night events, formal ceremonies', example: 'GAL' },
    { name: 'red', description: 'Urgent appeals, fundraisers', example: 'FUN' },
  ];

  const currentArticles = [
    { abbreviation: 'KAR', month: 'FEB', theme: 'purple', title: 'Karaoke Night' },
    { abbreviation: 'MOM', month: 'FEB', theme: 'pink', title: "Mother's Day" },
    { abbreviation: 'BBQ', month: 'JAN', theme: 'orange', title: 'Backyard Gathering' },
    { abbreviation: 'BOK', month: 'JAN', theme: 'blue', title: 'Book Release' },
  ];

  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '32px', marginBottom: '10px' }}>Event Image Template Demo</h1>
      <p style={{ color: '#666', marginBottom: '40px' }}>
        Visual showcase of all available themes and configurations
      </p>

      {/* Current Articles Section */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Current Article Images</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px'
        }}>
          {currentArticles.map((config, index) => (
            <div key={index} style={{
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              overflow: 'hidden'
            }}>
              <EventImageTemplate
                abbreviation={config.abbreviation}
                month={config.month}
                theme={config.theme}
                width={400}
                height={300}
              />
              <div style={{ padding: '15px' }}>
                <h3 style={{ fontSize: '16px', marginBottom: '5px' }}>{config.title}</h3>
                <p style={{ fontSize: '14px', color: '#666' }}>
                  {config.abbreviation} • {config.month} • {config.theme}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* All Themes Section */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>All Available Themes</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px'
        }}>
          {themes.map((theme, index) => (
            <div key={index} style={{
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              overflow: 'hidden'
            }}>
              <EventImageTemplate
                abbreviation={theme.example}
                month="JAN"
                theme={theme.name}
                width={400}
                height={300}
              />
              <div style={{ padding: '15px' }}>
                <h3 style={{
                  fontSize: '16px',
                  marginBottom: '5px',
                  textTransform: 'capitalize'
                }}>
                  {theme.name}
                </h3>
                <p style={{ fontSize: '14px', color: '#666' }}>
                  {theme.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Size Variations Section */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Size Variations</h2>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '30px',
          alignItems: 'center'
        }}>
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Small (300x225)</h3>
            <EventImageTemplate
              abbreviation="FUN"
              month="MAR"
              theme="teal"
              width={300}
              height={225}
            />
          </div>

          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Medium (400x300) - Default</h3>
            <EventImageTemplate
              abbreviation="FUN"
              month="MAR"
              theme="teal"
              width={400}
              height={300}
            />
          </div>

          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Large (600x450)</h3>
            <EventImageTemplate
              abbreviation="FUN"
              month="MAR"
              theme="teal"
              width={600}
              height={450}
            />
          </div>
        </div>
      </section>

      {/* Month Showcase Section */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>All Months</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '15px'
        }}>
          {['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'].map((month, index) => (
            <div key={index} style={{
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              overflow: 'hidden'
            }}>
              <EventImageTemplate
                abbreviation="EVT"
                month={month}
                theme="indigo"
                width={250}
                height={188}
              />
              <div style={{ padding: '10px', textAlign: 'center' }}>
                <p style={{ fontSize: '14px', fontWeight: 'bold' }}>{month}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Usage Code Section */}
      <section>
        <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Quick Usage</h2>
        <div style={{
          backgroundColor: '#f5f5f5',
          padding: '20px',
          borderRadius: '8px',
          fontFamily: 'monospace',
          fontSize: '14px'
        }}>
          <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
{`import EventImageTemplate from './components/ui/EventImageTemplate';

// Basic usage
<EventImageTemplate
  abbreviation="KAR"
  month="FEB"
  theme="purple"
/>

// From article data
<EventImageTemplate
  abbreviation={article.imageTemplate.abbreviation}
  month={article.imageTemplate.month}
  theme={article.imageTemplate.theme}
  width={800}
  height={400}
/>`}
          </pre>
        </div>
      </section>
    </div>
  );
};

export default EventImageTemplateDemo;
