// Copyright (c) 2022 Ekaterina All rights reserved
//
// Created by: Ekaterina
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit-3-02/sw.js", {
    scope: "/ICS20-Unit-3-02/",
  })
}

/**
 * This function displays an alert.
 */
function myButtonClicked() {
  // input
  const length = parseFloat(document.getElementById("length").value)
  const width = parseFloat(document.getElementById("width").value)
  const height = parseFloat(document.getElementById("height").value)

  // process
  const volume = (length * width * height) / 3

  // output
  document.getElementById("volume").innerHTML =
    "Volume is: " + volume.toFixed(2) + "mm³"
}
