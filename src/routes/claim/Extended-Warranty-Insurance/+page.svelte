<script>
    import PageHeader from "@components/PageHeader.svelte";
    import Button from '@components/Button.svelte';
    import '@css/app/Insurance.scss';
    
	import sampleImage from '@images/sample.png';

    import { setupPageHeight } from '@/common';
    setupPageHeight({ includeHeader: false, includeFooter: true });

    import SelectDate from '@components/SelectDate.svelte';
    import Select from '@components/Select.svelte';
</script>

<PageHeader pageName='연장보증보험' backRoute="/home" closeRoute="/home" closeIcon="home" />

<section id="연장보증보험" class="insurance">
    <div>
        <div class="divider"></div>
        <article id="steps1">
            <div class="input-group">
                <div>
                    <label>구분 선택 <sup class="red">*</sup></label>
                    <Select placeholder="종류를 선택해 주세요" options={['카테고리1', '카테고리2', '카테고리3']}/>
                </div>
            </div>
        </article>
        <div class="divider"></div>
        <article id="steps2">
            <div class="input-group">
                <h5>1. 차량 정보</h5>
                <div>
                    <label>제조사 <sup class="red">*</sup></label>
                    <input class="input" type="text" placeholder="제조사를 입력해 주세요">
                </div>
                <div>
                    <label>차량종류 <sup class="red">*</sup></label>
                    <input class="input" type="text" placeholder="차량종류를 입력해 주세요">
                </div>
            </div>
        </article>
        <div class="divider"></div>
        <article id="steps3">
            <div class="input-group">
                <h5>2. 청구자 정보</h5>
                <div>
                    <label>청구자 이름 <sup class="red">*</sup></label>
                    <input class="input" type="text" placeholder="이름을 입력해 주세요">
                </div>
                <div>
                    <label>청구자 주민번호 <sup class="red">*</sup></label>
                    <div class="ssn-input">
                        <input class="input" type="text" id="ssn" placeholder="앞 6자리 입력" required />
                        <h5>-</h5>
                        <input class="input" type="text" id="ssn" placeholder="뒷 7자리 입력" required />
                    </div>
                </div>
                <div>
                    <label>청구자 휴대폰 번호 <sup class="red">*</sup></label>
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
        <article id="steps4">
            <div class="input-group">
                <h5>3. 사고정보</h5>
                <div>
                    <label>사고일시 <sup class="red">*</sup></label>
                    <SelectDate />
                </div>
                <div>
                    <label>사고부품 <sup class="red">*</sup></label>
                    <input class="input" type="text" placeholder="사고부품을 입력해 주세요">
                </div>
                <div>
                    <label>사고경위 <sup class="red">*</sup></label>
                    <textarea class="input mt8" placeholder="사고경위를 작성해 주세요." rows="4"></textarea>
                    <h6 class="char-count gray">0/200</h6>
                </div>
            </div>
        </article>
        <article id="steps4">
            <div class="input-group">
                <h5>4. 보험금 수령 정보</h5>
                <div>
                    <label>수령자 이름 <sup class="red">*</sup></label>
                    <input class="input" type="text" placeholder="수령자 이름을 입력해 주세요">
                </div>
                <div>
                    <label>수령자 은행/계좌번호<sup class="red">*</sup></label>
                    <Select placeholder="은행 선택" options={['은행1', '은행2', '은행3']}/>
                    <input class="input" type="text" placeholder="계좌번호 입력">
                </div>
            </div>
            <footer>
                <Button route="./Extended-Warranty-Insurance/1" text='청구서 미리보기' />
            </footer>
        </article>
    </div>
</section>
