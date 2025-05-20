# Yoluko Website Deployment Process


## Step 1: Export HTML from Beefree
1. Design website in Beefree
2. Export HTML
3. Create two files:
   - `index.html` (English version)
   - `fr/index.html` (French version)

## Step 2: Apply Standard Changes
1. Add language switcher to navigation
2. Add language auto-detection script
3. Add favicon links
4. Configure form submission

## Step 3: Deployment
1. Commit all files to the GitHub repository
2. Push changes to main branch
3. Verify deployment at www.yoluko.com

## Files in Repository
- `index.html` - English version
- `fr/index.html` - French version
- `favicon.png` - Website icon (32x32)
- `apple-touch-icon.png` - iOS icon (180x180)
- `CNAME` - GitHub Pages custom domain config

## DNS Configuration
- CNAME record: www → alexkocev.github.io
- A record: @ → 185.199.108.153


## Deployment Checklist

1. Language Switcher Icon
Add this code to your navigation menu in both versions:

```html
<!-- For English version (add to index.html) -->
<li style="margin-left: 10px;">
  <a href="/fr/" title="Version française" style="display: flex; align-items: center;">
    <span style="margin-right: 5px;">🇫🇷</span> FR
  </a>
</li>
```

```html
<!-- For French version (add to fr/index.html) -->
<li style="margin-left: 10px;">
  <a href="/" title="English version" style="display: flex; align-items: center;">
    <span style="margin-right: 5px;">🇬🇧</span> EN
  </a>
</li>
```

2. Language Auto-Detection
Add this script to the <head> section of your index.html only:

```html
<script>
  // Auto-detect language and redirect
  (function() {
    // Skip if already on language page
    if (window.location.pathname.indexOf('/fr/') !== -1) return;
    
    // Get browser language
    var userLang = navigator.language || navigator.userLanguage;
    
    // Check if browser language starts with "fr"
    if (userLang.indexOf('fr') === 0) {
      window.location.href = '/fr/';
    }
  })();
</script>
```


3. Add Favicon
Add these lines to the <head> section of both HTML files:

```html
<link rel="icon" type="image/png" href="/images/favicon.png" sizes="32x32">
<link rel="apple-touch-icon" href="/images/favicon.png">

```

Then add your favicon files to the repository root.


4. Configure Form Submission 
IN the head:
```html
<!-- For your form -->
<script>
  document.addEventListener('DOMContentLoaded', function() {
    if (!window.YOLUKO_CONFIG || !window.YOLUKO_CONFIG.formspreeId) return;
    
    const form = document.querySelector('form');
    if (form) {
      form.action = `https://formspree.io/f/${window.YOLUKO_CONFIG.formspreeId}`;
    }
  });
</script>
```

Replace the <form >
```html
<form accept-charset="UTF-8" action="#" autocomplete="on" enctype="multipart/form-data" method="post" target="_self" id="contact-form">
```



5. Configure GA4

REPLACE
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-WFSVDY7CP2"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-WFSVDY7CP2');
</script>
```

WITH

```html
<!-- In your HTML head section -->
<script src="/config.js"></script>

<!-- For Google Analytics, add this script -->
<script>
  document.addEventListener('DOMContentLoaded', function() {
    if (!window.YOLUKO_CONFIG || !window.YOLUKO_CONFIG.ga4Id) return;
    
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${window.YOLUKO_CONFIG.ga4Id}`;
    document.head.appendChild(script);
    
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', window.YOLUKO_CONFIG.ga4Id);
  });
</script>
```



6. Remove all <code> tags from both HTMLs






