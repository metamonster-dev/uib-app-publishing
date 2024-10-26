<script>
    let dateValue = '';
    let timeValue = '';
    let showDateInput = false;
    let showTimeInput = false;

    function toggleDateInput() {
        showDateInput = !showDateInput;
    }

    function toggleTimeInput() {
        showTimeInput = !showTimeInput;
    }

    function updateDate(e) {
        dateValue = e.target.value;
        showDateInput = false;
    }

    function updateTime(e) {
        timeValue = e.target.value;
        showTimeInput = false;
    }
</script>

<div class="grid">
    <div class="input select" on:click={toggleDateInput}>
        <div class="flex-center" style="gap:.8rem;">
            <i class="icon icon-calendar icon-16"></i>
            <span>{dateValue || '년/월/일'}</span>
        </div>
        <i class="icon icon-arrow-down icon-12"></i>
        <input type="date" on:input={updateDate} class="half date-input" />
    </div>
    <div class="input select" on:click={toggleTimeInput}>
        <span>{timeValue || '시/분'}</span>
        <i class="icon icon-arrow-down icon-12"></i>
        <input type="time" on:input={updateTime} class="half time-input" />
    </div>
</div>

<style>
    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.2rem; }
    .input.select { position: relative; cursor: pointer; display: flex; align-items: center; justify-content: space-between; margin-top: .8rem; }
    .date-input, .time-input { position: absolute; top: 0; left: 0; width: 100%; opacity: 0; cursor: pointer; z-index: 2; }
</style>
