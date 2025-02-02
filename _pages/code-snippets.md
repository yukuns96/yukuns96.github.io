---
layout: page
title: Code
permalink: /code-snippets/
---

{% for snippet in site.data.code_snippets %}

<div class="code-card">
  <h3>{{ snippet.title }}</h3>
  <p>{{ snippet.description }}</p>
  <pre><code>{% include code_snippets/{{ snippet.file }} %}</code></pre>
  <a href="{{ site.baseurl }}/assets/code/{{ snippet.file }}" download>Download Code</a>
</div>
{% endfor %}
