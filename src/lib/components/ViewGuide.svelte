<script>
    export let pn = '';
    export let ph = '';
</script>

<style>
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #f3f4f6;
        padding: 20px;
    }

    h1 {
        font-size: 1.6rem;
        background: #d0e3f4;
        text-align: center;
        margin: 0 14px 20px;
        padding: 20px;
        background: #e1f5fe;
        border: 2px solid #4a90e2;
        border-radius: 12px;
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease;
    }
</style>

<section>
    <h1>
        {pn}을 보려면 {ph}/+page.svelte 로 이동하십시오.
        <br><br>
        <span>주석처리 되어있는 컴포넌트를 주석해제하면 미리보기가 가능합니다.</span>
    </h1>
</section>
