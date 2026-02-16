# Event Image Template

A dynamic SVG-based event image generator that creates customizable event cards with abbreviations, months, and color themes.

## Features

- **Dynamic Text**: Display 3-letter abbreviations or full titles
- **Month Badge**: Circular badge showing the month
- **8 Color Themes**: purple, green, blue, orange, pink, teal, indigo, red
- **Responsive**: SVG-based for perfect scaling
- **Easy to Use**: Simple props interface

## Usage

### Basic Usage

```jsx
import EventImageTemplate from './components/ui/EventImageTemplate';

<EventImageTemplate
  abbreviation="KAR"
  month="FEB"
  theme="purple"
/>
```

### With Full Title

```jsx
<EventImageTemplate
  abbreviation="KAR"
  month="FEB"
  theme="purple"
  title="Karaoke Night"
/>
```

### Custom Size

```jsx
<EventImageTemplate
  abbreviation="MOM"
  month="MAY"
  theme="pink"
  width={600}
  height={400}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `abbreviation` | string | 'EVT' | 3-letter abbreviation for the event |
| `month` | string | 'JAN' | 3-letter month abbreviation |
| `theme` | string | 'purple' | Color theme name |
| `title` | string | '' | Optional full title (overrides abbreviation) |
| `width` | number | 400 | Image width |
| `height` | number | 300 | Image height |
| `className` | string | '' | Additional CSS classes |

## Available Themes

1. **purple** - Purple/Indigo
2. **green** - Green
3. **blue** - Blue
4. **orange** - Orange
5. **pink** - Pink/Magenta
6. **teal** - Teal/Cyan
7. **indigo** - Indigo
8. **red** - Red

## Integration with News Articles

The component integrates with the news.json data structure:

```json
{
  "id": 1,
  "title": "Karaoke Night",
  "imageTemplate": {
    "abbreviation": "KAR",
    "month": "FEB",
    "theme": "purple"
  }
}
```

### Example Integration

```jsx
import newsData from '../data/news.json';
import EventImageTemplate from './components/ui/EventImageTemplate';

const NewsCard = ({ article }) => {
  const { imageTemplate } = article;

  return (
    <div className="news-card">
      <EventImageTemplate
        abbreviation={imageTemplate.abbreviation}
        month={imageTemplate.month}
        theme={imageTemplate.theme}
      />
      <h3>{article.title}</h3>
      <p>{article.excerpt}</p>
    </div>
  );
};
```

## Helper Function: generateEventImageURL

For cases where you need a data URL instead of a React component:

```jsx
import { generateEventImageURL } from './components/ui/EventImageTemplate';

const imageUrl = generateEventImageURL('KAR', 'FEB', 'purple');

<img src={imageUrl} alt="Event" />
```

## Customization

### Adding New Themes

Edit the `COLOR_THEMES` object in EventImageTemplate.jsx:

```javascript
const COLOR_THEMES = {
  // ... existing themes
  yellow: {
    background: '#F6E05E',
    overlay: '#D69E2E',
    circle: '#744210',
  },
};
```

### Modifying SVG Layout

The SVG structure can be customized by editing the component's JSX:

- Background: `<rect width="400" height="300" fill={colors.background}/>`
- Overlay: `<rect x="50" y="100" width="300" height="100" .../>`
- Circle position: `<circle cx="350" cy="50" r="30" .../>`

## Event Abbreviation Guidelines

Suggested abbreviations for common events:

- **KAR** - Karaoke
- **MOM** - Mother's Day
- **BBQ** - Backyard/BBQ
- **BOK** - Book Release
- **FUN** - Fundraiser
- **GAL** - Gala
- **RUN** - Run/Marathon
- **ART** - Art Show
- **MUS** - Music Event
- **SPT** - Sports Event

## Examples

### Karaoke Event
```jsx
<EventImageTemplate abbreviation="KAR" month="FEB" theme="purple" />
```

### Mother's Day
```jsx
<EventImageTemplate abbreviation="MOM" month="MAY" theme="pink" />
```

### Backyard BBQ
```jsx
<EventImageTemplate abbreviation="BBQ" month="JAN" theme="orange" />
```

### Book Release
```jsx
<EventImageTemplate abbreviation="BOK" month="JAN" theme="blue" />
```
