shufti
======

A demo Selenium Server interface for HP Unified Functional Testing

It is a prototype - and is really designed to show the obstacles and possible solutions to creating such an interface. It works, but needs work...

It consists of two classes:
 - webDriverLite: a class which is responsible for communicating with the Selenium Server using the JSONWire Protocol
 - webDriverUFT: a class which is responsible for working with HP UFT repositories

and two functions: 
initialiseLocalServer: for working with a local server
initialiseLocalServer: for working with a Sauce Labs server

To use it you need to have HP UFT and a Sauce Labs account

An example HP UFT project is included