<script lang="ts">
    import {dealHand, swipeLeft, swipeRight, throwOnBoard} from './CardStack';
    let cards = dealHand();
</script>
  
<div class="cardStack">
    {#each cards as card}
        <div class="card">
            <button on:click={() => swipeLeft(card.id)}>Left</button>
            Card {card.name}
            <button on:click={() =>swipeRight(card.id)}>Right</button>
        </div>
    {/each}
</div>

<style>
    .cardStack {
        display: flex;
    }

    .card {
        width: 100px;
        height: 100px;
        background: tomato;
        margin: 0 12px;
    }
</style>