 <script>
 import { onMount } from 'svelte';
 
 let date = new Date();
 $: hour = date.getHours();
 $: min = date.getMinutes();
 $: sec = date.getSeconds();
  

 onMount( () => {
   const interval = setInterval(() => {
     date = new Date();
   }, 1000);
 });
//  let zero = (i) => {
//     if (i < 10) {i = "0" + i};
//     return i;
//  }
//  min = zero(min)
// sec = zero(sec)
</script>
<div> 
 {hour} : {min} : {sec}
</div>