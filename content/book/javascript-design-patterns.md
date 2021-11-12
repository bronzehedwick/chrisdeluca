+++
title = "Learning Javascript Design Patterns"
subtitle = ""
date = 2019-10-12T12:58:29-04:00
draft = false
author = "Addy Osmani"
genre = ""
toc = true

[read]
  start = 2019-10-12T12:58:29-04:00
  end = 2020-02-22T14:29:01-04:00
+++

## What Is a Pattern?

> Patterns don’t solve all design problems, nor do they replace good software designers, however, they do support them.

Patterns support good developers. The next question is, what makes a good dev? Seems squishy but extremely important.

> Patterns add to a developers vocabulary, which makes communication faster.

This is a great maybe hidden benefit. Communication between developers is paramount. The next question is, for those who are not familiar with the same patterns, how do you communicate them? Very context specific.

## We Already Use Patterns Every Day

> So, which of these options is the fastest? It’s actually the third option by a factor of 8 to 10 times the alternatives.

`getElementsByClassName` is faster than `querySelectorAll` by a factor of 8-10.

## “Pattern”-ity Testing, Proto-Patterns, and the Rule of Three

> patterns generally focus on addressing a visually identifiable structure—i.e., we should be able to visually depict the structure that results from the pattern in practice.

Interesting. I’m not sure I quite grasp this yet, but it makes sense at a high level. Use a pattern (something abstract) to generalize something that is visually concrete, so you’re not putting an abstraction on top of an abstraction. At least that’s my takeaway. Could be making my own assumptions.

> “proto-pattern”: a pattern that has not yet been known to pass the “pattern”-ity tests.

50 pages in and we’ve got our first sex joke. Good to know what a proto pattern is tho. A pattern that has not been tested. Couched in the language of Mory Povich.

> Alternatively, the individual(s) sharing the pattern may not have the time or interest of going through the “pattern”-ity process and might release a short description of their proto-pattern instead. Brief descriptions or snippets of this type of pattern are known as patlets.

Patlets? Weird. Is there some formal pattern naming body? Why is this so formal, and so silly?

> Patterns are not supposed to just capture principles or strategies. They need to capture solutions.

Patterns capture solutions, not principles.

> ...design patterns usually provide solutions to problems indirectly

This is necessary to solve more challenging problems. Not sure how that relates yet. Probably need a more concrete example first.

> Describes a proven concept.

Patterns must be proven. This makes inherent sense. You can’t fly by speculation. I guess this needs to be stated, since were in the business of taking the guesswork out of things.

> Describes a relationship. In some cases, it may appear that a pattern describes a type of module. Although an implementation may appear this way, the

This is incomprehensible to me. So many vague terms that I don’t know the definition of in this context.

> Many proto-patterns are actually quite good.

Some examples of a pattern vs a proto pattern would be useful. I know there will be bone fide patterns, since that’s in the name, but I’m hoping for some proto patterns examples later on in the book.

> One of additional requirement for a pattern to be valid is that it display some recurring phenomenon.

Makes sense. You can’t make a pattern (something inherently repeatable) from a one off thing.

## The Structure of a Design Pattern

> A context A system of forces that arises in that context A configuration that allows these forces to resolve themselves in context...

This is entirely too abstract to extract any meaning from at this point. Hoping for more examples to make this concrete.

## Writing Design Patterns

> When we’re looking at a body of code we think may be using a pattern, we should consider writing down some of the aspects of the code that we believe fall under a...

Take notes about code that might fall into a pattern. Write down which patterns it might apply in.

## Writing Design Patterns

> Design patterns should be entirely transparent to any type of user experience. They are primarily there to serve the developers using them and should not force changes to behavior in the user experience that would not be incurred without the use of a pattern.

Patterns serve developers, and should not change end users experience.

## Anti-Patterns

> If we consider that a pattern represents a best practice, an anti-pattern represents a lesson that has been learned.

Yeah it’s often just as useful to outline what not to do as well as what to do.

> Examples of anti-patterns in JavaScript are the following

Some more JS anti patterns:

- relying on type coercion for undefined/null/false, since this does not result in a single output like `false`
- defining a variable without a keyword, since that leaks to global scope

## Creational Design Patterns

> Creational design patterns focus on handling object-creation mechanisms where objects are created in a manner suitable for a given situation.

Various patterns to control the object creation mechanism to prevent overuse and incompatible implementation

## Structural Design Patterns

> They help ensure that when one part of a system changes, the entire structure of the system doesn’t need to do the same.

“They” meaning structural patterns. Basically these patterns help with modularity and composition.

## Behavioral Design Patterns

> Behavioral patterns focus on improving or streamlining the communication between disparate objects in a system.

If structural helps each piece of the system stay compatible with the rest, behavioral patterns help facilitate the communication between those various compatible systems.

Here compatible means works easily with each other, not relying on the specifics of the implementation inside to determine how you interface with it from the outside, staying agnostic.

## The Module Pattern

> The disadvantages of the Module pattern are that, as we access both public and private members differently, when we wish to change visibility, we actually have to make changes to each place the member was used.

This is an important call out. The module pattern is good at “loose” encapsulation, but does impose a refactor tax if you want to change the public / private nature of methods.

I’m most familiar with this pattern when it comes to the classic IIFE usage, some AMD back in the day, and common js.

## The Revealing Module Pattern

> An example of how to use the Revealing Module pattern is as follows:

The revealing module pattern is actually the one I’m much more familiar with, and it’s what I’ve most often seen combined with IIFE namespacing. It’s nice clean and simple with a small syntax tax.

> Public object members that refer to private variables are also subject to the no-patch rule.

I don’t know what the author means by no latch rule. He mentioned that the module and revealing module pattern cannot be patched or hot fixed in certain situations, but I don’t know what he means by hot fix or patch. These are not single meaning terms. He could be talking about any number of things.

Hence I don’t have a great grasp of the weaknesses pertaining to patching in these patterns.

## The Singleton Pattern

> Singletons differ from static classes (or objects) as we can delay their initialization, generally because they require some information that may not be available during initialization time.

So singleton instantiation can be depleted to after init time, to some later point in the program. And it seems like this is one of the primary reasons to use the pattern.

I can think of an example maybe when you want to instantiate something only if and after a user action. Perhaps triggering a modal and you only want one modal on the screen at a time.

> The Singleton pattern is thus known because it restricts instantiation of a class to a single object.

Super concise and illuminating explanation. From this I get that a class can only have a single instance. JS doesn’t have real classes in terms of copying, they’re objects that are prototype linked, so I’m curious how singleton applies to JS.

> Classically, the Singleton pattern can be implemented by creating a class with a method that creates a new instance of the class if one doesn’t exist. In the event of an instance already existing, it simply returns a reference to that object.

This explains how classical languages accomplish singleton. Creating a new instance only if one doesn’t already exist, otherwise returning the already existing instance.

> There must be exactly one instance of a class, and it must be accessible to clients from a well-known access point. The sole instance should be extensible by subclassing, and clients should be able to use an extended instance without modifying their code.

For a singleton to be a singleton, there needs to be exactly one instance of it, no matter how many times the constructor is called, and this single instance should be subclassable without any other implementing piece having to modify their code. I don’t exactly know what subclassable means at this point but let’s read on.

> In C++, it serves as isolation from the unpredictability of the dynamic initialization order, returning control to the programmer.

It’s important for singletons to be defined outside the init order since that can be unpredictable, which is certainly true in a dynamic async browser housed language like JavaScript. This gives the programmer control over when the execution happens, determined by the code they write.

> ...the Singleton pattern is useful when exactly one object is needed to coordinate others across a system.

This is a warning on the overuse of any one pattern, which is a point well taken. If all you have is a hammer, everything looks like a nail.

It’s also interesting that the recommendation here for use of singletons is as a coordination across the system. I guess that’s because singletons have an well known interface and don’t use much resources, even though they can be called any number of times.

> The presence of the Singleton is often an indication that modules in a system are either tightly coupled or that logic is overly spread across multiple parts of a code base.

Interesting. This comment only pertains to JS but that’s an interesting point. After this big explanation of the pattern, the author basically says that if you use it in JS you’re doing it wrong. 

I’m having trouble imagining all the complexity required to validate this but I’ll take his word for it.

## The Observer Pattern

> The Observer is a design pattern in which an object (known as a subject) maintains a list of objects depending on it (observers), automatically notifying them of any changes to state (Figure 9-3).

The context switching needed to parse the different uses of the same word, and the reassignments of terminology, is impressive. And that’s not a compliment. But I get it naming is hard. 

The observer pattern creates a subject that observers can point to to be automatically updated on state. I’m pretty sure events in JS is an observer pattern.

> When a subject needs to notify observers about something interesting happening, it broadcasts a notification to the observers (which can include specific data related to the topic of the notification).

This is `addEventListener` no?

> Subject

The subject is the thing that maintains a list of observers, and handles adding and removing listeners.

> Observer

This is the middleman that tells the objects attached to the subject about changes happening in the subject. It’s the external interface for these updates.

> ConcreteSubject

I think if subject is an abstract class, concrete subject is an actual instantiation (in classical programming). It does the actual work of saving the changes from the subject to the concrete observers.

> ConcreteObserver

Is a reference to the Observer, and actually performs the updates back to it. I guess this is what you actually interact with.

## The Mediator Pattern

> Another analogy would be DOM event bubbling and event delegation.

Ah ha, so the observer pattern is similar to event bubbling but not quite the same. The mediator pattern is event bubbling. Although this is for only bubbling/delegation, not direct event binding, which I suppose is still the observer pattern.

As this books describes, in implementation terms, the mediator pattern is a shared subject from the observer pattern.

Metaphor for mediator pattern: air traffic control tower. In fact that’s just a non-software mediator pattern.

> The largest benefit of the Mediator pattern is that it reduces the communication channels needed between objects or components in a system from many to many to just many to one.

I can see how this would be really helpful in reducing complexity. Although, duh. The trick is figuring out when this is appropriate. Again, duh.

> Perhaps the biggest downside of using the pattern is that it can introduce a single point of failure.

Yeowch.

## The Command Pattern

> The Command Pattern

As far as I can understand it from reading this chapter, the command pattern describes a pattern of abstracting method calls such that the object is loosely coupled instead of tightly. Instead of calling the implementation-specific methods of an object, make those private and wrap them in a public method that composes the needed private methods. This prevents large scale application refactoring if the implementation level API changes for the module.

## The Facade Pattern

> This pattern provides a convenient higher-level interface to a larger body of code, hiding its true underlying complexity. T

We basically simplify the underlying logic, abstracting away complexity and providing a more focused, usable alternative.

> $(el).css()

jQuery methods are facades. Makes sense.

> As we can see below, our instance of the Module pattern contains a number of methods that have been privately defined. A Facade is then used to supply a much simpler API to accessing these methods:

Ah ha I knew it! The facade is commonly used to abstract and compose private methods. Snap.

> When using the Facade pattern, try to be aware of any performance costs involved and make a call on whether they are worth the level of abstraction offered.

Yes the facade can cause a performance penalty over non-abstracted code, but it doesn’t always and the benefits and drawbacks have to be considered.

## The Factory Pattern

> Instead, a Factory can provide a generic interface for creating objects, where we can specify the type of factory object we wish to be created

So the factory pattern is an abstraction over object/class instantiation, which becomes more useful of object construction is complex. 

Instead of using new or something like that, you have a single object with a method that you ask to create the type of object you want and it returns it to you to have and to hold.

> When we need to easily generate different instances of objects depending on the environment we are in. When we’re working with many small objects or components that share the same properties.

Some other good use cases for this pattern. 

Another I didn’t highlight is about duck typing to fit an API that I didn’t really understand.

> Unless providing an interface for object creation is a design goal for the library or framework we are writing, I would suggest sticking to explicit constructors to avoid the unnecessary overhead.

Answers a good question of when not to use this pattern. So probably a rare grab from the tool belt.

> It is also useful to be aware of the Abstract Factory pattern, which aims to encapsulate a group of individual factories with a common goal. It separates the details of implementation of a set of objects from their general usage. An Abstract Factory pattern should be used where a system must be independent from the way the objects it creates

I’m not totally sure what the implementation difference is between an abstract factory and a regular factory.

## Mixins

> Each new object we define has a prototype from which it can inherit further properties.

So prototypes are the mixin pattern?

> Some developers feel that injecting functionality into an object prototype is a bad idea as it leads to both prototype pollution and a level of uncertainly regarding the origin of our functions. In large systems, this may well be the case.

This is interesting. I think the OLOO pattern is a mixin if I didn’t mention that already. Not knowing the origin of the method is a real problem. I can see documentation helping, but it would still be hard to tell from the function call what composed it, and tag systems wouldn’t help much I don’t think. Something to consider.

## Pseudoclassical Decorators

> An interface is a way of defining the methods an object should have; however, it doesn’t actually directly specify how those methods should be implemented.

Nice explanation here. An interface is the abstract notion of the API along with the names of the methods, but nothing of the implementation of those methods.

> This would be an impractical solution, as a new subclass would be required for every possible combination of enhancements that are available.

Mixins are preferable over sub classing when the functionality additions aren’t linear. If you’d need to create a crap ton of horizontal sub classes - aka one parent and a lot of children, instead of one parent, a few children, some grandchildren, etc - it makes more sense to mixin the functionality. Have small encapsulated functions that you can swap in in any number to a new object, all of which combine to add to or override the existing methods.

## Advantages and Disadvantages

> it can significantly complicate our application architecture, as it introduces many small but similar objects into our namespace.

The main drawback of the mixin pattern is potential confusion, especially to devs new to the project. Comment a lot.

## Flyweight

> The Flyweight pattern is a classical structural solution for optimizing code that is repetitive, slow, and inefficiently shares data.

I guess this is what best situations to use this pattern. If you have the problem of inefficient and slow data sharing between modules, consider the flyweight pattern as a solution.

> The first is at the data layer, where we deal with the concept of sharing data between large quantities of similar objects stored in memory. The second is at the DOM layer, where the Flyweight can be used as a central event-manager to avoid attaching event handlers to every child element in a parent container we wish to have some similar behavior.

In all languages flyweight can be used to share data between large objects. I don’t think the “large quantities of similar objects” is a requirement of the pattern, but rather when it makes sense to implement it. 

The JS only version is that flyweight can also be applied to the DOM in the form of a centralized event manager, which is delegated events.

> states: intrinsic and extrinsic. Intrinsic information may be required by internal methods in our objects, which they absolutely cannot function without. Extrinsic information can however be removed and stored externally.

Intrinsic is the methods on the object, stuff the object needs to operate. Extrinsic

> Try to think of the flyweight in terms of a pond. A fish opens its mouth (the event), bubbles rise to the surface (the bubbling), a fly sitting on the top flies away when the bubble reaches the surface (the action). In this example we can easily transpose the fish opening its mouth to a button being clicked, the bubbles as the bubbling effect, and the fly flying away to some function being run.

Nice description of the flyweight pattern in the DOM.

## MVVM

> The only exception to this rule tends to be validation, and it’s considered acceptable for Models to validate data being used to define or update existing models (e.g., does an email address being input meet the requirements of a particular regular expression?).

Models handle clean data, views present that data, and model views handle business logic, with the exception of validation, which the modal can handle and input time, probably so there doesn’t have to be corrupted data being passed around.

## Final Notes

I skipped the parts on knockout, backbone, and jQuery specific stuff, which is about half the book.

---

All Excerpts From

Osmani, Addy. “Learning JavaScript Design Patterns.” O’Reilly Media, 2012-07-08. Apple Books.  
This material may be protected by copyright.
