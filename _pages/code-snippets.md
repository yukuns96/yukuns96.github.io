---
layout: page
title: Code Snippets
permalink: /code-snippets/
description: A collection of useful code snippets.
nav: true
nav_order: 4
---

{% for snippet in site.data.code_snippets %}

<div class="code-snippet">
  <h3>{{ snippet.title }}</h3>
  <p>{{ snippet.description }}</p>
  <pre><code>{% include_relative assets/code/{{ snippet.file }} %}</code></pre>
</div>
{% endfor %}
