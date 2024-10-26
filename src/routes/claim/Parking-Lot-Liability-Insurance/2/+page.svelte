<script>
    import PageHeader from "@components/PageHeader.svelte";
    import Button from '@components/Button.svelte';
    import '@css/app/Insurance.scss';
    
	import sampleImage from '@images/sample.png';

    import { setupPageHeight } from '@/common';
    setupPageHeight({includeHeader: true, includeFooter: false});

    import ActionSheet from '@components/ActionSheet.svelte';

    let showActionSheet = false;
    let sheetData = [{component: '증빙서류 첨부',}];
    let files = [
        { name: '증빙서류1.jpg', src: sampleImage },
        { name: '증빙서류2.jpg', src: sampleImage },
        { name: '증빙서류3.jpg', src: sampleImage },
        { name: '증빙서류4.jpg', src: sampleImage }
    ];
</script>

<PageHeader pageName='주차장 배상책임보험' backRoute="1" closeRoute="/home" closeIcon="home" />

<ActionSheet {sheetData} bind:showActionSheet/>

<section id="주차장배상책임보험" class="insurance">
    <div>
        <div class="divider"></div>
        <article id="steps6">
            <div>
                <h5 class="mb16">6. 증빙서류 첨부</h5>
                <p class="gray mb16">사용하실 증빙서류 이미지를 추가해 주세요.</p>
                <button class="addfile" on:click={() => showActionSheet = true}>추가하기</button>
            </div>
            <div>
                <p class="fw600 mt28 mb8">첨부 파일 ({files.length}/10)</p>
                <div class="attatchFiles">
                    {#each files as file}
                        <div>
                            <img src={file.src} alt="">
                            <h6>{file.name}</h6>
                            <i class="icon icon-x icon-16"></i>
                        </div>
                    {/each}
                </div>
            </div>
            <footer>
                <Button route="/home" text='완료' />
            </footer>
        </article>
    </div>
</section>
