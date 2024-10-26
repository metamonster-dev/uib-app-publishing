<script>
    import PageHeader from "@components/PageHeader.svelte";
    import Button from '@components/Button.svelte';
    import '@css/app/Insurance.scss';
    
	import sampleImage from '@images/sample.png';
	import ParkingLotLiabilityInsurance from '@images/claim/Parking-Lot-Liability-Insurance.png';

    import { setupPageHeight } from '@/common';
    setupPageHeight({ includeHeader: false, includeFooter: true });

    import SelectDate from '@components/SelectDate.svelte';
    import Select from '@components/Select.svelte';
    import ActionSheet from '@components/ActionSheet.svelte';

    import Comment from "@components/Comment.svelte";
    let comments = [
        "증권상에 기재된 피보험자가 소유, 사용, 관리하는 주차시설 및 그 시설의 용동에 따른 주차 업무의 수행으로 생긴 우연한 사고로 인하여 타인의 신체에 장해를 입히거나 타인의 재물을 망가뜨려 법률상 배상 책임을 부담함으로써 입은 손해를 보상합니다."
    ];


    let showActionSheet = false;
    let sheetData = [{component: '증빙서류 첨부',}];
    let files = [
        { name: '증빙서류1.jpg', src: sampleImage },
        { name: '증빙서류2.jpg', src: sampleImage },
        { name: '증빙서류3.jpg', src: sampleImage },
        { name: '증빙서류4.jpg', src: sampleImage }
    ];
</script>

<PageHeader pageName='주차장 배상책임보험' backRoute="/home" closeRoute="/home" closeIcon="home" />

<ActionSheet {sheetData} bind:showActionSheet/>

<section id="주차장배상책임보험" class="insurance">
    <div>
        <div class="divider"></div>
        <article id="steps1">
            <div class="input-group">
                <h5>1. 보험계약사항</h5>
                <div>
                    <label>보험계약자 <sup class="red">*</sup></label>
                    <input class="input" type="text" placeholder="보험 계약자명 입력">
                </div>
                <div>
                    <label>보험종목 <sup class="red">*</sup></label>
                    <input class="input" type="text" placeholder="보험 종목 기입">
                </div>
                <div>
                    <label>증권번호 <sup class="red">*</sup></label>
                    <input class="input" type="text" placeholder="증권 번호 기입">
                </div>
            </div>
        </article>
        <div class="divider"></div>
        <article id="steps2">
            <div class="input-group">
                <h5>2. 보험금 청구인(피보험자) 인적사항</h5>
                <div>
                    <label>성명 <sup class="red">*</sup></label>
                    <input class="input" type="text" placeholder="이름을 입력해 주세요">
                </div>
                <div>
                    <label>주민번호 <sup class="red">*</sup></label>
                    <div class="ssn-input">
                        <input class="input" type="text" id="ssn" placeholder="앞 6자리 입력" required />
                        <h5>-</h5>
                        <input class="input" type="text" id="ssn" placeholder="뒷 7자리 입력" required />
                    </div>
                </div>
                <div>
                    <label>휴대폰 번호 <sup class="red">*</sup></label>
                    <div class="phone-input">
                        <input class="input" type="text" placeholder="010" value="010" required />
                        <h5>-</h5>
                        <input class="input" type="text" placeholder="숫자입력" required />
                        <h5>-</h5>
                        <input class="input" type="text" placeholder="숫자입력" required />
                    </div>
                </div>
            </div>
        </article>
        <div class="divider"></div>
        <article id="steps3">
            <div class="input-group">
                <h5>3. 사고 경위</h5>
                <div>
                    <label>사고일시 <sup class="red">*</sup></label>
                    <SelectDate />
                </div>
                <div>
                    <label>사고장소 <sup class="red">*</sup></label>
                    <input class="input" type="text" placeholder="장소 입력">
                </div>
                <div>
                    <label>사고경위 <sup class="red">*</sup></label>
                    <textarea class="input mt8" placeholder="내용을 입력해주세요." rows="4"></textarea>
                    <h6 class="char-count gray">0/200</h6>
                </div>
            </div>
        </article>
        <div class="divider"></div>
        <article id="steps4">
            <div class="input-group">
                <h5>4. 보험금 수령계좌</h5>
                <div>
                    <label>예금주 <sup class="red">*</sup></label>
                    <input class="input" type="text" placeholder="예금주 입력">
                </div>
                <div>
                    <label>예금주 주민번호 <sup class="red">*</sup></label>
                    <div class="ssn-input">
                        <input class="input" type="text" id="ssn" placeholder="앞 6자리 입력" required />
                        <h5>-</h5>
                        <input class="input" type="text" id="ssn" placeholder="뒷 7자리 입력" required />
                    </div>
                </div>
                <div>
                    <label>은행/계좌번호<sup class="red">*</sup></label>
                    <Select placeholder="은행 선택" options={['은행1', '은행2', '은행3']}/>
                    <input class="input" type="text" placeholder="계좌번호 입력">
                </div>
            </div>
        </article>
        <div class="divider"></div>
        <article id="steps4-1">
            <div class="input-group">
                <h5>청구일 : 2024년 07월 08일</h5>
                <div>
                    <label>보험금 청구인 <sup class="red">*</sup></label>
                    <input class="input" type="text" value="홍길동" readonly>
                </div>
                <h5>&lt;주차장 특별약관 보상내용&gt;</h5>
                <Comment {comments} />
            </div>
            <footer>
                <Button route="./Parking-Lot-Liability-Insurance/1" text='미리보기' />
            </footer>
        </article>
    </div>
</section>
