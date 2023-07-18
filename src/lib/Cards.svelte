<script lang="ts">
    import {Motion} from "svelte-motion";
    import { cards } from './cards.store';
    import {dealHand, swipe} from './CardStack';

    let dealtCards;
    let area;

    cards.subscribe((value) => {
        dealtCards = value;
    });

    cards.set(dealHand())
</script>

<div class="background">	
	<div class="drag-area" bind:this={area}/>
	<Motion
        drag
	    dragConstraints={{current:area}}
        let:motion
        onDragEnd={() => console.log('Reeee')}
    >
		<div class="box center unselectable" use:motion >
		Drag me
	</div>
	</Motion>
</div>
  
<div class="cardStack">
    {#each dealtCards as card}
        <div class="card">
            {card.name}
            <button on:click={() => swipe(card.id, 'LEFT', card.gameState)}>{card.leftOption}</button>
            <button on:click={() =>swipe(card.id, 'RIGHT', card.gameState)}>{card.rightOption}</button>
        </div>
    {/each}
</div>

<style>
    .cardStack {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100px;
        background: tomato;
    }

    .card {
        margin: 0 12px;
    }



    :global(*) {
  box-sizing: border-box;
}
	.background{
		background:linear-gradient(250deg, rgb(50,50,255), rgb(150,150,250));;
		display:flex;
		flex-direction:column;
		height:100%;
		justify-content:center;
		align-items:center;
		touch-action:none;
	}

	.box {
  background: white;
  border-radius: 30px;
  width: 150px;
  height: 150px;
  position: absolute;
  top: calc(50% - 150px / 2);
  left: calc(50% - 150px / 2);
}
	.drag-area {
  opacity: 0.2;
  background: white;
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 30px;
  top: calc(50% - 150px);
  left: calc(50% - 150px);
}
	.unselectable {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
	.center {
justify-content:center;
		align-items:center;
		display:flex;
	}
</style>