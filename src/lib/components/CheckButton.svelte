<script>
    export let option = '';
    export let className = ''; 
    export let check = false; 
    let selected = check;

    const toggleSelect = () => {
        selected = !selected;
    };
</script>

<div class={className}>
    <div class="option-wrapper mb20">
        <div class="check {selected ? 'selected' : ''}" on:click={toggleSelect}>
            {#if selected}
                <i class="icon icon-check bg-white icon-12"></i>
            {/if}
        </div>
        <p class="fw600" class:selected={selected} on:click={toggleSelect}>{option}</p>
    </div>
</div>

<style>
.option-wrapper { display: flex; align-items: center; }
.check { width: 20px; height: 20px; border: 2px solid #E5E5EC; background-color: var(--disabled); border-radius: 50%; position: relative; margin-right: 1rem; display: flex; align-items: center; justify-content: center; transition: background-color 0.1s; }
.check.selected { background-color: var(--blue); border: 2px solid var(--blue); }
</style>
