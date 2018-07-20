
const counters = {
    b1: 0,
    b2: 0,
    b3: 0
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
  
  