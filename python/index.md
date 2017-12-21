---
layout: page
permalink: /python/
title: "Python"
excerpt: "Python is simple power and beautiful"
---

<div class="tiles">
{% for post in site.posts %}
	{% if post.categories contains 'python' %}
        {% include post-grid.html %}
	{% endif %}
{% endfor %}
</div><!-- /.tiles -->
