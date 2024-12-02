import CodeSnippet from "./code-snippet"; // Adjust the path as needed

const CodeSnippetDemo = () => {
  const sampleCode = `
    function greet(name) {
      console.log("Hello, " + name);
    }
    greet("World");
  `;

  return (
    <div>
      <CodeSnippet
        code={sampleCode}
        language="javascript"
        theme="github-dark"
      />
    </div>
  );
};

export default CodeSnippetDemo;
