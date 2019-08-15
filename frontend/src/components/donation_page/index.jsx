import React, { Component } from "react";

class Donate extends Component {
  render() {
    return (
      <div class="entry-content" itemprop="text">
        <h1>Donate Now!</h1>
        <br />
        <p>
          The Young Masterbuilders In Motion, Inc., (<strong>YMIM</strong>),
          supports young women orphans, adoptees, and foster youth alumnae to
          build resiliency, hope, and a bright future.
        </p>
        <br />
        <p>
          We deliver empowerment and leadership development programs that help
          our alumnae embrace, nurture and support their future as independent,
          thriving members of their community.
        </p>
        <br />
        <p>
          Your contributions provide direct aid and support to our scholars and
          are greatly appreciated. The Young Masterbuilders in Motion, Inc., (
          <strong>YMIM</strong>) is a 501(c)(3) nonprofit organization and your
          contributions are deductible to the full extent of the law. Our tax
          identification number is 82-1904373.
        </p>
        <br />
        <p>
          The<strong> YMIM</strong> is committed to respecting the privacy of
          our donors. We do not sell or trade donors’ personal or contact
          information with anyone else. Questions on donating? Contact Kim
          Wright, Founder/Executive Director at (773) 941-1200 or via email at{" "}
          <strong>Founder@TheYMIM.org</strong>
        </p>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_donations" />
          <input type="hidden" name="business" value="7XZQB2W36AWRA" />
          <input type="hidden" name="currency_code" value="USD" />
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
          <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>

      </div>
    );
  }
}
export default Donate;
