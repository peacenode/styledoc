import React from 'react';

export const SemanticRaw = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <div className="text-xs text-muted-foreground border-b pb-1 mb-2">
          Native Semantic HTML (no classes needed)
        </div>
        <p>
          With semantic styling in your Tailwind config, you can write semantic HTML 
          directly without additional classes and get properly styled elements.
        </p>
      </div>

      <h1>This is a Heading 1</h1>
      <h2>This is a Heading 2</h2>
      <h3>This is a Heading 3</h3>
      <h4>This is a Heading 4</h4>
      <h5>This is a Heading 5</h5>
      <h6>This is a Heading 6</h6>

      <p>
        This is a paragraph element. It has proper styling for body text with good 
        line height, spacing, and a clean appearance. When you use semantic HTML elements, 
        you get proper styling without needing to add utility classes.
      </p>

      <blockquote>
        &quot;This is a blockquote element. It&apos;s styled with a left border and italics to
        visually set it apart from normal text.&quot; — Design System
      </blockquote>

      <div>
        <div className="text-xs text-muted-foreground border-b pb-1 mb-2">Unordered List</div>
        <ul>
          <li>First list item using semantic HTML</li>
          <li>Second list item</li>
          <li>Third list item with longer content to demonstrate how text wraps within list items</li>
        </ul>
      </div>

      <div>
        <div className="text-xs text-muted-foreground border-b pb-1 mb-2">Ordered List</div>
        <ol>
          <li>First ordered list item</li>
          <li>Second ordered list item</li>
          <li>Third ordered list item with longer content to demonstrate how text wraps</li>
        </ol>
      </div>

      <p>
        When you need to highlight a <code>variable</code> or code snippet inside text,
        you can use the code element without adding classes.
      </p>

      <figure>
        <div className="h-40 bg-muted flex items-center justify-center text-muted-foreground border rounded-md">
          [Image Placeholder]
        </div>
        <figcaption>
          This figcaption is styled automatically when used with the figure element
        </figcaption>
      </figure>

      <p>
        You can use the <mark>mark element</mark> to highlight important text within a paragraph.
      </p>

      <table>
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Data 1-1</td>
            <td>Data 1-2</td>
            <td>Data 1-3</td>
          </tr>
          <tr>
            <td>Data 2-1</td>
            <td>Data 2-2</td>
            <td>Data 2-3</td>
          </tr>
        </tbody>
      </table>

      <details>
        <summary>Click to expand details</summary>
        <div className="p-4">
          <p>This content is revealed when the details element is expanded.</p>
          <p>You can include any semantic HTML here.</p>
        </div>
      </details>

      <div>
        <div className="text-xs text-muted-foreground border-b pb-1 mb-2">Definition List</div>
        <dl>
          <dt>Definition Term</dt>
          <dd>This is the definition description that explains the term.</dd>
          
          <dt>Another Term</dt>
          <dd>The description for the second term with more explanation.</dd>
        </dl>
      </div>
    </div>
  );
};

export default SemanticRaw; 