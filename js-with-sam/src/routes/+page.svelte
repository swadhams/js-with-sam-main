<script>
    import Clock from "./../components/clock.svelte";
    import Ball from "./../components/8ball.svelte";
    import List from "./../components/list.svelte";
    import Listgrid from "../components/listgrid.svelte";
    import Login from "../components/Login.svelte";
    import Orders from "../components/orders.svelte";
    import Quiz from "../components/quiz.svelte";
    import Table from "../components/table.svelte";
    import Tableinput from "../components/tableinput.svelte";
</script>

<main>
    <body>
        <div id="grid">
            <div class="item" id="1"><Clock /></div>
            <div class="item" id="2"><Login /></div>
            <div class="item" id="3"><Quiz /></div>
            <div class="item" id="4"><Table /></div>
            <div class="item" id="5"><Tableinput /></div>
            <div class="item" id="6"><Orders /></div>
            <div class="item" id="7"><List /></div>
            <div class="item" id="8"><Listgrid /></div>
            <div class="item" id="9"><Ball /></div>
        </div>
    </body>
</main>

<style>
    #grid {
        border: solid 1px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 20px;
        grid-row-gap: 20px;
    }
    .item {
        border: solid;
        justify-content: center;    
        min-height: 33vh;
        max-height: 33vh;
        overflow-y: auto;
    }
</style>
