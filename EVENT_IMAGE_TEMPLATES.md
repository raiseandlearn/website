# Event Image Templates - Complete Guide

This document explains the new dynamic event image template system that replaces static SVG files with customizable, text-based templates.

## 🎨 What Was Created

### 1. **EventImageTemplate Component**
Location: `src/components/ui/EventImageTemplate.jsx`

A React component that generates SVG-based event images dynamically with:
- 3-letter abbreviations (e.g., "KAR" for Karaoke)
- Month badges in a circle
- 8 different color themes
- Fully customizable sizes

### 2. **Event Image Configuration**
Location: `src/utils/eventImageConfig.js`

Helper utilities for:
- Mapping article IDs to template configurations
- Parsing dates to month abbreviations
- Centralized configuration management

### 3. **Updated News Data**
Location: `src/data/news.json`

Each article now includes an `imageTemplate` object:
```json
{
  "id": 1,
  "imageTemplate": {
    "abbreviation": "KAR",
    "month": "FEB",
    "theme": "purple"
  }
}
```

## 🎨 Available Color Themes

### Purple (Default)
- **Use for**: General events, evening programs
- **Code**: `theme="purple"`
- Background: `#667EEA`, Overlay: `#5A67D8`

### Pink
- **Use for**: Mother's Day, women's events, celebrations
- **Code**: `theme="pink"`
- Background: `#ED64A6`, Overlay: `#D53F8C`

### Blue
- **Use for**: Professional events, book releases, formal gatherings
- **Code**: `theme="blue"`
- Background: `#4299E1`, Overlay: `#3182CE`

### Green
- **Use for**: Environmental events, health programs, growth initiatives
- **Code**: `theme="green"`
- Background: `#48BB78`, Overlay: `#38A169`

### Orange
- **Use for**: BBQ, outdoor events, autumn activities
- **Code**: `theme="orange"`
- Background: `#ED8936`, Overlay: `#DD6B20`

### Teal
- **Use for**: Water activities, community programs, technology events
- **Code**: `theme="teal"`
- Background: `#38B2AC`, Overlay: `#319795`

### Indigo
- **Use for**: Night events, formal ceremonies, educational programs
- **Code**: `theme="indigo"`
- Background: `#5A67D8`, Overlay: `#4C51BF`

### Red
- **Use for**: Urgent appeals, holiday events, fundraisers
- **Code**: `theme="red"`
- Background: `#F56565`, Overlay: `#E53E3E`

## 📝 Current Article Templates

### Article 1: Karaoke Night
```json
{
  "abbreviation": "KAR",
  "month": "FEB",
  "theme": "purple"
}
```
- **Karaoke** → KAR
- February event
- Purple theme for evening entertainment

### Article 2: Mother's Day Food Sale
```json
{
  "abbreviation": "MOM",
  "month": "FEB",
  "theme": "pink"
}
```
- **Mother's Day** → MOM
- February event
- Pink theme for Mother's Day celebration

### Article 3: Backyard Gathering
```json
{
  "abbreviation": "BBQ",
  "month": "JAN",
  "theme": "orange"
}
```
- **BBQ/Backyard** → BBQ
- January event
- Orange theme for outdoor gathering

### Article 4: Book Release
```json
{
  "abbreviation": "BOK",
  "month": "JAN",
  "theme": "blue"
}
```
- **Book** → BOK
- January event
- Blue theme for literary event

## 🔧 How to Use

### Method 1: Direct Component Usage

```jsx
import EventImageTemplate from './components/ui/EventImageTemplate';

<EventImageTemplate
  abbreviation="KAR"
  month="FEB"
  theme="purple"
/>
```

### Method 2: From News Data

```jsx
import newsData from './data/news.json';
import EventImageTemplate from './components/ui/EventImageTemplate';

const article = newsData.articles[0];

<EventImageTemplate
  abbreviation={article.imageTemplate.abbreviation}
  month={article.imageTemplate.month}
  theme={article.imageTemplate.theme}
/>
```

### Method 3: Generate Data URL

```jsx
import { generateEventImageURL } from './components/ui/EventImageTemplate';

const imageUrl = generateEventImageURL('KAR', 'FEB', 'purple');

<img src={imageUrl} alt="Event" />
```

## 🆕 Adding New Events

When adding a new event article, follow these steps:

1. **Choose an abbreviation** (3 letters that represent your event)
   - Keep it short and memorable
   - Use capital letters
   - Examples: FUN (Fundraiser), GAL (Gala), RUN (Marathon)

2. **Select the month** (3-letter abbreviation)
   - JAN, FEB, MAR, APR, MAY, JUN, JUL, AUG, SEP, OCT, NOV, DEC

3. **Pick a color theme**
   - Consider the event type and mood
   - Use the color guide above

4. **Add to news.json**:
```json
{
  "id": 5,
  "title": "Your Event Title",
  "imageTemplate": {
    "abbreviation": "FUN",
    "month": "MAR",
    "theme": "teal"
  }
}
```

## 📋 Abbreviation Suggestions

Common event types and their suggested abbreviations:

| Event Type | Abbreviation | Theme |
|------------|--------------|-------|
| Karaoke | KAR | purple |
| Mother's Day | MOM | pink |
| Father's Day | DAD | blue |
| BBQ/Picnic | BBQ | orange |
| Book Release | BOK | blue |
| Fundraiser | FUN | red |
| Gala | GAL | indigo |
| Marathon/Run | RUN | teal |
| Art Show | ART | purple |
| Music Concert | MUS | indigo |
| Sports Event | SPT | green |
| Workshop | WRK | blue |
| Festival | FES | orange |
| Auction | AUC | purple |
| Dinner | DIN | red |

## 🎯 Integration Example

To replace the current static images with templates in NewsArticle.jsx:

**Before:**
```jsx
<img
  src={IMAGES.events[article.image]}
  alt={article.title}
  className="article-image"
/>
```

**After:**
```jsx
<EventImageTemplate
  abbreviation={article.imageTemplate.abbreviation}
  month={article.imageTemplate.month}
  theme={article.imageTemplate.theme}
  width={800}
  height={400}
  className="article-image"
/>
```

## 🔄 Migration Checklist

To fully implement the template system:

- [x] Create EventImageTemplate component
- [x] Add imageTemplate to news.json
- [x] Create configuration utilities
- [x] Write documentation
- [ ] Update NewsArticle.jsx to use templates
- [ ] Update Home.jsx to use templates
- [ ] Update any other components displaying event images
- [ ] Remove or archive old static SVG files (optional)

## 🎨 Customization Options

### Change Colors

Edit `COLOR_THEMES` in EventImageTemplate.jsx:

```javascript
const COLOR_THEMES = {
  custom: {
    background: '#YOUR_COLOR',
    overlay: '#DARKER_SHADE',
    circle: '#ACCENT_COLOR',
  },
};
```

### Change Layout

Modify the SVG structure in EventImageTemplate.jsx:
- Circle position: `<circle cx="350" cy="50" r="30" .../>`
- Text position: `<text x="50%" y="50%" .../>`
- Rectangle dimensions: `<rect x="50" y="100" width="300" height="100" .../>`

### Add Fonts

Update the font-family in the component:
```jsx
fontFamily="'Your Font', Arial, sans-serif"
```

## 📚 Additional Resources

- Full component documentation: `src/components/ui/EventImageTemplate.md`
- Example integration: `src/examples/NewsArticleWithTemplate.jsx`
- Configuration helper: `src/utils/eventImageConfig.js`

## 🐛 Troubleshooting

**Images not showing?**
- Check that imageTemplate exists in the article data
- Verify abbreviation, month, and theme are valid strings

**Colors look wrong?**
- Ensure theme name matches a key in COLOR_THEMES
- Check for typos in theme names (case-sensitive)

**Text too long?**
- Abbreviations should be 3 letters max
- Use the `title` prop for longer text (auto-sizes)

## 🎉 Benefits

✅ **Consistent Design**: All event images follow the same visual pattern
✅ **Easy Updates**: Change text/colors without editing image files
✅ **Scalable**: SVG-based images scale perfectly
✅ **Flexible**: 8 color themes with easy customization
✅ **Maintainable**: No need to manage multiple image files
✅ **Fast**: Generates instantly, no image loading
