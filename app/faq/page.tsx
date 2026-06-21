const faqs = [
  {
    question: "How do I track my order?",
    answer:
      "Once your order ships, you will receive a confirmation email with a tracking number. You can use that number on our tracking page to follow your package in real time.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and Apple Pay. All payments are processed securely.",
  },
  {
    question: "Can I return a book?",
    answer:
      "Yes, you can return any book within 30 days of delivery as long as it is in its original condition. We offer free return shipping on all domestic returns.",
  },
  {
    question: "How do I become a seller?",
    answer:
      "To become a seller, create an account and navigate to your Dashboard. From there, you can add your first book listing and start selling right away.",
  },
  {
    question: "Is shipping available internationally?",
    answer:
      "Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by destination and are calculated at checkout.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Domestic orders typically arrive within 3–7 business days. International orders can take 10–21 business days depending on the destination and customs processing.",
  },
];

export default function FaqPage() {
  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans">
      <div className="w-full max-w-3xl px-4 sm:px-6 py-10">
        <h1 className="text-3xl font-bold mb-8 text-muted">Frequently Asked Questions</h1>
        <div className="flex flex-col gap-4">
          {faqs.map((faq) => (
            <div key={faq.question} className="bg-zinc-100 rounded-2xl px-6 py-5">
              <h2 className="font-semibold text-brand-purple mb-1.5">
                {faq.question}
              </h2>
              <p className="text-sm text-zinc-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
