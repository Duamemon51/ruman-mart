import ServicePage from "../components/ServicePage";

export default function ShippingPolicyPage() {
  return <ServicePage title="Shipping Policy" eyebrow="Customer Service" intro="Everything you need to know about delivery from Ruman Mart." sections={[
    { heading: "Delivery coverage", paragraphs: ["We deliver products across Pakistan. Delivery availability and timing may vary by location and product availability."] },
    { heading: "Delivery time", paragraphs: ["Standard delivery usually takes 3 - 5 business days after your order is confirmed. Remote areas may require additional time."] },
    { heading: "Shipping charges", paragraphs: ["Standard shipping charges are shown during checkout. Orders over the applicable free-shipping threshold may qualify for free delivery."] },
    { heading: "Order updates", paragraphs: ["Our team may contact you to confirm your order and delivery details. Please ensure your phone number and address are accurate."] },
  ]} />;
}
