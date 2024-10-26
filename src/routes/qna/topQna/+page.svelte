<script>
    import PageHeader from "@components/PageHeader.svelte";
    import '@css/app/qna.scss';

    const faqs = [
        {
            question: '실손의료보험에서 국민건강보험법에 따른 급여와 비급여는 무엇을 의미하나요?',
            answer: '건강과 지속 가능성을 추구하는 이들을 위해, 맛과 영양이 가득한 채식 요리 레시피를 소개합니다. 이 글에서는 간단하지만 맛있는 채식 요리 10가지를 선보입니다. 첫 번째 레시피는 아보카도 토스트, 아침 식사로 완벽하며 영양소가 풍부합니다.',
            isOpen: false
        },
        {
            question: '산제 처리 시 요양 급여 신청서는 어디서 발급을 받을 수 있나요?',
            answer: '두 번째 질문에 대한 답변 내용입니다.',
            isOpen: false
        },
        {
            question: '의료비는 비례 보상이 된다는데, 해당 방식이 어떤식으로 진행되는지 궁금해요.',
            answer: '세 번째 질문에 대한 답변 내용입니다.',
            isOpen: false
        }
    ];

    function toggleAnswer(index) {
        faqs[index].isOpen = !faqs[index].isOpen;
    }
</script>

<PageHeader pageName="자주 묻는 질문" backRoute="/home"/>

<section id="자주묻는질문">
    <div>
        {#each faqs as { question, answer, isOpen }, index}
            <article on:click={() => toggleAnswer(index)}>
                <div>
                    <span>Q.</span>
                    <span>{question}</span>
                </div>
                <i class="icon icon-arrow-down bg-gray icon-16 {isOpen ? 'active' : ''}"></i>
            </article>
            {#if isOpen}
                <article class="answer">
                    <div>
                        <span>A.</span>
                        <span>{answer}</span>
                    </div>
                </article>
            {/if}
            <div class="underline"></div>
        {/each}
    </div>
</section>