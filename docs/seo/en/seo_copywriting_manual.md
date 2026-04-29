# Technical SEO & GEO Content Manual for Remolda.com (2024-2026)

## Overview
This manual defines the technical standards for content creation at Remolda.com. Our goal is to dominate AI-driven search (SGE/AEO) while maintaining a high human-like profile to bypass AI detectors and build trust with B2B decision-makers.

---

## 1. Core KPIs & Measurable Metrics

| Parameter | Metric | Target Value (KPI) | Tooling/Verification |
| :--- | :--- | :--- | :--- |
| **Humanization** | Perplexity | **30.0 – 100.0+** | GPTZero, Originality.ai |
| **Humanization** | Burstiness | **0.2 – 0.5+** | Sapling, GPTZero |
| **SEO Authority** | Entity Salience | **> 0.5** for Primary Entity | Google NLP API, InLinks |
| **SEO Authority** | Attribute Coverage | **> 80%** of industry-standard attributes | Semrush SEO Content Template |
| **Structure** | AEO Modular Blocks | **H2 (Question) + P (Answer)** | Manual check / LLM validation |
| **Readability** | Flesch-Kincaid | **40.0 – 60.0** (College Level) | Hemingway Editor, Grammarly |
| **Sentiment** | Sentiment Score | **0.1 – 0.3** (Objective Authority) | Google NLP API (Neutral-Positive) |
| **Spam Score** | Moz Spam Score | **< 30%** | Moz Link Explorer |
| **Trust** | Information Gain | **Unique data/logic present** | Peer review / Plagiarism check |

---

## 2. Anti-AI Slop & Humanization Strategy

To rank in 2026, content must not just be "unique," but "unpredictable" to AI detectors.

### Perplexity (Unpredictability)
*   **Definition:** Word-level predictability. AI chooses the most probable word; humans use idioms, industry jargon, and creative metaphors.
*   **Tactics:** 
    *   Avoid generic AI starters ("In today's fast-paced world...").
    *   Use highly specific industry terms (e.g., instead of "improving process," use "removing operational friction in legacy CRM pipelines").

### Burstiness (Structural Variety)
*   **Definition:** Variation in sentence length and complexity. 
*   **Tactics:** 
    *   **The 3-1 Rule:** Follow 3 complex/long sentences with 1 short, punchy sentence (3-7 words).
    *   Vary syntax: Mix declarative sentences with rhetorical questions and imperatives.

---

## 3. Entity & NLP Optimization (Beyond Keywords)

Modern search engines index **Entities**, not just strings.

### Entity Salience & Connectivity
*   **Goal:** Your primary topic (e.g., "AI Business Transformation") must be identified by NLP as the central entity.
*   **Implementation:**
    *   **Primary Entity:** Mention in Title, H1, and first 100 words.
    *   **Secondary Entities (LSI 2.0):** Mention related entities like "Operational Efficiency," "LLM Fine-tuning," "Change Management," and "ROI of AI."
    *   **Connectivity:** Explicitly state relationships: "AI Transformation **requires** a robust data governance framework **to ensure** LLM accuracy."

### Attribute Coverage
If writing about "AI Strategy," you **must** cover these attributes:
*   Scalability, Security/Privacy, Cost-Efficiency, Human-in-the-loop, Legacy Integration.
*   Missing attributes = "Incomplete Knowledge" signal to search engines.

---

## 4. Answer Engine Optimization (AEO)

Google's AI Overviews (SGE) look for modular blocks of information.

*   **The Answer Box Format:**
    *   **Header (H2/H3):** Phrased as a direct question or clear topic (e.g., "How does AI reduce operational costs?").
    *   **Body (Paragraph):** The first sentence must be a direct answer (25-40 words).
    *   **The Proof:** Follow with a bulleted list or a table with data.
*   **Schema Markup:** Every page must include `FAQPage` or `Article` schema to explicitly define these answer blocks.

---

## 5. GEO & Local Intent Strategy (B2B Focus)

Remolda targets businesses globally, but GEO-specific landing pages need "Local Authority."

### KPI for GEO-Relevance:
*   **Local Entity Density:** Mention local business districts (e.g., "AI integration for firms in **Canary Wharf** or **The City**").
*   **Compliance/Regulations:** Mention local laws (e.g., "GDPR compliance in the UK" or "AI safety standards in Canada").
*   **Local Case Studies:** Use local business names or regional challenges (e.g., "Helping manufacturers in the **Rust Belt** adopt predictive maintenance").

---

## 6. Technical Hygiene & Sentiment

### Sentiment: The "Objective Authority"
*   **Target Score:** **0.1 to 0.3**. 
*   **Tone:** Professional, direct, and cautiously optimistic. Avoid "fluff" adjectives (e.g., "revolutionary," "game-changing," "amazing"). Use "measurable," "significant," "documented."

### Spam & Readability
*   **Sentence Complexity:** Aim for **15-20 words** per sentence on average.
*   **Paragraph Length:** Max 3 sentences or 4 lines.
*   **Spam Signals:** 
    *   Keyword density must NOT exceed **1.5%**.
    *   Internal/External link ratio should be **1:1** or **2:1**.

---

## 7. Execution Checklist for Copywriters

1. [ ] **AI Detection Check:** Does the text score <10% AI on Originality.ai?
2. [ ] **Sentence Variety:** Are there at least 3 "punchy" short sentences per section?
3. [ ] **Entity Salience:** Does the Google NLP Demo identify your main topic as the top entity?
4. [ ] **Direct Answer:** Is there a clear answer block in the first 30% of the article?
5. [ ] **Proof Density:** Does the article contain at least one real-world metric, data point, or specific tool mention?

---
*Created by Gemini CLI Agent for Remolda.com*
