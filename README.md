<div align="center">

# 🎓 EduPro Academy

### Learn. Grow. Succeed.

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952b3?style=flat-square&logo=bootstrap)](https://getbootstrap.com)
[![Font Awesome](https://img.shields.io/badge/Font_Awesome-6.4.0-339af0?style=flat-square&logo=fontawesome)](https://fontawesome.com)
[![AOS Animation](https://img.shields.io/badge/AOS-2.3.1-000000?style=flat-square)](https://michalsnik.github.io/aos/)

*A modern, professional education academy website built with Bootstrap 5 and JavaScript*

---

<p align="center">
  <a href="https://haroonrashidzadran.github.io/Academy-Website/">
    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop" alt="EduPro Academy" width="100%">
  </a>
</p>

<p align="center">
  <a href="https://haroonrashidzadran.github.io/Academy-Website/">
    <strong>🌐 View Live Demo →</strong>
  </a>
</p>

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🎨 **Modern Design** | Clean, professional UI with Inter font and gradient accents |
| 📱 **Fully Responsive** | Mobile-first design that works on all devices |
| 🎬 **AOS Animations** | Smooth scroll animations throughout the site |
| 📊 **Animated Counters** | Dynamic statistics with counting animations |
| 🖼️ **Professional Images** | High-quality Unsplash photos for all sections |
| 🔍 **Course Search** | Filter and search courses by category, level |
| 👨‍🏫 **Instructor Profiles** | Beautiful instructor cards with expertise tags |
| 📝 **Contact Form** | Working form with validation and FAQ section |

## 📂 Project Structure

```
Academy-Website/
├── 📄 index.html          # Home page (hero, features, testimonials)
├── 📄 about.html         # About us, mission, values, timeline
├── 📄 courses.html        # All courses with search & filters
├── 📄 instructors.html    # Expert instructor profiles
├── 📄 contact.html       # Contact form + FAQ accordion
├── 📁 css/
│   └── 📄 style.css      # Custom professional styles
├── 📁 js/
│   └── 📄 main.js        # JavaScript with course data
└── 📁 images/
    └── hero-illustration.svg
```

## 🚀 Quick Start

### Local Development

```bash
# Clone the repository
git clone https://github.com/haroonrashidzadran/Academy-Website.git
cd Academy-Website

# Open in browser
# Simply open index.html in your browser
# OR use a local server:
npx serve .
```

### GitHub Pages Deployment

The site is automatically deployed to GitHub Pages:

**🔗 Live Demo**: https://haroonrashidzadran.github.io/Academy-Website/

---

## 🎨 Design Highlights

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Blue | `#2563eb` | Buttons, links, accents |
| Dark Blue | `#1e40af` | Hover states, footer |
| Accent Yellow | `#f59e0b` | Highlights, stars |
| Success Green | `#10b981` | Success badges |

### Typography

- **Font Family**: [Inter](https://fonts.google.com/specimen/Inter)
- **Headings**: Bold (700-800)
- **Body**: Regular (400)

---

## 📱 Pages Overview

### 🏠 Home Page
- Hero section with animated floating cards
- Statistics counter (50K+ students, 500+ courses)
- Feature cards with hover effects
- Popular courses carousel
- Testimonials with student reviews
- Call-to-action section

### 📖 About Page
- Mission statement
- Company values (Innovation, Accessibility, Excellence)
- Interactive timeline (2020-2026)
- Statistics overview

### 📚 Courses Page
- Search functionality
- Category filters (Development, Data Science, Design, Marketing)
- Level filters (Beginner, Intermediate, Advanced)
- Sorting options
- Course cards with pricing

### 👨‍🏫 Instructors Page
- Professional profile cards
- Profile photos
- Bio and expertise tags
- Stats (courses, students, rating)

### 📞 Contact Page
- Contact form with validation
- Contact information cards
- FAQ accordion
- Business hours

---

## 🔧 Customization

### Adding Courses

Edit `js/main.js` and add to the `coursesData` array:

```javascript
{
    id: 7,
    title: 'Your Course Title',
    category: 'Development',
    image: 'https://image-url.jpg',
    price: 49.99,
    oldPrice: 199.99,
    rating: 4.8,
    students: 1000,
    duration: '10 hours',
    level: 'Beginner',
    badge: 'New',
    badgeColor: 'bg-primary',
    instructor: 'Instructor Name'
}
```

### Changing Colors

Edit `css/style.css` - Variables section:

```css
:root {
    --primary-color: #2563eb;
    --primary-dark: #1e40af;
    --accent-color: #f59e0b;
}
```

### Adding Instructors

Edit `js/main.js` - `instructorsData` array:

```javascript
{
    name: 'New Instructor',
    title: 'Job Title',
    bio: 'Short bio description',
    image: 'https://photo-url.jpg',
    courses: 5,
    students: 10000,
    rating: 4.9,
    expertise: ['Skill 1', 'Skill 2', 'Skill 3']
}
```

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5) | Markup language |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3) | Styling |
| ![Bootstrap 5](https://img.shields.io/badge/Bootstrap_5-7952b3?style=flat-square&logo=bootstrap) | CSS Framework |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript) | Interactivity |
| ![Font Awesome](https://img.shields.io/badge/Font_Awesome-339AF0?style=flat-square&logo=fontawesome) | Icons |
| ![AOS](https://img.shields.io/badge/AOS_Animation-000000?style=flat-square) | Scroll animations |
| ![Unsplash](https://img.shields.io/badge/Unsplash-000000?style=flat-square&logo=unsplash) | Images |

---

## 📊 Statistics

| Metric | Value |
|--------|-------|
| ⭐ Stars | [GitHub⭐](https://github.com/haroonrashidzadran/Academy-Website/stargazers) |
| 🍴 Forks | [GitHub🍴](https://github.com/haroonrashidzadran/Academy-Website/network/members) |
| 👁️ Views | [GitHub👁️](https://github.com/haroonrashidzadran/Academy-Website/tree/main) |

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact

**Haroon Khan**

- 🌐 Website: [haroonrashidzadran.github.io/Academy-Website](https://haroonrashidzadran.github.io/Academy-Website/)
- 📧 Email: info@edupro.academy
- 🐙 GitHub: [@haroonrashidzadran](https://github.com/haroonrashidzadran)

---

<div align="center">

**⭐ Star this repository if you found it useful!**

*Built with ❤️ by [Haroon Khan](https://github.com/haroonrashidzadran)*

</div>
