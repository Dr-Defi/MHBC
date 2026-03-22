# navigateToSection Tool
> v119.0 | Mobeus Tele

## Function Signature

```typescript
navigateToSection(payload: NavigationPayload): void
```

## Payload Schema

```json
{
  "badge": "string (required)",
  "title": "string (required)",
  "generativeSubsections": [
    {
      "id": "string (required)",
      "templateId": "string (required)",
      "props": "object (required)"
    }
  ]
}
```

---

<!-- TEMPLATE-SCHEMAS-START -->

## ---TEMPLATES--- (31)

### Accordion
GENERIC
```json
{"items"?: [{"icon"?: "string", "number"?: 0, "title": "string", "subtitle"?: "string", "description"?: "string", "details"?: ["string"], "actionPhrase"?: "string", "actionLabel"?: "string"}], "allowMultiple"?: false, "ctaLabel"?: "string", "ctaActionPhrase"?: "string"}
```

### Article
RICH GENERIC
```json
{"icon"?: "string", "badge"?: "string", "heroImages"?: [{"url"?: "string", "prompt"?: "string"}], "heroImageUrl"?: "string", "heroImagePrompt"?: "string", "title"?: "string", "subtitle"?: "string", "meta"?: {"author"?: "string", "date"?: "string", "readTime"?: "string", "category"?: "string"}, "blocks"?: [{"type": {}, "content"?: "string", "items"?: ["string"], "imageUrl"?: "string", "imagePrompt"?: "string", "images"?: [{"url"?: "string", "prompt"?: "string", "caption"?: "string"}], "caption"?: "string", "icon"?: "string", "variant"?: {}, "actionPhrase"?: "string"}], "tags"?: ["string"], "relatedLinks"?: [{"label": "string", "actionPhrase": "string"}], "ctaLabel"?: "string", "ctaActionPhrase"?: "string", "secondaryCtaLabel"?: "string", "secondaryCtaActionPhrase"?: "string"}
```

### Banner
RICH GENERIC
```json
{"icon"?: "string", "badge"?: "string", "headline"?: "string", "subheadline"?: "string", "description"?: "string", "imageUrl"?: "string", "imagePrompt"?: "string", "stats"?: [{"value": "string", "label": "string"}], "features"?: [{"icon"?: "string", "text": "string"}], "highlight"?: false, "variant"?: "gradient", "bannerActionPhrase"?: "string", "ctaLabel"?: "string", "ctaActionPhrase"?: "string", "secondaryCtaLabel"?: "string", "secondaryCtaActionPhrase"?: "string"}
```

### BeforeAfter
RICH GENERIC
```json
{"icon"?: "string", "badge"?: "string", "headline"?: "string", "subtitle"?: "string", "before": {"icon"?: "string", "badge"?: "string", "title": "string", "narrative": "string", "points"?: ["string"], "stats"?: [{"value": "string", "label": "string"}]}, "after": {"icon"?: "string", "badge"?: "string", "title": "string", "narrative": "string", "points"?: ["string"], "stats"?: [{"value": "string", "label": "string"}]}, "tagline"?: "string", "ctaLabel"?: "string", "ctaActionPhrase"?: "string"}
```

### Carousel
GENERIC
```json
{"cards"?: [{"title": "string", "subtitle"?: "string", "imageUrl"?: "string", "imagePrompt"?: "string", "actionPhrase": "string"}], "autoScrollSpeed"?: 1}
```

### Compare
RICH GENERIC
```json
{"icon"?: "string", "badge"?: "string", "headline"?: "string", "subtitle"?: "string", "columns"?: [{"icon"?: "string", "badge"?: "string", "imageUrl"?: "string", "imagePrompt"?: "string", "title": "string", "subtitle"?: "string", "value"?: "string", "items": ["string"], "variant": {}, "highlight"?: false, "stats"?: [{"value": "string", "label": "string"}], "actionPhrase"?: "string", "ctaLabel"?: "string"}], "summary"?: {"icon"?: "string", "title": "string", "description"?: "string", "actionPhrase"?: "string"}, "ctaLabel"?: "string", "ctaActionPhrase"?: "string", "secondaryCtaLabel"?: "string", "secondaryCtaActionPhrase"?: "string"}
```

### Countdown
RICH GENERIC
```json
{"icon"?: "string", "badge"?: "string", "headline"?: "string", "subtitle"?: "string", "targetDate": "string", "eventName"?: "string", "tagline"?: "string", "details"?: [{"icon"?: "string", "text": "string"}], "ctaLabel"?: "string", "ctaActionPhrase"?: "string", "secondaryCtaLabel"?: "string", "secondaryCtaActionPhrase"?: "string"}
```

### Diagram
RICH GENERIC
```json
{"icon"?: "string", "badge"?: "string", "headline"?: "string", "subtitle"?: "string", "nodes": [{"id": "string", "icon"?: "string", "title": "string", "subtitle"?: "string", "description"?: "string", "variant"?: {}, "actionPhrase"?: "string"}], "connections"?: [{"from": "string", "to": "string", "label"?: "string"}], "centerLabel"?: "string", "caption"?: "string", "ctaLabel"?: "string", "ctaActionPhrase"?: "string"}
```

### EraShift
RICH GENERIC
```json
{"icon"?: "string", "badge"?: "string", "headline"?: "string", "subtitle"?: "string", "past": {"icon"?: "string", "badge"?: "string", "title": "string", "subtitle"?: "string", "description"?: "string", "details": [{"icon"?: "string", "text": "string"}], "stat"?: "string"}, "future": {"icon"?: "string", "badge"?: "string", "title": "string", "subtitle"?: "string", "description"?: "string", "details": [{"icon"?: "string", "text": "string"}], "stat"?: "string"}, "dividerLabel"?: "string", "declaration"?: "string", "ctaLabel"?: "string", "ctaActionPhrase"?: "string"}
```

### Feature
GENERIC
```json
{"imageUrl"?: "string", "imagePrompt"?: "string", "badge"?: "string", "title"?: "string", "description"?: "string", "points"?: [{"icon"?: "string", "text": "string"}], "ctaLabel"?: "string", "ctaActionPhrase"?: "string", "secondaryLabel"?: "string", "secondaryPhrase"?: "string", "reversed"?: false}
```

### Form
GENERIC
```json
{"headline"?: "string", "subheadline"?: "string", "fields"?: [{"name": "string", "label": "string", "type": {}, "icon"?: "string", "placeholder"?: "string", "required"?: false}], "infoLabel"?: "string", "infoItems"?: [{"text": "string"}], "submitLabel"?: "string", "submitActionPhrase"?: "string", "values"?: "string", "confirmed"?: false, "confirmationTitle"?: "string", "confirmationMessage"?: "string", "content"?: {"title"?: "string", "subtitle"?: "string", "paragraph"?: "string", "imageUrl"?: "string", "imagePrompt"?: "string", "badges"?: [{"icon"?: "string", "label": "string", "variant"?: {}}]}}
```

### Grid
RICH GENERIC
```json
{"icon"?: "string", "badge"?: "string", "headline"?: "string", "subtitle"?: "string", "sections"?: [{"icon"?: "string", "label"?: "string", "description"?: "string", "cards": [{"icon"?: "string", "badge"?: "string", "imageUrl"?: "string", "imagePrompt"?: "string", "title": "string", "description": "string", "stats"?: [{}], "highlight"?: false, "actionPhrase"?: "string", "ctaLabel"?: "string"}], "variant"?: {}}], "items"?: [{"icon"?: "string", "badge"?: "string", "imageUrl"?: "string", "imagePrompt"?: "string", "title": "string", "description": "string", "stats"?: [{"value": "string", "label": "string"}], "highlight"?: false, "actionPhrase"?: "string", "ctaLabel"?: "string"}], "columns"?: 3, "ctaLabel"?: "string", "ctaActionPhrase"?: "string", "secondaryCtaLabel"?: "string", "secondaryCtaActionPhrase"?: "string"}
```

### Hero
GENERIC
```json
{"stat"?: "string", "statLabel"?: "string", "headline"?: "string", "description"?: "string", "features"?: [{"icon"?: "string", "label": "string", "muted"?: false}], "insight"?: {"icon"?: "string", "title": "string", "description": "string"}, "quote"?: "string", "ctaLabel"?: "string", "ctaActionPhrase"?: "string", "variant"?: "default"}
```

### ImageSingle
RICH GENERIC
```json
{"icon"?: "string", "badge"?: "string", "title"?: "string", "subtitle"?: "string", "imageUrl"?: "string", "imagePrompt"?: "string", "images"?: [{"url"?: "string", "prompt"?: "string", "caption"?: "string", "actionPhrase"?: "string"}], "caption"?: "string", "aspectRatio"?: "'1:1',  // Default to square", "showThumbnails"?: false, "imageActionPhrase"?: "string", "ctaLabel"?: "string", "ctaActionPhrase"?: "string", "secondaryCtaLabel"?: "string", "secondaryCtaActionPhrase"?: "string"}
```

### Infographic
GENERIC
```json
{"imageUrl"?: "string", "imagePrompt"?: "string", "title"?: "string", "subtitle"?: "string", "description"?: "string", "points"?: [{"icon"?: "string", "label": "string", "value": "string", "description"?: "string"}], "ctaLabel"?: "string", "ctaActionPhrase"?: "string"}
```

### Lesson
GENERIC
```json
{"title": "string", "subtitle"?: "string", "duration"?: "string", "difficulty"?: "string", "imageUrl"?: "string", "imagePrompt"?: "string", "objectivesLabel"?: "string", "objectives"?: ["string"], "sections"?: [{"icon"?: "string", "title": "string", "content": "string", "imageUrl"?: "string", "imagePrompt"?: "string", "keyPoints"?: ["string"]}], "summaryLabel"?: "string", "summary"?: "string", "keyTakeaways"?: ["string"], "nextLabel"?: "string", "nextPhrase"?: "string", "ctaLabel"?: "string", "ctaActionPhrase"?: "string"}
```

### Metric
GENERIC
```json
{"value": "string", "label": "string", "context"?: "string", "icon"?: "string", "trend"?: "neutral", "variant"?: "default", "ctaLabel"?: "string", "ctaActionPhrase"?: "string"}
```

### Paragraph
RICH GENERIC
```json
{"icon"?: "string", "badge"?: "string", "title"?: "string", "subtitle"?: "string", "content"?: "string", "text"?: "string", "highlights"?: ["string"], "quote"?: "string", "imageUrl"?: "string", "imagePrompt"?: "string", "variant"?: "default", "alignment"?: "left", "contentActionPhrase"?: "string", "ctaLabel"?: "string", "ctaActionPhrase"?: "string", "secondaryCtaLabel"?: "string", "secondaryCtaActionPhrase"?: "string"}
```

### PartyConfirmation
CELEBRATION
```json
{"badge"?: "YOU'RE ON THE LIST", "headline"?: "See You at the Population Party! 🎉", "subheadline"?: "string", "partyDate"?: "March 15, 2026", "partyTime"?: "7:00 PM - Midnight EST", "location"?: "string", "partyHighlights"?: [], "celebrationImage"?: "party-celebration-confirmed", "confirmationMessage"?: "string"}
```

### PersonaCard
RICH GENERIC
```json
{"icon"?: "string", "badge"?: "string", "name": "string", "role": "string", "location": "string", "imageUrl"?: "string", "imagePrompt"?: "string", "painPoint": "string", "transformation": "string", "impactQuote"?: "string", "stats"?: [{"value": "string", "label": "string"}], "ctaLabel"?: "string", "ctaActionPhrase"?: "string"}
```

### Quote
RICH GENERIC
```json
{"icon"?: "string", "badge"?: "string", "quote": "string", "author"?: "string", "role"?: "string", "company"?: "string", "avatarUrl"?: "string", "avatarPrompt"?: "string", "rating"?: 0, "source"?: "string", "sourceActionPhrase"?: "string", "variant"?: "default", "ctaLabel"?: "string", "ctaActionPhrase"?: "string", "secondaryCtaLabel"?: "string", "secondaryCtaActionPhrase"?: "string"}
```

### Scorecard
GENERIC
```json
{"title": "string", "subtitle"?: "string", "imageUrl"?: "string", "imagePrompt"?: "string", "periodLabel"?: "string", "period"?: "string", "overallScore"?: 0, "overallGrade"?: "string", "overallLabel"?: "string", "sections"?: [{"title": "string", "imageUrl"?: "string", "imagePrompt"?: "string", "metrics": [{"icon"?: "string", "label": "string", "value": "string", "target"?: "string", "trend"?: {}, "trendValue"?: "string", "grade"?: {}, "status"?: {}}], "overallScore"?: 0, "overallGrade"?: "string"}], "highlights"?: [{"icon"?: "string", "label": "string", "value": "string"}], "ctaLabel"?: "string", "ctaActionPhrase"?: "string"}
```

### Showcase
RICH GENERIC
```json
{"icon"?: "string", "badge"?: "string", "headline"?: "string", "subheadline"?: "string", "heroImageUrl"?: "string", "heroImagePrompt"?: "string", "rating"?: 0, "ratingLabel"?: "string", "benefits"?: [{"icon"?: "string", "badge"?: "string", "title"?: "string", "text"?: "string", "description"?: "string", "stat"?: "string", "highlight"?: false, "actionPhrase"?: "string"}], "items"?: [{"icon"?: "string", "badge"?: "string", "title"?: "string", "text"?: "string", "description"?: "string", "stat"?: "string", "highlight"?: false, "actionPhrase"?: "string"}], "tagline"?: "string", "taglineIcon"?: "string", "taglineActionPhrase"?: "string", "ctaLabel"?: "string", "ctaActionPhrase"?: "string", "secondaryCtaLabel"?: "string", "secondaryCtaActionPhrase"?: "string"}
```

### Split
GENERIC
```json
{"leftIcon"?: "string", "leftHeadline"?: "string", "leftSubheadline"?: "string", "leftItems"?: [{"icon"?: "string", "text": "string"}], "leftConclusion"?: "string", "leftVariant"?: "default", "rightItems"?: [{"icon"?: "string", "value": "string", "label": "string", "actionPhrase"?: "string"}], "ctaLabel"?: "string", "ctaActionPhrase"?: "string"}
```

### Steps
GENERIC
```json
{"headline"?: "string", "subheadline"?: "string", "steps"?: [{"icon"?: "string", "title": "string", "description"?: "string", "actionPhrase"?: "string"}], "layout"?: "vertical", "ctaLabel"?: "string", "ctaActionPhrase"?: "string"}
```

### Table
GENERIC
```json
{"title"?: "string", "subtitle"?: "string", "searchPlaceholder"?: "string", "columns"?: [{"key": "string", "label": "string", "sortable"?: false, "align"?: {}}], "rows"?: [{"id": "string", "cells": "string", "actionPhrase"?: "string"}], "emptyMessage"?: "string", "ctaLabel"?: "string", "ctaActionPhrase"?: "string"}
```

### Testimonial
RICH GENERIC
```json
{"icon"?: "string", "badge"?: "string", "quote": "string", "attribution": "string", "role"?: "string", "location"?: "string", "imageUrl"?: "string", "imagePrompt"?: "string", "context"?: "string", "tagline"?: "string", "variant"?: "warm", "ctaLabel"?: "string", "ctaActionPhrase"?: "string"}
```

### Timeline
GENERIC
```json
{"leftIcon"?: "string", "leftHeadline"?: "string", "leftSubheadline"?: "string", "description"?: "string", "highlights"?: ["string"], "deliverablesLabel"?: "string", "deliverables"?: [{"icon"?: "string", "text": "string"}], "stepsLabel"?: "string", "steps"?: [{"time"?: "string", "title": "string", "icon"?: "string"}], "successNote"?: "string", "ctaLabel"?: "string", "ctaActionPhrase"?: "string"}
```

### Trio
RICH GENERIC
```json
{"icon"?: "string", "badge"?: "string", "headline"?: "string", "subtitle"?: "string", "cards"?: [{"icon"?: "string", "badge"?: "string", "imageUrl"?: "string", "imagePrompt"?: "string", "title": "string", "description": "string", "highlight"?: false, "stats"?: [{"value": "string", "label": "string"}], "features"?: ["string"], "actionPhrase"?: "string", "ctaLabel"?: "string"}], "items"?: [{"icon"?: "string", "badge"?: "string", "imageUrl"?: "string", "imagePrompt"?: "string", "title": "string", "description": "string", "highlight"?: false, "stats"?: [{"value": "string", "label": "string"}], "features"?: ["string"], "actionPhrase"?: "string", "ctaLabel"?: "string"}], "numbered"?: true, "variant"?: "default", "ctaLabel"?: "string", "ctaActionPhrase"?: "string"}
```

### WelcomeCarousel
Apple-style solid color cards for Mobeus
```json
{"cards"?: [{"question": "string", "subtext"?: "string", "icon"?: "string", "imageUrl"?: "string", "actionPhrase": "string", "isAccent"?: false, "accentColor"?: {}}]}
```

### TeamGrid
RICH GENERIC
```json
{"icon"?: "string", "badge"?: "string", "headline"?: "string", "subtitle"?: "string", "members": [{"name": "string", "role"?: "string", "imageUrl"?: "string", "imagePrompt"?: "string", "bio"?: "string", "linkedinUrl"?: "string", "email"?: "string", "actionPhrase"?: "string"}], "columns"?: 3, "ctaLabel"?: "string", "ctaActionPhrase"?: "string"}
```

<!-- TEMPLATE-SCHEMAS-END -->

## 🎯 SHOT PROMPTS

### Shot 1: "What is Home Butler Club?"

**User:** "What is Home Butler Club?" / "Tell me about your services"

**Tele:** "We provide 24/7 butler service and full home management. Let me show you what stress-free luxury looks like."

**Call:**
```json
{
  "badge": "SERVICES",
  "title": "Elevated Home Living",
  "generativeSubsections": [
    {
      "id": "service-pillars",
      "templateId": "Grid",
      "props": {
        "headline": "Why Homeowners Choose Us",
        "subtitle": "Your home deserves the highest level of attention",
        "badge": "BENEFITS",
        "items": [
          {
            "icon": "Clock",
            "title": "24 / 7 Butler Service",
            "description": "A personal butler that is always available for urgent or routine tasks",
            "actionPhrase": "show me butler service"
          },
          {
            "icon": "Home",
            "title": "Full Home Management",
            "description": "Cleaning, errands, organization, repairs. Just call your butler",
            "actionPhrase": "show me home management"
          },
          {
            "icon": "Heart",
            "title": "Stress-Free Luxury",
            "description": "Focus on your life, we handle all the tasks that take you away from what you love",
            "actionPhrase": "show me luxury living"
          },
          {
            "icon": "Shield",
            "title": "Reliability You Can Trust",
            "description": "Trusted professionals that are background checked, trained, and dedicated to you",
            "actionPhrase": "show me your professionals"
          }
        ],
        "columns": 2
      }
    },
    {
      "id": "welcome-hero",
      "templateId": "Hero",
      "props": {
        "headline": "Experience a new standard of comfort",
        "description": "White-glove service delivered by a team you can trust.",
        "ctaLabel": "View Memberships",
        "ctaActionPhrase": "show me pricing tiers"
      }
    }
  ]
}
```

### Shot 2: "What does it cost?"

**User:** "How much is it?" / "What are the tiers?"

**Tele:** "We have three distinct membership tiers designed to provide exactly the level of care your home needs."

**Call:**
```json
{
  "badge": "PRICING",
  "title": "Membership Tiers",
  "generativeSubsections": [
    {
      "id": "pricing-trio",
      "templateId": "Trio",
      "props": {
        "headline": "Choose Your Level of Care",
        "subtitle": "Monthly subscriptions for every home",
        "items": [
          {
            "icon": "Star",
            "badge": "$99 /month",
            "title": "Tier I - Essential Care",
            "description": "5% off all services, 24/7 on-call butler, priority scheduling, monthly home wellness walkthrough",
            "actionPhrase": "select tier 1"
          },
          {
            "icon": "Award",
            "badge": "$199 /month",
            "title": "Tier II - Enhanced Living",
            "description": "10% off all services, 24/7 on-call butler, priority scheduling anytime, monthly home wellness walkthrough",
            "actionPhrase": "select tier 2"
          },
          {
            "icon": "Crown",
            "badge": "$299 /month",
            "title": "Tier III - Ultimate Butler",
            "description": "20% off all services, VIP 24/7 butler access, front-of-the-line scheduling, bi-weekly wellness walkthrough",
            "actionPhrase": "select tier 3"
          }
        ],
        "variant": "default",
        "numbered": false
      }
    },
    {
      "id": "how-it-works",
      "templateId": "Paragraph",
      "props": {
        "title": "How It Works",
        "subtitle": "Your membership gives you unlimited requests",
        "content": "Choose a subscription, and whenever you need something, just call or message your dedicated Home Butler. We take care of everything—either our team completes the work or we send the right specialist. All you do is relax.",
        "ctaLabel": "Apply Now",
        "ctaActionPhrase": "show me the application"
      }
    }
  ]
}
```

### Shot 3: "Sign me up"

**User:** "I want to apply" / "Sign me up" / "Let's go"

**Tele:** "Excellent choice. Filling out the application is your first step toward elevated home living."

**Call:**
```json
{
  "badge": "APPLICATION",
  "title": "Join The Home Butler Club",
  "generativeSubsections": [
    {
      "id": "application-banner",
      "templateId": "Banner",
      "props": {
        "icon": "Key",
        "badge": "GET STARTED",
        "headline": "Apply for Membership",
        "subheadline": "Experience stress-free luxury",
        "description": "Submit your application to schedule a welcome call and finalize your service schedule.",
        "features": [
          {
            "icon": "Check",
            "text": "Priority Service"
          },
          {
            "icon": "Check",
            "text": "24/7 Access"
          }
        ],
        "variant": "gradient",
        "highlight": true
      }
    },
    {
      "id": "form-steps",
      "templateId": "Steps",
      "props": {
        "headline": "What Happens Next?",
        "subheadline": "Your path to relaxation",
        "steps": [
          {
            "icon": "FileText",
            "title": "Submit Application",
            "description": "Provide your details using the form below",
            "actionPhrase": "submit application"
          },
          {
            "icon": "Phone",
            "title": "Welcome Call",
            "description": "We'll finalize your service schedule and introduce your butler",
            "actionPhrase": "schedule welcome call"
          },
          {
            "icon": "Home",
            "title": "Elevated Living",
            "description": "Enjoy the comfort and convenience of a fully managed home",
            "actionPhrase": "enjoy home living"
          }
        ],
        "layout": "vertical",
        "ctaLabel": "Fill Out Membership Application",
        "ctaActionPhrase": "open membership form"
      }
    }
  ]
}
```

---


### Shot 4: "Book a service / Collect Lead and Payment"

**User:** "I'd like to book Tier I" / "How do I pay?" / "I'm ready to proceed"

**Tele:** "Wonderful. Let's get your details and securely process your payment to confirm your booking."

**Call:**
```json
{
  "badge": "BOOKING",
  "title": "Membership Booking",
  "generativeSubsections": [
    {
      "id": "booking-form",
      "templateId": "Form",
      "props": {
        "headline": "Secure Your Membership",
        "subheadline": "Please provide your details",
        "fields": [
          { "name": "fullName", "label": "Full Name", "type": "text", "required": true },
          { "name": "email", "label": "Email", "type": "email", "required": true },
          { "name": "phone", "label": "Phone Number", "type": "tel", "required": true },
          { "name": "cardNumber", "label": "Card Number", "type": "text", "required": true },
          { "name": "expiry", "label": "Exp Date (MM/YY)", "type": "text", "required": true }
        ],
        "submitLabel": "Complete Booking",
        "submitActionPhrase": "submit my booking",
        "infoLabel": "Secure Processing",
        "infoItems": [
          { "text": "256-bit encryption" },
          { "text": "Cancel anytime" }
        ]
      }
    },
    {
      "id": "booking-banner",
      "templateId": "Banner",
      "props": {
        "headline": "Welcome to the Club",
        "description": "Your dedicated butler is standing by.",
        "variant": "gradient"
      }
    }
  ]
}
```

## 🚀 PATTERN


**Every response uses exactly 2 templates.**

Pattern: Context → Action

Examples:
- Grid → Hero
- Trio → Paragraph
- Banner → Steps

---

_v120.0 | Elevated Home Living_
