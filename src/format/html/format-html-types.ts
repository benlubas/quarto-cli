/*
 * format-html-types.ts
 *
 * Copyright (C) 2020-2023 Posit Software, PBC
 */

import { Metadata } from "../../config/types.ts";

enum AnchorClickOptions {
  'jump',
  'copy',
  'copy-and-jump'
}

export interface HtmlFormatFeatureDefaults {
  tabby?: boolean;
  copyCode?: boolean;
  anchors?: boolean;
  anchorClick?: AnchorClickOptions;
  hoverCitations?: boolean;
  hoverFootnotes?: boolean;
  figResponsive?: boolean;
  codeAnnotations?: boolean;
  hoverXrefs?: boolean;
  sectionCollapse?: boolean | 'closed';
}

export interface HtmlFormatTippyOptions {
  theme?: string;
  parent?: string;
  config?: Metadata;
}

export interface HtmlFormatScssOptions {
  quartoBase?: boolean;
  quartoCssVars?: boolean;
}
