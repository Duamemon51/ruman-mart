import ServicePage from "../components/ServicePage";

export default function TermsPage() {
  return <ServicePage title="Terms & Conditions" eyebrow="Customer Service" intro="These terms explain the rules for using Ruman Mart and placing orders with us." sections={[
    { heading: "Using our website", paragraphs: ["By using this website, you agree to provide accurate information and use the site lawfully. Product availability, pricing and details may change without notice."] },
    { heading: "Orders and payment", paragraphs: ["An order is confirmed after the details are reviewed by Ruman Mart. Cash on Delivery orders require accurate contact and delivery information."] },
    { heading: "Product information", paragraphs: ["We make reasonable efforts to keep product descriptions, images and prices accurate. Colors and appearance may vary slightly depending on your screen."] },
    { heading: "Contact", paragraphs: ["For questions about these terms, contact rumanshakee56@gmail.com or call +92 304 1298136."] },
  ]} />;
}
