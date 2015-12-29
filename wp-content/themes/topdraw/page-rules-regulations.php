<?php
/* Template Name: Rules & Regulations */
get_header();
setup_postdata($post);

$parent_title = get_the_title($post->post_parent);

?>

<section class="internal_hero">
	<img src="<?php bloginfo('template_directory'); ?>/assets/img/colorado.png" alt="" class="inside_hero"/>
	<div class="content">
		<div class="wrapper">
			<h1 class="ranger"><?php echo $parent_title; ?></h1>
			<h2><?php the_title(); ?></h2>
		</div>
	</div>
</section>

<section class="chart cf">
	<div class="wrapper">
		<div class="top_info">
			<h1><?php echo $parent_title; ?> - <?php the_title(); ?></h1>
			<?php include 'inc/colorado_explanation.php'; ?>
		</div>
		<?php include 'inc/analysis_type.php'; ?>
		<div class="sector unit cf">
			<div class="navvy unit_info cf">
				<h4>Legend</h4>
				<div class="button_group cf">
					<ul class="info_chooser">
						<li class="current"><a href="#application-info">Application Info</a></li>
						<li><a href="#apply-online">Apply Online</a></li>
						<li><a href="#apply-by-mail">Apply by Mail</a></li>
						<li><a href="#preference-points">Prefernce Points</a></li>
						<li><a href="#restoring-preference-points">Restoring Preference Points</a></li>
						<li><a href="#license-allocations">License Allocations</a></li>
						<li><a href="#license-requirements">License Requirements</a></li>
						<li><a href="#legal-methods-of-take">Legal Methods of Take</a></li>
					</ul>
				</div>
			</div>
			<div class="tabscontent unit_information cf">
				<div id="application-info">
					<h4>Application Information</h4>
					<ul>
						<li>Draw results will be posted by May 15th for sheep and mountain goat.  All other species will be posted by May 29th.</li>
						<li>You <b>must</b> front the entire license fee for each species you apply for.  A refund, less application fees, will be issued if unsuccessful in the draw.</li>
						<li>Anyone ages 18-64 MUST purchase a Habitat Stamp in order to buy or apply for a preference point or for a hunting or fishing license.   Habitat Stamps are $10 and are nonrefundable</li>
						<li>Anyone born on or after Jan. 1, 1949, must have a hunter education card to hunt in Colorado.  A hunter education card is needed to apply for or buy a license. </li>
						<li>Moose, sheep & goat must be applied for by paper applications.  Elk, deer & pronghorn may be applied for online or by paper application.</li>
						<li>CPW recommends hunters apply online for elk, deer & pronghorn. The computer system helps prevent many errors that commonly occur on paper applications.  When you apply online, a Habitat Stamp will be added to your order automatically if you need one. </li>
					</ul>
				</div>
				<div id="apply-online">
					<h4>How to apply online</h4>
					<ol>
						<li>Review the 2015 Big Game brochure and select your hunt codes. You can apply for multiple species in one transaction. </li>
						<li>Go to <a href="http://cpw.state.co.us/bg/buyapply" target="_blank">cpw.state.co.us/bg/buyapply</a>. </li>
						<li>Follow the instructions and prompts in the system to enter and verify your information. </li>
						<li>Click on “Big Game & Turkey Licenses & Application” and select the 2015 License Year <i>(until April 1)</i>. </li>
						<li>Click on the name of the species for which you want to apply and select “apply now.” </li>
						<li>Enter the hunt codes you have selected. <i>(Remember: entering four hunt codes gives you four chances to draw a license!) For elk, deer, and pronghorn, enter your unsuccessful option. For information on unsuccessful options see page 11.)</i> </li>
						<li>Validate your hunt codes and enter your hunter ed and group information <i>(if applicable)</i>. </li>
						<li>Complete your purchase by verifying that your hunt codes are entered correctly and then enter your credit card information. The 2015 Habitat Stamp will automatically be added to your purchase at this time if it is required. </li>
						<li>After completing your purchase, save and/or print your receipt. This is the record of what you applied for, so please keep it for your reference. Your receipt CANNOT be reproduced once you navigate away from it in your browser. </li>
						<li>If you have questions, please contact the CPW communication center at 303-297-1192.</li>
					</ol>
				</div>
				<div id="apply-by-mail">
					<h4>Submitting your application by mail</h4>
					<ul>
						<li>Mail one check (or money order) and one application per envelope in a standard 4 1/8 by 9 1/2-inch envelope to the correct address at left. Don’t fold. If you have a CID number, make sure to write it on the check or money order. Include your $10 Habitat Stamp payment in the same check as your license fee.</li>
						<li>You may submit only one application per species, per year. Each species must be in a separate envelope with separate payment, including group applications. Envelopes with multiple applications may not be processed. </li>
						<li>Personal checks, cashier’s checks or money orders are accepted, made out to Colorado Parks and Wildlife. U.S. currency only. No cash. Credit cards are accepted online only.</li>
					</ul>
				</div>
				<div id="preference-points">
					<h4>Preference points</h4>
					<ul>
						<li>If you do not hold an active 2014 annual* or big-game license, or do not receive a license through the draw, you will be charged <b>$40 PER SPECIES</b> (for elk, deer and pronghorn) for which you get a preference point.  Additionally, the $3 application fee for each species is nonrefundable.  You may apply for points only for any species except for desert sheep.  There is no point system for desert sheep.</li>
						<li>One preference point is awarded to those who apply properly and are unsuccessful in drawing a license for a first-choice hunt code. Priority goes to whoever has the most points. Hunters who make an application error, including on first choice hunt codes, do not get a point.</li>
						<li>If you fail to apply for <b>OR</b> have not purchased a license for a certain species during a 10-year period, all accumulated points for that species are erased from your record and become void.</li>
						<li>The maximum points you can accumulate for Rocky Mountain bighorn sheep or goats are three. If you have three points for bighorn sheep or mountain goat and you fail to draw a first-choice license, you will receive weighted preference for that species.</li>
						<li><b>WEIGHTED PREFERENCE</b> increases your probability of drawing. It is calculated by converting your application number into a different, random application number, then dividing that new application number by the amount of weighted points you have, plus one. This generates another new application number. Applications are sorted by this new number from lowest to highest and low numbers for each hunt code are awarded licenses.</li>
						<li>Preference points do not apply to desert bighorn sheep.</li>
					</ul>
				</div>
				<div id="restoring-preference-points">
					<h4>Restoring your preference points</h4>
					<ul>
						<li>If you choose to surrender your license to CPW before the season starts, you may choose to receive either a refund OR have the preference points restored that you used to obtain the license. </li>
						<li>To get a refund or preference point(s) restored, you must relinquish your license and carcass tag before opening day of the season. License must be accompanied by a completed request form obtained at a CPW location or on the website. </li>
						<li>Preference points are reinstated to a pre-draw level, you do NOT receive an additional preference point for 2015.</li>
					</ul>
				</div>
				<div id="license-allocations">
					<h4>License allocations</h4>
					<ul>
						<li>Elk & deer nonresident allocations are determined by the average number of preference points a Colorado resident needed to draw a specific license during a 3-year period that ended with the 2009 drawing. (Units with low numbers of available licenses may not have any remaining for nonresidents after resident licenses are drawn.) </li>
						<li>For elk and deer hunt codes that required six or more points for a Colorado resident to draw, up to 20 percent may go to nonresidents. These hunts are designated in unit tables by a “+ ” under the “SEX” column. </li>
						<li>For hunt codes that required fewer than six points for a Colorado resident to draw an elk or deer license, up to 35 percent may go to nonresidents. </li>
						<li>Nonresident allocations may increase if licenses remain after all Colorado resident first choices have been drawn for that hunt code. </li>
						<li>License allocations do not apply to private-land-only and Ranching For Wildlife licenses. </li>
						<li>In a group of applications made up of both residents and nonresidents, all nonresidents in the group will count against the nonresident allocation.</li>
						<li>There is not a nonresident allocation limit for pronghorn.  </li>
						<li>Ten percent of limited moose sheep and mountain goat licenses are allocated to nonresidents.</li>
					</ul>
				</div>
				<div id="license-requirements">
					<h4>License requirements</h4>
					<ul>
						<li>You can apply for one bighorn sheep license and one mountain goat license and one moose license each year. However, you cannot apply for a Rocky Mountain bighorn and desert bighorn in the same year.  If you apply for more than one bighorn sheep license the same year, your applications will be disqualified.</li>
						<li><b>BIGHORN SHEEP:</b> If you harvest a Rocky Mountain bighorn ram (must have a half-curl or more), you must wait five years (sixth year after harvest) before applying for another Rocky Mountain bighorn ram license.  During the five-year waiting period, hunters may apply for ewe licenses but cannot accrue preference points. This rule does not apply if you harvest a ram with an auction, raffle or special sheep management license.</li>
						<li><b>DESERT BIGHORN SHEEP:</b> If you harvest a desert bighorn sheep, you cannot participate in future desert bighorn sheep drawings.</li>
						<li><b>MOUNTAIN GOAT:</b> If you harvest a mountain goat, you must wait five years (sixth year after harvest) before applying for another mountain goat license. This rule does not apply if you harvest a goat with an auction, raffle or special goat management license.</li>
						<li><b>MOOSE:</b> The lifetime bag limit for bull moose is one, except for auction, raffle or special management licenses.</li>
					</ul>
				</div>
				<div id="legal-methods-of-take">
					<h4>Archery legal methods of take</h4>
					<ul>
						<li>A long bow, recurve bow or compound bow on which the string is not drawn mechanically or held mechanically under tension. String or mechanical releases are legal if they are hand-drawn or hand-held with no other attachments or connections to bow (except bowstring).</li>
						<li>Hand-held bows, including compound bows, must use arrows with a broadhead having a minimum 7/8-inch outside diameter or width and minimum of two steel cutting edges. Each cutting edge must be in same plane for entire length of cutting surface.</li>
						<li>Only legal, hand-held bows allowed during archery seasons.</li>
						<li>Minimum draw weight of 35 pounds required. Let-off maximum of 80 percent.</li>
						<li>No part of bow’s riser (handle) or track, trough, channel, arrow rest or other device (excluding cables and bowstring) that attaches to riser can contact, support and/or guide the arrow from a point rearward of the bow’s brace height behind the undrawn string.</li>
						<li>Bows can propel only a single arrow at a time. No mechanisms for automatically loading arrows allowed.</li>
						<li>NEW! Scopes, electronic or battery-powered devices cannot be incorporated into or attached to bow or arrow, with the exception of lighted nocks on arrows. Recording devices such as cameras or video recorders attached to bows may be used as long as they do not cast light toward the target or aid in range finding, sighting or shooting the bow.</li>
						<li>Hydraulic or pneumatic technology cannot be used to derive or store energy to propel arrows. Explosive arrows prohibited.</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>

<?php include 'inc/form.php'; ?>

<?php get_footer(); ?>