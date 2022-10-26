<script>
  let balls = [
    "yeah man",
    "for sure",
    "probably",
    "help i'm trapped in a magic 8ball",
    "like the romans",
    "unlikely",
    "if you believe in it",
    "perhaps",
    "never ask me that question again",
    "doubt it",
    "probably not",
    "huh? what u mean?",
    "idk man",
    "ask again later",
    "no, man",
    "I'll see you soon",
    "for all of eternity",
    "suffering awaits",
    "never",
    "yes... at a great price",
  ];
  const displayAnswer = (ran) => {
    let random = Math.floor(Math.random() * ran.length);
    let respond = ran[random];
    display = respond;
  };
  let display = "8";

  let text = "";

  let clear = () => {
    text = "";
  };
</script>

<main>
  <p>Enter your question for the magic 8ball</p>
  <input id="text" type="text" bind:value={text} />
  <div>
    <button
      class="button"
      type="button"
      on:click={() => displayAnswer(balls)}
      on:click={clear}>Shake It</button
    >
    <div id="ball">
      <div id="ballWindow">
        <div id="triangle">
          <div id="message"><p transiton:fade>{display}</p></div>
        </div>
      </div>
    </div>
  </div>
</main>

<style>
  #ball {
    align-items: center;
    background-image: radial-gradient(
      farthest-side at 20% 15%,
      white,
      gray 0%,
      black 65%
    );
    border-radius: 100%;
    display: flex;
    height: 400px;
    justify-content: center;
    margin: 0 auto;
    width: 400px;
  }
  #ballWindow {
    align-items: center;
    background-color: black;
    border-radius: 100%;
    border: 2px inset rgb(51, 51, 51, 0.7);
    display: flex;
    height: 200px;
    justify-content: center;
    width: 200px;
  }
  #message {
    color: white;
    height: 100px;
    margin-top: 10px;
    width: 75px;
  }
  #triangle {
    align-items: flex-end;
    border-left: 55px solid transparent;
    border-right: 55px solid transparent;
    border-top: 100px solid purple;
    display: flex;
    justify-content: center;
    height: 0;
    margin-top: 50px;
    width: 0;
  }
</style>
