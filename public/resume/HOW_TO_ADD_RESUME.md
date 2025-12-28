# How to Add Your Resume PDF

## Step 1: Add Your PDF File
1. Place your resume PDF file in this folder: `public/resume/`
2. Rename your PDF file to: `Sudhansh_Goel_Resume.pdf`
   - OR update the filename in the Hero component (see Step 2)

## Step 2: Update the Filename (if needed)
If you want to use a different filename, update the Hero component:

**File:** `src/sections/Hero/Hero.tsx`
**Line:** Around line 97-98

```tsx
<a
  href="/resume/YOUR_FILENAME.pdf"
  download="YOUR_FILENAME.pdf"
  className="btn btn-outline-modern"
>
```

## Step 3: Verify the Setup
1. Make sure your PDF file is in: `public/resume/YOUR_FILENAME.pdf`
2. The download link will automatically work
3. Users can click "Download CV" button to download your resume

## Current Configuration:
- **Expected filename:** `Sudhansh_Goel_Resume.pdf`
- **Full path:** `public/resume/Sudhansh_Goel_Resume.pdf`
- **Download URL:** `/resume/Sudhansh_Goel_Resume.pdf`

## Example File Structure:
```
public/
├── resume/
│   ├── Sudhansh_Goel_Resume.pdf  ← Your PDF file goes here
│   ├── README.md
│   └── HOW_TO_ADD_RESUME.md
├── favicon.svg
└── index.html
```

## Notes:
- The `/resume/` path works because files in the `public` folder are served directly
- The `download` attribute ensures the file downloads instead of opening in browser
- Make sure your PDF filename doesn't have spaces or special characters for best compatibility