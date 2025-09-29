<?php
/**
 * Testimonials Section Template Part
 *
 * @package SpareRows
 * @since 1.0.0
 */
?>

<section class="py-20 bg-secondary" id="testimonials">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4 font-poppins">
                <?php esc_html_e('What Our Clients Say', 'sparerows'); ?>
            </h2>
            <p class="text-xl text-muted-foreground max-w-2xl mx-auto">
                <?php esc_html_e('Trusted by startups and enterprises worldwide for our DevOps and cloud expertise', 'sparerows'); ?>
            </p>
        </div>

        <div class="testimonials-slider" id="testimonials-slider">
            <div class="testimonials-grid">
                <?php
                $testimonials = get_posts(array(
                    'post_type'      => 'testimonial',
                    'posts_per_page' => -1,
                    'post_status'    => 'publish',
                ));

                if ($testimonials) :
                    foreach ($testimonials as $testimonial) :
                        $client_name = get_post_meta($testimonial->ID, '_client_name', true);
                        $client_position = get_post_meta($testimonial->ID, '_client_position', true);
                        $client_company = get_post_meta($testimonial->ID, '_client_company', true);
                        $rating = get_post_meta($testimonial->ID, '_rating', true) ?: 5;
                        $initials = $client_name ? substr($client_name, 0, 1) . substr(strstr($client_name, ' '), 1, 1) : 'TC';
                ?>
                    <div class="testimonial-card card">
                        <div class="card-content">
                            <div class="flex items-center mb-4">
                                <svg class="w-8 h-8 text-primary mr-3" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                                </svg>
                                <div class="flex">
                                    <?php for ($i = 0; $i < $rating; $i++) : ?>
                                        <svg class="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
                                        </svg>
                                    <?php endfor; ?>
                                </div>
                            </div>
                            
                            <p class="text-muted-foreground mb-6 leading-relaxed">
                                "<?php echo esc_html($testimonial->post_content); ?>"
                            </p>
                            
                            <div class="flex items-center">
                                <div class="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold mr-4">
                                    <?php echo esc_html($initials); ?>
                                </div>
                                <div>
                                    <div class="font-semibold text-foreground">
                                        <?php echo esc_html($client_name); ?>
                                    </div>
                                    <div class="text-sm text-muted-foreground">
                                        <?php echo esc_html($client_position); ?>
                                    </div>
                                    <div class="text-sm text-primary font-medium">
                                        <?php echo esc_html($client_company); ?>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <?php 
                    endforeach;
                    wp_reset_postdata();
                else :
                    // Default testimonials
                    $default_testimonials = array(
                        array('name' => 'Sarah Chen', 'position' => 'CTO', 'company' => 'TechStart Solutions', 'content' => 'SpareRows completely transformed our infrastructure. Their DevOps expertise helped us reduce deployment time by 80% and achieve 99.9% uptime.', 'initials' => 'SC'),
                        array('name' => 'Michael Rodriguez', 'position' => 'Engineering Manager', 'company' => 'DataFlow Inc', 'content' => 'Working with SpareRows was a game-changer for our CI/CD pipeline. They implemented a robust Kubernetes infrastructure that scales seamlessly.', 'initials' => 'MR'),
                        array('name' => 'Priya Sharma', 'position' => 'Head of Operations', 'company' => 'CloudScale Systems', 'content' => 'The monitoring solutions implemented by SpareRows gave us unprecedented visibility into our systems. Our MTTR has improved dramatically.', 'initials' => 'PS'),
                    );
                    
                    foreach ($default_testimonials as $testimonial) :
                ?>
                    <div class="testimonial-card card">
                        <div class="card-content">
                            <div class="flex items-center mb-4">
                                <svg class="w-8 h-8 text-primary mr-3" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                                </svg>
                                <div class="flex">
                                    <?php for ($i = 0; $i < 5; $i++) : ?>
                                        <svg class="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
                                        </svg>
                                    <?php endfor; ?>
                                </div>
                            </div>
                            
                            <p class="text-muted-foreground mb-6 leading-relaxed">
                                "<?php echo esc_html($testimonial['content']); ?>"
                            </p>
                            
                            <div class="flex items-center">
                                <div class="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold mr-4">
                                    <?php echo esc_html($testimonial['initials']); ?>
                                </div>
                                <div>
                                    <div class="font-semibold text-foreground">
                                        <?php echo esc_html($testimonial['name']); ?>
                                    </div>
                                    <div class="text-sm text-muted-foreground">
                                        <?php echo esc_html($testimonial['position']); ?>
                                    </div>
                                    <div class="text-sm text-primary font-medium">
                                        <?php echo esc_html($testimonial['company']); ?>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <?php endforeach; ?>
                <?php endif; ?>
            </div>

            <div class="testimonial-navigation">
                <button class="testimonial-nav-btn" id="prev-testimonial" aria-label="<?php esc_attr_e('Previous testimonial', 'sparerows'); ?>">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                </button>
                
                <div class="testimonial-dots" id="testimonial-dots"></div>
                
                <button class="testimonial-nav-btn" id="next-testimonial" aria-label="<?php esc_attr_e('Next testimonial', 'sparerows'); ?>">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</section>