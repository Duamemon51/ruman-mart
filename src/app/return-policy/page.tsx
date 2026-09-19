import ServicePage from "../components/ServicePage";

export default function ReturnPolicyPage() {
  return <ServicePage title="Return Policy" eyebrow="Customer Service" intro="We want you to feel confident when shopping with Ruman Mart." sections={[
    { heading: "Eligible returns", paragraphs: ["You may request a return within 7 days of delivery for an item that is damaged, defective, incorrect or materially different from its description."] },
    { heading: "Item condition", paragraphs: ["Products must be unused and returned with their original packaging, accessories and applicable tags. Items showing use or damage caused after delivery may not qualify."] },
    { heading: "How to request a return", paragraphs: ["Contact our support team with your order number, a description of the issue and clear photos when relevant. We will review the request and guide you through the next steps."] },
    { heading: "Refunds and exchanges", paragraphs: ["After inspection, we will confirm whether the item qualifies for a replacement, exchange or refund. Processing time depends on the selected resolution."] },
  ]} />;
}
