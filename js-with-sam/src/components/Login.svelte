<p>Username(hint:user)</p>
<input type="text" bind:value={user_input} />

<p>Password(hint:password)</p>
<input type="password" bind:value={pass_input} />


<button on:click={handleLogin}>Login</button>

{#if is_successfully_logged_in}
    <div class="green-box">
        You have logged in!
    </div>
{:else if is_successfully_logged_in === false}
    <div class="red-box">
        You have failed to login!
    </div>
{/if}

<script>
    
function handleLogin() {
    if (user_input === username && pass_input === password) {
        
        is_successfully_logged_in = true;
    } else {
        is_successfully_logged_in = false;
    }
}


const username = 'user';
const password = 'password';

let user_input = '';
let pass_input = '';

let is_successfully_logged_in = null;


</script>

<style>
.green-box {
    background-color: green;
    color: #FFF;
    margin-top: 1rem;
    padding: 1rem;
}

.red-box {
    background-color: red;
    color: #FFF;
    margin-top: 1rem;
    padding: 1rem;
}
</style>