<script>
    export let options = [];
    export let className = ''; 
    export let margin = false; 
    let selected = '';

    const select = (button) => {
        selected = button;
    };
</script>

<div class={className}>
    {#each options as option}
        <div class="option-wrapper {margin ? 'margin' : ''}">
            <div class="radio {selected === option ? 'selected' : ''}" on:click={() => select(option)}>
                <!-- {#if selected === option} -->
                    <div class="radio-inner"></div>
                <!-- {/if} -->
            </div>
            <p class="fw600" class:selected={selected === option} on:click={() => select(option)}>{option}</p>
        </div>
    {/each}
</div>

<style>
.option-wrapper { display: flex !important; align-items: center;}
.radio { width: 20px; height: 20px; border: 2px solid #E5E5EC; border-radius: 50%; position: relative; margin-right: 1rem; display: flex !important; align-items: center; justify-content: center; }
.radio.selected {border: 2px solid var(--blue);}
.radio-inner {background-color: var(--disabled); width: 12px; height: 12px; border-radius: 50%; }
.selected .radio-inner { background-color: var(--blue);  }
.margin {margin-bottom: 2rem !important;}
</style>
