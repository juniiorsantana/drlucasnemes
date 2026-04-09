# Project Instructions - Dr. Lucas Nemes Website

## 📚 Design System & Skills

This project has a **comprehensive design system** with specialized skills for frontend architecture and design decisions.

### Frontend Skills Reference
Always use these guidelines when working on UI/UX or frontend code:

#### 🎨 Core Design Skills
- **Frontend Specialist** (`./.claude/skills/frontend-specialist.md`)
  - Senior Frontend Architect mindset
  - Purple Ban enforcement
  - Design thinking process
  - Self-audit (Maestro Auditor)
  - Reality check anti-self-deception

- **Frontend Design** (`./.claude/skills/frontend-design.md`)
  - Design principles and decision-making
  - UX psychology fundamentals
  - Layout, color, and typography guidelines
  - Pre-design checklists
  - Anti-patterns to avoid

#### 🎯 Deep Dive Skills (Context-Specific)
- **Color System** (`./.claude/skills/color-system.md`)
  - Color theory and relationships
  - 60-30-10 rule application
  - Palette generation from HSL
  - Dark mode adaptation
  - Accessibility contrast guidelines

- **Typography System** (`./.claude/skills/typography-system.md`)
  - Modular scale principles
  - Font pairing strategies
  - Line height and length optimization
  - Responsive typography with clamp()
  - Hierarchy and readability

- **Visual Effects** (`./.claude/skills/visual-effects.md`)
  - Glassmorphism principles
  - Shadow hierarchy and elevation
  - Gradient techniques
  - Border and glow effects
  - Modern CSS techniques

- **Animation Guide** (`./.claude/skills/animation-guide.md`)
  - Duration principles
  - Easing selection (ease-out, ease-in, etc.)
  - Micro-interaction patterns
  - Loading states
  - Scroll animations

- **Motion Graphics** (`./.claude/skills/motion-graphics.md`)
  - Lottie animations
  - GSAP and ScrollTrigger
  - SVG animations
  - 3D CSS transforms
  - Particle effects

- **Decision Trees** (`./.claude/skills/decision-trees.md`)
  - Audience-based design decisions
  - Context templates (E-commerce, SaaS, Landing Pages)
  - Complexity estimation
  - Pre-design checklists

- **UX Psychology** (`./.claude/skills/ux-psychology.md`)
  - Core UX laws (Hick's, Fitts', Miller's, Von Restorff)
  - Emotional design levels
  - Trust building patterns
  - Cognitive load management

---

## 🚀 Terminal Usage

### Using Skills from Claude Code CLI

#### 1. **Activate a Skill in Conversation**
```bash
# Describe your task and mention the skill context
claude-code "I need to design a landing page for a medical practice"

# Claude will automatically load relevant skills based on keywords:
# - "design" → triggers frontend-design
# - "landing page" → triggers decision-trees
# - "color/typography" → triggers specific systems
```

#### 2. **Direct Skill Reference**
```bash
# Reference a skill explicitly in your message
claude-code "Using frontend-specialist skill, help me audit this component for generic design"

# Or reference a specific file
claude-code "Check /frontend-design.md for color principles and help me choose a palette"
```

#### 3. **Design System Audit**
```bash
# Ask Claude to audit against design principles
claude-code "Audit my design against the Purple Ban, Maestro Auditor checklist, and Reality Check from frontend-specialist"
```

#### 4. **Context-Specific Help**
```bash
# Get decision trees for your project type
claude-code "I'm building an e-commerce site. Reference decision-trees.md and help me structure it"

# Get animation guidance
claude-code "I need scroll animations. Check animation-guide.md and motion-graphics.md"

# Get color selection process
claude-code "Help me choose colors following color-system.md principles"
```

---

## 🎯 Quick Reference by Task

### When Building UI Components
```bash
claude-code "Design a button component. Use:
- frontend-specialist for principles
- visual-effects for styling
- animation-guide for hover states"
```

### When Choosing Colors
```bash
claude-code "Select a color palette using color-system.md HSL method"
```

### When Designing Layouts
```bash
claude-code "Design this layout following decision-trees.md for [your context]"
```

### When Adding Animations
```bash
claude-code "Add animations respecting animation-guide.md timing and motion-graphics.md techniques"
```

### When Auditing Design
```bash
claude-code "Run Maestro Auditor from frontend-specialist on this design.
Check against:
1. The Safe Split
2. The Glass Trap
3. The Glow Trap
4. The Bento Trap
5. The Blue Trap"
```

---

## 📋 Design Checklist

**Before starting ANY frontend/design task:**

- [ ] Read relevant skill files (frontend-design is REQUIRED)
- [ ] Check Purple Ban (color-system.md)
- [ ] Run Maestro Auditor self-check (frontend-specialist.md)
- [ ] Ask user preferences if unclear
- [ ] Verify against anti-patterns
- [ ] Reality check: "Is this generic or memorable?"

---

## 🔗 Related Agents

@AGENTS.md