<script>
    export let options = [];
    export let className = ''; 
    export let allowMultiple = false;
    let selected = [];

    const select = (button) => {
        if (allowMultiple) {

            if (selected.includes(button)) {
                selected = selected.filter(item => item !== button);
            } else {
                selected = [...selected, button];
            }
        } else {
            selected = [button];
        }
    };
</script>

<div class={className + (allowMultiple ? ' multiple' : '')} style="grid-template-columns: repeat(auto-fit, minmax(0, 1fr));">
    {#each options as option}
        <button on:click={() => select(option)} class:selected={selected.includes(option)}>{option}</button>
    {/each}
</div>


<style>
    div { display: grid !important; gap: 1.2rem; }
    button { font-size: 1.6rem; font-weight: 400; color: var(--gray); background-color: var(--disabled); border: 1px solid var(--disabled); border-radius: .6rem; padding: 1.6rem; }
    button.selected { background-color: #2260FF30; border: 1px solid var(--blue); color: var(--blue); }
    .multiple button {padding: 1.6rem .8rem; font-size: 1.4rem;}
</style>
