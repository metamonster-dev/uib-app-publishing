<script>
    import { goto } from '$app/navigation';
    import { createEventDispatcher } from 'svelte';
    import { fly } from 'svelte/transition';

    export let sheetData = [];
    export let showActionSheet = false;
    const dispatch = createEventDispatcher();

    function closeActionSheet() {
        showActionSheet = false;
        dispatch('closeActionSheet');
    }





    import Comment from '@components/Comment.svelte';

    let comments = [
        "서류를 접힌 부분 없이 깔끔하게 펴서 촬영해 주세요.",
        "촬영 시 카메라 초점을 흐려지지 않게 맞춰 주세요.",
        "그림자가 지지 않도록 배치하여 촬영해 주세요."
    ];
</script>

{#if showActionSheet}
    <div class="actionSheet" transition:fly={{ y: 600, duration: 500 }}>
        {#if !sheetData[0].component}
        <div class="header">
            <i class="icon icon-20"></i>
            <h5>{sheetData[0].title}</h5>
            <i class="icon icon-x icon-20" on:click={closeActionSheet}></i>
        </div>
        <div class="items">
            {#each sheetData[0].items as item}
                <div>
                    <p class="fw600">{item.itemTitle}</p>
                    <button on:click={() => goto(item.route)}>보기</button>
                </div>
                <div class="underline"></div>
            {/each}
        </div>
        {/if}

        {#if sheetData[0].component === '증빙서류 첨부'}
        <div class="header">
            <i class="icon icon-20"></i>
            <h5>증빙서류 첨부</h5>
            <i class="icon icon-x icon-20" on:click={closeActionSheet}></i>
        </div>

        <div class="items">
            <Comment {comments} />
            <div class="mt24">
                <div>
                    <i class="icon icon-camera icon-24 mr6"></i>                        
                    <p class="fw600">카메라</p>
                </div>
                <i class="icon icon-arrow-right icon-12"></i>
            </div>
            <div class="underline"></div>
            <div>
                <div>
                    <i class="icon icon-photo icon-24 mr6"></i>                        
                    <p class="fw600">앨범</p>
                </div>
                <i class="icon icon-arrow-right icon-12"></i>
            </div>
            <div class="underline"></div>
            <div>
                <div>
                    <i class="icon icon-clip icon-24 mr6"></i>                        
                    <p class="fw600">내 파일</p>
                </div>
                <i class="icon icon-arrow-right icon-12"></i>
            </div>
            <div class="underline"></div>
        </div>
        {/if}
    </div>
    
    <div class="background" on:click={closeActionSheet} transition:fly={{ y: 0, duration: 500 }}></div>
{/if}


<style>
    .actionSheet {z-index: 10001; position: fixed; bottom: 0; width: 100%; border-radius: 2rem 2rem 0 0; background-color: var(--white);}
    .header {display: flex; justify-content: space-between; border-bottom: 2px solid var(--disabled); padding: 1.6rem; padding-bottom: 1.4rem;}
    .items {padding: 2.4rem;}
    .items div {display: flex; justify-content: space-between; align-items: center;}
    button {color: var(--blue); border: 1px solid var(--blue); border-radius: .6rem; padding: .6rem 1.4rem; background-color: transparent; font-size: 1.3rem; font-weight: 600;}
    .underline {margin: 1.8rem 0; }
    .underline:last-child {display: none;}
</style>