<?php
/**
 * Groups configuration for default Minify implementation
 * @package Minify
 */

/**
 * You may wish to use the Minify URI Builder app to suggest
 * changes. http://yourdomain/min/builder/
 *
 * See http://code.google.com/p/minify/wiki/CustomSource for other ideas
 **/

return array(
    // 'js' => array('//js/file1.js', '//js/file2.js'),
		'js' => array(
    	'//wp-content/themes/topdraw/js/lib/conditionizr-4.3.0.min.js',
			'//wp-content/themes/topdraw/js/lib/modernizr-2.7.1.min.js',
			'//wp-includes/js/jquery/jquery.js',
			'//wp-includes/js/jquery/jquery-migrate.min.js',
			'//wp-content/themes/topdraw/js/draw_odds_calc.js',
			// '//wp-content/themes/topdraw/js/data-table.js',
			'//wp-content/themes/topdraw/js/plugins.js',
			'//wp-content/themes/topdraw/js/scripts.js',
			'//wp-content/themes/topdraw/js/lib/bootstrap-table.js',
			'//wp-content/themes/topdraw/js/lib/bootstrap-table-fixed-columns.js',
			'//wp-content/plugins/membership/app/assets/js/jquery.m2.validate.js',
			'//wp-content/plugins/membership/app/assets/js/jquery.m2.plugins.js',
			'//wp-content/plugins/membership/app/assets/js/ms-admin.js',
    ),
    // 'css' => array('//css/file1.css', '//css/file2.css'),
    'css' => array(
			'//wp-content/themes/blankslate/normalize.css',
			'//wp-content/themes/blankslate/style.css'
    )
);