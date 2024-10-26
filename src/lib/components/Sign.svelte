<script>
    import { goto } from '$app/navigation';
    import { createEventDispatcher } from 'svelte';
    import { fly } from 'svelte/transition';

    export let showSignSheet = false;
    const dispatch = createEventDispatcher();

    function closeSignSheet() {
        showSignSheet = false;
        dispatch('closeSignSheet');
    }
</script>

{#if showSignSheet}
    <div class="actionSheet" transition:fly={{ y: 600, duration: 500 }}>
        <div class="header">
            <i class="icon icon-20"></i>
            <h5>전자서명</h5>
            <i class="icon icon-x icon-20" on:click={closeSignSheet}></i>
        </div>
        <div class="items">
            <canvas></canvas>
            <div class="button">
                <button>초기화</button>
                <button on:click={closeSignSheet}>확인</button>
            </div>
        </div>
    </div>
    <div class="background" on:click={closeSignSheet} transition:fly={{ y: 0, duration: 500 }}></div>
{/if}


<style>
    .actionSheet {z-index: 10001; position: fixed; bottom: 0; width: 100%; border-radius: 2rem 2rem 0 0; background-color: var(--white);}
    .header {display: flex; justify-content: space-between; border-bottom: 2px solid var(--disabled); padding: 1.6rem; padding-bottom: 1.4rem;}
    .items {padding: 2.4rem;}
    .items .button {display: grid; grid-template-columns: 50% 50%; gap: 1.2rem;}
    button {background-color: var(--disabled); margin-top: 1.2rem; width: 100%; border-radius: 1.2rem; padding: 1.6rem 1.4rem; font-size: 1.5rem; font-weight: 600; border: none;}
    button:last-child {background-color: var(--blue); color: var(--white);}
    .underline {margin: 1.8rem 0; }
    .underline:last-child {display: none;}
    canvas {background-color: var(--disabled);}
</style>