<script>
    import { createEventDispatcher } from 'svelte';
    import { goto } from '$app/navigation';
    import { fly } from 'svelte/transition';
    
    export let AlertData = {};
    export let showAlert = false;
    const dispatch = createEventDispatcher();

    function closeAlert() {
        if (AlertData.close) {
            goto(AlertData.close);
        } else {
            dispatch('closeAlert');
            showAlert = false;
        }
    }

    function handleButtonClick() {
        closeAlert();
        if (AlertData.route) {
            goto(AlertData.route);
        } else {
            showAlert = false;
        }
    }
</script>

{#if showAlert}
    <div class="alert" transition:fly="{{ y: -5, duration: 300 }}">
        <i class="icon icon-x icon-20" on:click={closeAlert}></i>
        <div>
            <h5 class="fw700 my12">{AlertData.title}</h5>
            <span class="dblock mb28">{@html AlertData.text}</span>
        </div>
        <button on:click={handleButtonClick}>
            <h5 class="white fw700">{AlertData.button}</h5>
        </button>
    </div>
    <div class="background" transition:fly="{{ y: 0, duration: 300 }}"></div>
{/if}



<style>
.alert {
    z-index: 10001; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
    background-color: var(--white); border-radius: var(--border-radius-sm); padding-top:1.6rem; width: 90%; max-width: 50rem; text-align: center;
}
.alert button {width: 100%; background-color: var(--black); color: var(--white); border: none; padding: 1.6rem; border-radius: 0 0 var(--border-radius-sm)  var(--border-radius-sm)}
.icon-x {position: absolute; top: 1.6rem; right: 1.6rem;}
</style>