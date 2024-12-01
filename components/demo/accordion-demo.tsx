import { Accordion, AccordionItem } from "../dex-ui/accordion";

export function AccordionDemo() {
  return (
    <Accordion>
      <AccordionItem title="What is React?" index={0}>
        React is a JavaScript library for building user interfaces. It allows
        you to create reusable UI components and manage the state of your
        application efficiently.
      </AccordionItem>
      <AccordionItem title="What is Framer Motion?" index={1}>
        Framer Motion is a popular animation library for React. It provides a
        simple and powerful API for creating smooth animations and gestures in
        your React applications.
      </AccordionItem>
      <AccordionItem title="Why use an Accordion component?" index={2}>
        Accordion components are great for organizing and presenting large
        amounts of content in a compact and user-friendly manner. They allow
        users to expand and collapse sections of content as needed, improving
        the overall user experience.
      </AccordionItem>
    </Accordion>
  );
}
