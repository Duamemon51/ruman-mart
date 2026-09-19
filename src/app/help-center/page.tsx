import ServicePage from "../components/ServicePage";

export default function HelpCenterPage() {
  return <ServicePage title="Help Center" eyebrow="Customer Service" intro="Find quick answers and support for your Ruman Mart shopping experience." sections={[
    { heading: "How can we help?", paragraphs: ["Our team can help with product questions, order updates, delivery information, returns and general shopping support.", "For direct assistance, contact us at +92 304 1298136 or rumanshakee56@gmail.com."] },
    { heading: "Order support", paragraphs: ["Keep your order number ready when contacting us so we can assist you quickly. You can also review order details from the order confirmation page."] },
    { heading: "Store support hours", paragraphs: ["Our support team is available Monday to Saturday, from 9:00 AM to 6:00 PM."] },
  ]} />;
}
