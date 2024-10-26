<script>
    import { goto } from '$app/navigation';
    import PageHeader from "@components/PageHeader.svelte";
    import Button from '@components/Button.svelte';
    import RadioButton from '@components/RadioButton.svelte';
    import '@css/app/Insurance.scss';

    import { setupPageHeight } from '@/common';
    setupPageHeight({includeHeader: true, includeFooter: true});

    let showContent = { 부모: false, 본인: false, 배우자: false, 자녀: false };
    let activeTab = '본인';

    function toggleContent(key) {
        showContent = { ...showContent, [key]: !showContent[key] };
    }

    const insuranceData = {
        부모: [
            { "year": "2024년", "description": "일반상해사망후유장애", "amount": "3억원" },
            { "year": "2024년", "description": "골절(치아파절제외)진단비", "amount": "3억원" },
            { "year": "2023년", "description": "골절 수술비", "amount": "3억원" },
            { "year": "2023년", "description": "교통상해 골절진단비", "amount": "3억원" },
            { "year": "2023년", "description": "교통상해 골절수술비", "amount": "3억원" },
            { "year": "2024년", "description": "골절 수술비", "amount": "3억원" },
            { "year": "2024년", "description": "교통상해 골절진단비", "amount": "3억원" },
            { "year": "2024년", "description": "교통상해 골절수술비", "amount": "3억원" }
        ],
        본인: [
            { "year": "2024년", "description": "일반상해사망후유장애", "amount": "3억원" },
            { "year": "2024년", "description": "골절(치아파절제외)진단비", "amount": "3억원" },
            { "year": "2023년", "description": "골절 수술비", "amount": "3억원" },
            { "year": "2023년", "description": "교통상해 골절진단비", "amount": "3억원" },
            { "year": "2023년", "description": "교통상해 골절수술비", "amount": "3억원" },
            { "year": "2024년", "description": "골절 수술비", "amount": "3억원" },
            { "year": "2024년", "description": "교통상해 골절진단비", "amount": "3억원" },
            { "year": "2024년", "description": "교통상해 골절수술비", "amount": "3억원" }
        ],
        배우자: [
            { "year": "2024년", "description": "일반상해사망후유장애", "amount": "3억원" },
            { "year": "2024년", "description": "골절(치아파절제외)진단비", "amount": "3억원" },
            { "year": "2023년", "description": "골절 수술비", "amount": "3억원" },
            { "year": "2023년", "description": "교통상해 골절진단비", "amount": "3억원" },
            { "year": "2023년", "description": "교통상해 골절수술비", "amount": "3억원" },
            { "year": "2024년", "description": "골절 수술비", "amount": "3억원" },
            { "year": "2024년", "description": "교통상해 골절진단비", "amount": "3억원" },
            { "year": "2024년", "description": "교통상해 골절수술비", "amount": "3억원" }
        ],
        자녀: [
            { "year": "2024년", "description": "일반상해사망후유장애", "amount": "3억원" },
            { "year": "2024년", "description": "골절(치아파절제외)진단비", "amount": "3억원" },
            { "year": "2023년", "description": "골절 수술비", "amount": "3억원" },
            { "year": "2023년", "description": "교통상해 골절진단비", "amount": "3억원" },
            { "year": "2023년", "description": "교통상해 골절수술비", "amount": "3억원" },
            { "year": "2024년", "description": "골절 수술비", "amount": "3억원" },
            { "year": "2024년", "description": "교통상해 골절진단비", "amount": "3억원" },
            { "year": "2024년", "description": "교통상해 골절수술비", "amount": "3억원" }
        ],
    };
</script>

<PageHeader pageName='단체상해보험' backRoute="/home" closeRoute="/home" closeIcon="home" />
<section id="단체상해보험">
    <div>
        <article class="selectList">
            {#each Object.keys(insuranceData) as key}
                <div>
                    <div class="flex-center">
                        <RadioButton options={[key]} bind:group={activeTab} />
                        <div on:click={() => toggleContent(key)} class="toggle-button">
                            <span class="gray {showContent[key] ? 'active' : ''}">보장내용</span>
                            <i class="icon icon-arrow-down bg-gray icon-12 {showContent[key] ? 'rotate' : ''}"></i>
                        </div>
                    </div>
                    <div class="underline"></div>
                </div>
                {#if showContent[key]}
                    <table>
                        <thead>
                            <tr>
                                <th>연도</th>
                                <th>보장내용</th>
                                <th>가입금액</th>
                            </tr>
                        </thead>
                        <tbody>
                            {#each insuranceData[key] as item}
                                <tr>
                                    <td>{item.year}</td>
                                    <td>{item.description}</td>
                                    <td>{item.amount}</td>
                                </tr>
                            {/each}
                        </tbody>
                    </table>
                {/if}
            {/each}
        </article>
        <footer>
            <Button route="./Group-Accident-Insurance/1" text='청구하기' />
        </footer>
    </div>
</section>

<style>
    .underline {margin: 2rem 0; }
    .active { color: var(--blue) !important; font-weight: 600; }
    .rotate { transform: rotate(180deg); background-color: var(--blue) !important; }
</style>
