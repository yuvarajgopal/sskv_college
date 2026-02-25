// ─────────────────────────────────────────────────────────────────────────────
// Razorpay Setup Instructions
// ─────────────────────────────────────────────────────────────────────────────
// 1. Create a free account at https://razorpay.com
// 2. Dashboard → Settings → API Keys → Generate Key → copy the Key ID
// 3. Replace RAZORPAY_KEY_ID below with your actual Key ID.
//
// Test card for development:
//   Card Number : 4111 1111 1111 1111
//   Expiry      : any future date  (e.g. 12/26)
//   CVV         : any 3 digits     (e.g. 123)
//
// ⚠️  Production note:
//   For production payments you MUST create an order_id on your backend
//   (POST /v1/orders) and pass it as `order_id` in the options below, then
//   verify the payment signature server-side. The current client-side-only
//   approach is acceptable for testing but not for live transactions.
// ─────────────────────────────────────────────────────────────────────────────

export const RAZORPAY_KEY_ID = import.meta.env.VITE_RAZORPAY_KEY_ID || 'rzp_test_YOUR_KEY_HERE';

/**
 * Dynamically loads the Razorpay checkout script.
 * @returns {Promise<boolean>} true if loaded successfully
 */
export function loadRazorpayScript() {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

/**
 * Opens the Razorpay payment modal.
 *
 * @param {{
 *   amount: number,        - amount in INR (NOT paise)
 *   name: string,          - payment description heading
 *   description: string,   - sub-description
 *   prefill: { name, email, contact },
 *   onSuccess: (response) => void,
 *   onFailure?: (error) => void,
 * }} options
 */
export function openCheckout({ amount, name, description, prefill, onSuccess, onFailure }) {
  const options = {
    key: RAZORPAY_KEY_ID,
    amount: amount * 100,        // Razorpay expects paise
    currency: 'INR',
    name: 'SSKV College',
    description,
    image: '/images/logo/logo.jpeg',
    handler: (response) => onSuccess(response),
    prefill,
    notes: {
      address: 'Kilambi, Kanchipuram',
    },
    theme: {
      color: '#58381B',
    },
    modal: {
      ondismiss: () => {
        if (onFailure) onFailure(new Error('Payment cancelled by user'));
      },
    },
  };

  const rzp = new window.Razorpay(options);
  rzp.on('payment.failed', (response) => {
    if (onFailure) onFailure(response.error);
  });
  rzp.open();
}
