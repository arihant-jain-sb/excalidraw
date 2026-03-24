export type ParsedMarkdownLink = Readonly<{
  label: string;
  url: string;
}>;

const MARKDOWN_LINK_REGEX = /^\[([^\]]+)\]\(([^)]+)\)$/;

export const parseMarkdownLink = (
  text: string,
): ParsedMarkdownLink | null => {
  const match = MARKDOWN_LINK_REGEX.exec(text.trim());
  if (!match) {
    return null;
  }

  const label = match[1].trim();
  const url = match[2].trim();
  if (!label || !url) {
    return null;
  }

  return { label, url };
};
