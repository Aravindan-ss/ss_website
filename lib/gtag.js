export const GA_TRACKING_ID = "GTM-TWMFSDC"; // Replace with your actual ID

// Track pageviews
export const pageview = (url) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

// Track events
export const event = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
