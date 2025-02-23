export default function handler(req, res) {
  const { review } = req.query;
  const couponUrl = `https://${req.headers.host}/coupon`; // Full URL to coupon page
  const redirectUrl = `${review}&continue=${encodeURIComponent(couponUrl)}`;

  res.redirect(302, redirectUrl);
}