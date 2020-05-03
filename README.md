# Doc-Ops

Building out the core CLI tooling to do pdf output generation

## Install / Run

```shell

$ npm install

... installs

$ npm index.js

# Prints out the quotes and char-length for each quote located in the QUOTE_SET
----
What is important is not the quantity of your knowledge, but its quality. You can know many things without knowing that which is most important.
-Count:  144

----
The world is a university and everyone in it is a teacher. Make sure when you wake up in the morning, you go to school.
-Count:  119

----
All the world is my school and all humanity is my teacher.
-Count:  58

Saved file: output.pdf
```

## Things I Learned -- TIL

The first round of work resulted in learnings around

* Built a functional wrapper for rendering that is connected to a fixture's `forEach`. simple interface for rendering a quoteSet.
* Adding a page, and by default a page is generated when you create an instance of PDFKIT, there is a flag to disable it.  I left it on by default.
* Generating horizontal lines, can be wrapped, and a better interface could be created, using stroke we can make it easier.
* Has examples of using `dashed/undashed` for making __Lines__, once you make something dashed you need to declare `undashed()` again to stop it.
* Getting `height` of a textbox is tricky and the interface doesn't take in account font-type based on readings.  Also the example is sparse in terms of docs.

