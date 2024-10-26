<script>
    import { goto } from '$app/navigation';
    import { createEventDispatcher } from 'svelte';
    import { fly } from 'svelte/transition';

    export let actionSheetData = [];
    export let showBankSelector = false;
    const dispatch = createEventDispatcher();

    let currentType = 'bank';
    let actionSheetHeight = '65%';
    let actionSheetMaxHeight = '95%';
    let startY = 0;
    let isDragging = false;

    function closeActionSheet() {
        showBankSelector = false;
        dispatch('closeActionSheet');
    }

    function setActionSheetType(type) {
        currentType = type;
    }

    function handleTouchStart(event) {
        startY = event.touches[0].clientY;
        isDragging = true;
    }

    function handleTouchMove(event) {
        if (!isDragging) return;

        const currentY = event.touches[0].clientY;
        const deltaY = startY - currentY;

        if (deltaY > 150) {
            actionSheetHeight = actionSheetMaxHeight;
        } else if (deltaY < -150) {
            actionSheetHeight = '65%';
        }
    }

    function handleTouchEnd() {
        isDragging = false;
    }

    let banks = [
        { "id": 1, "name": "국민은행" },
        { "id": 2, "name": "신한은행" },
        { "id": 3, "name": "우리은행" },
        { "id": 4, "name": "하나은행" },
        { "id": 5, "name": "제일은행" },
        { "id": 6, "name": "한국씨티은행" },
        { "id": 7, "name": "기업은행" },
        { "id": 8, "name": "산업은행" },
        { "id": 9, "name": "저축은행" },
        { "id": 10, "name": "새마을금고" },
        { "id": 11, "name": "케이뱅크" },
        { "id": 12, "name": "카카오뱅크" },
        { "id": 13, "name": "토스뱅크" },
        { "id": 14, "name": "NH농협은행" },
        { "id": 15, "name": "수협은행" },
        { "id": 16, "name": "대구은행" },
        { "id": 17, "name": "부산은행" },
        { "id": 18, "name": "광주은행" },
        { "id": 19, "name": "경남은행" },
        { "id": 20, "name": "산림조합중앙회" },
        { "id": 21, "name": "신협중앙회" },
        { "id": 22, "name": "도이치은행" },
        { "id": 23, "name": "우체국" },
        { "id": 24, "name": "전북은행" },
        { "id": 25, "name": "중국건설은행" },
        { "id": 26, "name": "중국은행" },
        { "id": 27, "name": "HSBC은행" },
        { "id": 28, "name": "제주은행" },
        { "id": 29, "name": "중국공상은행" },
        { "id": 30, "name": "BNP파리바은행" },
        { "id": 31, "name": "JP모간체이스은행" }
    ];

    let stocks = [
        { "id": 1, "name": "메리츠증권" },
        { "id": 2, "name": "삼성증권" },
        { "id": 3, "name": "한국투자증권" },
        { "id": 4, "name": "미래에셋" },
        { "id": 5, "name": "키움증권" },
        { "id": 6, "name": "NH투자증권" },
        { "id": 7, "name": "교보증권" },
        { "id": 8, "name": "대신증권" },
        { "id": 9, "name": "하나증권" },
        { "id": 10, "name": "신한투자증권" },
        { "id": 11, "name": "KB증권" },
        { "id": 12, "name": "BNK투자증권" },
        { "id": 13, "name": "유안타증권" },
        { "id": 14, "name": "다올투자증권" },
        { "id": 15, "name": "하이투자증권" },
        { "id": 16, "name": "현대차증권" },
        { "id": 17, "name": "이베스트투자증권" },
        { "id": 18, "name": "SK증권" },
        { "id": 19, "name": "한화투자증권" },
        { "id": 20, "name": "DB금융투자" },
        { "id": 21, "name": "유진투자증권" },
        { "id": 22, "name": "카카오페이증권" },
        { "id": 23, "name": "토스증권" },
        { "id": 24, "name": "부국증권" },
        { "id": 25, "name": "IBK투자증권" },
        { "id": 26, "name": "케이프투자증권" },
        { "id": 27, "name": "한국포스증권" },
        { "id": 28, "name": "상상인증권" },
        { "id": 29, "name": "신영증권" },
        { "id": 30, "name": "뱅크오브아메리카" }
    ];

    let selectedBank = null;
    function selectBank(bank) {
        selectedBank = bank;
        closeActionSheet();
    }

</script>

{#if showBankSelector}
    <div class="actionSheet" style="height: {actionSheetHeight}" 
         on:touchstart={handleTouchStart}
         on:touchmove={handleTouchMove}
         on:touchend={handleTouchEnd}
         on:mousedown={handleTouchStart}
         on:mousemove={handleTouchMove}
         on:mouseup={handleTouchEnd}
         transition:fly={{ y: 600, duration: 500 }}>
         <div style="background-color: var(--lightGray); width:60px; border-radius:50vh; margin: 0 auto; margin-top:12px; height:4px"></div>
        <div class="header">
            <h5>{currentType === 'bank' ? '은행 리스트' : '증권 리스트'}</h5>
            <div>
                <span class="bankSelectIcon {currentType === 'bank' ? 'selected' : ''}" on:click={() => { setActionSheetType('bank'); showBankSelector = true; }}>은행</span>
                <span class="bankSelectIcon {currentType === 'stock' ? 'selected' : ''}" on:click={() => { setActionSheetType('stock'); showBankSelector = true; }}>증권</span>                          
            </div>
        </div>

        <div class="items">
            {#if currentType === 'bank'}
                {#each banks as bank}
                    <div class="selectItem" on:click={() => selectBank(bank)}>
                        <i class="icon icon-bank-{bank.id} icon-48"></i>
                        <h6 class="gray">{bank.name}</h6>
                    </div>
                {/each}
            {:else if currentType === 'stock'}
                {#each stocks as stock}
                    <div class="selectItem" on:click={() => { closeActionSheet(); }}>
                        <i class="icon icon-stock-{stock.id} icon-48"></i>
                        <h6 class="gray">{stock.name}</h6>
                    </div>
                {/each}
            {/if}
        </div>
    </div>
    
    <div class="background" on:click={closeActionSheet} transition:fly={{ y: 0, duration: 500 }}></div>
{/if}
<style>
    .actionSheet {z-index: 10001; position: fixed; bottom: 0; width: 100%; border-radius: 2rem 2rem 0 0; background-color: var(--white); transition: all 0.3s ease;}
    .header {display: flex; justify-content: space-between; border-bottom: 2px solid var(--disabled); padding: 1.6rem; padding-bottom: 1.4rem;}
    .items {padding: 2.4rem;}
    .items div {display: flex; justify-content: space-between; align-items: center;}
    button {color: var(--blue); border: 1px solid var(--blue); border-radius: .6rem; padding: .6rem 1.4rem; background-color: transparent; font-size: 1.3rem; font-weight: 600;}
    .underline {margin: 1.8rem 0; }
    .underline:last-child {display: none;}
    .bankSelectIcon {border-radius: 50vh; border: 1px solid var(--blue); padding: .6rem 1.6rem;}
    .bankSelectIcon.selected {background-color: var(--blue); color: var(--white);}
    .items {display: grid; grid-template-columns: repeat(3, 1fr); justify-content: space-between; overflow: scroll; max-height: 80%; padding: .8rem; gap: 1.6rem 0; margin-top: 1.2rem;}
    .selectItem {display: flex; flex-direction: column; gap: .4rem; transition: all 0.3s ease;}
    .selectItem:hover {background-color: var(--background); border-radius: 12px;}
</style>