# WordPress Migration Guide

This React-based SpareRows Technology website is built with modular, reusable components that can be easily ported to WordPress. Here's how to migrate the structure:

## File Structure for WordPress

### Theme Template Files

```
wp-content/themes/sparerows/
├── index.php (Home page template)
├── page.php (Default page template)
├── header.php (Header component)
├── footer.php (Footer component)
├── functions.php (Theme functions)
├── style.css (Main stylesheet)
├── assets/
│   ├── js/
│   │   ├── testimonials.js
│   │   ├── contact-form.js
│   │   └── main.js
│   ├── css/
│   │   ├── components.css
│   │   └── responsive.css
│   └── images/
└── template-parts/
    ├── testimonials.php
    ├── hero-section.php
    ├── services-grid.php
    └── contact-form.php
```

## Key Components to Port

### 1. Header (header.php)
```php
<?php
/**
 * Header Template
 * Based on src/components/Header.tsx
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
    <header class="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <!-- Logo -->
                <a href="<?php echo home_url(); ?>" class="flex items-center space-x-2">
                    <div class="w-8 h-8 rounded-full gradient-primary flex items-center justify-center">
                        <span class="text-white font-bold text-lg">S</span>
                    </div>
                    <span class="font-bold text-xl font-poppins text-gradient">
                        SpareRows
                    </span>
                </a>

                <!-- Navigation -->
                <nav class="hidden md:flex space-x-1">
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'primary',
                        'container' => false,
                        'menu_class' => 'nav-menu',
                        'walker' => new Custom_Nav_Walker()
                    ));
                    ?>
                </nav>

                <!-- CTA Button -->
                <div class="hidden md:flex">
                    <a href="<?php echo get_permalink(get_page_by_path('contact')); ?>" 
                       class="gradient-primary hover:opacity-90 transition-opacity font-medium animate-pulse-glow btn">
                        Get Started
                    </a>
                </div>
            </div>
        </div>
    </header>
```

### 2. Testimonials Component (template-parts/testimonials.php)
```php
<?php
/**
 * Testimonials Section
 * Based on src/components/Testimonials.tsx
 */

$testimonials = array(
    array(
        'name' => 'Sarah Chen',
        'position' => 'CTO',
        'company' => 'TechStart Solutions',
        'content' => 'SpareRows completely transformed our infrastructure...',
        'rating' => 5,
        'avatar' => 'SC'
    ),
    // ... more testimonials
);
?>

<section class="py-20 bg-secondary" id="testimonials">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4 font-poppins">
                What Our Clients Say
            </h2>
            <p class="text-xl text-muted-foreground max-w-2xl mx-auto">
                Trusted by startups and enterprises worldwide
            </p>
        </div>

        <div class="testimonials-slider" data-testimonials='<?php echo json_encode($testimonials); ?>'>
            <!-- Testimonials will be rendered by JavaScript -->
        </div>
    </div>
</section>
```

### 3. Contact Form (template-parts/contact-form.php)
```php
<?php
/**
 * Contact Form
 * Based on src/pages/Contact.tsx
 */
?>

<form id="contact-form" class="contact-form" action="<?php echo admin_url('admin-post.php'); ?>" method="post">
    <?php wp_nonce_field('contact_form_action', 'contact_form_nonce'); ?>
    <input type="hidden" name="action" value="submit_contact_form">
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
            <label for="name">Full Name *</label>
            <input type="text" id="name" name="name" required 
                   class="mt-1 w-full px-3 py-2 border border-input bg-background text-foreground rounded-md">
        </div>
        <div>
            <label for="email">Email Address *</label>
            <input type="email" id="email" name="email" required 
                   class="mt-1 w-full px-3 py-2 border border-input bg-background text-foreground rounded-md">
        </div>
    </div>
    
    <!-- More form fields -->
    
    <button type="submit" class="w-full gradient-primary hover:opacity-90 font-medium text-lg py-3 btn">
        Send Message
    </button>
</form>
```

## functions.php Setup

```php
<?php
/**
 * Theme Functions
 */

// Enqueue styles and scripts
function sparerows_enqueue_assets() {
    wp_enqueue_style('sparerows-style', get_stylesheet_uri());
    wp_enqueue_style('sparerows-components', get_template_directory_uri() . '/assets/css/components.css');
    
    wp_enqueue_script('sparerows-main', get_template_directory_uri() . '/assets/js/main.js', array('jquery'), '1.0.0', true);
    wp_enqueue_script('sparerows-testimonials', get_template_directory_uri() . '/assets/js/testimonials.js', array('jquery'), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'sparerows_enqueue_assets');

// Register navigation menus
function sparerows_register_menus() {
    register_nav_menus(array(
        'primary' => 'Primary Navigation',
        'footer' => 'Footer Navigation'
    ));
}
add_action('after_setup_theme', 'sparerows_register_menus');

// Handle contact form submission
function handle_contact_form_submission() {
    if (!wp_verify_nonce($_POST['contact_form_nonce'], 'contact_form_action')) {
        wp_die('Security check failed');
    }
    
    $name = sanitize_text_field($_POST['name']);
    $email = sanitize_email($_POST['email']);
    $message = sanitize_textarea_field($_POST['message']);
    
    // Send email or save to database
    // Redirect with success message
    wp_redirect(add_query_arg('contact', 'success', wp_get_referer()));
    exit;
}
add_action('admin_post_submit_contact_form', 'handle_contact_form_submission');
add_action('admin_post_nopriv_submit_contact_form', 'handle_contact_form_submission');
```

## CSS Migration (style.css)

```css
/*
Theme Name: SpareRows Technology
Description: DevOps & Cloud Solutions Business Theme
Version: 1.0.0
*/

/* Import the design system from index.css */
:root {
    /* Core Brand Colors - HSL format for compatibility */
    --background: 210 100% 97%;
    --foreground: 215 25% 27%;
    --primary: 211 100% 50%;
    --primary-light: 195 100% 50%;
    --dark-navy: 214 61% 12%;
    /* ... rest of the CSS variables from index.css */
}

/* Component styles */
.gradient-primary {
    background: linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary-light)));
}

.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 1.5rem;
    border-radius: 0.375rem;
    font-weight: 500;
    transition: all 0.2s;
    text-decoration: none;
    border: none;
    cursor: pointer;
}

/* Responsive utilities */
@media (max-width: 768px) {
    .container {
        padding-left: 1rem;
        padding-right: 1rem;
    }
}
```

## JavaScript Migration (assets/js/testimonials.js)

```javascript
/**
 * Testimonials Slider
 * Based on Testimonials.tsx component
 */

class TestimonialsSlider {
    constructor(element) {
        this.element = element;
        this.testimonials = JSON.parse(element.dataset.testimonials);
        this.currentIndex = 0;
        this.autoAdvanceInterval = null;
        
        this.init();
    }
    
    init() {
        this.render();
        this.bindEvents();
        this.startAutoAdvance();
    }
    
    render() {
        // Render testimonials HTML
        // Implementation similar to React component
    }
    
    nextTestimonial() {
        this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
        this.updateSlider();
    }
    
    prevTestimonial() {
        this.currentIndex = this.currentIndex === 0 ? this.testimonials.length - 1 : this.currentIndex - 1;
        this.updateSlider();
    }
    
    startAutoAdvance() {
        this.autoAdvanceInterval = setInterval(() => {
            this.nextTestimonial();
        }, 6000);
    }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', function() {
    const testimonialsSlider = document.querySelector('.testimonials-slider');
    if (testimonialsSlider) {
        new TestimonialsSlider(testimonialsSlider);
    }
});
```

## Migration Checklist

- [ ] Convert React components to PHP template parts
- [ ] Port CSS design system to WordPress theme
- [ ] Implement JavaScript functionality without React
- [ ] Set up contact form handling in PHP
- [ ] Configure WordPress menus and navigation
- [ ] Add SEO meta tags and structured data
- [ ] Test responsive design across devices
- [ ] Optimize images and assets for WordPress
- [ ] Set up proper WordPress hooks and filters
- [ ] Implement security best practices

## SEO Considerations

- Use proper semantic HTML structure
- Implement schema.org structured data
- Optimize meta titles and descriptions
- Add proper alt tags to images
- Ensure fast loading times
- Mobile-first responsive design
- Clean URL structure

This modular approach ensures the WordPress version maintains the same design and functionality as the React version while following WordPress best practices.