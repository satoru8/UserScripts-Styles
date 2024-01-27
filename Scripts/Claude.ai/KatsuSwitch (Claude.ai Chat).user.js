// ==UserScript==
// @name         Claude.ai Chat - Dark Mode Toggle
// @namespace    KatsuSwitch
// @version      1.0.2
// @description  Light / Dark Mode Toggle
// @author       Sato
// @license      MIT
// @match        https://claude.ai/*
// @icon         https://raw.githubusercontent.com/satoru8/UserScripts-Styles/main/Logo.png
// @downloadURL  https://openuserjs.org/install/sato/KatsuSwitch_(Claude.ai_Chat).user.js
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

(function () {
  'use strict';

  try {
    const html = document.querySelector('html');

    if (!html) {
      throw new Error('HTML element not found');
    }

    let currentMode = GM_getValue('mode');

    console.log('Initial mode:', currentMode);
    html.setAttribute('data-mode', currentMode || 'light');

    const updateMode = (newMode) => {
      console.log('Updating mode to:', newMode);
      GM_setValue('mode', newMode);
      currentMode = newMode;
      html.setAttribute('data-mode', currentMode);
    };

    GM_registerMenuCommand('Toggle Mode', () => {
      try {
        const newMode = currentMode === 'light' ? 'dark' : 'light';
        updateMode(newMode);
      }
      catch (error) {
        console.error('Error in Toggle Mode:', error);
      }
    });

    window.addEventListener('load', () => {
      console.log('Page loaded, setting mode to:', currentMode);
      html.setAttribute('data-mode', currentMode || 'light');
    });

  }
  catch (error) {
    console.error('Error in userscript:', error);
  }
})();
