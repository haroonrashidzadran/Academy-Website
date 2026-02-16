# EduPro Academy - Professional Education Website

A modern, responsive, and professional education academy website built with HTML, CSS, Bootstrap 5, and JavaScript.

![EduPro Academy](https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop)

## ✨ Professional Features

| Feature | Description |
|---------|-------------|
| **Modern Design** | Clean, professional UI with Inter font |
| **Professional Photos** | High-quality Unsplash images |
| **AOS Animations** | Smooth scroll animations |
| **Animated Counters** | Animated statistics |
| **Floating Cards** | Hero section animations |
| **Responsive** | Mobile-first design |
| **5 Pages** | Home, About, Courses, Instructors, Contact |

## 📁 Project Structure

```
education-academy/
├── index.html           # Home page (hero, features, testimonials)
├── about.html          # About us, mission, timeline
├── courses.html        # Courses with filters & search
├── instructors.html    # Expert instructors profiles
├── contact.html        # Contact form + FAQ
├── css/style.css       # Professional custom styles
├── js/main.js         # JavaScript with course data
└── images/            # (uses online Unsplash images)
```

## 🚀 Quick Start

### Local Development

```bash
# Open in browser
start index.html
# or
xdg-open index.html
```

## 🎨 Design Highlights

- **Font**: Inter (Google Fonts)
- **Colors**: Primary (#2563eb), Accent (#f59e0b)
- **Animations**: AOS (Animate On Scroll)
- **Icons**: Font Awesome 6
- **Framework**: Bootstrap 5

## 📱 Pages

| Page | Key Features |
|------|-------------|
| **Home** | Hero with floating cards, stats counter, features, testimonials, CTA |
| **About** | Mission, values, interactive timeline |
| **Courses** | Search, category filter, level filter, sorting |
| **Instructors** | Profile cards with expertise tags |
| **Contact** | Form, contact info cards, accordion FAQ |

## 🔧 Customization

### Colors
Edit `css/style.css`:
```css
:root {
    --primary-color: #2563eb;
    --accent-color: #f59e0b;
}
```

### Add Courses
Edit `js/main.js`:
```javascript
{
    id: 7,
    title: 'New Course',
    category: 'Development',
    image: 'https://...',
    price: 49.99,
    // ... more fields
}
```

## 🖼️ Professional Images Used

- Hero: Team collaboration photos
- Courses: Tech & business imagery
- Instructors: Professional headshots
- All from Unsplash

## 📄 License

MIT License - Free for personal and commercial use.

## 🤝 Contributing

Contributions welcome! Please open issues or pull requests.
