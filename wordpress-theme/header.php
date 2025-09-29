<?php
/**
 * Header Template
 *
 * @package SpareRows
 * @since 1.0.0
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<a class="skip-link" href="#main"><?php esc_html_e('Skip to main content', 'sparerows'); ?></a>

<header class="fixed top-0 left-0 right-0 z-50 bg-background backdrop-blur-sm border-b border-border">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
            <!-- Logo -->
            <div class="flex items-center space-x-2">
                <?php if (has_custom_logo()) : ?>
                    <?php the_custom_logo(); ?>
                <?php else : ?>
                    <a href="<?php echo esc_url(home_url('/')); ?>" class="flex items-center space-x-2" rel="home">
                        <div class="w-8 h-8 rounded-full gradient-primary flex items-center justify-center">
                            <span class="text-white font-bold text-lg">S</span>
                        </div>
                        <span class="font-bold text-xl font-poppins text-gradient">
                            <?php bloginfo('name'); ?>
                        </span>
                    </a>
                <?php endif; ?>
            </div>

            <!-- Desktop Navigation -->
            <nav class="hidden md:flex space-x-1" role="navigation" aria-label="<?php esc_attr_e('Primary Navigation', 'sparerows'); ?>">
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'container'      => false,
                    'menu_class'     => 'nav-menu',
                    'fallback_cb'    => 'sparerows_default_menu',
                    'walker'         => new SpareRows_Nav_Walker(),
                ));
                ?>
            </nav>

            <!-- CTA Button -->
            <div class="hidden md:flex">
                <a href="<?php echo esc_url(get_permalink(get_page_by_path('contact'))); ?>" 
                   class="btn btn-primary animate-pulse-glow">
                    <?php esc_html_e('Get Started', 'sparerows'); ?>
                </a>
            </div>

            <!-- Mobile menu button -->
            <button class="mobile-menu-toggle md:hidden" 
                    type="button" 
                    aria-expanded="false" 
                    aria-controls="mobile-menu"
                    aria-label="<?php esc_attr_e('Toggle navigation menu', 'sparerows'); ?>">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path class="menu-icon" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    <path class="close-icon hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
        </div>

        <!-- Mobile Navigation -->
        <div class="mobile-menu" id="mobile-menu">
            <?php
            wp_nav_menu(array(
                'theme_location' => 'primary',
                'container'      => 'nav',
                'container_class' => 'mobile-nav',
                'menu_class'     => 'mobile-nav-menu',
                'fallback_cb'    => 'sparerows_mobile_default_menu',
            ));
            ?>
            <a href="<?php echo esc_url(get_permalink(get_page_by_path('contact'))); ?>" 
               class="btn btn-primary mt-4 w-full">
                <?php esc_html_e('Get Started', 'sparerows'); ?>
            </a>
        </div>
    </div>
</header>

<main id="main" class="flex-1 pt-16" role="main">

<?php
// Default menu fallback for primary navigation
function sparerows_default_menu() {
    $pages = array(
        array('title' => 'Home', 'url' => home_url('/')),
        array('title' => 'About', 'url' => home_url('/about')),
        array('title' => 'Services', 'url' => home_url('/services')),
        array('title' => 'Contact', 'url' => home_url('/contact')),
    );
    
    echo '<ul class="nav-menu">';
    foreach ($pages as $page) {
        $current_class = (is_page($page['title']) || (is_home() && $page['title'] === 'Home')) ? ' class="current-menu-item"' : '';
        echo '<li' . $current_class . '><a href="' . esc_url($page['url']) . '">' . esc_html($page['title']) . '</a></li>';
    }
    echo '</ul>';
}

// Mobile menu fallback
function sparerows_mobile_default_menu() {
    $pages = array(
        array('title' => 'Home', 'url' => home_url('/')),
        array('title' => 'About', 'url' => home_url('/about')),
        array('title' => 'Services', 'url' => home_url('/services')),
        array('title' => 'Contact', 'url' => home_url('/contact')),
    );
    
    echo '<ul class="mobile-nav-menu">';
    foreach ($pages as $page) {
        $current_class = (is_page($page['title']) || (is_home() && $page['title'] === 'Home')) ? ' class="current-menu-item"' : '';
        echo '<li' . $current_class . '><a href="' . esc_url($page['url']) . '">' . esc_html($page['title']) . '</a></li>';
    }
    echo '</ul>';
}
?>