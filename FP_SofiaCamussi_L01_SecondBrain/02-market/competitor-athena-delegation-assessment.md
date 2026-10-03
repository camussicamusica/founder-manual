---
type: reference
updated: 2026-10-03
source_type: public-page
source: https://www.athena.com/delegation-assessment ; https://www.athena.com/delegation-assessment/thank-you ; HubSpot public form definition for form id ac1b0c35-b9ae-45de-b6f0-58ef9a57e354 (GET only)
tags: [competitor, athena, quiz, delegation]
---

# Athena: Delegation Assessment (quiz)

Checked 2026-10-03. Nothing was submitted.

| Field | Finding |
|---|---|
| Company, name | Athena, "Athena Executive Leverage Quiz | Free Delegation Assessment" |
| URL | https://www.athena.com/delegation-assessment (thank-you: https://www.athena.com/delegation-assessment/thank-you) |
| Format | 10-question multiple-choice quiz, 4 options each, "Question 1 of 10", scored into 6 levels (Beginner, Novice, Intermediate, Advanced, Expert, Mastery) |
| Promise (verbatim) | Headline: "How well do you actually delegate?" Sub: "Get a clear picture of where the gaps are, what's holding you back, and what it takes to delegate more effectively." |
| Who it is for | Executives and founders not yet using an EA. Evidence: "A peer mentions offhand that they have an EA. What is your honest first reaction?"; thank-you: "Most executives know they should delegate more." |
| Capture (exact) | Visible: First name (required), Last name (required), Email (required); button "Submit". Hidden: delegationquiz_score, delegationquiz_level, utm_campaign, utm_content, utm_medium, utm_source, utm_term. The gate comes after all 10 questions. |
| Qualification | No firmographic field (no revenue, size, title, phone). Implicit: the score and level are written to the CRM. OBSERVED in public code: visitors from PH, VN, ID, IN, NG, MY, KE, GT skip the email form. INFERRED: this keeps would-be EA job applicants out of the list. |
| After opt-in | OBSERVED (public JS): redirect to /delegation-assessment/thank-you. OBSERVED (page text): "Your result is on its way. Check your inbox, it'll be there in the next 2 minutes." plus "WHILE YOU WAIT" with four bullets about an Athena EA ("Top 1% of 60,000+ monthly applicants"), a testimonial from Ryan Hoover and a "Find your EA" button. The result is delivered by email, not shown on screen. INFERRED: an automated result email then a sales nurture; no email was seen. |
| Strength | Self-diagnosis engages more than a PDF; a named level creates a gap the product fills; score stored as a CRM field; gate after the effort; the thank-you page is a second sales pitch. |
| Weakness | The result is withheld until an email arrives (friction and a deliverability dependency); no firmographics, so every lead looks the same to sales; generic "Find your EA" instead of a booking; the country filter is blunt and does not stop job seekers from other countries. |
| How Pareto beats it | Show the level and the top 3 hand-off tasks on screen at once; ask the email only to save and send; ask a role question ("I am hiring" versus "I am looking for work") so job seekers are filtered by intent, not by IP; add two qualifiers and an inline calendar for qualified founders. |

Landing page order: nav, H1 and sub, quiz card, email gate, "Delegation levels" block, closing CTA band, footer. Compare: [[competitor-magic-100-ea-tasks]], [[competitor-belay-delegation-worksheet]], [[market-patterns]], and Pareto's own quiz in [[existing-lead-magnets]]. How this shaped the decision: [[lead-magnet-brief]].
