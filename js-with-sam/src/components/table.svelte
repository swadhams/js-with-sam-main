<script>
let data = [
    {firstName: "Steve", lastName: "Smith", age:27},
    {firstName: "Darius", lastName: "Drinkwater", age:34},
    {firstName: "Assif", lastName:"Sniff", age:55},
    {firstName: "Melman", lastName: "Melthews", age:30},
    {firstName: "Wesley", lastName: "Jeggers", age:33},
    {firstName: "Camille", lastName: "Laurent", age:37},

]
let person = {
    firstName: "",
    lastName: "",
    age: "",
}

let newData = () => {
    data = [...data, person ];
}
let clear = () => {
    person.firstName = '';
    person.lastName= '';
    person.age= ''
}
function remove(index) {
    data.splice(index, 1)
    data = data;
}
</script>   


<main>
    {#each data as {firstName, lastName, age},index}
    <tr>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{age}</td>
        <td><button on:click={() => remove(index)}>delete</button></td>
    </tr>
    {/each}

    <!-- <input type="text" bind:value={person.firstName}>
    <input type="text" bind:value={person.lastName}>
    <input type="text" bind:value={person.age}>
    <button on:click={newData} on:click={clear}> click me </button> -->
</main>