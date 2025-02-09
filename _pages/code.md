---
layout: page
title: Code
permalink: /code/
description: AAAAA collection of useful code snippets.
nav: true
nav_order: 4
---

# Welcome to the Simple Page

This page showcases a basic structure with sections, images, and a GitHub repository link.

## Section 1: Introduction

Here is a brief introduction to the page. You can add any text you'd like to describe the content of this section.

![Introduction Image](/assets/img/introduction.jpg)

## Section 2: Features

- **Feature 1:** Easy to customize
- **Feature 2:** Responsive design
- **Feature 3:** Integrates well with GitHub Pages

![Features Image](/assets/img/features.jpg)

## Section 3: GitHub Repository

You can find the code for this project on [GitHub](https://github.com/your-repo).

```bash
# Clone the repository
git clone https://github.com/your-repo.git
```

```python
if name==main:
    i+=1
```

## Section 4: Conclusion

This page is a simple example to demonstrate Markdown usage in Jekyll. You can expand it as needed to fit your project's requirements.

![Conclusion Image](/assets/img/conclusion.jpg)

---

_Thank you for visiting!_

<!-- {% for snippet in site.data.code_snippets %}

  <div class="code-snippet">
    <h3>{{ snippet.title }}</h3>
    <p>{{ snippet.description }}</p>
    {% assign file_extension = snippet.file | split: '.' | last %}

    <pre><code class="language-{{ file_extension }}">
      {% include_relative assets/code/{{ snippet.file }} %}
    </code></pre>

  </div>
{% endfor %}

<script>
  document.addEventListener("DOMContentLoaded", function () {
    Prism.highlightAll();
  });
</script> -->

<!-- {% for snippet in site.data.code_snippets %}

<div class="code-snippet">
  <h3>{{ snippet.title }}</h3>
  <p>{{ snippet.description }}</p>
  <pre><code>{% include_relative assets/code/{{ snippet.file }} %}</code></pre>
</div>
{% endfor %} -->
