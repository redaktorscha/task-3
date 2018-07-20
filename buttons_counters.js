
const counters = {
    b1: 0,
    b2: 0,
    b3: 0,
    b4: 0,
    b5: 0,
    b6: 0,
    b7: 0,
    b8: 0,
    b9: 0
  };
  
  let buttons = {};
  let keys = Object.keys(counters);
  
  for (let i = 0; i < keys.length; i++)
  {
    let elems = document.getElementById(keys[i]);
    elems.onclick = count;  
    buttons[keys[i]] = elems.innerHTML.slice(0, -3);
   
  }
  
  
  function count(btn)
  {
    let id = btn.target.id;
    counters[id]++;
    btn.target.innerHTML = buttons[id] + " (" + counters[id] + ")";  
  }
  
  