+++
draft = false
title = "Dr Strangecode Slides"
+++

<!-- Title -->
<section data-background-image="/images/dr-strangelove-war-room.jpg">
  <p style="color:white">Dr. Strangecode Or:</p>
  <p style="color:white">How I learned to stop worrying and love the DOM</p>
  <aside class="notes">This is my note</aside>
</section>

<!-- Decisions -->
<section>
  <p>I decided to make a game</p>
  <p class="fragment fade-down">In JavaScript</p>
  <p class="fragment fade-down">For the web</p>
</section>

<!-- Principles -->
<section>
<p>I tried to follow these guiding principles:</p>
<ol>
  <li class="fragment fade-up">It should lean into the web. <span class="fragment fade-in" style="color:#2ECC40">success!</span></li>
  <li class="fragment fade-up">It should <em>not</em> use a framework. <span class="fragment fade-in" style="color:#2ECC40">success!</span></li>
  <li class="fragment fade-up">It should be easy. <span class="fragment fade-in" style="color:#FF4136">fail!</span></li>
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

<!-- Data storage is good -->
<section>
  <p>The DOM/HTML is pretty dope for storing data.</p>
</section>

<section>
But it's not all :rose:s.
</section>

<!-- Problems with DOM getting -->
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

<!-- Cope -->
<section>
  <p>How to cope?</p>
</section>

<!-- Crap code -->
<section>
Write crap code.
</section>

<section>
Let's get into it.
</section>

<section>
  <p>For this presentation:</p>
  <p class="fragment fade-in">Focus on data, objects, and messaging.</p>
  <p class="fragment fade-in">End goal: <span class="fragment fade-in">Clicking a thing displays it's description.</span></p>
</section>

<!-- Modules -->
<section>
  <h4>Sidebar</h4>
  <p>Modules<span class="fragment fade-in">: Going Naked</span></p>
  <p class="fragment fade-right">I got tired of setting up build tools, but I still wanted clearly separated code, so…</p>
  <p class="fragment fade-left">I used ES6 modules without transpilation</p>
  <p class="fragment fade-up">It was fine!</p>
</section>

<!-- Modules browser support -->
<section>
  <h3>Modules browser support</h3>
  <p class="ciu_embed" data-feature="es6-module" data-periods="future_1,current,past_1,past_2">
    <a href="http://caniuse.com/#feat=es6-module">Can I Use es6-module?</a> Data on support for the es6-module feature across the major browsers from caniuse.com.
  </p>
</section>

<!-- Use SVG -->
<section>
<p>I used SVG for graphics.</p>
<p>They are:</p>
<ol>
  <li class="fragment fade-left">Pure markup</li>
  <li class="fragment fade-left">Style control with CSS</li>
  <li class="fragment fade-left">Fully animatable</li>
  <li class="fragment fade-left">Resolution independent</li>
</ol>
</section>

<!-- Programmer art -->
<section>
I worked real hard on some programmer art.
</section>

<!-- Gambini screenshot -->
<section>
  <img src="/images/gambini-screen.png" alt="Gambini Game Screenshot">
</section>

<!-- Code representation -->
<section>
  <p>Each object in the game world needs a representation in code.</p>
  <p class="fragment fade-in">Each object needs both logic and data.</p>
</section>

<!-- Thing naming -->
<section>
<p>For my game, I called these objects, "things".</p>
<p class="fragment fade-up">I am a genius.</p>
</section>

<!-- Loosely couple -->
<section>
We can tie loosely couple the data and logic together.
</section>

<!-- DOM encapsulation -->
<section>
<h3>DOM encapsulation</h3>
<svg width="557" height="409" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
 <!-- Created with SVG-edit - http://svg-edit.googlecode.com/ -->
 <title>object</title>
 <g>
  <rect id="svg_18" height="403.00001" width="550.99998" y="3" x="3" stroke-width="5" stroke="#000000" fill="#ffffaa"/>
  <text transform="matrix(1, 0, 0, 1, 0, 0)" font-weight="bold" xml:space="preserve" text-anchor="middle" font-family="Sans-serif" font-size="24" id="svg_20" y="37" x="55" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" stroke="#000000" fill="#000000">Object</text>
  <rect id="svg_21" height="288" width="215" y="77" x="34" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="5" stroke="#000000" fill="#e5e5e5"/>
  <text transform="matrix(1, 0, 0, 1, 0, 0)" xml:space="preserve" text-anchor="middle" font-family="Sans-serif" font-size="24" id="svg_22" y="108" x="117" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" stroke="#000000" fill="#000000">SVG Graphic</text>
  <g id="svg_1" transform="matrix(0.349608, 0, 0, 0.349608, 7.93935e-05, 15.5733)">
   <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 260.464 260.464" id="svg_8" x="145.87732" y="351.8221">
    <g fill="#D80027" id="svg_9">
     <path d="m207.854,139.263a32.7,32.7 0 0 1 -6.93001,6.908c-5.86,7.84999 -14.23999,11.92 -21.67001,9.47699c-10.26299,-3.35501 -14.76801,-17.72 -10.06,-32.09399a35.822,35.822 0 0 1 6.39401,-11.623l17.368,-40.8l7.166,-16.824c-21.53499,-21.874 -55.01199,-35.145 -100.43199,-27.897c-99.63,15.894 -130.366,137.784 -65.712,195.01999c60.503,53.56699 92.24,17.077 115.16999,-23.44c2.59601,-4.584 8.74701,-7.272 13.98201,-6.71201c16.68399,1.76999 50.84398,-0.09999 62.687,-41.922c3.313,-11.72 4.06,-24.59 2.31,-37.48199l-20.27298,27.39l0,-0.00099l-0.00002,0zm-148.967,-52.443c11.418,0 20.668,9.252 20.668,20.663c0,11.415 -9.25,20.668 -20.668,20.668c-11.415,0 -20.668,-9.252 -20.668,-20.667c0,-11.41 9.252,-20.664 20.667,-20.664l0.001,0zm-11.926,94.59299c-11.41,0 -20.668,-9.25299 -20.668,-20.65999c0,-11.41301 9.253,-20.67201 20.668,-20.67201c11.418,0 20.67,9.25401 20.67,20.67201c0,11.40799 -9.252,20.65999 -20.67,20.65999zm40.542,41.33701c-11.416,0 -20.66801,-9.254 -20.66801,-20.66c0,-11.418 9.25301,-20.672 20.66801,-20.672c11.417,0 20.668,9.254 20.668,20.67c0,11.408 -9.25,20.662 -20.668,20.662zm16.69199,-130.36399c-11.415,0 -20.668,-9.25 -20.668,-20.67c0,-11.41 9.253,-20.66201 20.668,-20.66201c11.413,0 20.67001,9.253 20.67001,20.663c0,11.418 -9.25201,20.67 -20.67001,20.67l0,-0.00099zm134.759,-76.447c-13.375,0.866 -23.416,13.82 -23.416,13.82l0.114,0.058c-0.564,0.55 -1.11301,1.14 -1.63,1.76c-9.11,10.854 -7.68999,27.028 3.16301,36.13c10.85301,9.105 27.024,7.69 36.12701,-3.165c3.3,-3.928 5.2,-8.567 5.78999,-13.313l0.01001,0.005c4.92499,-23.314 -5.19302,-39.053 -5.19302,-39.053s-1.58,2.894 -14.966,3.76l0.00102,-0.002l-0.00002,0z" id="svg_15"/>
     <path d="m179.87,146.47701c5.045,2.936 13.423,-0.487 18.72,-7.64l24.66399,-33.322c-11.48999,-2.64 -21.784,-9.75999 -28.41199,-15.325a91.435,91.435 0 0 1 -1.75,-1.504l-16.032,37.658c-3.485,8.18001 -2.22701,17.2 2.81,20.133zm34.87001,-75.857a29.432,29.432 0 0 1 -8.698,-12.354l-7.36299,17.3c6.50299,6.475 20.76999,17.738 33.75998,17.55l13.45299,-18.16399c-10.04601,4.45399 -22.18999,3.194 -31.15198,-4.333l0,0.001l0,-0.00001z" id="svg_13"/>
    </g>
   </svg>
  </g>
  <rect fill="#e5e5e5" stroke="#000000" stroke-width="5" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" x="269" y="77.99999" width="259.99999" height="286" id="svg_14"/>
  <text fill="#000000" stroke="#000000" stroke-width="0" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" x="489" y="394" id="svg_6" font-size="24" font-family="Sans-serif" text-anchor="middle" xml:space="preserve" transform="matrix(14.7476, 0, 0, 10.9149, -6758.58, -3978.88)"/>
  <text fill="#000000" stroke="#000000" stroke-width="0" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" x="361" y="159" id="svg_7" font-size="24" font-family="Sans-serif" text-anchor="middle" xml:space="preserve" transform="matrix(16.03, 0, 0, 7.68518, -5314.33, -936.429)"/>
  <text transform="matrix(1, 0, 0, 1, 0, 0)" xml:space="preserve" text-anchor="middle" font-family="Sans-serif" font-size="24" id="svg_16" y="107" x="307" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" stroke="#000000" fill="#000000">Data</text>
 </g>
</svg>
</section>

<!-- DOM encapsulation code -->
<section>
  <h3>Example</h3>
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
  <h4>Messaging</h4>
  <img height="200" src="/images/dr-strangelove-general.jpg" alt="Dr. Strangelove General">
  <img height="200" src="/images/dr-strangelove-president.jpg" alt="Dr. Strangelove President">
</section>

<!-- Observer pattern -->
<section>
<p>The observer pattern:</p>
<blockquote class="fragment fade-in">
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
My observer pattern is a thin wrapper around event delegation, using a single
<code>pointerup</code> listener at the document root.
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
Since we've associated the DOM Node with it's properties in JS, when the
delegated event gets to the listener we can try pulling the element from the
Map.
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

<!-- DOM Gem -->
<section>
  <p>What can make life easier?</p>
  <code class="fragment fade-up">farthestViewportElement</code>
  <p class="fragment fade-in">A real DOM :gem:</p>
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
<address style="font-size:0.65em">
contact@chrisdeluca.me
</address>
</section>
