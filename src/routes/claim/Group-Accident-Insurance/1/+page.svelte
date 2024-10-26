<script>
    import PageHeader from "@components/PageHeader.svelte";
    import Button from '@components/Button.svelte';
    import BoxRadioButton from '@components/BoxRadioButton.svelte';
    import BankSelector from '@components/BankSelector.svelte';
    import '@css/app/Insurance.scss';
    import { setupPageHeight } from '@/common';
    setupPageHeight({ includeHeader: false, includeFooter: true });
    import SelectDate from '@components/SelectDate.svelte';
    import Select from '@components/Select.svelte';

    import { DateInput } from 'date-picker-svelte';
    let date = new Date();

    let showBankSelector = false;
    let insuredName = '홍길동';
    let insuredSsn1 = '990521';
    let insuredSsn2 = '3******';
    let employeeName = '홍길동';
    let employeeSsn1 = '990521';
    let employeeSsn2 = '3******';
    let compensationRecipient = '';
    let recipientPhoneNumber = '';
    let accidentType = '';
    let accidentDate = '';
    let diagnosis = '';
    let accidentLocation = '';
    let accidentDetails = '';
    let accountHolderName = '홍길동';
    let accountHolderSsn1 = '990521';
    let accountHolderSsn2 = '3******';
    let bankAccountNumber = '';

    const isFormValid = () => {
        return (
            insuredName && insuredSsn1 && insuredSsn2 &&
            employeeName && employeeSsn1 && employeeSsn2 &&
            compensationRecipient && recipientPhoneNumber &&
            accidentType && accidentDate && diagnosis &&
            accidentLocation && accidentDetails &&
            accountHolderName && accountHolderSsn1 && accountHolderSsn2 &&
            bankAccountNumber
        );
    };
</script>

<PageHeader pageName='단체상해보험' backRoute="../Group-Accident-Insurance" closeRoute="../Group-Accident-Insurance" closeIcon="qusition-o" />
<BankSelector bind:showBankSelector />
<section id="단체상해보험" class="insurance">
    <div>
        <div class="divider"></div>
        <article id="steps1">
            <div class="input-group">
                <h5>1. 인적사항 및 보상안내 받으실 분</h5>
                <div>
                    <label>피보험자 <sup class="red">*</sup></label>
                    <input class="input" bind:value={insuredName} type="text" />
                </div>
                <div>
                    <label>피보험자 주민번호 <sup class="red">*</sup></label>
                    <div class="ssn-input">
                        <input class="input" bind:value={insuredSsn1} type="text" />
                        <h5>-</h5>
                        <input class="input" bind:value={insuredSsn2} type="text" />
                    </div>
                </div>
                <div>
                    <label>직원 <sup class="red">*</sup></label>
                    <input class="input" bind:value={employeeName} type="text" />
                </div>
                <div>
                    <label>직원 주민번호 <sup class="red">*</sup></label>
                    <div class="ssn-input">
                        <input class="input" bind:value={employeeSsn1} type="text" />
                        <h5>-</h5>
                        <input class="input" bind:value={employeeSsn2} type="text" />
                    </div>
                </div>
                <div>
                    <label>보상안내 받을 분 <sup class="red">*</sup></label>
                    <input class="input" bind:value={compensationRecipient} type="text" placeholder="보상안내 받을 분 입력" />
                </div>
                <div>
                    <label>보상안내 받을 분 휴대폰 번호 <sup class="red">*</sup></label>
                    <input class="input" bind:value={recipientPhoneNumber} type="text" placeholder="숫자만 입력해 주세요" />
                </div>
            </div>
        </article>
        <div class="divider"></div>
        <article id="steps2">
            <div class="input-group">
                <h5>2. 청구사항(사고사항)</h5>
                <div>
                    <label style="font-size: 16px;">사고 유형 <sup class="red">*</sup></label>
                    <BoxRadioButton bind:value={accidentType} options={['상해', '질병']} className="mt8" />
                </div>
                <div>
                    <label>사고일시(발병일/진료일) <sup class="red">*</sup></label>
                    <SelectDate bind:value={accidentDate} />
                    <!-- <DateInput bind:value={date} format="YYYY-MM-DD" /> -->
                </div>
                <div>
                    <label>진단명(병명) <sup class="red">*</sup></label>
                    <input class="input" bind:value={diagnosis} type="text" placeholder="진단명 입력" />
                </div>
                <div>
                    <label>사고장소 <sup class="red">*</sup></label>
                    <input class="input" bind:value={accidentLocation} type="text" placeholder="사고장소 입력" />
                </div>
                <div>
                    <label>사고경위 <sup class="red">*</sup></label>
                    <textarea class="input mt8" bind:value={accidentDetails} placeholder="사고경위를 작성해 주세요" rows="4"></textarea>
                    <h6 class="char-count gray">0/200</h6>
                </div>
            </div>
        </article>
        <div class="divider"></div>
        <article id="steps3">
            <div class="input-group">
                <h5>3. 보험금 수령계좌</h5>
                <div>
                    <label>예금주 <sup class="red">*</sup></label>
                    <input class="input" bind:value={accountHolderName} type="text" />
                </div>
                <div>
                    <label>예금주 주민번호 <sup class="red">*</sup></label>
                    <div class="ssn-input">
                        <input class="input" bind:value={accountHolderSsn1} type="text" />
                        <h5>-</h5>
                        <input class="input" bind:value={accountHolderSsn2} type="text" />
                    </div>
                </div>
                <div>
                    <label>은행/계좌번호<sup class="red">*</sup></label>
                    <div on:click={() => showBankSelector = true}>
                        <Select bind:value={bankAccountNumber} placeholder="은행 선택" />
                    </div>
                    <input class="input" bind:value={bankAccountNumber} type="text" placeholder="계좌번호 입력" />
                </div>
            </div>
            <footer>
                <Button route="2" text='다음' />
                <!-- <Button route="2" text='다음' disabled={!isFormValid()} /> -->
            </footer>
        </article>
    </div>
</section>
