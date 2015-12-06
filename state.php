<?php

$body_class = 'nothome chart';
$page_title = 'Colorado';

$jquery_plugins = array(
	'something.js'
	);

include 'inc/header.php';

?>

<section class="internal_hero">
	<img src="assets/images/colorado.png" alt="" class="inside_hero"/>
	<div class="content">
		<div class="wrapper">
			<h1 class="ranger">Colorado</h1>
		</div>
	</div>
</section>

<section class="chart">
	<div class="wrapper">
		<div class="top_info">
			<h1>Colorado</h1>
			<p>Good stuff about Colorado that you need to know, for sure. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur officiis accusamus totam iure neque consequuntur, molestias laboriosam quas quidem quisquam.</p>
		</div>
		<div class="navvy">
			<div class="button_group cf">
				<ul>
					<li class="current">Elk</li>
					<li>Mule Deer</li>
					<li>Pronghorn</li>
					<li>Rocky Mountain Bighorn</li>
					<li>Desert Bighorn</li>
					<li>Rocky Mountain Goat</li>
					<li>Moose</li>
				</ul>
			</div>
			<!-- <div class="animal">
				<select name="animal" id="animal" class="animal_selector">
					<option value="elk">Elk</option>
					<option value="moose">Moose</option>
					<option value="sheep">Sheep</option>
					<option value="duck">Duck</option>
					<option value="goat">Goat</option>
				</select>
			</div> -->
		</div>
		<div class="species_info cf">
			<h3>Colorado Elk</h3>
			<div class="record cf">
				<h5>State Records</h5>
				<p><span>Typical</span>1986: Montrose County, 393 1/8”</p>
				<p><span>Non-typical</span>1998: Douglas County, 389 5/8” </p>
			</div>
			<div class="record cf">
				<h5>Number of P&Y Entries (260” Typical, 300” Non-typical)</h5>
				<p><span>Short Term</span>(2011-2013) - 173</p>
				<p><span>Long Term</span>(2008-2013) - 429</p>
			</div>
			<div class="record cf">
				<h5>Average P&Y Bull</h5>
				<p><span>Short Term</span>(2011-2013) - 306 6/8"</p>
				<p><span>Long Term</span>(2008-2013) - 306 0/8"</p>
			</div>
			<div class="record cf">
				<h5>Number of Trophy P&Y Entries (360” Typical, 375” Non-typical)</h5>
				<p><span>Short Term</span>(2011-2013) - 7</p>
				<p><span>Long Term</span>(2008-2013) - 12</p>
			</div>
			<div class="record cf">
				<h5>Biggest P&Y Bull</h5>
				<p><span>Short Term</span>(2011-2013) - 379 3/8 (Mesa County, 20011)</p>
				<p><span>Long Term</span>(2008-2013)- 382 2/8” (Teller County, 2008)</p>
			</div>
		</div>
	</div>
</section>
<div class="sep"></div>
<section class="chart dark">
	<div class="wrapper">
		<div class="table_toggle">
			<h3 class="centery current">Unit Analysis</h3>
			<h3 class="centery">Trophy Analysis</h3>
			<p class="centery unit showing">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus beatae velit illo at molestiae, voluptas temporibus hic quam dolor quidem eveniet fugit cum, omnis sed maxime excepturi exercitationem.</p>
		</div>
		<table id="elk" class="table tablesorter">
			<thead>
				<tr>
					<th class="header">Units</td>
					<th class="header">Dates</td>
					<th class="header">Hunt Code</td>
					<th class="header">2014 Draw Success</td>
					<th class="header">2012-2014 Success</td>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>1</td>
					<td>Aug. 29-Sept. 27</td>
					<td>E-E-001-01-A</td>
					<td>N.A.</td>
					<td>17%</td>
				</tr>
				<tr>
					<td>2</td>
					<td>Aug. 29-Sept. 27</td>
					<td>E-E-002-01-A</td>
					<td>100% w/22</td>
					<td>92%</td>
				</tr>
				<tr>
					<td>4, 5, 441</td>
					<td>Aug. 29-Sept. 27</td>
					<td>E-E-004-01-A</td>
					<td>43% w/ 1</td>
					<td>18%</td>
				</tr>
				<tr>
					<td>7, 8, 9, 19, 191</td>
					<td>Aug. 29-Sept. 27</td>
					<td>E-E-007-01-A</td>
					<td>100% w/ 0</td>
					<td>8%</td>
				</tr>
				<tr>
					<td>10</td>
					<td>Aug. 29-Sept. 27</td>
					<td>E-E-010-01-A</td>
					<td>67% w/ 21</td>
					<td>60%</td>
				</tr>
				<tr>
					<td>12, 23, 24*</td>
					<td>Aug. 29-Sept. 27</td>
					<td>E-E-012-01-A</td>
					<td>70% w/ 2</td>
					<td class="orange">35%<span class="tooltip">Hunts harvest rates can't be accurately calculated to multiple overlapping seasons/hunt code in a unit.</span></td>
				</tr>
				<tr>
					<td>20</td>
					<td>Aug. 29-Sept. 27</td>
					<td>E-M-020-01-A</td>
					<td>100% w/ 11</td>
					<td class="orange">360%<span class="tooltip">Hunts harvest rates can't be accurately calculated to multiple overlapping seasons/hunt code in a unit.</span></td>
				</tr>
				<tr>
					<td>20*</td>
					<td>Aug. 29-Sept. 27</td>
					<td>E-E-020-01-A</td>
					<td>100% w/ 2</td>
					<td class="orange">17%<span class="tooltip">Hunts harvest rates can't be accurately calculated to multiple overlapping seasons/hunt code in a unit.</span></td>
				</tr>
				<tr>
					<td>29</td>
					<td>Aug. 29-Sept. 27</td>
					<td>E-E-029-01-A</td>
					<td>25% w/ 1</td>
					<td>19%</td>
				</tr>
				<tr>
					<td>23, 24, 33*</td>
					<td>Aug. 29-Sept. 27</td>
					<td>E-E-033-01-A</td>
					<td>48% w/ 0</td>
					<td class="orange">18%<span class="tooltip">Hunts harvest rates can't be accurately calculated to multiple overlapping seasons/hunt code in a unit.</span></td>
				</tr>
				<tr>
				 	<td>39</td>
					<td>Aug. 29-Sept. 27</td>
					<td>E-E-039-01-A</td>
					<td>33% w/ 1</td>
					<td>20%</td>
				</tr>
				<tr>
					<td>40*</td>
					<td>Aug. 29-Sept. 27</td>
					<td>E-E-040-01-A</td>
					<td>50% w/7</td>
					<td>46%</td>
				</tr>
				<tr>
					<td>46</td>
					<td>Aug. 29-Sept. 27</td>
					<td>E-E-046-01-A</td>
					<td>100% w/ 0</td>
					<td>9%</td>
				</tr>
				<tr>
					<td>48</td>
					<td>Aug. 29-Sept. 27</td>
					<td>E-E-048-01-A</td>
					<td>55% w/ 1</td>
					<td>9%</td>
				</tr>
				<tr>
					<td>49</td>
					<td>Aug. 29-Sept. 27</td>
					<td>E-E-049-01-A</td>
					<td>87% w/ 3</td>
					<td>17%</td>
				</tr>
				<tr>
					<td>50</td>
					<td>Aug. 29-Sept. 27</td>
					<td>E-E-050-01-A</td>
					<td>100% w/ 0</td>
					<td>8%</td>
				</tr>
				<tr>
					<td>51</td>
					<td>Aug. 29-Sept. 27</td>
					<td>E-E-051-01-A</td>
					<td>100% w/ 1</td>
					<td>5%</td>
				</tr>
				<tr>
					<td>54</td>
					<td>Aug. 29-Sept. 27</td>
					<td>E-E-054-01-A</td>
					<td>100% w/ 0</td>
					<td>11%</td>
				</tr>
				<tr>
					<td>55</td>
					<td>Aug. 29-Sept. 27</td>
					<td>E-E-055-01-A</td>
					<td>100% w/ 0</td>
					<td>8%</td>
				</tr>
				<tr>
					<td>56</td>
					<td>Aug. 29-Sept. 27</td>
					<td>E-E-056-01-A</td>
					<td>100% w/ 0</td>
					<td>2%</td>
				</tr>
				<tr>
					<td>57, 58</td>
					<td>Aug. 29-Sept. 27</td>
					<td>E-E-057-01-A</td>
					<td>86% w/ 1</td>
					<td>17%</td>
				</tr>
				<tr>
					<td>61</td>
					<td>Aug. 29-Sept. 27</td>
					<td>E-E-061-01-A</td>
					<td>67% w/ 18</td>
					<td>42%</td>
				</tr>
				<tr>
					<td>66</td>
					<td>Aug. 29-Sept. 27</td>
					<td>E-E-066-01-A</td>
					<td>51% w/ 4</td>
					<td>15%</td>
				</tr>
				<tr>
					<td>67</td>
					<td>Aug. 29-Sept. 27</td>
					<td>E-E-067-01-A</td>
					<td>92% w/ 3</td>
					<td>22%</td>
				</tr>
				<tr>
					<td>69, 84</td>
					<td>Aug. 29-Sept. 27</td>
					<td>E-E-069-01-A</td>
					<td>42% w/ 1</td>
					<td>21%</td>
				</tr>
				<tr>
				  <td>76</td>
					<td>Aug. 29-Sept. 27</td>
					<td>E-E-076-01-A</td>
					<td>45% w/ 11</td>
					<td>32%</td>
				</tr>
				<tr>
					<td>104*</td>
					<td>Aug. 29-Sept. 27</td>
					<td>E-E-104-01-A</td>
					<td>100% w/ 0</td>
					<td>8%</td>
				</tr>
				<tr>
					<td>201</td>
					<td>Aug. 29-Sept. 27</td>
					<td>E-E-201-01-A</td>
					<td>20% w 22</td>
					<td>79%</td>
				</tr>
				<tr>
					<td>391*</td>
					<td>Aug. 29-Sept. 27</td>
					<td>E-E-391-01-A</td>
					<td>100% w/ 0</td>
					<td>10%</td>
				</tr>
				<tr>
					<td>461*</td>
					<td>Aug. 29-Sept. 27</td>
					<td>E-E-461-01-A</td>
					<td>100% w/ 0</td>
					<td>12%</td>
				</tr>
				<tr>
					<td>481</td>
					<td>Aug. 29-Sept. 27</td>
					<td>E-E-481-01-A</td>
					<td>50% w/ 0</td>
					<td>8%</td>
				</tr>
				<tr>
					<td>500</td>
					<td>Aug. 29-Sept. 27</td>
					<td>E-E-500-01-A</td>
					<td>79% w/ 1</td>
					<td>7%</td>
				</tr>
				<tr>
					<td>501</td>
					<td>Aug. 29-Sept. 27</td>
					<td>E-E-501-01-A</td>
					<td>83% w/ 2</td>
					<td>22%</td>
				</tr>
				<tr>
					<td>551</td>
					<td>Aug. 29-Sept. 27</td>
					<td>E-E-551-01-A</td>
					<td>100% w/ 0</td>
					<td>7%</td>
				</tr>
				<tr>
					<td>561</td>
					<td>Aug. 29-Sept. 27</td>
					<td>E-E-561-01-A</td>
					<td>100% w/ 0</td>
					<td>7%</td>
				</tr>
				<tr>
					<td>851</td>
					<td>Aug. 29-Sept. 27</td>
					<td>E-E-851-01-A</td>
					<td>100% w/ 10</td>
					<td>21%</td>
				</tr>
			</tbody>
		</table>
	</div>

</section>

<?php include 'inc/footer.php'; ?>