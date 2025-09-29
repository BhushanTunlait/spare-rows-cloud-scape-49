<?php
/**
 * SpareRows Technology WordPress Theme Functions
 *
 * @package SpareRows
 * @since 1.0.0
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

// Theme setup
function sparerows_theme_setup() {
    // Add theme support for title tag
    add_theme_support('title-tag');
    
    // Add theme support for post thumbnails
    add_theme_support('post-thumbnails');
    
    // Add theme support for custom logo
    add_theme_support('custom-logo', array(
        'height'      => 32,
        'width'       => 32,
        'flex-width'  => true,
        'flex-height' => true,
    ));
    
    // Add theme support for custom header
    add_theme_support('custom-header', array(
        'default-image' => get_template_directory_uri() . '/assets/images/hero-bg.jpg',
        'width'         => 1920,
        'height'        => 1080,
        'flex-width'    => true,
        'flex-height'   => true,
    ));
    
    // Add theme support for HTML5 markup
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
    
    // Add theme support for editor styles
    add_theme_support('editor-styles');
    add_editor_style('assets/css/editor-style.css');
    
    // Register navigation menus
    register_nav_menus(array(
        'primary' => esc_html__('Primary Navigation', 'sparerows'),
        'footer'  => esc_html__('Footer Navigation', 'sparerows'),
    ));
}
add_action('after_setup_theme', 'sparerows_theme_setup');

// Enqueue scripts and styles
function sparerows_enqueue_scripts() {
    // Enqueue Google Fonts
    wp_enqueue_style(
        'sparerows-fonts',
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap',
        array(),
        null
    );
    
    // Enqueue main stylesheet
    wp_enqueue_style(
        'sparerows-style',
        get_stylesheet_uri(),
        array(),
        wp_get_theme()->get('Version')
    );
    
    // Enqueue main JavaScript
    wp_enqueue_script(
        'sparerows-main',
        get_template_directory_uri() . '/assets/js/main.js',
        array('jquery'),
        wp_get_theme()->get('Version'),
        true
    );
    
    // Enqueue testimonials slider
    wp_enqueue_script(
        'sparerows-testimonials',
        get_template_directory_uri() . '/assets/js/testimonials.js',
        array('jquery'),
        wp_get_theme()->get('Version'),
        true
    );
    
    // Enqueue contact form script
    wp_enqueue_script(
        'sparerows-contact',
        get_template_directory_uri() . '/assets/js/contact.js',
        array('jquery'),
        wp_get_theme()->get('Version'),
        true
    );
    
    // Localize scripts for AJAX
    wp_localize_script('sparerows-contact', 'sparerows_ajax', array(
        'ajax_url' => admin_url('admin-ajax.php'),
        'nonce'    => wp_create_nonce('sparerows_contact_nonce'),
    ));
}
add_action('wp_enqueue_scripts', 'sparerows_enqueue_scripts');

// Register widget areas
function sparerows_widgets_init() {
    register_sidebar(array(
        'name'          => esc_html__('Footer Widget Area 1', 'sparerows'),
        'id'            => 'footer-1',
        'description'   => esc_html__('Add widgets here to appear in the first footer column.', 'sparerows'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title font-semibold text-white mb-4">',
        'after_title'   => '</h3>',
    ));
    
    register_sidebar(array(
        'name'          => esc_html__('Footer Widget Area 2', 'sparerows'),
        'id'            => 'footer-2',
        'description'   => esc_html__('Add widgets here to appear in the second footer column.', 'sparerows'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title font-semibold text-white mb-4">',
        'after_title'   => '</h3>',
    ));
    
    register_sidebar(array(
        'name'          => esc_html__('Footer Widget Area 3', 'sparerows'),
        'id'            => 'footer-3',
        'description'   => esc_html__('Add widgets here to appear in the third footer column.', 'sparerows'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title font-semibold text-white mb-4">',
        'after_title'   => '</h3>',
    ));
    
    register_sidebar(array(
        'name'          => esc_html__('Footer Widget Area 4', 'sparerows'),
        'id'            => 'footer-4',
        'description'   => esc_html__('Add widgets here to appear in the fourth footer column.', 'sparerows'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title font-semibold text-white mb-4">',
        'after_title'   => '</h3>',
    ));
}
add_action('widgets_init', 'sparerows_widgets_init');

// Custom post type for Services
function sparerows_register_services_post_type() {
    $labels = array(
        'name'               => esc_html__('Services', 'sparerows'),
        'singular_name'      => esc_html__('Service', 'sparerows'),
        'menu_name'          => esc_html__('Services', 'sparerows'),
        'add_new'            => esc_html__('Add New Service', 'sparerows'),
        'add_new_item'       => esc_html__('Add New Service', 'sparerows'),
        'edit_item'          => esc_html__('Edit Service', 'sparerows'),
        'new_item'           => esc_html__('New Service', 'sparerows'),
        'view_item'          => esc_html__('View Service', 'sparerows'),
        'search_items'       => esc_html__('Search Services', 'sparerows'),
        'not_found'          => esc_html__('No services found', 'sparerows'),
        'not_found_in_trash' => esc_html__('No services found in trash', 'sparerows'),
    );
    
    $args = array(
        'labels'             => $labels,
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array('slug' => 'services'),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => 5,
        'menu_icon'          => 'dashicons-admin-tools',
        'supports'           => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'),
        'show_in_rest'       => true,
    );
    
    register_post_type('service', $args);
}
add_action('init', 'sparerows_register_services_post_type');

// Custom post type for Testimonials
function sparerows_register_testimonials_post_type() {
    $labels = array(
        'name'               => esc_html__('Testimonials', 'sparerows'),
        'singular_name'      => esc_html__('Testimonial', 'sparerows'),
        'menu_name'          => esc_html__('Testimonials', 'sparerows'),
        'add_new'            => esc_html__('Add New Testimonial', 'sparerows'),
        'add_new_item'       => esc_html__('Add New Testimonial', 'sparerows'),
        'edit_item'          => esc_html__('Edit Testimonial', 'sparerows'),
        'new_item'           => esc_html__('New Testimonial', 'sparerows'),
        'view_item'          => esc_html__('View Testimonial', 'sparerows'),
        'search_items'       => esc_html__('Search Testimonials', 'sparerows'),
        'not_found'          => esc_html__('No testimonials found', 'sparerows'),
        'not_found_in_trash' => esc_html__('No testimonials found in trash', 'sparerows'),
    );
    
    $args = array(
        'labels'             => $labels,
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array('slug' => 'testimonials'),
        'capability_type'    => 'post',
        'has_archive'        => false,
        'hierarchical'       => false,
        'menu_position'      => 6,
        'menu_icon'          => 'dashicons-format-quote',
        'supports'           => array('title', 'editor', 'thumbnail', 'custom-fields'),
        'show_in_rest'       => true,
    );
    
    register_post_type('testimonial', $args);
}
add_action('init', 'sparerows_register_testimonials_post_type');

// Custom post type for Team Members
function sparerows_register_team_post_type() {
    $labels = array(
        'name'               => esc_html__('Team Members', 'sparerows'),
        'singular_name'      => esc_html__('Team Member', 'sparerows'),
        'menu_name'          => esc_html__('Team', 'sparerows'),
        'add_new'            => esc_html__('Add New Team Member', 'sparerows'),
        'add_new_item'       => esc_html__('Add New Team Member', 'sparerows'),
        'edit_item'          => esc_html__('Edit Team Member', 'sparerows'),
        'new_item'           => esc_html__('New Team Member', 'sparerows'),
        'view_item'          => esc_html__('View Team Member', 'sparerows'),
        'search_items'       => esc_html__('Search Team Members', 'sparerows'),
        'not_found'          => esc_html__('No team members found', 'sparerows'),
        'not_found_in_trash' => esc_html__('No team members found in trash', 'sparerows'),
    );
    
    $args = array(
        'labels'             => $labels,
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array('slug' => 'team'),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => 7,
        'menu_icon'          => 'dashicons-groups',
        'supports'           => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'),
        'show_in_rest'       => true,
    );
    
    register_post_type('team_member', $args);
}
add_action('init', 'sparerows_register_team_post_type');

// Add custom meta boxes
function sparerows_add_meta_boxes() {
    // Service meta box
    add_meta_box(
        'service_details',
        esc_html__('Service Details', 'sparerows'),
        'sparerows_service_meta_box_callback',
        'service',
        'normal',
        'high'
    );
    
    // Testimonial meta box
    add_meta_box(
        'testimonial_details',
        esc_html__('Testimonial Details', 'sparerows'),
        'sparerows_testimonial_meta_box_callback',
        'testimonial',
        'normal',
        'high'
    );
    
    // Team member meta box
    add_meta_box(
        'team_member_details',
        esc_html__('Team Member Details', 'sparerows'),
        'sparerows_team_member_meta_box_callback',
        'team_member',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'sparerows_add_meta_boxes');

// Service meta box callback
function sparerows_service_meta_box_callback($post) {
    wp_nonce_field('sparerows_service_meta_box', 'sparerows_service_meta_box_nonce');
    
    $icon = get_post_meta($post->ID, '_service_icon', true);
    $features = get_post_meta($post->ID, '_service_features', true);
    $price = get_post_meta($post->ID, '_service_price', true);
    ?>
    <table class="form-table">
        <tr>
            <th scope="row">
                <label for="service_icon"><?php esc_html_e('Icon Class', 'sparerows'); ?></label>
            </th>
            <td>
                <input type="text" id="service_icon" name="service_icon" value="<?php echo esc_attr($icon); ?>" class="regular-text" />
                <p class="description"><?php esc_html_e('Enter icon class (e.g., dashicons-admin-tools)', 'sparerows'); ?></p>
            </td>
        </tr>
        <tr>
            <th scope="row">
                <label for="service_features"><?php esc_html_e('Features', 'sparerows'); ?></label>
            </th>
            <td>
                <textarea id="service_features" name="service_features" rows="5" class="large-text"><?php echo esc_textarea($features); ?></textarea>
                <p class="description"><?php esc_html_e('Enter one feature per line', 'sparerows'); ?></p>
            </td>
        </tr>
        <tr>
            <th scope="row">
                <label for="service_price"><?php esc_html_e('Starting Price', 'sparerows'); ?></label>
            </th>
            <td>
                <input type="text" id="service_price" name="service_price" value="<?php echo esc_attr($price); ?>" class="regular-text" />
                <p class="description"><?php esc_html_e('Enter starting price (optional)', 'sparerows'); ?></p>
            </td>
        </tr>
    </table>
    <?php
}

// Testimonial meta box callback
function sparerows_testimonial_meta_box_callback($post) {
    wp_nonce_field('sparerows_testimonial_meta_box', 'sparerows_testimonial_meta_box_nonce');
    
    $client_name = get_post_meta($post->ID, '_client_name', true);
    $client_position = get_post_meta($post->ID, '_client_position', true);
    $client_company = get_post_meta($post->ID, '_client_company', true);
    $rating = get_post_meta($post->ID, '_rating', true);
    ?>
    <table class="form-table">
        <tr>
            <th scope="row">
                <label for="client_name"><?php esc_html_e('Client Name', 'sparerows'); ?></label>
            </th>
            <td>
                <input type="text" id="client_name" name="client_name" value="<?php echo esc_attr($client_name); ?>" class="regular-text" />
            </td>
        </tr>
        <tr>
            <th scope="row">
                <label for="client_position"><?php esc_html_e('Client Position', 'sparerows'); ?></label>
            </th>
            <td>
                <input type="text" id="client_position" name="client_position" value="<?php echo esc_attr($client_position); ?>" class="regular-text" />
            </td>
        </tr>
        <tr>
            <th scope="row">
                <label for="client_company"><?php esc_html_e('Client Company', 'sparerows'); ?></label>
            </th>
            <td>
                <input type="text" id="client_company" name="client_company" value="<?php echo esc_attr($client_company); ?>" class="regular-text" />
            </td>
        </tr>
        <tr>
            <th scope="row">
                <label for="rating"><?php esc_html_e('Rating (1-5)', 'sparerows'); ?></label>
            </th>
            <td>
                <select id="rating" name="rating">
                    <option value="5" <?php selected($rating, '5'); ?>><?php esc_html_e('5 Stars', 'sparerows'); ?></option>
                    <option value="4" <?php selected($rating, '4'); ?>><?php esc_html_e('4 Stars', 'sparerows'); ?></option>
                    <option value="3" <?php selected($rating, '3'); ?>><?php esc_html_e('3 Stars', 'sparerows'); ?></option>
                    <option value="2" <?php selected($rating, '2'); ?>><?php esc_html_e('2 Stars', 'sparerows'); ?></option>
                    <option value="1" <?php selected($rating, '1'); ?>><?php esc_html_e('1 Star', 'sparerows'); ?></option>
                </select>
            </td>
        </tr>
    </table>
    <?php
}

// Team member meta box callback
function sparerows_team_member_meta_box_callback($post) {
    wp_nonce_field('sparerows_team_member_meta_box', 'sparerows_team_member_meta_box_nonce');
    
    $position = get_post_meta($post->ID, '_team_position', true);
    $bio = get_post_meta($post->ID, '_team_bio', true);
    $social_linkedin = get_post_meta($post->ID, '_social_linkedin', true);
    $social_github = get_post_meta($post->ID, '_social_github', true);
    $social_twitter = get_post_meta($post->ID, '_social_twitter', true);
    ?>
    <table class="form-table">
        <tr>
            <th scope="row">
                <label for="team_position"><?php esc_html_e('Position', 'sparerows'); ?></label>
            </th>
            <td>
                <input type="text" id="team_position" name="team_position" value="<?php echo esc_attr($position); ?>" class="regular-text" />
            </td>
        </tr>
        <tr>
            <th scope="row">
                <label for="team_bio"><?php esc_html_e('Bio', 'sparerows'); ?></label>
            </th>
            <td>
                <textarea id="team_bio" name="team_bio" rows="5" class="large-text"><?php echo esc_textarea($bio); ?></textarea>
            </td>
        </tr>
        <tr>
            <th scope="row">
                <label for="social_linkedin"><?php esc_html_e('LinkedIn URL', 'sparerows'); ?></label>
            </th>
            <td>
                <input type="url" id="social_linkedin" name="social_linkedin" value="<?php echo esc_url($social_linkedin); ?>" class="regular-text" />
            </td>
        </tr>
        <tr>
            <th scope="row">
                <label for="social_github"><?php esc_html_e('GitHub URL', 'sparerows'); ?></label>
            </th>
            <td>
                <input type="url" id="social_github" name="social_github" value="<?php echo esc_url($social_github); ?>" class="regular-text" />
            </td>
        </tr>
        <tr>
            <th scope="row">
                <label for="social_twitter"><?php esc_html_e('Twitter URL', 'sparerows'); ?></label>
            </th>
            <td>
                <input type="url" id="social_twitter" name="social_twitter" value="<?php echo esc_url($social_twitter); ?>" class="regular-text" />
            </td>
        </tr>
    </table>
    <?php
}

// Save meta box data
function sparerows_save_meta_box_data($post_id) {
    // Check if user has permissions to save data
    if (!current_user_can('edit_post', $post_id)) {
        return;
    }
    
    // Check if not an autosave
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }
    
    // Save service meta
    if (isset($_POST['sparerows_service_meta_box_nonce']) && wp_verify_nonce($_POST['sparerows_service_meta_box_nonce'], 'sparerows_service_meta_box')) {
        if (isset($_POST['service_icon'])) {
            update_post_meta($post_id, '_service_icon', sanitize_text_field($_POST['service_icon']));
        }
        if (isset($_POST['service_features'])) {
            update_post_meta($post_id, '_service_features', sanitize_textarea_field($_POST['service_features']));
        }
        if (isset($_POST['service_price'])) {
            update_post_meta($post_id, '_service_price', sanitize_text_field($_POST['service_price']));
        }
    }
    
    // Save testimonial meta
    if (isset($_POST['sparerows_testimonial_meta_box_nonce']) && wp_verify_nonce($_POST['sparerows_testimonial_meta_box_nonce'], 'sparerows_testimonial_meta_box')) {
        if (isset($_POST['client_name'])) {
            update_post_meta($post_id, '_client_name', sanitize_text_field($_POST['client_name']));
        }
        if (isset($_POST['client_position'])) {
            update_post_meta($post_id, '_client_position', sanitize_text_field($_POST['client_position']));
        }
        if (isset($_POST['client_company'])) {
            update_post_meta($post_id, '_client_company', sanitize_text_field($_POST['client_company']));
        }
        if (isset($_POST['rating'])) {
            update_post_meta($post_id, '_rating', sanitize_text_field($_POST['rating']));
        }
    }
    
    // Save team member meta
    if (isset($_POST['sparerows_team_member_meta_box_nonce']) && wp_verify_nonce($_POST['sparerows_team_member_meta_box_nonce'], 'sparerows_team_member_meta_box')) {
        if (isset($_POST['team_position'])) {
            update_post_meta($post_id, '_team_position', sanitize_text_field($_POST['team_position']));
        }
        if (isset($_POST['team_bio'])) {
            update_post_meta($post_id, '_team_bio', sanitize_textarea_field($_POST['team_bio']));
        }
        if (isset($_POST['social_linkedin'])) {
            update_post_meta($post_id, '_social_linkedin', esc_url_raw($_POST['social_linkedin']));
        }
        if (isset($_POST['social_github'])) {
            update_post_meta($post_id, '_social_github', esc_url_raw($_POST['social_github']));
        }
        if (isset($_POST['social_twitter'])) {
            update_post_meta($post_id, '_social_twitter', esc_url_raw($_POST['social_twitter']));
        }
    }
}
add_action('save_post', 'sparerows_save_meta_box_data');

// Handle contact form submission via AJAX
function sparerows_handle_contact_form() {
    // Verify nonce
    if (!wp_verify_nonce($_POST['nonce'], 'sparerows_contact_nonce')) {
        wp_die(esc_html__('Security check failed', 'sparerows'));
    }
    
    // Sanitize form data
    $name = sanitize_text_field($_POST['name']);
    $email = sanitize_email($_POST['email']);
    $company = sanitize_text_field($_POST['company']);
    $phone = sanitize_text_field($_POST['phone']);
    $service = sanitize_text_field($_POST['service']);
    $message = sanitize_textarea_field($_POST['message']);
    
    // Validate required fields
    if (empty($name) || empty($email) || empty($message)) {
        wp_send_json_error(esc_html__('Please fill in all required fields.', 'sparerows'));
    }
    
    // Validate email
    if (!is_email($email)) {
        wp_send_json_error(esc_html__('Please enter a valid email address.', 'sparerows'));
    }
    
    // Prepare email
    $to = get_option('admin_email');
    $subject = sprintf(esc_html__('New Contact Form Submission from %s', 'sparerows'), $name);
    
    $email_message = sprintf(
        esc_html__("New contact form submission:\n\nName: %s\nEmail: %s\nCompany: %s\nPhone: %s\nService: %s\nMessage: %s", 'sparerows'),
        $name,
        $email,
        $company,
        $phone,
        $service,
        $message
    );
    
    $headers = array(
        'Content-Type: text/plain; charset=UTF-8',
        'From: ' . $name . ' <' . $email . '>',
        'Reply-To: ' . $email,
    );
    
    // Send email
    $sent = wp_mail($to, $subject, $email_message, $headers);
    
    if ($sent) {
        wp_send_json_success(esc_html__('Thank you for your message! We\'ll get back to you within 24 hours.', 'sparerows'));
    } else {
        wp_send_json_error(esc_html__('Sorry, there was an error sending your message. Please try again later.', 'sparerows'));
    }
}
add_action('wp_ajax_sparerows_contact_form', 'sparerows_handle_contact_form');
add_action('wp_ajax_nopriv_sparerows_contact_form', 'sparerows_handle_contact_form');

// Customizer settings
function sparerows_customize_register($wp_customize) {
    // Add Hero Section
    $wp_customize->add_section('sparerows_hero', array(
        'title'    => esc_html__('Hero Section', 'sparerows'),
        'priority' => 30,
    ));
    
    // Hero Title
    $wp_customize->add_setting('sparerows_hero_title', array(
        'default'           => 'Empowering Businesses with DevOps, Cloud & Automation',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('sparerows_hero_title', array(
        'label'   => esc_html__('Hero Title', 'sparerows'),
        'section' => 'sparerows_hero',
        'type'    => 'text',
    ));
    
    // Hero Subtitle
    $wp_customize->add_setting('sparerows_hero_subtitle', array(
        'default'           => 'We help startups and enterprises accelerate growth through cloud-native solutions, modern DevOps practices, and reliable automation.',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));
    
    $wp_customize->add_control('sparerows_hero_subtitle', array(
        'label'   => esc_html__('Hero Subtitle', 'sparerows'),
        'section' => 'sparerows_hero',
        'type'    => 'textarea',
    ));
    
    // Contact Information Section
    $wp_customize->add_section('sparerows_contact', array(
        'title'    => esc_html__('Contact Information', 'sparerows'),
        'priority' => 35,
    ));
    
    // Phone
    $wp_customize->add_setting('sparerows_phone', array(
        'default'           => '+91 9206206496',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('sparerows_phone', array(
        'label'   => esc_html__('Phone Number', 'sparerows'),
        'section' => 'sparerows_contact',
        'type'    => 'text',
    ));
    
    // Email
    $wp_customize->add_setting('sparerows_email', array(
        'default'           => 'pankaj.dahiya@sparerows.com',
        'sanitize_callback' => 'sanitize_email',
    ));
    
    $wp_customize->add_control('sparerows_email', array(
        'label'   => esc_html__('Email Address', 'sparerows'),
        'section' => 'sparerows_contact',
        'type'    => 'email',
    ));
    
    // Address
    $wp_customize->add_setting('sparerows_address', array(
        'default'           => 'Sonipat, Haryana, India',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('sparerows_address', array(
        'label'   => esc_html__('Address', 'sparerows'),
        'section' => 'sparerows_contact',
        'type'    => 'text',
    ));
    
    // Social Media Section
    $wp_customize->add_section('sparerows_social', array(
        'title'    => esc_html__('Social Media', 'sparerows'),
        'priority' => 40,
    ));
    
    // LinkedIn
    $wp_customize->add_setting('sparerows_linkedin', array(
        'default'           => '',
        'sanitize_callback' => 'esc_url_raw',
    ));
    
    $wp_customize->add_control('sparerows_linkedin', array(
        'label'   => esc_html__('LinkedIn URL', 'sparerows'),
        'section' => 'sparerows_social',
        'type'    => 'url',
    ));
    
    // GitHub
    $wp_customize->add_setting('sparerows_github', array(
        'default'           => '',
        'sanitize_callback' => 'esc_url_raw',
    ));
    
    $wp_customize->add_control('sparerows_github', array(
        'label'   => esc_html__('GitHub URL', 'sparerows'),
        'section' => 'sparerows_social',
        'type'    => 'url',
    ));
    
    // Twitter
    $wp_customize->add_setting('sparerows_twitter', array(
        'default'           => '',
        'sanitize_callback' => 'esc_url_raw',
    ));
    
    $wp_customize->add_control('sparerows_twitter', array(
        'label'   => esc_html__('Twitter URL', 'sparerows'),
        'section' => 'sparerows_social',
        'type'    => 'url',
    ));
}
add_action('customize_register', 'sparerows_customize_register');

// Custom navigation walker for better styling
class SpareRows_Nav_Walker extends Walker_Nav_Menu {
    public function start_lvl(&$output, $depth = 0, $args = null) {
        if (isset($args->item_spacing) && 'discard' === $args->item_spacing) {
            $t = '';
            $n = '';
        } else {
            $t = "\t";
            $n = "\n";
        }
        $indent = ($depth) ? str_repeat($t, $depth) : '';
        $output .= "{$n}{$indent}<ul class=\"sub-menu\">{$n}";
    }
    
    public function start_el(&$output, $item, $depth = 0, $args = null, $id = 0) {
        if (isset($args->item_spacing) && 'discard' === $args->item_spacing) {
            $t = '';
            $n = '';
        } else {
            $t = "\t";
            $n = "\n";
        }
        $indent = ($depth) ? str_repeat($t, $depth) : '';
        
        $classes = empty($item->classes) ? array() : (array) $item->classes;
        $classes[] = 'menu-item-' . $item->ID;
        
        $args = apply_filters('nav_menu_item_args', $args, $item, $depth);
        
        $class_names = join(' ', apply_filters('nav_menu_css_class', array_filter($classes), $item, $args));
        $class_names = $class_names ? ' class="' . esc_attr($class_names) . '"' : '';
        
        $id = apply_filters('nav_menu_item_id', 'menu-item-' . $item->ID, $item, $args);
        $id = $id ? ' id="' . esc_attr($id) . '"' : '';
        
        $output .= $indent . '<li' . $id . $class_names . '>';
        
        $attributes = !empty($item->attr_title) ? ' title="' . esc_attr($item->attr_title) . '"' : '';
        $attributes .= !empty($item->target) ? ' target="' . esc_attr($item->target) . '"' : '';
        $attributes .= !empty($item->xfn) ? ' rel="' . esc_attr($item->xfn) . '"' : '';
        $attributes .= !empty($item->url) ? ' href="' . esc_attr($item->url) . '"' : '';
        
        $item_output = isset($args->before) ? $args->before : '';
        $item_output .= '<a' . $attributes . '>';
        $item_output .= (isset($args->link_before) ? $args->link_before : '') . apply_filters('the_title', $item->title, $item->ID) . (isset($args->link_after) ? $args->link_after : '');
        $item_output .= '</a>';
        $item_output .= isset($args->after) ? $args->after : '';
        
        $output .= apply_filters('walker_nav_menu_start_el', $item_output, $item, $depth, $args);
    }
}

// Security enhancements
function sparerows_security_headers() {
    header('X-Content-Type-Options: nosniff');
    header('X-Frame-Options: SAMEORIGIN');
    header('X-XSS-Protection: 1; mode=block');
}
add_action('send_headers', 'sparerows_security_headers');

// Remove WordPress version from head
function sparerows_remove_version() {
    return '';
}
add_filter('the_generator', 'sparerows_remove_version');