---
layout: page
title: Code Snippets
permalink: /code-snippets/
description: A collection of useful code snippets.
nav: true
nav_order: 4
---

<div class="code-snippets">
  {% for snippet in site.data.code_snippets %}
    {% include code_card.liquid snippet=snippet %}
  {% endfor %}
</div>
