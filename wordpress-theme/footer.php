    <?php
    /**
     * Footer Template
     *
     * @package SpareRows
     * @since 1.0.0
     */
    ?>
</main>

<footer class="bg-dark-navy text-navy-text" role="contentinfo">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <!-- Company Info -->
            <div class="space-y-4">
                <div class="flex items-center space-x-2">
                    <?php if (has_custom_logo()) : ?>
                        <?php the_custom_logo(); ?>
                    <?php else : ?>
                        <div class="w-8 h-8 rounded-full gradient-primary flex items-center justify-center">
                            <span class="text-white font-bold text-lg">S</span>
                        </div>
                        <span class="font-bold text-xl font-poppins text-gradient">
                            <?php bloginfo('name'); ?>
                        </span>
                    <?php endif; ?>
                </div>
                <p class="text-sm" style="color: hsl(var(--navy-text) / 0.8);">
                    <?php 
                    $description = get_bloginfo('description');
                    echo $description ? esc_html($description) : esc_html__('Empowering businesses with DevOps, cloud, and automation solutions. Specializing in scalable, secure, and reliable infrastructure.', 'sparerows');
                    ?>
                </p>
                <div class="social-icons">
                    <?php if (get_theme_mod('sparerows_linkedin')) : ?>
                        <a href="<?php echo esc_url(get_theme_mod('sparerows_linkedin')); ?>" 
                           class="social-icon" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           aria-label="<?php esc_attr_e('LinkedIn', 'sparerows'); ?>">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.668v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd"></path>
                            </svg>
                        </a>
                    <?php endif; ?>
                    
                    <?php if (get_theme_mod('sparerows_github')) : ?>
                        <a href="<?php echo esc_url(get_theme_mod('sparerows_github')); ?>" 
                           class="social-icon" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           aria-label="<?php esc_attr_e('GitHub', 'sparerows'); ?>">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd"></path>
                            </svg>
                        </a>
                    <?php endif; ?>
                    
                    <?php if (get_theme_mod('sparerows_twitter')) : ?>
                        <a href="<?php echo esc_url(get_theme_mod('sparerows_twitter')); ?>" 
                           class="social-icon" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           aria-label="<?php esc_attr_e('Twitter', 'sparerows'); ?>">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
                            </svg>
                        </a>
                    <?php endif; ?>
                    
                    <a href="mailto:<?php echo esc_attr(get_theme_mod('sparerows_email', 'pankaj.dahiya@sparerows.com')); ?>" 
                       class="social-icon"
                       aria-label="<?php esc_attr_e('Email', 'sparerows'); ?>">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                    </a>
                </div>
            </div>

            <!-- Quick Links -->
            <div class="space-y-4">
                <?php if (is_active_sidebar('footer-1')) : ?>
                    <?php dynamic_sidebar('footer-1'); ?>
                <?php else : ?>
                    <h3 class="font-semibold text-white mb-4"><?php esc_html_e('Quick Links', 'sparerows'); ?></h3>
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'footer',
                        'container'      => false,
                        'menu_class'     => 'footer-links',
                        'fallback_cb'    => 'sparerows_footer_default_menu',
                    ));
                    ?>
                <?php endif; ?>
            </div>

            <!-- Services -->
            <div class="space-y-4">
                <?php if (is_active_sidebar('footer-2')) : ?>
                    <?php dynamic_sidebar('footer-2'); ?>
                <?php else : ?>
                    <h3 class="font-semibold text-white mb-4"><?php esc_html_e('Services', 'sparerows'); ?></h3>
                    <ul class="footer-links">
                        <?php
                        $services = get_posts(array(
                            'post_type'      => 'service',
                            'posts_per_page' => 6,
                            'post_status'    => 'publish',
                        ));
                        
                        if ($services) :
                            foreach ($services as $service) :
                        ?>
                            <li>
                                <a href="<?php echo esc_url(get_permalink($service->ID)); ?>">
                                    <?php echo esc_html($service->post_title); ?>
                                </a>
                            </li>
                        <?php 
                            endforeach;
                        else :
                            // Default services if none are added
                            $default_services = array(
                                'DevOps Consulting',
                                'Cloud Solutions',
                                'Kubernetes & Containers',
                                'CI/CD Pipelines',
                                'Infrastructure as Code',
                                'Monitoring & Observability'
                            );
                            foreach ($default_services as $service) :
                        ?>
                            <li><span><?php echo esc_html($service); ?></span></li>
                        <?php 
                            endforeach;
                        endif;
                        wp_reset_postdata();
                        ?>
                    </ul>
                <?php endif; ?>
            </div>

            <!-- Contact & Newsletter -->
            <div class="space-y-4">
                <?php if (is_active_sidebar('footer-3')) : ?>
                    <?php dynamic_sidebar('footer-3'); ?>
                <?php else : ?>
                    <h3 class="font-semibold text-white mb-4"><?php esc_html_e('Stay Updated', 'sparerows'); ?></h3>
                    <div class="space-y-3">
                        <div class="flex items-center space-x-2 text-sm" style="color: hsl(var(--navy-text) / 0.8);">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                            <span><?php echo esc_html(get_theme_mod('sparerows_address', 'Sonipat, Haryana, India')); ?></span>
                        </div>
                        <div class="flex items-center space-x-2 text-sm" style="color: hsl(var(--navy-text) / 0.8);">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                            </svg>
                            <span><?php echo esc_html(get_theme_mod('sparerows_phone', '+91 9206206496')); ?></span>
                        </div>
                        <div class="flex items-center space-x-2 text-sm" style="color: hsl(var(--navy-text) / 0.8);">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                            <span><?php echo esc_html(get_theme_mod('sparerows_email', 'pankaj.dahiya@sparerows.com')); ?></span>
                        </div>
                    </div>
                    
                    <!-- Newsletter Signup -->
                    <div class="space-y-2">
                        <p class="text-sm" style="color: hsl(var(--navy-text) / 0.8);">
                            <?php esc_html_e('Subscribe to our newsletter', 'sparerows'); ?>
                        </p>
                        <form class="flex space-x-2" method="post" action="<?php echo esc_url(admin_url('admin-post.php')); ?>">
                            <?php wp_nonce_field('sparerows_newsletter', 'newsletter_nonce'); ?>
                            <input type="hidden" name="action" value="sparerows_newsletter_signup">
                            <input type="email" 
                                   name="newsletter_email" 
                                   placeholder="<?php esc_attr_e('Enter your email', 'sparerows'); ?>" 
                                   class="form-input flex-1"
                                   style="background: hsl(var(--navy-light)); border-color: hsl(var(--navy-light)); color: white;"
                                   required>
                            <button type="submit" class="btn btn-primary">
                                <?php esc_html_e('Subscribe', 'sparerows'); ?>
                            </button>
                        </form>
                    </div>
                <?php endif; ?>
            </div>
        </div>

        <!-- Bottom Bar -->
        <div class="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center" style="border-color: hsl(var(--navy-light));">
            <p class="text-sm" style="color: hsl(var(--navy-text) / 0.6);">
                <?php
                printf(
                    esc_html__('© %1$s %2$s. All Rights Reserved.', 'sparerows'),
                    date('Y'),
                    get_bloginfo('name')
                );
                ?>
            </p>
            <div class="flex space-x-4 mt-4 md:mt-0">
                <?php if (get_page_by_path('privacy-policy')) : ?>
                    <a href="<?php echo esc_url(get_permalink(get_page_by_path('privacy-policy'))); ?>" 
                       class="text-sm hover:text-primary transition-colors" 
                       style="color: hsl(var(--navy-text) / 0.6);">
                        <?php esc_html_e('Privacy Policy', 'sparerows'); ?>
                    </a>
                <?php endif; ?>
                <?php if (get_page_by_path('terms-of-service')) : ?>
                    <a href="<?php echo esc_url(get_permalink(get_page_by_path('terms-of-service'))); ?>" 
                       class="text-sm hover:text-primary transition-colors" 
                       style="color: hsl(var(--navy-text) / 0.6);">
                        <?php esc_html_e('Terms of Service', 'sparerows'); ?>
                    </a>
                <?php endif; ?>
            </div>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>

<?php
// Footer menu fallback
function sparerows_footer_default_menu() {
    $pages = array(
        array('title' => 'Home', 'url' => home_url('/')),
        array('title' => 'Services', 'url' => home_url('/services')),
        array('title' => 'About', 'url' => home_url('/about')),
        array('title' => 'Contact', 'url' => home_url('/contact')),
    );
    
    echo '<ul class="footer-links">';
    foreach ($pages as $page) {
        echo '<li><a href="' . esc_url($page['url']) . '">' . esc_html($page['title']) . '</a></li>';
    }
    echo '</ul>';
}
?>

</body>
</html>