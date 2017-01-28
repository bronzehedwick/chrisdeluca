+++
title = "Who's on JavaScript?"
date = "2015-10-29"
summary = "What if Who's On First and JavaScript had a baby?"
categories = [
  "Fiction"
]
topics = [
  "Tech",
  "JavaScript",
  "Screenplays"
]
+++

If you like JavaScript `this` binding, and the comedy classic _Who's on First?_, then is this the mashup for you!
<!--more-->
<div id="wrapper" class="screenplay">
<h6>INT. OFFICE - DAY</h6>
<div class="action"><p>Two programmers, Phil and Mary, sit at their desks, typing. After a moment, Phil turns to Mary, and shows her a piece of code, which looks like this:</p></div>

{{< highlight javascript "linenos=inline" >}}
function showInfo() {
  return this.name + ' is ' + this.age + ' years old, and has fought ' + this.fights + ' bears.';
}

var person = {
  name: 'Sally',
  age: 43,
  fights: 16,
  showInfo: showInfo
};
{{< /highlight >}}

<div class="dialog"><p class="character">PHIL</p><p>Hey Mary, you're the JavaScript expert, could you help me learn a few things?</p></div>
<div class="dialog"><p class="character">MARY</p><p>Sure, what do you want to know?</p></div>
<div class="action"><p>Phil points to line 1.</p></div>
<div class="dialog"><p class="character">PHIL</p><p>What's this?</p></div>
<div class="action"><p>Mary points to line 5.</p></div>
<div class="dialog"><p class="character">MARY</p><p>That.</p></div>
<div class="action"><p>Phil points again to line 1.</p></div>
<div class="dialog"><p class="character">PHIL</p><p>No, I want to know what <em>this</em> is.</p></div>
<div class="dialog"><p class="character">MARY</p><p>I know. It's that.</p></div>
<div class="action"><p>She points again to line 5.</p></div>
<div class="dialog"><p class="character">PHIL</p><p>This</p><p class="parenthetical">(points to line 5)</p><p>isn't this!</p><p class="parenthetical">(points to line 1)</p></div>
<div class="dialog"><p class="character">MARY</p><p>Yes it is.</p></div>
<div class="action"><p>Phil points to both line 1 and line 5.</p></div>
<div class="dialog"><p class="character">PHIL</p><p>These are two separate things!</p></div>
<div class="dialog"><p class="character">MARY</p><p>Well, sure.</p></div>
<div class="dialog"><p class="character">PHIL</p><p>Right, then what's this?</p></div>
<div class="action"><p>Phil points to line 1.</p></div>
<div class="dialog"><p class="character">MARY</p><p>That.</p></div>
<div class="action"><p>She points to line 5.</p></div>
<div class="dialog"><p class="character">PHIL</p><p>Okay, fine! What this?</p></div>
<div class="action"><p>He points to line 5.</p></div>
<div class="dialog"><p class="character">MARY</p><p>Window.</p></div>
<div class="dialog"><p class="character">PHIL</p><p>What? Where?</p></div>
<div class="dialog"><p class="character">MARY</p><p>Nowhere, it hasn't been called.</p></div>
<div class="dialog"><p class="character">PHIL</p><p>Then how the hell is that</p><p class="parenthetical">(points to line 5)</p><p>window?</p></div>
<div class="dialog"><p class="character">MARY</p><p>Oh, that's not window, that's an object.</p></div>
<div class="action"><p>Phil points to line 5.</p></div>
<div class="dialog"><p class="character">PHIL</p><p>But you just said this is window!</p></div>
<div class="dialog"><p class="character">MARY</p><p>Yeah, that's true.</p></div>
<div class="action"><p>Phil points to line 5.</p></div>
<div class="dialog"><p class="character">PHIL</p><p>Then this <em>is</em> window!</p></div>
<div class="dialog"><p class="character">MARY</p><p>No, I told you, that is an object.</p></div>
<div class="dialog"><p class="character">PHIL</p><p>What?</p></div>
<div class="dialog"><p class="character">MARY</p><p>Look, it's all quite simple.</p></div>
<div class="action"><p>She points to line 5.</p></div>
<div class="dialog"><p class="character">MARY</p><p><em>That</em> is an object.</p></div>
<div class="action"><p>She points to line 5.</p></div>
<div class="dialog"><p class="character">MARY</p><p>And <em>this</em> is window.</p></div>
<div class="dialog"><p class="character">PHIL</p><p>They're the same thing!</p></div>
<div class="dialog"><p class="character">MARY</p><p>Only according to typeof.</p></div>
<div class="dialog"><p class="character">PHIL</p><p>What?</p></div>
<div class="action"><p>Slow fade out as they continue to argue.</p></div>
</div>

The end.
