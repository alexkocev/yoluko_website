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
    <a href="/fr/" onclick="sessionStorage.setItem('userLanguageChoice', 'fr');" title="Version française" style="display: flex; align-items: center;">
        <span style="margin-right: 5px;">🇫🇷</span> FR
    </a>
</li>
```

```html
<!-- For French version (add to fr/index.html) -->
<li style="margin-left: 10px;">
    <a href="/" onclick="sessionStorage.setItem('userLanguageChoice', 'en');" title="English version" style="display: flex; align-items: center;">
        <span style="margin-right: 5px;">🇬🇧</span> EN
    </a>
</li>
```

2. Language Auto-Detection
Add this script to the <head> section of your index.html only:
For English Version (index.html)
```html
<script>
// Auto-detect language and redirect - with session storage to remember user choice
(function() {
    // Check if user manually selected a language
    if (sessionStorage.getItem('userLanguageChoice')) {
        // If user chose English, stay on this page
        if (sessionStorage.getItem('userLanguageChoice') === 'en') {
            return;
        }
        // If user chose French, redirect to French
        if (sessionStorage.getItem('userLanguageChoice') === 'fr' && 
            window.location.pathname.indexOf('/fr/') === -1) {
            window.location.href = '/fr/';
            return;
        }
    }
    
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

For French Version (fr/index.html)
```html
<script>
// Auto-detect language and redirect - with session storage to remember user choice
(function() {
    // Check if user manually selected a language
    if (sessionStorage.getItem('userLanguageChoice')) {
        // If user chose French, stay on this page
        if (sessionStorage.getItem('userLanguageChoice') === 'fr') {
            return;
        }
        // If user chose English, redirect to English
        if (sessionStorage.getItem('userLanguageChoice') === 'en' && 
            window.location.pathname.indexOf('/fr/') !== -1) {
            window.location.href = '/';
            return;
        }
    }
    
    // Skip if not on French page (we're already where we should be)
    if (window.location.pathname.indexOf('/fr/') === -1) return;
    
    // We're on French page by default, so no need to redirect based on browser language
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


4. Update the form
Update with
```html
<div class="bee-block bee-block-2 bee-form" id="module_95acb723-dfdb-4b47-967e-c54e0774d65f">
    <form accept-charset="UTF-8" action="https://formspree.io/f/mpwdnjln" method="POST" enctype="multipart/form-data" autocomplete="on" target="_self">
```

Replace
```html
<div class="bee-field bee-field-r31c0m1i1"><label for="r31c0m1i1">Nom</label><input id="r31c0m1i1" name="firstname" required="" type="text" /></div>
```
with:
```html
<div class="bee-field bee-field-r31c0m1i1"><label for="r31c0m1i1">Nom</label><input id="r31c0m1i1" name="name" required="" type="text" /></div>
```

Replace
```html
<div class="bee-field bee-field-r31c0m1i3"><label for="r31c0m1i3">Email</label><input id="r31c0m1i3" name="email" required="" type="text" /></div>
```
with:
```html
<div class="bee-field bee-field-r31c0m1i3"><label for="r31c0m1i3">Email</label><input id="r31c0m1i3" name="email" required="" type="email" /></div>
```


5. Remove all <code> tags from both HTMLs


6. Remove Beefree code
REMOVE 
```html
<div class="bee-row bee-row-35">
    <div class="bee-row-content">
        <div class="bee-col bee-col-1 bee-col-w12">
            <div class="bee-block bee-block-1 bee-icons">
                <div class="bee-icon bee-icon-last">
                    <div class="bee-content">
                        <div class="bee-icon-image"><a href="http://designedwithbeefree.com/" target="_blank" title="Designed with Beefree"><img alt="Beefree Logo" height="32px" src="https://d1oco4z2z1fhwp.cloudfront.net/assets/Beefree-logo.png" width="auto" /></a></div>
                        <div class="bee-icon-label bee-icon-label-right"><a href="http://designedwithbeefree.com/" target="_blank" title="Designed with Beefree">Designed with Beefree</a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
```

REPLACE
```html
<meta content="https://pro-bee-beepro-thumbnail.getbee.io/messages/1391511/1378064/2407024/12774208_large.jpg" property="og:image" />
```
WITH 
```html
<meta content="https://www.yoluko.com/images/favicon.png" property="og:image" />
```




