<script>
    let q1 = null;
    let q2 = null;
    let q3 = null;
    let q4 = null;
    let correct = null;
    function playSound() {
        let audio = new Audio("/correct-2-46134.mp3");
        audio.play();
    }

    function answers() {
        if (q1 === 1 && q2 === 2 && q3 === 1 && q4 === 2) {
            /// put sound playing thing here
            correct = true;
            playSound.call();
        } else {
            correct = false;
        }
    }
</script>

<main>
    <div class="questions">
        <div class="q1" />
        <p>Is this a quiz?</p>
        <label>
            <input type="radio" bind:group={q1} name="11" value={1} />
            Yes
        </label>
        <label>
            <input type="radio" bind:group={q1} name="12" value={2} />
            No
        </label>
        <div class="q2" />
        <p>Is this a clock?</p>
        <label>
            <input type="radio" bind:group={q2} name="21" value={1} />
            Yes
        </label>
        <label>
            <input type="radio" bind:group={q2} name="22" value={2} />
            No
        </label>
        <div class="q3" />
        <p>Is Sam cool?</p>
        <label>
            <input type="radio" bind:group={q3} name="31" value={1} />
            Yes
        </label>
        <label>
            <input type="radio" bind:group={q3} name="32" value={2} />
            No
        </label>

        <div class="q4" />
        <p>Answer no</p>
        <label>
            <input type="radio" bind:group={q4} name="41" value={1} />
            Yes
        </label>
        <label>
            <input type="radio" bind:group={q4} name="42" value={2} />
            No
        </label>
        <button on:click={answers}>Submit</button>
        {#if correct}
            <div class="correct">Correct!</div>
        {:else if correct === false}
            <div class="wrong">Wrong!</div>
        {/if}
    </div>
</main>

<style>
</style>
