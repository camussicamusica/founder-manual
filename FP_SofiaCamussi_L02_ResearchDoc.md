# FP | Sofia Camussi | Research Doc

Client: Pareto Talent. Audience: founders. Checked on 2026-10-03. Companion: the mini Second Brain (L01).

## 1. How the research was done

- Sources: paretotalent.com and its funnels, the Day 1 and Day 10 transcripts, the Day 10 deck, and each competitor's own public pages.
- Method: I read page text and the public code each page loads (JavaScript and HubSpot form definitions, read with GET requests). I found 12 live lead magnets in the VA, EA and offshore hiring space and picked three for format variety: a quiz, a PDF ebook and a worksheet.
- OBSERVED means I saw it in page markup or public code. INFERRED means I reasoned it and did not see it.
- No form was submitted, no file was downloaded and no email address was entered. So I received no emails; every email sequence below is INFERRED.
- Pareto numbers: only ones printed on a Pareto page or said on the recording are used.

## 2. Three competitor lead magnets

### 2.1 Athena

| Field | Finding |
|---|---|
| Company, name | Athena, Delegation Assessment (Executive Leverage Quiz) |
| URL | https://www.athena.com/delegation-assessment |
| Format | 10-question quiz, scored into 6 levels |
| Promise | "How well do you actually delegate?" Sub: "Get a clear picture of where the gaps are, what's holding you back, and what it takes to delegate more effectively." |
| Who it is for | Executives and founders who do not yet use an EA |
| Capture | First name, Last name, Email (all required), after question 10. Hidden: quiz score, quiz level, UTM fields |
| Qualify | No revenue, size or title question. The score and level go into the CRM. Visitors from 8 countries (PH, VN, ID, IN, NG, MY, KE, GT) skip the form. OBSERVED |
| After opt-in | OBSERVED: redirect to https://www.athena.com/delegation-assessment/thank-you. "Your result is on its way. Check your inbox." The result comes by email, not on screen. The page pitches an Athena EA and a "Find your EA" button. INFERRED: a result email, then a sales sequence |
| Strength | A named level creates a gap the EA fills; the gate comes after the effort |
| Weakness | Result withheld until the email arrives; no firmographics; a blunt IP filter for job seekers |
| How Pareto beats it | Show the result and the top 3 hand-off tasks on screen at once; ask a role question instead of filtering by country |

### 2.2 Magic

| Field | Finding |
|---|---|
| Company, name | Magic, 100 Tasks an Executive Assistant Can Do for You |
| URL | https://getmagic.com/100-ea-tasks/ |
| Format | PDF ebook |
| Promise | "100 Tasks an Executive Assistant Can Do for You". Sub: "As an executive, your time is valuable. Download our free eBook to discover 100 tasks you can delegate to a virtual executive assistant, allowing you to focus on high-impact activities that drive your business forward." |
| Who it is for | Executives at companies of any size, up to 100K+ employees |
| Capture | Company email, First name, Last name, Company name, Job title, Phone number, Company employee size, an optional checkbox "FOUNDERIV", and a required Terms checkbox. Nine inputs; only the email shows first |
| Qualify | Heavy. Business email, title, company, size, phone. OBSERVED: gmail-type emails route to self-serve, business emails to the sales booking page |
| After opt-in | OBSERVED: "Your e-book is on its way to your inbox" plus a button straight to the PDF. A "Book a Call" button carries the lead's name, email and phone in the URL. Booking page: https://getmagic.com/get-your-magic-assistant/. INFERRED: sales follow-up by phone |
| Strength | High-intent topic; the best qualification data of the three; PDF and booking on one screen |
| Weakness | Nine fields for a list PDF; generic tasks with no priority or cost; nothing on time zone or country |
| How Pareto beats it | The same task idea sorted by hours saved, with 3 to 4 fields, an instant on-page result and a calendar |

### 2.3 BELAY

| Field | Finding |
|---|---|
| Company, name | BELAY, Delegation Worksheet & Guide |
| URL | https://resources.belaysolutions.com/resources/delegation-worksheet-guide |
| Format | Worksheet and guide (PDF): automate, delegate, delete, keep |
| Promise | "What If You Could Delegate Just Five Tasks To Save Yourself 15 Hours Every Week?" |
| Who it is for | Busy leaders and business owners in any industry; BELAY places U.S.-based assistants |
| Capture | First Name, Last Name, Email Address (required), Phone (optional), an unchecked SMS consent box |
| Qualify | Almost none. Industry and service line are filled from the resource's own tags. OBSERVED |
| After opt-in | OBSERVED: the PDF download starts in the same tab; the form becomes "This resource is on it's way to your inbox!" with a "Schedule a Call" button. INFERRED: a confirmation email and nurture |
| Strength | A concrete promise (five tasks, 15 hours), two fields, instant download, a call bridge |
| Weakness | The headline stat is unsupported; the rest of the page is a generic company pitch; U.S.-based only |
| How Pareto beats it | An interactive audit that outputs a hand-off brief the Right Hand can use on day 1, from a Latin America-based team working the founder's hours |

## 3. Runner-ups

| Company, name | URL | Why not chosen |
|---|---|---|
| Somewhere, Salary Calculator (ungated) | https://somewhere.com/calculator | No form, so nothing to teardown. It is the one direct LatAm cost comparison, and it recommends the Philippines for EAs |
| Time etc, Task Ideas Generator (wizard) | https://www.timeetc.com/get-started-wizard | Contact details come first; later steps are not visible without submitting |
| Oceans, Playbooks for Working With an EA+ (ungated) | https://www.oceanstalent.com/playbooks | No lead capture on the playbooks, only a newsletter box |

## 4. Market patterns and the gap

- Everyone leads with "what can I hand off?": 100 tasks, five tasks, a delegation level.
- Gates are thin (1 to 3 fields). Only Magic qualifies hard.
- After opt-in the step is always the same: thank you, file, "Book a call". Nobody delivers a personalised next step.
- Job seekers pollute lists. Athena filters by country, Time etc asks "assistant or looking for work".
- Nobody owns the Latin America story.
- **The gap:** nobody answers "how do I hand it off without weeks of training?"

## 5. Pareto's own lead magnets, and why a third must be different

- HIRE book funnel, https://thehirebook.com: a free book. Its form asks company size, revenue, hiring plans, situation, time spent hiring and monthly budget. Qualified founders go to a Matching Call page; others to a book-only thank-you.
- Delegation Audit, https://paretotalent.com/delegation-audit: an 11-question quiz that shows a score, a founder type, a ranked hand-off list and a 90-day plan with no email gate, then points to https://paretotalent.com/matching?ref=delegation-audit.
- Both answer "what can I hand off and what does it cost me?". A third magnet on that question would repeat them and copy the market. It has to answer the next objection.

## 6. Pareto's ICP

A US-based founder or owner-operator of a service, agency, coaching or expert business doing roughly $500K to $10M a year with 2 to 50 people, who is still the approval, the fix-it and the final word. They work nights and weekends, run the company from memory and have often been burned by a cheap assistant before. They need a proactive operator who closes loops without being chased, not more tasks done. (The $500K floor is Ivan's Day 8 ICP; Pareto's pages state other revenue bands, so the upper bound and team size are my decision.)

## 7. Five founder personas by cause, in client words

| # | Persona (cause) | Client words (source) | Stage |
|---|---|---|---|
| P1 | Memory Runner: no systems | "Everything still routes through me. I'm the approval, the fix-it, the final word." (Delegation Audit, https://paretotalent.com/delegation-audit) | TOFU |
| P2 | Once-Burned: a past assistant failed | "I've tried a VA before and it created more work." (home FAQ, https://paretotalent.com/) | MOFU |
| P3 | No-Time-To-Train: too busy to onboard | "I don't have time to train someone right now." (home FAQ) | MOFU |
| P4 | Stage-Bound Expert: the brand is them | "Clients pay for time with me." (Delegation Audit) | MOFU |
| P5 | Ready Buyer: comparing options | "I wish I'd started 12–18 months earlier." (Freedom 40 page, status UNVERIFIED) | BOFU |

- **P1.** Pain: nothing is written down, so the founder cannot step away. Angle: get it out of your head once. Also heard: "Everything Runs From Memory" (home).
- **P2.** Pain: the last hire added management work. Angle: it was not you and it was not them, nobody had the manual. Eric Ritter on the Wall of Love: "I thought it was me, right? I was burning through them."
- **P3.** Pain: explaining the job feels like another job. Angle: 10 minutes replaces weeks of training. Also heard: "It's faster if I just do it myself."
- **P4.** Pain: output must sound like them. Angle: teach someone your voice and judgment on one page. Day 8 board: speaker, coach, consultant.
- **P5.** Pain: waiting costs more than hiring. Angle: bring your manual to a Matching Call and meet 3 hand-picked matches within 24 hours.

## 8. What this means for the lead magnet

Decision: **Get Your Business Out of Your Head in 10 Minutes: The Founder Manual Builder**, a free mini web app that turns the rules in a founder's head into a one-page manual that a Right Hand, any hire or their AI can work from on day one.

Why:
1. It answers the one question every competitor and both existing Pareto magnets skip: how to hand off without weeks of training. That is P1 and P3 in their own words.
2. It is a tool, not a PDF. Tools engage more, and the result is on screen with no email needed to use it.
3. It qualifies. The form asks role and revenue; qualified means a founder, owner or CEO at $500K or more. Everyone else gets the resource and no call offer, which keeps job seekers out of the calendar.
4. The next step is personal. A qualified founder brings their manual to a Matching Call, which fits Pareto's Right Hand Program and its three guarantees.
