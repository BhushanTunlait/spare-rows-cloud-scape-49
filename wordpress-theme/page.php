<?php
/**
 * Default Page Template
 *
 * @package SpareRows
 * @since 1.0.0
 */

get_header(); ?>

<div class="min-h-screen">
    <?php while (have_posts()) : the_post(); ?>
        
        <!-- Page Header -->
        <section class="py-20 gradient-dark">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="max-w-4xl mx-auto text-center">
                    <h1 class="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins animate-slide-up">
                        <?php the_title(); ?>
                    </h1>
                    <?php if (has_excerpt()) : ?>
                        <p class="text-xl text-navy-text mb-8 animate-slide-up">
                            <?php the_excerpt(); ?>
                        </p>
                    <?php endif; ?>
                </div>
            </div>
        </section>

        <!-- Page Content -->
        <section class="py-20 bg-background">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="max-w-4xl mx-auto">
                    <?php if (has_post_thumbnail()) : ?>
                        <div class="mb-8 rounded-lg overflow-hidden">
                            <?php the_post_thumbnail('large', array('class' => 'w-full h-auto')); ?>
                        </div>
                    <?php endif; ?>
                    
                    <div class="prose prose-lg max-w-none">
                        <?php
                        the_content();
                        
                        wp_link_pages(array(
                            'before' => '<div class="page-links">' . esc_html__('Pages:', 'sparerows'),
                            'after'  => '</div>',
                        ));
                        ?>
                    </div>
                    
                    <?php if (comments_open() || get_comments_number()) : ?>
                        <div class="mt-16">
                            <?php comments_template(); ?>
                        </div>
                    <?php endif; ?>
                </div>
            </div>
        </section>

    <?php endwhile; ?>
</div>

<?php get_footer(); ?>