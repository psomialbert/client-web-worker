(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var HOST = location.origin.replace(/^(http|https)/, 'ws') + '/time';
var ws = new WebSocket(HOST);

var i = 0;
ws.onopen = function(event) {
  setInterval(() => {
    ws.send(`hej ${i}`);
    i += 1;
  }, 1000);
};

ws.onmessage = function(event) {
  document.getElementById('server-time').innerHTML = 'time: ' + event.data;
};

},{}]},{},[1]);
