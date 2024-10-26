<script>
    import PageHeader from "@components/PageHeader.svelte";
    import Button from '@components/Button.svelte';
    import '@css/app/Insurance.scss';
    
    import { setupPageHeight } from '@/common';
    setupPageHeight({ includeHeader: false, includeFooter: true });



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

    import SignModal from '@components/Sign.svelte';
    let showSignSheet = false;
</script>

<PageHeader pageName='단체상해보험' backRoute="2" closeRoute="2" closeIcon="qusition-o" />

<SignModal bind:showSignSheet/>
<section id="단체상해보험" class="insurance">
    <div>
        <div class="divider"></div>
        <article id="steps5">
            <div class="input-group">
                <h5>5. 보험금 청구를 위한상세 동의서</h5>
                    <div class="terms-wrapper">
                        {#each terms as term, i}
                            <div class="term-item" on:click={i === 0 ? toggleAll : () => toggleItem(i)}>
                                <div>
                                    <div class="check {term.check ? 'selected' : ''}">
                                        {#if term.check}
                                            <i class="icon icon-check bg-white icon-12"></i>
                                        {/if}
                                    </div>
                                    {#if i === 0}
                                        <h5 class="fw600">{term.label}</h5>
                                    {:else}
                                        <p class="fw600" on:click={() => goto(term.route)}>{term.label}</p>
                                    {/if}
                                </div>
                                {#if i !== 0}
                                    <i class="icon icon-arrow-right bg-gray icon-12"></i>
                                {/if}
                            </div>
                            {#if i === 0}
                                <div class="underline small"></div>
                            {/if}
                        {/each}
                    </div> 
                <h5>청구일 : 2024년 07월 08일</h5>
                <div>
                    <label>피보험자 <sup class="red">*</sup></label>
                    <input class="input mb8" type="text" value="홍길동" readonly>
                    <button class="addfile" on:click={() => showSignSheet = true}>피보험자 서명</button>
                </div>
                <div>
                    <label>보험수익자 <sup class="red">*</sup></label>
                    <input class="input mb8" type="text" value="홍길동" readonly>
                    <button class="addfile" on:click={() => showSignSheet = true}>보험수익자 서명</button>
                </div>
                <div>
                    <label>법정대리인 <sup class="red">*</sup></label>
                    <input class="input mb8" type="text" value="홍길동" readonly>
                    <button class="addfile" on:click={() => showSignSheet = true}>법정대리인 서명</button>
                </div>
            </div>
            <footer>
                <Button route="4" text='다음' />
            </footer>
        </article>
    </div>
</section>