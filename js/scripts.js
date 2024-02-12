/*=========================================================================================
	Item Name: Open Street Map 2D Viewer
    Module: scripts.js
	Version: 1.0
	Author: Sergey Patokin
    Last Update: 02.12.2024
	Author URL: https://sergeyforever.online/
===========================================================================================*/

var map = L.map('map').setView([34.052235, -118.243683], 13); // Los Angeles coordinates

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  maxZoom: 50
}).addTo(map);
