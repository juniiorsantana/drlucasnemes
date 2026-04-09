"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { FAQ_ITEMS } from "@/lib/constants";
import SectionLabel from "@/components/ui/SectionLabel";

export default function FAQ() {
  return (
    <section className="py-24 bg-surface-container" id="faq">
      <div className="max-w-3xl mx-auto px-8">
        <div className="mb-16 text-center">
          <SectionLabel>PERGUNTAS FREQUENTES</SectionLabel>
          <h2 className="text-4xl font-headline font-extrabold text-primary tracking-tight mt-4">
            Tire Suas Dúvidas
          </h2>
        </div>

        <Accordion.Root type="single" collapsible className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <Accordion.Item
              key={item.id}
              value={item.id}
              className="bg-surface-container-lowest border border-outline-variant/10 rounded-lg overflow-hidden"
            >
              <Accordion.Trigger className="w-full px-6 py-4 flex items-center justify-between hover:bg-surface-container-low transition-colors text-left">
                <h3 className="text-base font-label font-bold text-primary">
                  {item.question}
                </h3>
                <span className="material-symbols-outlined ml-4 shrink-0 text-secondary">
                  {/* Change icon based on state would require additional state */}
                  expand_more
                </span>
              </Accordion.Trigger>
              <Accordion.Content className="px-6 py-4 bg-surface-container-low text-on-surface-variant leading-relaxed border-t border-outline-variant/10">
                {item.answer}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
