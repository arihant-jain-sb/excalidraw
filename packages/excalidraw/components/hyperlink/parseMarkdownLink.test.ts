import { describe, expect, it } from "vitest";

import { parseMarkdownLink } from "./parseMarkdownLink";

describe("parseMarkdownLink", () => {
  it("parses a valid markdown link", () => {
    expect(parseMarkdownLink("[Docs](https://example.com)")).toEqual({
      label: "Docs",
      url: "https://example.com",
    });
  });

  it("trims whitespace around markdown syntax", () => {
    expect(parseMarkdownLink("   [Label](https://example.com/path)   ")).toEqual(
      {
        label: "Label",
        url: "https://example.com/path",
      },
    );
  });

  it("returns null for malformed markdown links", () => {
    expect(parseMarkdownLink("[Label]()")).toBeNull();
    expect(parseMarkdownLink("[](https://example.com)")).toBeNull();
    expect(parseMarkdownLink("Label(https://example.com)")).toBeNull();
    expect(parseMarkdownLink("[Label]( )")).toBeNull();
  });
});
