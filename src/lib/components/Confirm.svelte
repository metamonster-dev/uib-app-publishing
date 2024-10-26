<script>
    import { createEventDispatcher } from 'svelte';
    import { goto } from '$app/navigation';
    import { fly } from 'svelte/transition';
    
    export let confirmData = {};
    export let showConfirm = false;
    const dispatch = createEventDispatcher();

    function handleCancel() {
        dispatch('cancelConfirm');
        showConfirm = false;
    }

    function handleOk() {
        if (confirmData.route) {
            goto(confirmData.route);
        }
        showConfirm = false;
    }
</script>

{#if showConfirm}
    <div class="confirm" transition:fly="{{ y: -5, duration: 300 }}">
        <div>
            <h5 class="fw500 my12">{confirmData.title}</h5>
            <span class="dblock mb28">{@html confirmData.text}</span>
        </div>
        <div class="button-group">
            <button on:click={handleCancel}>
                <h5 class="fw700">{confirmData.cancel}</h5>
            </button>
            <button on:click={handleOk}>
                <h5 class="white fw700">{confirmData.ok}</h5>
            </button>
        </div>
    </div>
    <div class="background" transition:fly="{{ y: 0, duration: 300 }}"></div>
{/if}

<style>
.confirm {
    z-index: 10001; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
    background-color: var(--white); border-radius: var(--border-radius-sm); padding-top:1.6rem; width: 90%; max-width: 50rem; text-align: center;
}
.button-group {
    display: flex; justify-content: space-between;
}
.confirm button:first-child {background-color: var(--disabled); color: var(--black); border-radius: 0 0 0 var(--border-radius-sm)}
.confirm button:last-child {background-color: var(--black); color: var(--white); border-radius: 0 0 var(--border-radius-sm) 0}
.confirm button {width: 50%; border: none; padding: 1.6rem;  }
</style>
