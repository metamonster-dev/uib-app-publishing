<script>
    import PageHeader from "@components/PageHeader.svelte";
    import Button from '@components/Button.svelte';

    import '@css/app/Insurance.scss';
    
	import sampleImage from '@images/sample.png';

    import { setupPageHeight } from '@/common';
    setupPageHeight({ includeHeader: false, includeFooter: true });

    import ActionSheet from '@components/ActionSheet.svelte';


    let terms = [
        { label: '전체 약관동의', check: true, route: '/terms/all' },
        { label: '개인(신용)정보 수집 · 이용에 관한 동의', check: true, route: '/terms/personal-info-collection' },
        { label: '개인(신용)정보 제공에 관한 동의', check: true, route: '/terms/personal-info-provision' },
        { label: '개인(신용)정보 조회에 관한 동의', check: true, route: '/terms/personal-info-query' },
    ];

    const toggleAll = () => {
        const allSelected = terms[0].check;
        terms = terms.map(term => ({ ...term, check: !allSelected }));
    };

    const toggleItem = (index) => {
        terms[index].check = !terms[index].check;
        const allChecked = terms.slice(1).every(term => term.check);
        terms[0].check = allChecked;
    };


    let showActionSheet = false;
    let sheetData = [{component: '증빙서류 첨부',}];
    let files = [
        { name: '증빙서류1.jpg', src: sampleImage },
        { name: '증빙서류2.jpg', src: sampleImage },
        { name: '증빙서류3.jpg', src: sampleImage },
        { name: '증빙서류4.jpg', src: sampleImage }
    ];

    import SignModal from '@components/Sign.svelte';
    let showSignSheet = false;
</script>

<PageHeader pageName='단체상해보험' backRoute="4" closeRoute="4" closeIcon="qusition-o" />

<ActionSheet {sheetData} bind:showActionSheet/>

<SignModal bind:showSignSheet/>
<section id="단체상해보험" class="insurance">
    <div>
        <div class="divider"></div>
        <article id="steps7">
            <div>
                <h5 class="mb16">7. 증빙서류 첨부</h5>
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