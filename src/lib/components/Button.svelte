<script>
    import { createEventDispatcher } from 'svelte';
    import { goto } from '$app/navigation';

    export let route = '';
    export let text = '';
    export let action = null;
    export let className = '';
    export let disabled = false;
    const dispatch = createEventDispatcher();

    function handleClick() {
        if (route) {
            goto(route);
        } else if (action) {
            action();
        }
    }
</script>

<button on:click={handleClick} class={className} disabled={disabled}>
    {text}
</button>



<style>
    button {font-size: 1.6rem; font-weight: 600; padding: 1.6rem 1.2rem; background-color: var(--blue); color: var(--white); border-radius: var(--border-radius-sm); border: none; width: 100%; max-width: 52.8rem; cursor: pointer;}
    button:disabled {background-color: var(--disabled); color: var(--disabled-text);}
</style>    