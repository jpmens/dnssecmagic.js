var minitics;

function showdnssecmagic(dnssec) {

	/*
	 * The image can't be loaded. Try and stop the loading...
	 * EXPERIMENTAL
	 */
	
	$('#dnssecmagicpixel').removeAttr('src');
	
	/*
	 * I (JP) would typically want to display a green DNSSEC only,
	 * meaning I'd set dns_color = "white" (on white) and dns_text = ""
	 * It's blue and "DNS" here so you'll see something.
	 */

	var dns_color = "blue";
	var dns_text  = "DNS";
	var dns_title = "You're using a normal DNS resolver";
	var dnssec_color = "green";
	var dnssec_text = "DNSSEC";
	var dnssec_title = "You're using a validating DNSSEC resolver";

	var text = (dnssec) ? dnssec_text : dns_text;

	$("#dnssecmagic").css("background-color", (dnssec) ? dnssec_color : dns_color);
	$('#dnssecmagic').show("slow");
	$('#dnssecmagic').html(text);
	$('#dnssecmagic').attr("title", (dnssec) ? dnssec_title : dns_title);
};

function dnssecmagicpixelLoaded() {

	/* Image was loaded, which means we have NO DNSSEC (when
	 * talking to a validating resolver, www.dnssec-failed.org
	 * won't be resolved (because the zone is bogus) so loading
	 * would fail).
	 */

	stopTimer();
	showdnssecmagic(false);
};

function startTimer() {
	minitics = setTimeout("timeOut()", 3000);
};

function stopTimer() {
	clearTimeout(minitics);
};

function timeOut() {

	/* We've timed out on trying to load the page (and the sourced
	 * image, so we're probably talking to a validating resolver
	 * which is barfing out at the moment... :) Habemus DNSSEC! 
	 */

	showdnssecmagic(true);
};


/* Let's go! Start the timer, and cross our toes */

startTimer();

