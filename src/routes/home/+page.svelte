<script>
    import { goto } from "$app/navigation";
    import { onMount } from 'svelte';
    import { checkLogin } from '@/common';
    import '@css/app/Home.scss';

    import Footer from "@components/Footer.svelte";
    import Header from "@components/Header.svelte"

    import { setupPageHeight } from '@/common';
    setupPageHeight({includeHeader: true, includeFooter: true});

    import Alert from '@components/Alert.svelte';
    let showAlert = false;
    let AlertData = {
        showAlert: showAlert,
        title: '본인인증',
        text: '청구를 위해 본인인증을 진행해주세요<br>테스트용으로 X를 누르면 모달을 닫을 수 있으며,<br>인증하기를 누르면 대상자확인으로 이동합니다.',
        button: '인증하기',
        route: '/accounts/register',
        close: ''
    };

    import mainBanner from '@images/home/mainBanner.png';

    import lp1 from '@images/home/lpGroup/1.svg';
    import lp2 from '@images/home/lpGroup/2.svg';
    import lp3 from '@images/home/lpGroup/3.svg';
    import lp4 from '@images/home/lpGroup/4.svg';
    import lp5 from '@images/home/lpGroup/5.svg';
    import lp6 from '@images/home/lpGroup/6.svg';

    let 홈보험리스트 = [
        { label: '단체상해보험', disc: '질병, 상해사고<br>피해보상', route: '/claim/Group-Accident-Insurance', Images: lp1 } ,
        { label: '주차장 배상<br>책임보험', disc: '주차장 내 사고<br>피해보상', route: '/claim/Parking-Lot-Liability-Insurance', Images: lp2 } ,
        { label: '유도선 사업자<br>배상책임보험', disc: '유도선 사고 승객<br>피해보상', route: '/claim/Tugboat-Operator-Liability-Insurance', Images: lp3 } ,
        { label: '연장보증보험', disc: '제품 보증 기간<br>연장 보험', route: '/claim/Extended-Warranty-Insurance', Images: lp4 } ,
        // { label: '태아보험', disc: '태아와 출산 후<br>아이를 위한 보험', route: '#', Images: lp5 } ,
        // { label: '기타보험', disc: '', route: '#', Images: lp6 } ,
    ];

    onMount(() => {
        if (!checkLogin()) {
            // showAlert = true;
            // AlertData.showAlert = true;
        }
    });
</script>

<Alert {AlertData} bind:showAlert />

<Header />

<section id="홈">
    <div style="background-color: var(--background);">
        <img src="{mainBanner}" alt="">

        <h5 class="mt24 mb16">보험금 청구</h5>
        <article class="lpGroup">
            {#each 홈보험리스트 as item, i}
                <a class="item" href={item.route}>
                    <div class="title">
                        <p class="fw600 mb4">{@html item.label}</p>
                        <h6>{@html item.disc}</h6>
                    </div>
                    <img class="roundsm" src={item.Images} alt={item.label}>
                </a>
            {/each}
        </article>

        <article class="info item" on:click={() => goto('/qna/requiredDocs')}>
            <div>
                <i class="icon icon-required-check-o icon-20"></i>
                <p class="fw600">필수서류 안내</p>
            </div>
            <i class="icon icon-arrow-right bg-gray icon-12"></i>
        </article>

        <article class="info item" on:click={() => goto('/qna/topQna')}>
            <div>
                <i class="icon icon-info-o icon-20"></i>
                <p class="fw600">자주 묻는 질문</p>
            </div>
            <i class="icon icon-arrow-right bg-gray icon-12"></i>
        </article>

    </div>
</section>

<Footer currentPage="home"/>