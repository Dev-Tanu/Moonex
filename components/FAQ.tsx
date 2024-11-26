"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How do I get a Referral Code?",
    answer: "To get a Referral Code, you need to connect your wallet and complete the KYC process. Once verified, you'll be able to generate your unique Referral Code from your account dashboard.",
  },
  {
    question: "Do I get rewarded in tokens or ETH when I refer buyers?",
    answer: "You receive your rewards in ETH instantly once someone you refer makes a transaction!",
  },
  {
    question: "What are the benefits of using MoonEX?",
    answer: "MoonEX offers several benefits including the lowest transaction fees, cross-chain support, high security audited by CertiK, and a user-friendly interface for both beginners and experienced traders.",
  },
]

export function FAQ() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-white/10 border border-white/20 rounded-lg overflow-hidden backdrop-blur-sm bg-white/10 p-4 sm:p-6">
          <h2 className="font-neue-machina text-2xl sm:text-3xl font-bold leading-10 tracking-tight text-center mb-8 sm:mb-16 text-white">
            FA<span className="text-yellow-400">Qs</span>
          </h2>
          <Accordion type="single" collapsible className="w-full [&>*]:border-b [&>*]:border-white/10 [&>*:last-child]:border-none">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="font-raleway text-sm sm:text-base text-white hover:no-underline">{faq.question}</AccordionTrigger>
                <AccordionContent className="font-raleway text-xs sm:text-sm text-gray-200">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

