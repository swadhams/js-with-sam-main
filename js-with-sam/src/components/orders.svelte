
<script>

const items = [
    {name: 'Dragon Platelegs', price:200, selected: false},
    {name: 'Amulter of Fury', price:1600, selected: false},
    {name: 'Dragon Scimitar', price:160, selected: false},
    {name: 'Abyssal Whip', price: 6000, selected: false},
    {name: 'Helm of Neitznot', price: 50, selected: false},
    {name: 'Dharok\'s Greataxe', price:600, selected: false},
]
// let sum = () => {
//     total = 0;
//     items.forEach(item => {
//     console.log('item', item, 'item.price', item.price, typeof item.price);
//     if (item.selected) total += item.price;
//     console.log(total);
// });
// }
let total = 0;
// $: items, total = items.forEach(item => {
//     console.log('item', item, 'item.price', item.price, typeof item.price);
//     if (item.selected) total += item.price;
//     console.log(total);
// });
$: {
    total = 0;
    items.forEach(item => {
        if(item.selected) total += item.price
    })
    
};
</script>

<main>

    {#each items as { name, price, selected}}
    <tr>
   <td><input type="checkbox"  bind:checked={selected}></td>
   <td>{name}</td>
   <td>{price + 'K gp'}</td>
   </tr>
   {/each}
   {total + 'K gp'}
   <tr>
    
   </tr>
    

</main>

<style>
    td {
        border:solid
    }
</style>