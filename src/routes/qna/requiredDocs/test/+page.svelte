<script>
    import PageHeader from "@components/PageHeader.svelte";
    import sampleImage from "@images/accounts/required-check/test.png";

    let selectedOption = '상해후유장애';
    
    const options = [
        { key: '상해후유장애', title: '상해휴우증' },
        { key: '상해사망', title: '상해사망 보험금' },
        { key: '질병사망', title: '질병 사망 보험금' },
        { key: '뇌졸중', title: '뇌졸중' },
        { key: '암', title: '암 진단금' },
        { key: '급성신근경색', title: '급성심근경색' },
        { key: '실손의료비', title: '실손 의료비' }
    ];

    const images = {
        '상해후유장애': sampleImage,
        '상해사망': sampleImage,
        '질병사망': sampleImage,
        '뇌졸중': sampleImage,
        '암': sampleImage,
        '급성신근경색': sampleImage,
        '실손의료비': sampleImage,
    };

    function getPageTitle(option) {
        const selected = options.find(opt => opt.key === option);
        return selected ? selected.title : '';
    }
</script>

<PageHeader pageName={getPageTitle(selectedOption)} backRoute="/qna/requiredDocs"/>

<header>
    {#each options as { key, title }}
        <p class:selected={selectedOption === key} on:click={() => selectedOption = key}>
            {key}
        </p>
    {/each}
</header>

<section>
    <div>
        <img src={images[selectedOption]} alt={selectedOption} />
    </div>
</section>

<style>
    header { position: relative; background-color: var(--white); width: calc(100% - 3.2rem); padding: 1.6rem; display: flex; gap: 2.4rem; overflow-x: auto; }
    p { white-space: nowrap; color: var(--gray); cursor: pointer; }
    p.selected { color: var(--blue); font-weight: 600; }
</style>
