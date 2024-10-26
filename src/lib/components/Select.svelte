<script>
    export let placeholder = '선택폼예시';
    export let options = [];
    let selectedOption = null;
    let showDropdown = false;

    function selectOption(option) {
        selectedOption = option;
        showDropdown = false;
    }

    function toggleDropdown() {
        showDropdown = !showDropdown;
    }

    function closeDropdown(event) {
        if (!event.target.closest('.input.select')) {
            showDropdown = false;
        }
    }

    document.addEventListener('click', closeDropdown);
</script>

<div class="input select" on:click={toggleDropdown}>
    <span>{selectedOption || placeholder}</span>
    <i class="icon icon-arrow-down icon-12"></i>
</div>

{#if showDropdown}
    <div class="selectList">
        {#each options as option}
            <p class="gray option" on:click={() => selectOption(option)}>{option}</p>
        {/each}
    </div>
{/if}

<style>
    .input.select { display: flex; align-items: center; justify-content: space-between; padding: 1.2rem 1.6rem !important; margin-top: .8rem; }
    .selectList { position: absolute; margin-top: 2px; background: var(--white); width: calc(100% - 3.8rem); border-radius: 6px; border: 1px solid #E5E5EC; z-index: 100; }
    .selectList p { padding: 1.2rem; border-bottom: 1px solid var(--disabled); }
</style>
