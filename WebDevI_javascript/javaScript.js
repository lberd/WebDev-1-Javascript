function p1Border()
    {
      var p1 = document.getElementById("p1");
      var cb = document.getElementById("changeBorder");

      p1.style.borderWidth = cb.options[cb.selectedIndex].text;
    }

    function p1Margins()
    {
      var p1 = document.getElementById("p1");
      var cm = document.getElementById("changeMargins");

      if (cm.selectedIndex === 0)
        p1.style.margin = "0";
      if (cm.selectedIndex === 1)
        p1.style.margin = "0 .1em";
      if (cm.selectedIndex === 2)
        p1.style.margin = "0 .5em";
      if (cm.selectedIndex === 3)
        p1.style.margin = "0 1em";

    }

    function p1Padding()
    {
      var p1 = document.getElementById("p1");
      var cp = document.getElementById("changePadding");

      if (cp.selectedIndex === 0)
        p1.style.padding = ".2em";
      if (cp.selectedIndex === 1)
        p1.style.padding = ".2em .5em";
      if (cp.selectedIndex === 2)
        p1.style.padding = ".2em 1em";
      if (cp.selectedIndex === 3)
        p1.style.padding = ".2em 2em";

    }

    function p1Font()
    {
        var p1 = document.getElementById("p1");
        var cf = document.getElementById("changeFontFamily");

        if (cf.selectedIndex === 0)
            p1.style.fontFamily = "Arial";
        else if (cf.selectedIndex === 1)
            p1.style.fontFamily = "Calibri";
        else if (cf.selectedIndex === 2)
            p1.style.fontFamily = "Times";
    }

    function ul1Color()
    {
      var ul1 = document.getElementById("ul1");
      var ulc = document.getElementById("changeColor");

      if(ulc.selectedIndex === 0)
        ul1.style.color = "black";
      else if(ulc.selectedIndex === 1)
        ul1.style.color = "red";
    }

    function ul1Style()
    {
      var ul1 = document.getElementById("ul1");
      var uls = document.getElementById("changeStyle");

      if(uls.selectedIndex === 0)
        ul1.style.fontStyle = "normal";
      else if(uls.selectedIndex === 1)
        ul1.style.fontStyle = "italic";
      else if(uls.selectedIndex === 2)
        ul1.style.fontStyle = "oblique";
    }

    function ul1ListStyle()
    {
      var ul1 = document.getElementById("ul1");
      var ulls = document.getElementById("changeListStyle");

      if(ulls.selectedIndex === 0)
        ul1.style.listStyle = "disc";
      else if(ulls.selectedIndex === 1)
        ul1.style.listStyle = "circle";
      else if(ulls.selectedIndex === 2)
        ul1.style.listStyle = "square";
      else if(ulls.selectedIndex === 3)
        ul1.style.listStyle = "lower-roman";
    }

    function ul1ListStylePosition()
    {
      var ul1 = document.getElementById("ul1");
      var ullsp = document.getElementById("changeListStylePos");

      if(ullsp.selectedIndex === 0)
        ul1.style.listStylePosition = "inside";
      else if(ullsp.selectedIndex === 1)
        ul1.style.listStylePosition = "outside";
    }

    function ul1FontWeight()
    {
      var ul1 = document.getElementById("ul1");
      var ulfw = document.getElementById("changeFontWeight");

      if(ulfw.selectedIndex === 0)
        ul1.style.fontWeight = "normal";
      else if(ulfw.selectedIndex === 1)
        ul1.style.fontWeight = "bold";
      else if(ulfw.selectedIndex === 2)
        ul1.style.fontWeight = "bolder";
      else if(ulfw.selectedIndex === 3)
        ul1.style.fontWeight = "lighter";
    }

    function instructionClass1()
    {
      var instructions = document.getElementById("instructions");

      instructions.className = "style1";
    }

    function instructionClass2()
    {
      var instructions = document.getElementById("instructions");
      var additionalInstruction = document.getElementById("additionalInstruction");

      instructions.className = "style2";
      additionalInstruction.className = "addShow";
    }

    window.onload = function()
    {
      var p1 = document.getElementById("p1");
      p1.style.border = "thin solid black";
      document.getElementById("changeBorder").onchange = p1Border;
      p1.style.margin = "0";
      document.getElementById("changeMargins").onchange = p1Margins;
      p1.style.padding = ".2em";
      document.getElementById("changePadding").onchange = p1Padding;
      p1.style.fontFamily = "Arial";
      document.getElementById("changeFontFamily").onchange = p1Font;

      var ul1 = document.getElementById("ul1");
      ul1.style.listStyle = "Disc";
      document.getElementById("changeListStyle").onchange = ul1ListStyle;
      ul1.style.listStylePosition = "Inside";
      document.getElementById("changeListStylePos").onchange = ul1ListStylePosition;
      ul1.style.color = "Black";
      document.getElementById("changeColor").onchange = ul1Color;
      ul1.style.fontWeight = "normal";
      document.getElementById("changeFontWeight").onchange = ul1FontWeight;
      ul1.style.fontStyle = "normal";
      document.getElementById("changeStyle").onchange = ul1Style;
    };