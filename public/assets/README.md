# Assets

ضع هنا الملفات الثابتة (صور، فيديو، أيقونات ...)

هيكل مقترح:
- images/
- videos/
- icons/
- fonts/

مثال استعمال فيديو خلفية داخل كومبوننت:
```html
<video autoplay muted loop playsinline class="bg-video">
  <source src="assets/videos/background.mp4" type="video/mp4" />
</video>
```

نصيحة: حافظ على حجم الفيديو أقل ما يمكن (ضغط H.264 أو H.265)، ووفّر صورة fallback باسم background.jpg في نفس المجلد.
