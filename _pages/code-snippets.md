---
layout: page
title: Code Snippets
permalink: /code-snippets/
description: A collection of useful code snippets.
nav: true
nav_order: 4
display_categories: [Python, JavaScript, HTML, Bash, SQL, CSS]
horizontal: false
---

<!-- pages/code-snippets.md -->
<div class="code-snippets">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized code snippets -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_snippets = site.code_snippets | where: "category", category %}
  {% assign sorted_snippets = categorized_snippets | sort: "importance" %}

  <!-- Generate cards for each code snippet -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for snippet in sorted_snippets %}
      {% include code_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for snippet in sorted_snippets %}
      {% include code_card.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display code snippets without categories -->

{% assign sorted_snippets = site.code_snippets | sort: "importance" %}

  <!-- Generate cards for each code snippet -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for snippet in sorted_snippets %}
      {% include code_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for snippet in sorted_snippets %}
      {% include code_card.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>

<!-- Sample Code Snippet Data Example -->

{% assign code_snippets = site.data.code_snippets %}

<!-- Example of code_card.liquid -->

{% comment %}

<div class="card">
  <div class="card-body">
    <h5 class="card-title">{{ snippet.title }}</h5>
    <pre><code class="language-{{ snippet.language }}">{{ snippet.code }}</code></pre>
  </div>
</div>
{% endcomment %}
