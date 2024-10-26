<script>
    import { goto } from '$app/navigation';
    import PageHeader from "@components/PageHeader.svelte";

    import { setupPageHeight } from '@/common';
    setupPageHeight();

    let selectedOption = '단체상해보험';

    const options = ['단체상해보험', '주차장 배상책임보험', '유도선 사업자 배상책임보험', '연장보증보험'];

    let items = [
        {
            title: "질병",
            status: "접수",
            statusClass: "success",
            dateReceived: "2023년 09월21일",
            accidentDate: "2023년 09월12일/09시16분",
            diagnosis: "골반 골절상 및 뇌진탕",
            accidentContent: "어린이보호구역 횡단보도 뺑소니",
            memo: "",
            route: "/history/test"
        },
        {
            title: "질병",
            status: "취소",
            statusClass: "red",
            dateReceived: "2023년 09월21일",
            accidentDate: "2023년 09월12일/09시16분",
            diagnosis: "골반 골절상 및 뇌진탕",
            accidentContent: "어린이보호구역 횡단보도 뺑소니",
            memo: "취소 메모",
            route: "/history/test"
        },
        {
            title: "상해",
            status: "보완",
            statusClass: "warning",
            dateReceived: "2023년 09월21일",
            accidentDate: "2023년 09월12일/09시16분",
            diagnosis: "골반 골절상 및 뇌진탕",
            accidentContent: "어린이보호구역 횡단보도 뺑소니",
            memo: "보완요청 메모",
            route: "/history/test"
        },
        {
            title: "질병",
            status: "추가 접수",
            statusClass: "blue",
            dateReceived: "2023년 09월21일",
            accidentDate: "2023년 09월12일/09시16분",
            diagnosis: "치근단주위조직의 질환",
            accidentContent: "어린이보호구역 횡단보도 뺑소니",
            memo: "보완요청 메모",
            route: "/history/test"
        },
        {
            title: "질병",
            status: "완료",
            statusClass: "gray",
            dateReceived: "2023년 09월21일",
            accidentDate: "2023년 09월12일/09시16분",
            diagnosis: "치근단주위조직의 질환",
            accidentContent: "어린이보호구역 횡단보도 뺑소니",
            memo: "보완요청 메모",
            route: "/history/test"
        }
    ];
</script>

<PageHeader pageName='내역보기' backRoute="/home"/>


<header>
    {#each options as key}
        <span class:selected={selectedOption === key} on:click={() => selectedOption = key}>
            {key}
        </span>
    {/each}
</header>
<section id="내역보기">
    <div>
        {#each items as item}
            <div class="item" on:click={() => goto(item.route)}>
                <div class="itemHeader">
                    <h5>{item.title}</h5>
                    <i class="icon icon-arrow-right bg-gray icon-16"></i>
                </div>
                <div class="underline"></div>
                <div class="itemBody">
                    <p class="title">처리현황</p>
                    <p class={item.statusClass + " fw600"}>{item.status}</p>
                    <p class="title">접수일자</p>
                    <p>{item.dateReceived}</p>
                    <p class="title">사고일시</p>
                    <p>{item.accidentDate}</p>
                    <p class="title">진단명</p>
                    <p>{item.diagnosis}</p>
                    <p class="title">사고내용</p>
                    <p>{item.accidentContent}</p>
                    {#if item.memo}
                        <p class="title">접수메모</p>
                        <p>{item.memo}</p>
                    {/if}
                </div>
            </div>
        {/each}
    </div>
</section>

<style>
    #내역보기 {background-color: var(--background);}
    header::-webkit-scrollbar {display: none;}
    header { position: relative; background-color: var(--white); width: calc(100% - 3.2rem); padding: 1.6rem; display: flex; gap: 2.4rem; overflow-x: auto; }
    header span { white-space: nowrap; color: var(--gray); cursor: pointer; padding-bottom: 0.8rem; }
    header span.selected { color: var(--blue); font-weight: 600; border-bottom: 2px solid var(--blue); }

    .item { background-color: var(--white); width: calc(100% - 4.6rem); padding: 2rem; border-radius: var(--border-radius-sm); margin-bottom: 1.2rem;}
    .itemHeader {display: flex; justify-content: space-between; align-items: center;}
    .itemBody { display: grid; grid-template-columns: auto auto; gap: 1.2rem;}
    .itemBody p:not(.title) {text-align: right;}
</style>
