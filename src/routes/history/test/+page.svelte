<script>
    import { goto } from '$app/navigation';
    import PageHeader from "@components/PageHeader.svelte";
    import Button from '@components/Button.svelte';
    import BoxRadioButton from '@components/BoxRadioButton.svelte';
    import RadioButton from '@components/RadioButton.svelte';
    import CheckButton from '@components/CheckButton.svelte';
    import '@css/app/History.scss';

    import { setupPageHeight } from '@/common';
    setupPageHeight({includeHeader: false, includeFooter: false});


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


    import ActionSheet from '@components/ActionSheet.svelte';
    let showActionSheet = false;
    let sheetData = [{component: '증빙서류 첨부',}];
</script>

<PageHeader pageName='보험금 청구서' backRoute="/home"/>

<ActionSheet {sheetData} bind:showActionSheet/>

<section id="보험금청구서">
    <div>
        <div class="divider"></div>
        <div class="card">
            <p class="fw600 mb20">1. 인적사항 및 보상안내 받으실 분</p>
            <div class="subCard">
                <div>
                    <p class="fw600">피보험자</p>
                    <br><br>
                    <p class="gray">성명</p>
                    <p class="fw600">홍길동</p>
                    <p class="gray">주민번호</p>
                    <p class="fw600">970330-1******</p>
                </div>
                <div class="underline small"></div>
                <div>
                    <p class="fw600">직원</p>
                    <br><br>
                    <p class="gray">성명</p>
                    <p class="fw600">사이먼</p>
                    <p class="gray">주민번호</p>
                    <p class="fw600">970330-1******</p>
                </div>
                <div class="underline small"></div>
                <div>
                    <p class="fw600">보상안내 받으실 분</p>
                    <br><br>
                    <p class="gray">성명</p>
                    <p class="fw600">이효진</p>
                    <p class="gray">연락처</p>
                    <p class="fw600">010-1234-5678</p>
                </div>
            </div>
        </div>
        <div class="divider"></div>
        <div class="card">
            <p class="fw600 mb20">2. 청구사항(사고사항)</p>
            <div class="subCard none">
                <div>
                    <p class="gray">사고유형</p>
                    <p class="fw600">상해</p>
                    <p class="gray">접수일자</p>
                    <p class="fw600">2024년10월18일</p>
                    <p class="gray">사고일시</p>
                    <p class="fw600">2024년10월18일 / 09시16분</p>
                    <p class="gray">진단명</p>
                    <p class="fw600">골반 골정상 및 뇌진탕</p>
                    <p class="gray">사고장소</p>
                    <p class="fw600">학교앞 골목길</p>
                    <p class="gray">사고내용</p>
                    <p class="fw600">어린이보호구역 횡단보도 뺑소니</p>
                </div>
            </div>
        </div>
        <div class="divider"></div>
        <div class="card">
            <p class="fw600 mb20">3. 보험금 수령 계좌</p>
            <div class="subCard none">
                <div>
                    <p class="gray">예금주명</p>
                    <p class="fw600">홍길동</p>
                    <p class="gray">예금주 주민번호</p>
                    <p class="fw600">890527-1******</p>
                    <p class="gray">은행명</p>
                    <p class="fw600">신한은행</p>
                    <p class="gray">계좌번호</p>
                    <p class="fw600">110-123-456789</p>
                </div>
            </div>
        </div>
        <div class="divider"></div>
        <div class="card">
            <p class="fw600 mb20">4. 보험금 청구서류 접수대행 이용동의</p>
            <p class="gray">보험금 청구서류 접수대행 서비스를<br>신청하시겠습니까?</p>
            <div class="subCard none block">
                <div>
                    <BoxRadioButton options={['아니오', '예']} className="mt20" />
                    <p class="gray mt32 mb12">고객님의 보험금 청구서류를 전송할 회사에 <br>체크해 주세요.</p>
                    <RadioButton options={['중복 가입된 모든 회사', '서류를 보내고자 하는 회사']} />
                    <BoxRadioButton options={['DB 손해보험', 'KB 손해보험', '롯데 손해보험']} className="mt20" allowMultiple={true} />
                    <h5 class="mt32">이용동의일 : 2024년 07월 08일</h5>
                    <p class="gray mb20">청구자 : 테스트 본인 / 서명</p>
                    <canvas></canvas>
                </div>
            </div>
        </div>
        <div class="divider"></div>
        <div class="card">
            <p class="fw600 mb20">5. 보험금 청구를 위한 상세 동의서</p>
            <div class="subCard none block">
                <div>
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
                    
                    <div class="form-wrapper">
                        <div class="mb24">
                            <div>
                                <h6>피보험자</h6>
                                <input class="info-input" value="테스트 본인">
                            </div>
                            <div>
                                <h6>서명</h6>
                                <input class="info-input" placeholder="서명란">
                            </div>
                        </div>
                        <div class="mb24">
                            <div>
                                <h6>피보험자</h6>
                                <input class="info-input" value="테스트 본인">
                            </div>
                            <div>
                                <h6>서명</h6>
                                <input class="info-input" placeholder="서명란">
                            </div>
                        </div>
                        <div>
                            <div>
                                <h6>법정대리인</h6>
                                <input class="info-input" value="테스트 본인">
                            </div>
                            <div>
                                <h6>서명</h6>
                                <input class="info-input" placeholder="서명란">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="divider"></div>
        <div class="card">
            <div class="flex-center">
                <p class="fw600 mb20">6. 증빙서류</p>
                <button class="addfile" on:click={() => showActionSheet = true}>사진 첨부</button>
            </div>
            <div class="subCard none block">
                <div>
                    <p class="gray">00000000000.jpg</p>
                </div>
            </div>
        </div>
        <div class="divider"></div>
        <div class="card">
            <p class="fw600 mb20">7. 접수 메모</p>
            <div class="subCard none block">
                <div>
                    <textarea class="input" placeholder="관리자 작성 글" rows="5"></textarea>
                    <h6 class="char-count gray">0/500</h6>
                </div>
            </div>
            <Button disabled={false} route="/history" text='재접수' />
        </div>
    </div>
</section>