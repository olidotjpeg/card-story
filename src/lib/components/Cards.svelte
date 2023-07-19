<script lang="ts">
    import { onMount } from "svelte";
    import { M } from "svelte-motion";
    import type { PanInfo } from "svelte-motion";
    import { cardHand } from '../sdk/cards.store';
    import {drawFirst, swipe} from '../sdk/CardStack';
    import { useState } from "../hooks/useState";

    let dealtCards;

    cardHand.subscribe((value) => {
        dealtCards = value;
    });

    onMount(async () => {
        cardHand.set([drawFirst()])
    });

    const [leaveX, setLeaveX] = useState(0);
    const [leaveY, setLeaveY] = useState(0);
    const onDragEnd = (_e: any, info: PanInfo, card) => {
        if (card.options.length === 0) {
            return 
        }

        if (info.offset.y < -100 && card.options.length >= 3) {
            setLeaveY(-2000);
            cardHand.set(swipe(card, 'UP'));
            return;
        }

        if (info.offset.x > 100) {
            setLeaveX(1000);
            cardHand.set(swipe(card, 'RIGHT'));
        }

        if (info.offset.x < -100) {
            setLeaveX(-1000);
            cardHand.set(swipe(card, 'LEFT'));
        }
    };
</script>
  
<div class="cardStack">
    {#each dealtCards as card, i (i)}
        <div class="cardContainer">
            <M.div
                drag={true}
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                onDragEnd={(e, info) => onDragEnd(e, info, card)}
                initial={{
                    scale: 1,
                }}
                animate={{
                    scale: 1.05,
                    rotate: i === 1 ? `6deg` : `-6deg`,
                }}
                exit={{
                    x: leaveX,
                    y: leaveY,
                    opacity: 0,
                    scale: 0.5,
                    transition: { duration: 0.2 },
                }}
            >
                <div class="card">
                    <h2>{card.name}</h2>
                    <p>{card.description}</p>
                    <ul class="optionsList">
                        {#each card.options as option}
                            <li>{option.text}</li>
                        {/each}
                    </ul>
                </div>
            </M.div>
        </div>
    {/each} 
</div>

<style>
    .cardStack {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
    }

    .cardContainer {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        user-select: none;
    }

    .card {
        display: flex;
        flex-direction: column;
        width: 300px;
        height: 430px;
        margin: 0 12px;
        color: #000;
        background: #fafafa;
        filter: drop-shadow(0 20px 13px #00000008) drop-shadow(0 8px 5px #00000014);
    }

    .optionsList {
        position: relative;
        height: 100%;
        padding: 0;
        margin: 0;
        list-style: none;
    }

    .optionsList li {
        color: #fff;
        position: absolute;
        bottom: 0;
    }

    .optionsList li:first-child {
        transform: rotate(-30deg);
        left: -250px;
    }

    .optionsList li:last-child {
        transform: rotate(30deg);
        right: -200px;
    }
</style>