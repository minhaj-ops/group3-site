import emailjs from "@emailjs/browser";

// EmailJS Configuration
// To set up EmailJS:
// 1. Sign up at https://www.emailjs.com/
// 2. Create an email service (Gmail, Outlook, etc.)
// 3. Create email templates for contact forms and newsletter
// 4. Get your Public Key, Service ID, and Template IDs
// 5. Add them to your .env file or replace the values below

const EMAILJS_PUBLIC_KEY =
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "d6XsRVhZ0SYK5Had1";
const EMAILJS_SERVICE_ID =
  import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_yohln2q";
const EMAILJS_CONTACT_TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID || "template_8o6b01q";
const EMAILJS_NEWSLETTER_TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_NEWSLETTER_TEMPLATE_ID || "template_36hz00c";
const RECEIVING_EMAIL = "sales@group3.io";
// const RECEIVING_EMAIL = "minhajalvi10@gmail.com";


// Initialize EmailJS
if (EMAILJS_PUBLIC_KEY) {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

/**
 * Send contact form email
 * @param {Object} formData - Form data containing name, email, message, etc.
 * @returns {Promise} - Promise that resolves when email is sent
 */
export const sendContactEmail = async (formData) => {
  // If EmailJS is not configured, log the data (for development)
  if (
    !EMAILJS_PUBLIC_KEY ||
    !EMAILJS_SERVICE_ID ||
    !EMAILJS_CONTACT_TEMPLATE_ID
  ) {
    console.warn("EmailJS not configured. Form data:", formData);
    console.warn(
      "To enable email functionality, please configure EmailJS environment variables."
    );
    // Simulate success for development
    return Promise.resolve({
      status: 200,
      text: "Email service not configured",
    });
  }

  try {
    const templateParams = {
      to_email: RECEIVING_EMAIL,
      from_name: formData.name || "Unknown",
      from_email: formData.email,
      subject: `New Contact Form Submission from ${formData.name || "Unknown"}`,
      message: formData.message || "",
      company: formData.company || "Not provided",
      budget: formData.budget || "Not provided",
      service: formData.service || "Not provided",
      reply_to: formData.email,
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_CONTACT_TEMPLATE_ID,
      templateParams
    );

    return response;
  } catch (error) {
    console.error("Email sending error:", error);
    throw error;
  }
};

/**
 * Send newsletter subscription email
 * @param {string} email - Subscriber email address
 * @returns {Promise} - Promise that resolves when email is sent
 */
export const sendNewsletterSubscription = async (email) => {
  // If EmailJS is not configured, log the data (for development)
  if (
    !EMAILJS_PUBLIC_KEY ||
    !EMAILJS_SERVICE_ID ||
    !EMAILJS_NEWSLETTER_TEMPLATE_ID
  ) {
    console.warn("EmailJS not configured. Newsletter subscription:", email);
    console.warn(
      "To enable email functionality, please configure EmailJS environment variables."
    );
    // Simulate success for development
    return Promise.resolve({
      status: 200,
      text: "Email service not configured",
    });
  }

  try {
    const templateParams = {
      to_email: RECEIVING_EMAIL,
      subscriber_email: email,
      subject: `New Newsletter Subscription: ${email}`,
      message: `A new user has subscribed to the newsletter: ${email}`,
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_NEWSLETTER_TEMPLATE_ID,
      templateParams
    );

    return response;
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    throw error;
  }
};
