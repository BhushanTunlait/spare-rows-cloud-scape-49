<?php
/**
 * Main Index Template (Homepage)
 *
 * @package SpareRows
 * @since 1.0.0
 */

get_header(); ?>

<div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
             style="background-image: url('<?php echo esc_url(get_header_image() ?: get_template_directory_uri() . '/assets/images/hero-bg.jpg'); ?>');">
        <div class="absolute inset-0 hero-gradient opacity-90"></div>
        <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div class="max-w-4xl mx-auto animate-slide-up">
                <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-poppins">
                    <?php 
                    $hero_title = get_theme_mod('sparerows_hero_title', 'Empowering Businesses with DevOps, Cloud & Automation');
                    $title_parts = explode(' ', $hero_title);
                    $last_words = array_slice($title_parts, -3);
                    $first_words = array_slice($title_parts, 0, -3);
                    
                    echo esc_html(implode(' ', $first_words));
                    if (!empty($last_words)) {
                        echo ' <span class="text-gradient">' . esc_html(implode(' ', $last_words)) . '</span>';
                    }
                    ?>
                </h1>
                <p class="text-xl md:text-2xl text-navy-text mb-8 max-w-3xl mx-auto">
                    <?php echo esc_html(get_theme_mod('sparerows_hero_subtitle', 'We help startups and enterprises accelerate growth through cloud-native solutions, modern DevOps practices, and reliable automation.')); ?>
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="<?php echo esc_url(get_permalink(get_page_by_path('contact')) ?: '#contact'); ?>" 
                       class="btn btn-primary btn-lg animate-pulse-glow">
                        <?php esc_html_e('Get Started', 'sparerows'); ?>
                        <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                        </svg>
                    </a>
                    <a href="<?php echo esc_url(get_permalink(get_page_by_path('services')) ?: '#services'); ?>" 
                       class="btn btn-outline-white btn-lg">
                        <?php esc_html_e('Our Services', 'sparerows'); ?>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Services/Highlights Section -->
    <section class="py-20 bg-background" id="services">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4 font-poppins">
                    <?php esc_html_e('Our Expertise', 'sparerows'); ?>
                </h2>
                <p class="text-xl text-muted-foreground max-w-2xl mx-auto">
                    <?php esc_html_e('Comprehensive DevOps and cloud solutions to transform your infrastructure', 'sparerows'); ?>
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <?php
                // Get services from custom post type
                $services = get_posts(array(
                    'post_type'      => 'service',
                    'posts_per_page' => 6,
                    'post_status'    => 'publish',
                ));

                if ($services) :
                    foreach ($services as $index => $service) :
                        $icon = get_post_meta($service->ID, '_service_icon', true) ?: 'dashicons-admin-tools';
                ?>
                    <div class="card hover:shadow-lg transition-all duration-300 animate-float" 
                         style="animation-delay: <?php echo esc_attr($index * 0.1); ?>s;">
                        <div class="card-content text-center">
                            <div class="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                                <span class="dashicons <?php echo esc_attr($icon); ?> text-white" style="font-size: 2rem; line-height: 1;"></span>
                            </div>
                            <h3 class="font-semibold text-lg mb-2 text-foreground">
                                <?php echo esc_html($service->post_title); ?>
                            </h3>
                            <p class="text-muted-foreground text-sm">
                                <?php echo esc_html($service->post_excerpt ?: wp_trim_words($service->post_content, 15)); ?>
                            </p>
                        </div>
                    </div>
                <?php 
                    endforeach;
                    wp_reset_postdata();
                else :
                    // Default services if none are added
                    $default_services = array(
                        array('title' => 'DevOps Consulting', 'description' => 'Streamline workflows and boost productivity', 'icon' => 'dashicons-admin-tools'),
                        array('title' => 'Cloud Solutions', 'description' => 'AWS | Azure | GCP expertise', 'icon' => 'dashicons-cloud'),
                        array('title' => 'Kubernetes & Containers', 'description' => 'Scalable containerized infrastructure', 'icon' => 'dashicons-networking'),
                        array('title' => 'CI/CD Pipelines', 'description' => 'Automated testing and deployment', 'icon' => 'dashicons-update'),
                        array('title' => 'Infrastructure as Code', 'description' => 'Version-controlled infrastructure', 'icon' => 'dashicons-editor-code'),
                        array('title' => 'Monitoring & Observability', 'description' => 'Proactive monitoring solutions', 'icon' => 'dashicons-chart-line'),
                    );
                    
                    foreach ($default_services as $index => $service) :
                ?>
                    <div class="card hover:shadow-lg transition-all duration-300 animate-float" 
                         style="animation-delay: <?php echo esc_attr($index * 0.1); ?>s;">
                        <div class="card-content text-center">
                            <div class="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                                <span class="dashicons <?php echo esc_attr($service['icon']); ?> text-white" style="font-size: 2rem; line-height: 1;"></span>
                            </div>
                            <h3 class="font-semibold text-lg mb-2 text-foreground">
                                <?php echo esc_html($service['title']); ?>
                            </h3>
                            <p class="text-muted-foreground text-sm">
                                <?php echo esc_html($service['description']); ?>
                            </p>
                        </div>
                    </div>
                <?php endforeach; ?>
                <?php endif; ?>
            </div>
        </div>
    </section>

    <!-- Stats Section -->
    <section class="py-20 bg-secondary">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
                <?php
                $stats = array(
                    array('icon' => 'dashicons-groups', 'value' => '50+', 'label' => 'Projects Delivered'),
                    array('icon' => 'dashicons-awards', 'value' => '99.9%', 'label' => 'Uptime Achieved'),
                    array('icon' => 'dashicons-clock', 'value' => '24/7', 'label' => 'Support Available'),
                    array('icon' => 'dashicons-cloud', 'value' => '3', 'label' => 'Cloud Platforms'),
                );
                
                foreach ($stats as $index => $stat) :
                ?>
                <div class="text-center animate-slide-up" style="animation-delay: <?php echo esc_attr($index * 0.1); ?>s;">
                    <div class="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                        <span class="dashicons <?php echo esc_attr($stat['icon']); ?> text-white" style="font-size: 2rem; line-height: 1;"></span>
                    </div>
                    <div class="text-3xl md:text-4xl font-bold text-primary mb-2">
                        <?php echo esc_html($stat['value']); ?>
                    </div>
                    <div class="text-muted-foreground font-medium">
                        <?php echo esc_html($stat['label']); ?>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <?php get_template_part('template-parts/testimonials'); ?>

    <!-- CTA Section -->
    <section class="py-20 gradient-dark">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div class="max-w-3xl mx-auto">
                <h2 class="text-3xl md:text-4xl font-bold text-white mb-6 font-poppins">
                    <?php esc_html_e('Ready to Transform Your Infrastructure?', 'sparerows'); ?>
                </h2>
                <p class="text-xl text-navy-text mb-8">
                    <?php esc_html_e('Let\'s discuss how we can help you achieve scalable, secure, and automated solutions.', 'sparerows'); ?>
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="<?php echo esc_url(get_permalink(get_page_by_path('contact')) ?: '#contact'); ?>" 
                       class="btn btn-lg bg-white text-dark-navy hover:opacity-90 font-medium">
                        <?php esc_html_e('Start Your Project', 'sparerows'); ?>
                        <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                        </svg>
                    </a>
                    <a href="<?php echo esc_url(get_permalink(get_page_by_path('case-studies')) ?: home_url('/blog')); ?>" 
                       class="btn btn-outline-white btn-lg">
                        <?php esc_html_e('View Case Studies', 'sparerows'); ?>
                    </a>
                </div>
            </div>
        </div>
    </section>
</div>

<?php get_footer(); ?>