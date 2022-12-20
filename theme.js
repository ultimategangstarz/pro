 function initThemeSelector() {
      const themeStylesheetLink=document.getElementById("themeStylesheetLink");
      const currentTheme=localStorage.getItem("theme") || "blue";
  
      function activateTheme(themeName) {
        themeStylesheetLink.setAttribute("href", `/themes/${themeName}.css`);
      }
      activateTheme(currentTheme);
    }   
    initThemeSelector();
