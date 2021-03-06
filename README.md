# dnssecmagic.js

## More

See [my blog post][10] for full details.

[10]: http://jpmens.net/2012/07/30/is-my-web-site-being-used-via-dnssec-validator/

## Bogus ^W Modus operandi

Your page (see `index.html` below) sets a 3000ms timer and tries to load a
1x1-pixel graphic from `dnssec-failed.org`. If that file can be loaded, the
timer is stopped, and we consider you're using a non-DNSSEC-validating cache
because your browser loaded the image, so we *know* it was able to resolve
`www.dnssec-failed.org` to an address record, and connected to the site.

If your browser is speaking to a validating cache, the cache will determine
that the DNSSEC-signed zone `www.dnssec-failed.org` is bogus and will `SERVFAIL`;
it will **not** return the address of the site. When the timer 
expires, we know (or hope?) DNSSEC is in use and can react accordingly.

## The files 

### `index.html`

The file `index.html` contains snippets of code you copy/paste into your own
project. That includes loading the two Javascript files and launching the `startTimer()`
function.

### `dnssecmagic.js`

Contains supporting routines needed to test whether the 1x1-pixel image was loaded,
and populate the `#dnssecmagic` _span_. Change text and colours to suit yourself.
The function you'll want to adapt is called `showdnssecmagic()`. It gets a True/False
parameter depending on whether DNSSEC was detected or not.

## Bugs

Yes.

I'm neither a designer, nor am I a Web developer. Fix things and send me pull-requests.
Please.

## Credits

* Idea based on previous work by
  * [SIDN](http://sidn.nl)'s [DNSSEC test](http://dnssectest.sidn.nl/)
  * [NIC.cz](http://nic.cz)'s [DNSSEC & IPv6 widget](https://labs.nic.cz/page/943/ipv6-widget/)
* Uses [jQuery](http://jquery.com/)


  [1]: http://dnssec-deployment.org/pipermail/dnssec-deployment/2012-July/005995.html
  [2]: http://dnssec-deployment.org/pipermail/dnssec-deployment/2012-July/005996.html
