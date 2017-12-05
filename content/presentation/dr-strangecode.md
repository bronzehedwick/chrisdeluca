+++
draft = false
title = "Dr Strangecode Slides"
+++

<!-- Title -->
<section data-background-image="/images/dr-strangelove-war-room.jpg">
  <p class="color-white">Dr. Strangecode Or:</p>
  <p class="color-white">How I learned to stop worrying and love the DOM</p>
</section>

<section data-background-image="/images/dr-strangelove-war-room.jpg">
  <p class="color-white">My game making journey, and DOM love-affair.</p>
</section>

<!-- Decisions -->
<section>
  <p>I wanted to make a JavaScript web game</p>
</section>

<!-- Principles -->
<section>
<p>I tried to follow these guiding principles:</p>
<ol>
  <li class="fragment fade-up">It should lean into the web. <span class="fragment fade-in color-green">success!</span></li>
  <li class="fragment fade-up">It should <em>not</em> use a framework. <span class="fragment fade-in color-green">success!</span></li>
  <li class="fragment fade-up">It should be easy. <span class="fragment fade-in color-red">fail!</span></li>
</ol>
</section>

<!-- Type of game -->
<section>
  <p>I wanted to make a point and click adventure game</p>
</section>

<!-- What PACs are like -->
<section>
  <p>Brief explanation of adventure games:</p>
  <ol>
  <li class="fragment fade-down">Solve puzzles by interacting with the environment</li>
  <li class="fragment fade-down">Usually not time-based</li>
  <li class="fragment fade-down">Narrative focused</li>
  <li class="fragment fade-down">Pinnacle of game design</li>
  </ol>
</section>

<!-- Grew up on -->
<section>
  <p>Nostalgic screenshots</p>
  <img width="200" height="200" src="/images/atlantis.jpg" alt="Indiana Jones and the Fate of Atlantis"></figure>
  <img width="200" height="200" src="/images/hugo2.gif" alt="Hugo 2: Whodonit">
  <img width="200" height="200" src="/images/grim_fandango.jpeg" alt="Grim Fandango">
  <img width="200" height="200" src="/images/quest-for-glory.jpg" alt="Quest for Glory">
  <img width="200" height="200" src="/images/iceman.png" alt="Codename: ICEMAN">
  <img width="200" height="200" src="/images/monkeyisland.jpg" alt="The Secret of Monkey Island">
  <img width="200" height="200" src="/images/maniac_mansion.png" alt="Maniac Mansion">
  <img width="200" height="200" src="/images/kings-quest.jpg" alt="King's Quest">
</section>

<!-- How do you make a game? -->
<section>
I didn't know how to make a game, so…
</section>

<!-- Game Programming Patterns -->
<section>
  <p>I read:</p>
  <a href="http://gameprogrammingpatterns.com/">
    <img src="/images/game-programming-patterns.png" alt="Game Programming Patterns">
  </a>
</section>

<!-- YDKJS -->
<section>
  <p>And also:</p>
  <a href="http://shop.oreilly.com/product/0636920033738.do">
    <img src="/images/this-prototypes.jpg" alt="You Don't Know JS: this & Object Prototypes, by Kyle Simpson">
  </a>
</section>

<!-- Things to make a game -->
<section>
  <p>Stuff needed to make my game</p>
  <ol>
  <li class="fragment fade-in">Rendering system</li>
  <li class="fragment fade-in">Inventory system</li>
  <li class="fragment fade-in">Text display</li>
  <li class="fragment fade-in">Triggers to advance puzzles</li>
  <li class="fragment fade-in">Messaging system</li>
  <li class="fragment fade-in">Audio system</li>
  <li class="fragment fade-in">Saving progress</li>
  <li class="fragment fade-in">Title screen</li>
  <li class="fragment fade-in">More I'm forgetting</li>
  <li class="fragment fade-in">Even more I never thought of</li>
  <li class="fragment fade-in">Fun</li>
  </ol>
</section>

<!-- Panic -->
<section>
  <img src="/images/panic.gif" alt="Panic!">
</section>

<!-- What can make life easier? -->
<section>
  <p>What can make life easier?</p>
  <p class="fragment fade-up">Use the DOM</p>
</section>

<!-- Why the DOM? -->
<section>
  <p>Why the DOM?</p>
  <blockquote class="fragment fade-left">The DOM suuuuuucks.
  <span class="fragment fade-right">&mdash;Everyone</span></blockquote>
</section>

<!-- The DOM is great -->
<section>
<p>The DOM is great because…</p>
<ol>
  <li class="fragment fade-up">It's familiar</li>
  <li class="fragment fade-up">It can save work</li>
  <li class="fragment fade-up">It fit the game I wanted to make</li>
</ol>
</section>

<!-- Things you'd need to re-implement in canvas -->
<section>
<p>Things you'd need to re-implement in <code>canvas</code></p>
<ol>
  <li class="fragment fade-in">Painting</li>
  <li class="fragment fade-in">Clicking</li>
  <li class="fragment fade-in">Event Delegation</li>
  <li class="fragment fade-in">Responsive</li>
  <li class="fragment fade-in">Accessibility</li>
</ol>
</section>

<section>
But it's not all :rose:s.
</section>

<!-- DOM Problems -->
<section>
<h4>DOM Problems</h4>
<ol>
  <li class="fragment fade-in">Performance is poor</li>
  <li class="fragment fade-in">Data synchronization is an issue</li>
  <li class="fragment fade-in">API is weird</li>
</ol>
</section>

<!-- Panic -->
<section>
  <img src="/images/panic.gif" alt="Panic!">
</section>

<!-- DOM Solutions -->
<section>
<h4>DOM <del>Problems</del> Solutions</h4>
<ol>
  <li>Performance is poor<span class="fragment fade-in color-green">: stay static, no touching</span></li>
  <li>Data synchronization is an issue<span class="fragment fade-in color-green">: don't try</span></li>
  <li>API is weird<span class="fragment fade-in color-green">: it is what it is</span></li>
</ol>
</section>

<section>
  <p>For this presentation:</p>
  <p>Focus on object <strong>data</strong>, loosely tied to <strong>logic</strong>, and <strong>message</strong> passing</p>
  <p>End goal: Clicking a thing displays it's description.</p>
</section>

<!-- Modules -->
<section>
  <h4>Sidebar</h4>
  <p>Native ES6 Modules: you can use them in development!</p>
</section>

<!-- Programmer art -->
<section>
I worked real hard on some programmer art.
</section>

<!-- Gambini screenshot -->
<section>
  <img src="/images/gambini-screen.png" alt="Gambini Game Screenshot">
</section>

<!-- Data -->
<section>
  <h1>Data</h1>
  <img src="/images/dr-strangelove-computer.jpg" alt="Dr. Strangelove Computer">
</section>

<section>
When something is clicked, we need to know stuff about it, like graphic, description, etc.
</section>

<!-- Use SVG -->
<section>
<p>I used SVGs for graphics</p>
<p>They are:</p>
<ol>
  <li class="fragment fade-left">Pure markup</li>
  <li class="fragment fade-left">Style control with CSS</li>
  <li class="fragment fade-left">Fully animatable</li>
  <li class="fragment fade-left">Resolution independent</li>
</ol>
</section>

<!-- data attributes -->
<section>
<p>I used data attributes to store data</p>
<p>They are:</p>
<ol>
  <li class="fragment fade-right">Pure markup</li>
  <li class="fragment fade-right">Flexible</li>
  <li class="fragment fade-right">Combine with SVG to tie all data together</li>
  <li class="fragment fade-right"><code>dataset</code> makes them nicer to work with</li>
</ol>
</section>

<!-- DOM encapsulation code -->
<section>
  <h3>DOM data</h3>
  <div class="highlight"><pre class="chroma"><code class="language-html" data-lang="html">
  <span class="p">&lt;</span><span class="nt">svg</span>
  <span class="na">xmlns</span><span class="o">=</span><span class="s">"http://www.w3.org/2000/svg"</span>
  <span class="na">id</span><span class="o">=</span><span class="s">"bed"</span>
  <span class="na">viewBox</span><span class="o">=</span><span class="s">"0 0 535 338"</span>
  <span class="fragment fade-in"><span class="na">data-description</span><span class="o">=</span><span class="s">"This is a &lt;em&gt;bed&lt;/em&gt;"</span></span>
  <span class="fragment fade-in"><span class="na">data-can-pickup</span><span class="o">=</span><span class="s">"false"</span></span>
  <span class="fragment fade-in"><span class="na">data-audio</span><span class="o">=</span><span class="s">"https://example.com/bed.mp3"</span><span class="p"></span><span class="p">&gt;</span></span>
  <span class="fragment fade-in"><span class="na">data-data</span><span class="o">=</span><span class="s">"https://example.com/complex-data.json"</span><span class="p"></span><span class="p">&gt;</span></span>
  <span class="fragment fade-in"><span class="p">&lt;</span><span class="nt">title</span><span class="p"></span><span class="p">&gt;</span>bed<span class="p">&lt;</span><span class="p">/</span><span class="nt">title</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">desc</span><span class="p"></span><span class="p">&gt;</span>This is a <span class="p">&lt;</span><span class="nt">em</span><span class="p"></span><span class="p">&gt;</span>bed<span class="p">&lt;</span><span class="p">/</span><span class="nt">em</span><span class="p">&gt;&lt;</span><span class="p">/</span><span class="nt">desc</span><span class="p">&gt;</span>
  <span class="c">&lt;!-- SVG code --&gt;</span>
  <span class="p">&lt;</span><span class="p">/</span><span class="nt">svg</span><span class="p">&gt;</span></code></pre></div><span>
</section>

<section>
<h1>Logic</h1>
<img src="/images/dr-strangelove-jack.jpg" alt="Dr. Strangelove Jack">
</section>

<!-- Thing invocation -->
<section>
<p>Thing invocation</p>
<div class="highlight"><pre class="chroma"><code class="language-js" data-lang="js"><span class="k">const</span> <span class="nx">bed</span> <span class="o">=</span> <span class="nx">Thing</span><span class="p">();</span>
<span class="nx">bed</span><span class="p">.</span><span class="nx">init</span><span class="p">(</span><span class="s1">'#bed'</span><span class="p">);</span></code></pre></div>
</section>

<!-- Thing init -->
<section>
<p>Thing <code>init</code> method</p>
<div class="highlight"><pre class="chroma"><code class="language-js" data-lang="js"><span class="kd">let</span> <span class="nx">thing</span> <span class="o">=</span> <span class="p">{</span>
    <span class="nx">init</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">init</span><span class="p">(</span><span class="nx">selector</span><span class="p">)</span> <span class="p">{</span>
        <span class="c1">// Map properties.
</span><span class="c1"></span>        <span class="k">this</span><span class="p">.</span><span class="nx">selector</span> <span class="o">=</span> <span class="nx">selector</span><span class="p">;</span>
        <span class="k">this</span><span class="p">.</span><span class="nx">domNode</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">querySelector</span><span class="p">(</span><span class="nx">selector</span><span class="p">);</span>
        <span class="k">this</span><span class="p">.</span><span class="nx">description</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">domNode</span><span class="p">.</span><span class="nx">dataset</span><span class="p">.</span><span class="nx">description</span><span class="p">;</span>
        <span class="c1">// Messaging.
</span><span class="c1"></span>        <span class="nx">observer</span><span class="p">.</span><span class="nx">subscribe</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">domNode</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">showDescription</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="k">this</span><span class="p">));</span>
    <span class="p">},</span>
    <span class="c1">// more properties…
</span><span class="c1"></span><span class="p">};</span></code></pre></div>
</section>

<!-- Strangelove messaging -->
<section>
  <h1>Messaging</h1>
  <img src="/images/dr-strangelove-general.jpg" alt="Dr. Strangelove General">
</section>

<!-- Observer pattern -->
<section>
<p>The observer pattern:</p>
<blockquote>
  “…lets one piece of code announce that something interesting happened without actually caring who receives the notification.” &mdash;Game Programming Patterns
</blockquote>
</section>

<!-- Observer pattern example -->
<section>
<h3>Relatable Observer example</h3>
<svg width="557" height="409" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
 <!-- Created with SVG-edit - http://svg-edit.googlecode.com/ -->
 <title>object</title>
 <g>
  <title>Layer 1</title>
  <ellipse ry="68.30097" rx="67" id="svg_16" cy="284.30097" cx="97" stroke-width="5" stroke="#000000" fill="#ffffff"/>
  <ellipse ry="26" rx="14" id="svg_19" cy="260" cx="64" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="5" stroke="#000000" fill="#ffffff"/>
  <ellipse ry="37" rx="11" id="svg_20" cy="238" cx="107" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="5" stroke="#000000" fill="#ffffff"/>
  <path class="fragment fade-in" id="svg_21" d="m54,307c42,-13 86,-2 86,-2c0,0 -51,43 -51,43c0,0 -35,-41 -35,-41z" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="5" stroke="#000000" fill="#ffffff"/>
  <text class="fragment fade-up" xml:space="preserve" text-anchor="middle" font-family="serif" font-size="24" id="svg_25" y="181" x="105" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" stroke="#000000" fill="#000000">I had a bad date</text>
  <g id="svg_51">
   <ellipse ry="56" rx="51" id="svg_26" cy="144" cx="291" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="5" stroke="#000000" fill="#ffffff"/>
   <ellipse ry="47" rx="52" id="svg_27" cy="160" cx="387" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="5" stroke="#000000" fill="#ffffff"/>
   <ellipse ry="44" rx="55" id="svg_28" cy="264" cx="303" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="5" stroke="#000000" fill="#ffffff"/>
   <ellipse ry="33" rx="59" id="svg_29" cy="233" cx="386" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="5" stroke="#000000" fill="#ffffff"/>
   <ellipse ry="41" rx="68" id="svg_30" cy="313" cx="408" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="5" stroke="#000000" fill="#ffffff"/>
   <ellipse ry="63" rx="50" id="svg_31" cy="100" cx="465" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="5" stroke="#000000" fill="#ffffff"/>
   <ellipse ry="56" rx="52" id="svg_32" cy="204" cx="492" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="5" stroke="#000000" fill="#ffffff"/>
   <ellipse ry="37" rx="39" id="svg_33" cy="281" cx="474" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="5" stroke="#000000" fill="#ffffff"/>
   <ellipse ry="27" rx="11" id="svg_35" cy="106" cx="268" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="5" stroke="#000000" fill="#ffffff"/>
   <ellipse ry="21" rx="7" id="svg_36" cy="104" cx="298" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="5" stroke="#000000" fill="#ffffff"/>
   <ellipse ry="4" rx="9" id="svg_37" cy="243" cx="277" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="5" stroke="#000000" fill="#ffffff"/>
   <ellipse ry="3" rx="9" id="svg_38" cy="241" cx="303" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="5" stroke="#000000" fill="#ffffff"/>
   <ellipse ry="9" rx="8" id="svg_39" cy="209" cx="362" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="5" stroke="#000000" fill="#ffffff"/>
   <ellipse ry="10" rx="6" id="svg_40" cy="206" cx="400" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="5" stroke="#000000" fill="#ffffff"/>
   <ellipse ry="9" rx="16" id="svg_41" cy="302" cx="376" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="5" stroke="#000000" fill="#ffffff"/>
   <ellipse ry="7" rx="6" id="svg_42" cy="284" cx="408" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="5" stroke="#000000" fill="#ffffff"/>
   <ellipse ry="7" rx="9" id="svg_43" cy="255" cx="463" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="5" stroke="#000000" fill="#ffffff"/>
   <ellipse ry="7" rx="5" id="svg_44" cy="257" cx="486" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="5" stroke="#000000" fill="#ffffff"/>
   <ellipse ry="18" rx="10" id="svg_45" cy="163" cx="466" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="5" stroke="#000000" fill="#ffffff"/>
   <ellipse ry="14" rx="6" id="svg_46" cy="161" cx="497" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="5" stroke="#000000" fill="#ffffff"/>
   <ellipse ry="18" rx="7" id="svg_47" cy="54" cx="445" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="5" stroke="#000000" fill="#ffffff"/>
   <ellipse ry="20" rx="5" id="svg_48" cy="46" cx="474" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="5" stroke="#000000" fill="#ffffff"/>
   <ellipse ry="18" rx="19" id="svg_49" cy="128" cx="363" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="5" stroke="#000000" fill="#ffffff"/>
   <ellipse ry="21" rx="11" id="svg_50" cy="119" cx="393" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="5" stroke="#000000" fill="#ffffff"/>
  </g>
  <path class="fragment fade-in" id="svg_52" d="m264,168c24,-24 47,-12 47,-12c0,0 -17,35 -17,35c0,0 -30,-23 -30,-23z" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="5" stroke="#000000" fill="#ffffff"/>
  <text xml:space="preserve" class="fragment fade-up" text-anchor="middle" font-family="serif" font-size="24" id="svg_53" y="63" x="240" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" stroke="#000000" fill="#000000">Oh yeah?</text>
 </g>
</svg>
</section>

<!-- Observer in JS -->
<section>
My observer pattern is a thin wrapper around event delegation, storing callbacks in a <code>Map</code>.
</section>

<!-- Observer data -->
<section>
<p>Observer storage pattern</p>
<div class="highlight"><pre class="chroma"><code class="language-js" data-lang="js"><span class="c1">// Map() where keys are DOM nodes
</span><span class="c1">// and values are arrays of callbacks.
</span><span class="c1"></span><span class="nx">bed</span><span class="o">:</span> <span class="p">[</span>
  <span class="nx">showDescription</span>
<span class="p">],</span>
<span class="nx">baseBall</span><span class="o">:</span> <span class="p">[</span>
  <span class="nx">showDescription</span><span class="p">,</span>
  <span class="nx">pickUp</span>
<span class="p">]</span></code></pre></div>
</section>

<!-- Observer in JS -->
<section>
Delegated events can pull the necessary callbacks using the DOM node as a key
</section>

<section>
<p>This only works if you click on the SVG root element…</p>
<p class="fragment fade-in"><em>closest</em> to the rescue</p>
</section>

<!-- onNotify original -->
<section>
<p>onNotify</p>
<div class="highlight"><pre class="chroma"><code class="language-js" data-lang="js"><span class="kd">function</span> <span class="nx">onNotify</span><span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span>
  <span class="kd">let</span> <span class="nx">key</span> <span class="o">=</span> <span class="nx">subscribers</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nx">closest</span><span class="p">(</span><span class="cm">/* no data */</span><span class="p">));</span>
  <span class="k">if</span> <span class="p">(</span><span class="nx">key</span><span class="p">)</span> <span class="p">{</span>
      <span class="nx">key</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="nx">fn</span> <span class="p">=&gt;</span> <span class="nx">fn</span><span class="p">(</span><span class="nx">event</span><span class="p">));</span>
  <span class="p">}</span>
<span class="p">}</span></code></pre></div>
</section>

<!-- Panic -->
<section>
  <img src="/images/panic.gif" alt="Panic!">
</section>

<section>
Who can save us?
</section>

<!-- DOM Gem -->
<section>
  <p>A real :gem:</p>
  <code>farthestViewportElement</code>
</section>

<!-- farthestViewportElement description -->
<section>
  <code>farthestViewportElement</code>
  <blockquote>
  Gets a value that represents the farthest ancestor svg element.
  </blockquote>
  <p class="fragment fade-in">Basically, get the SVG root from any child element.</p>
</section>

<!-- onNotify new -->
<section>
<p>onNotify with <code>farthestViewportElement</code></p>
<div class="highlight"><pre class="chroma"><code class="language-js" data-lang="js"><span class="kd">function</span> <span class="nx">onNotify</span><span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span>
  <span class="kd">let</span> <span class="nx">key</span> <span class="o">=</span> <span class="nx">subscribers</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nx">farthestViewportElement</span><span class="p">);</span>
  <span class="k">if</span> <span class="p">(</span><span class="nx">key</span><span class="p">)</span> <span class="p">{</span>
    <span class="nx">key</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="nx">fn</span> <span class="p">=&gt;</span> <span class="nx">fn</span><span class="p">(</span><span class="nx">event</span><span class="p">));</span>
  <span class="p">}</span>
<span class="p">}</span></code></pre></div>
</section>

<!-- I love it -->
<section>
  <img src="/images/dr-strangelove-cigarette.jpeg" alt="Dr Strangelove smoking">
</section>

<!-- Demo -->
<section>
<a target="_blank" href="http://localhost:8000/public">Demo</a>
</section>

<!-- Thank you -->
<section>
<p>Thank you!</p>
<a target="_blank" href="https://gwengween.com">gwengween.com</a>
<address class="size-small">
contact@chrisdeluca.me
</address>
</section>
