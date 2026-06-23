# Rejouva Advertorial — Image Placement Handoff
**File:** `advertorial.html`  
**Images:** 8 files from `archive.zip`  
**Total placeholders:** 9 (the product jar image is reused in two slots)  
**Prepared for:** Antigravity

---

## 1. Rename the Files First

Before touching the HTML, rename all 8 PNGs to human-readable names. All files are 2752×1536 PNG (2K, 16:9).

| Original filename (from archive.zip) | Rename to |
|---|---|
| `hf_20260622_114847_2a61e7d4-c957-4911-9f5e-3ba3b2e1f552.png` | `img-01-hero-before-after.png` |
| `hf_20260622_114856_bccf7c58-32b1-484c-8adf-fa8d3c2422bd.png` | `img-02-skin-barrier-diagram.png` |
| `hf_20260622_114903_8420c425-f500-4504-8cf0-9270dc8a45c5.png` | `img-03-mistake2-blue-light.png` |
| `hf_20260622_114910_ea3cb795-94ad-43a1-8787-efdad9225a8a.png` | `img-04-overnight-anatomy-diagram.png` |
| `hf_20260622_114917_6963aa3a-53de-4c4b-9c6a-d9154ca137ca.png` | `img-05-pdrn-clinical-vial.png` |
| `hf_20260622_114935_525a93ba-99f2-43cc-917f-66f4101213da.png` | `img-06-morning-routine-lifestyle.png` |
| `hf_20260622_114942_3f265b48-fedb-48b5-9596-0710f13918c1.png` | `img-07-transformation-video-call.png` |
| `hf_20260622_115300_3756d5a0-a312-4ad8-a51d-cbb3bf12d460.png` | `img-08-product-jar.png` |

Place all renamed images in the same directory as `advertorial.html`, or inside a subfolder like `images/` — just make sure all `src` paths below match wherever you put them.

---

## 2. Placement Map

| Slot | Section in advertorial | Image file | What the image shows |
|---|---|---|---|
| 1 | Hero — "Week 1 vs Week 12" | `img-01-hero-before-after.png` | Split before/after: heavy dark circles and bags left, clear smooth under-eye right. BEFORE / AFTER text labels baked in. |
| 2 | Mistake #1 — skin barrier | `img-02-skin-barrier-diagram.png` | Clinical diagram: large cream molecules piled on top of stratum corneum, unable to reach dermis. Labeled Skin Barrier Penetration Limits. |
| 3 | Mistake #2 — exhausted cells | `img-03-mistake2-blue-light.png` | Woman lying in bed at night, phone screen casting blue light on her face, visible tired under-eyes. |
| 4 | Overnight — fluid pooling | `img-04-overnight-anatomy-diagram.png` | Medical cross-section illustration of under-eye anatomy during sleep: bluish shadow, loose connective tissue, fluid collection (edema), dilated leaky capillaries, orbicularis oculi muscle. |
| 5 | PDRN clinical origin | `img-05-pdrn-clinical-vial.png` | Gloved hand in a lab or clinical setting holding a small vial of pink-tinted liquid (PDRN solution). |
| 6 | Introducing Rejouva — product reveal | `img-08-product-jar.png` | Open jar of pink gel eye patches, dense pink hydrogel visible, single patch next to the jar. ⚠️ See Flag A below. |
| 7 | Hands-free morning routine | `img-06-morning-routine-lifestyle.png` | Woman wearing an under-eye patch while leaning over kitchen counter, coffee press in frame, morning light. |
| 8 | Transformation story | `img-07-transformation-video-call.png` | Woman at her desk on a video call, laptop showing a Zoom grid, looking confident and rested, clear under-eyes. |
| 9 | Sale CTA — product photo | `img-08-product-jar.png` | Same jar as slot 6. ⚠️ See Flag A below. |

---

## 3. HTML Find & Replace

Swap each `placehold.co` src one at a time. Do them in order to avoid confusion.

---

### Slot 1 — Hero Before/After

**Find:**
```
src="https://placehold.co/1000x560/211A24/FBF8F5?text=Week+1+vs+Week+12"
```

**Replace with:**
```
src="img-01-hero-before-after.png"
```

Also update the `alt` attribute on the same `<img>` tag — the existing alt is fine, leave it.

---

### Slot 2 — Mistake #1 Skin Barrier Diagram

**Find:**
```
src="https://placehold.co/1000x500/F3EBE4/9E4F58?text=Mistake+%231+Image"
```

**Replace with:**
```
src="img-02-skin-barrier-diagram.png"
```

**Also update the `alt` on the same `<img>`:**

Find:
```
alt="Illustration of cream molecules sitting on the skin surface, unable to penetrate"
```

Replace with:
```
alt="Diagram showing how large cream molecules cannot pass through the skin barrier and reach the dermis"
```

⚠️ See Flag B below — the dark overlay `<div>` on this figure should be removed.

---

### Slot 3 — Mistake #2 Blue Light / Exhausted Cells

**Find:**
```
src="https://placehold.co/1000x500/211A24/C17C84?text=Mistake+%232+Image"
```

**Replace with:**
```
src="img-03-mistake2-blue-light.png"
```

**Also update the `alt`:**

Find:
```
alt="Illustration of exhausted skin cells under the eye, depleted of repair fuel"
```

Replace with:
```
alt="Woman lying in bed at night, phone screen casting blue light on her face, visible under-eye bags"
```

---

### Slot 4 — Overnight Fluid Pooling Diagram

**Find:**
```
src="https://placehold.co/1000x500/3A2F3E/FBF8F5?text=What%27s+Happening+Overnight"
```

**Replace with:**
```
src="img-04-overnight-anatomy-diagram.png"
```

⚠️ See Flag C below — the two dark gradient overlay `<div>`s inside this figure's wrapper must be removed or the diagram will be heavily darkened.

---

### Slot 5 — PDRN Clinical Origin

**Find:**
```
src="https://placehold.co/1000x500/211A24/BFA06A?text=Clinical+Origin+%E2%80%94+PDRN"
```

**Replace with:**
```
src="img-05-pdrn-clinical-vial.png"
```

---

### Slot 6 — Introducing Rejouva Product

**Find:**
```
src="https://placehold.co/1000x500/F3EBE4/9E4F58?text=Rejouva+France+Patches"
```

**Replace with:**
```
src="img-08-product-jar.png"
```

⚠️ See Flag A below — the jar label currently reads "KOEC," not "Rejouva." Confirm with Pablo whether to use as-is or queue a label overlay before publishing.

---

### Slot 7 — Hands-Free Morning Routine

**Find:**
```
src="https://placehold.co/1000x500/F3EBE4/9E4F58?text=Hands-Free+Morning+Routine"
```

**Replace with:**
```
src="img-06-morning-routine-lifestyle.png"
```

---

### Slot 8 — Transformation Story

**Find:**
```
src="https://placehold.co/1000x500/F3EBE4/3A2F3E?text=Transformation+Story+Image"
```

**Replace with:**
```
src="img-07-transformation-video-call.png"
```

---

### Slot 9 — Sale CTA Product Photo

**Find:**
```
src="https://placehold.co/900x420/3A2F3E/C17C84?text=Product+Photo"
```

**Replace with:**
```
src="img-08-product-jar.png"
```

⚠️ Same Flag A as slot 6 — same image, same label issue.

---

## 4. Flags — Must Confirm Before Publishing

### ⚠️ Flag A — Product jar reads "KOEC," not "Rejouva"

`img-08-product-jar.png` shows a white jar labeled **"KOEC — PDRN Collagen Eye Patch."** This is an AI-generated placeholder that was produced as a reference; the brand name was never relabeled to Rejouva before the session ended.

**This file is used in both Slot 6 (product reveal) and Slot 9 (sale CTA).** Do not publish with the KOEC label visible.

Options:
- Regenerate via Higgsfield with "Rejouva" on the label (preferred)
- Overlay/composite a Rejouva label on top in Figma/Photoshop
- Blur/mask the label and overlay Rejouva type in CSS or post-production

Confirm resolution with Pablo before slots 6 and 9 go live.

---

### ⚠️ Flag B — Dark overlay on the Skin Barrier Diagram (Slot 2)

The `<figure>` wrapper for slot 2 contains this overlay div:

```html
<div class="absolute inset-0 mix-blend-multiply" style="background:linear-gradient(150deg,rgba(33,26,36,.10),transparent 60%)"></div>
```

The diagram has a **cream/off-white background**, so `mix-blend-mode: multiply` at 10% will have a minimal but visible darkening effect in the top-left corner. This is probably acceptable, but preview it at full resolution before shipping. If it looks muddy, remove that `<div>`.

---

### ⚠️ Flag C — Dark gradients will destroy the Overnight Diagram (Slot 4)

The `<figure>` wrapper for slot 4 contains **two overlay divs:**

```html
<div class="absolute inset-0" style="background:linear-gradient(to top, rgba(33,26,36,.55), transparent 55%);"></div>
<div class="absolute inset-0 mix-blend-multiply" style="background:linear-gradient(150deg,rgba(193,124,132,.2),transparent 55%)"></div>
```

The first overlay is a **55% opacity dark gradient** covering the bottom half of the image. The overnight anatomy diagram has a **light cream background** — the 55% dark overlay will make the bottom half of a white diagram look like it's under dim lighting. It will look broken.

**Action required:** Delete both overlay `<div>`s from inside this figure wrapper before going live. The diagram has enough detail and labeling to stand on its own without any atmospheric overlay.

Exact block to remove — find this entire figure in the HTML and delete the two `<div>` overlays (leave the `<img>` and `<figcaption>` untouched):

```html
<!-- DELETE these two divs inside the Slot 4 figure wrapper -->
<div class="absolute inset-0" style="background:linear-gradient(to top, rgba(33,26,36,.55), transparent 55%);"></div>
<div class="absolute inset-0 mix-blend-multiply" style="background:linear-gradient(150deg,rgba(193,124,132,.2),transparent 55%)"></div>
```

---

## 5. Web Optimization (Before Launch)

All 8 source images are 2752×1536 PNG files ranging from 5–10 MB each. They must be converted before going live.

Recommended output spec:
- **Format:** WebP (or AVIF if your build supports it)
- **Display width:** max 1000px (matches the `max-w-3xl` container in the HTML)
- **Quality:** 82–88 for WebP
- **Approximate target:** under 200 KB per image after conversion

Quick batch conversion with ImageMagick (adjust paths as needed):
```bash
for f in img-0*.png; do
  convert "$f" -resize 1000x -quality 85 "${f%.png}.webp"
done
```

Then update all `src` extensions from `.png` to `.webp` in the HTML.

---

## 6. QA Checklist

After all swaps are done:

- [ ] All 9 `placehold.co` URLs are gone from the HTML
- [ ] All 8 renamed image files are present in the correct directory relative to `advertorial.html`
- [ ] `img-08-product-jar.png` (slots 6 and 9) has the KOEC label resolved before publishing
- [ ] Both overlay `<div>`s removed from the Slot 4 figure (overnight diagram)
- [ ] Slot 2 diagram previewed at full resolution — overlay acceptable or removed
- [ ] All `alt` text updated where noted above (slots 2 and 3)
- [ ] Images converted to WebP and resized to ≤1000px width
- [ ] All `src` paths point to the correct location (same directory as HTML, or `images/` subfolder — be consistent)
- [ ] Page loaded in browser and scrolled top to bottom — no broken image icons
