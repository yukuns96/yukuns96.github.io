---
layout: page
title: Code
permalink: /code-snippets/
description: AAAAA collection of useful code snippets.
nav: true
nav_order: 4
---

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
