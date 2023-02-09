import{_ as e,o as r,c as a,h as t}from"./app.3a69f471.js";const o="/assets/breadboard6.c51cc508.jpg",i="/assets/breadboard3.9f1323d8.jpg",s="/assets/breadboard5.f78739d8.jpg",d="/assets/breadboard8.59bb175b.jpg",y=JSON.parse('{"title":"How to Use a Breadboard","description":"","frontmatter":{},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"Why Use Breadboards?","slug":"why-use-breadboards","link":"#why-use-breadboards","children":[]},{"level":2,"title":"Terminal Strips","slug":"terminal-strips","link":"#terminal-strips","children":[]},{"level":2,"title":"Power Rails","slug":"power-rails","link":"#power-rails","children":[]},{"level":2,"title":"Providing Power to a Breadboard","slug":"providing-power-to-a-breadboard","link":"#providing-power-to-a-breadboard","children":[]},{"level":2,"title":"Build the Circuit","slug":"build-the-circuit","link":"#build-the-circuit","children":[]},{"level":2,"title":"The circuit goes as follows","slug":"the-circuit-goes-as-follows","link":"#the-circuit-goes-as-follows","children":[]}],"relativePath":"hardwareGuides/breadBoard.md","lastUpdated":1675952674000}'),n={name:"hardwareGuides/breadBoard.md"},l=t('<h1 class="text-[#e67e22]" id="how-to-use-a-breadboard" tabindex="-1">How to Use a Breadboard <a class="header-anchor" href="#how-to-use-a-breadboard" aria-hidden="true">#</a></h1><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-hidden="true">#</a></h2><p>Breadboards are one of the most fundamental pieces when learning how to build circuits.</p><h2 id="why-use-breadboards" tabindex="-1">Why Use Breadboards? <a class="header-anchor" href="#why-use-breadboards" aria-hidden="true">#</a></h2><p>An electronics breadboard (as opposed to the type on which sandwiches are made) is actually referring to a solder-less breadboard. These are great units for making temporary circuits and prototyping, and they require absolutely no soldering.</p><p>Prototyping is the process of testing out an idea by creating a preliminary model from which other forms are developed or copied, and it is one of the most common uses for breadboards. If you aren’t sure how a circuit will react under a given set of parameters, it’s best to build a prototype and test it out.</p><p>For those new to electronics and circuits, breadboards are often the best place to start. That is the real beauty of breadboards they can house both the simplest circuit as well as very complex circuits.</p><p>Another common use of breadboards is testing out new parts, such as Integrated circuits (ICs). When you are trying to figure out how a part works and constantly rewiring things, you don’t want to have to solder your connections each time.</p><p>As mentioned, you don’t always want the circuit you build to be permanent.</p><hr><h2 id="terminal-strips" tabindex="-1">Terminal Strips <a class="header-anchor" href="#terminal-strips" aria-hidden="true">#</a></h2><p>Here we have a breadboard where the adhesive backing has been removed. You can see lots of horizontal rows of metal strips on the bottom of the breadboard.</p><p><img src="'+o+'" alt="breadboard"></p><hr><h2 id="power-rails" tabindex="-1">Power Rails <a class="header-anchor" href="#power-rails" aria-hidden="true">#</a></h2><p>Now that we’ve seen how the connections in a breadboard are made, let’s look at a larger, more typical breadboard. Aside from horizontal rows, breadboards usually have what are called power rails that run vertically along the sides. These power rails are metal strips that are identical to the ones that run horizontally, except they are, typically*, all connected. When building a circuit, you tend to need power in lots of different places. The power rails give you lots of easy access to power wherever you need it in your circuit. Usually they will be labeled with a ‘+’ and a ‘-’ and have a red and blue or black stripe, to indicate the positive and negative side.<em>It is important to be aware that the power rails on either side are not connected, so if you want the same power source on both sides, you will need to connect the two sides with some jumper wires.</em> Keep in mind that the markings are there just as a reference. There is no rule that says you have to plug power into the &#39;+&#39; rail and ground into the &#39;-&#39;rail, though it&#39;s good practice to keep everything in order.</p><p><img src="'+i+'" alt="breadboard"></p><hr><h2 id="providing-power-to-a-breadboard" tabindex="-1">Providing Power to a Breadboard <a class="header-anchor" href="#providing-power-to-a-breadboard" aria-hidden="true">#</a></h2><p>If you are working with a development board such as an Arduino, then you can simply pull power from the Arduino’s female headers. The Arduino has multiple power and ground pins that you can connect to the power rails or other rows on a breadboard.</p><hr><h2 id="build-the-circuit" tabindex="-1">Build the Circuit <a class="header-anchor" href="#build-the-circuit" aria-hidden="true">#</a></h2><p>Here is a small circuit on a breadboard. The red board you see is the Breadboard Power Supply Stick with headers soldered to the PCB. The breadboard power supply stick regulates voltage from a 9V wall wart to either 5V or 3.3V to the power rails.</p><p><img src="'+s+'" alt="breadboard " title="Bread board photo"></p><h2 id="the-circuit-goes-as-follows" tabindex="-1">The circuit goes as follows <a class="header-anchor" href="#the-circuit-goes-as-follows" aria-hidden="true">#</a></h2><ul><li><p>There is a wire connecting the VCC power rail to the positive, anode leg of an LED.</p></li><li><p>The negative, cathode leg of the LED is connected to a 330Ω resistor.</p></li><li><p>The resistor is then connected to a button.</p></li></ul><p>When the button is pushed, it connects the circuit to ground completing the circuit and turning on the LED.</p><div class="info custom-block"><p class="custom-block-title">NOTE</p><p>Some larger breadboards will often isolate one half of the breadboard’s power rails from the other half (think top and bottom half, not the sides). This is convenient if you have two different voltages with which you need to power your circuit, such as 3.3V and 5V. However, if you’re unaware whether the power rails are or aren’t isolated, it can often lead to issues while building your circuit. It’s always a good idea to use a multimeter to check for the absence or presence of continuity in your breadboard’s power rails.</p><p><img src="'+d+'" alt="A dual sided Bread board." title="this shows a breadboard that is separated in the middle."></p></div>',28),h=[l];function c(u,p,b,w,m,g){return r(),a("div",null,h)}const v=e(n,[["render",c]]);export{y as __pageData,v as default};