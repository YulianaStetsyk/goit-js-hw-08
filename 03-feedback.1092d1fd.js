const e=document.querySelector(".feedback-form"),a=e.querySelector('input[name="email"]'),t=e.querySelector('textarea[name="message"]'),l=localStorage.getItem("feedback-form-state");if(l){const{email:e,message:o}=JSON.parse(l);a.value=e,t.value=o}e.addEventListener("input",_.throttle((()=>{const e={email:a.value,message:t.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500)),e.addEventListener("submit",(e=>{e.preventDefault();const l=a.value,o=t.value;localStorage.removeItem("feedback-form-state"),a.value="",t.value="",console.log({email:l,message:o})}));
//# sourceMappingURL=03-feedback.1092d1fd.js.map
