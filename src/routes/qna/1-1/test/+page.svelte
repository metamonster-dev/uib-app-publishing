<script>
    import PageHeader from "@components/PageHeader.svelte";
    import '@css/app/Qna.scss';

    const qnaData = {
        title: "문의 제목이 들어가는 부분입니다.",
        date: "2024.03.22",
        content: "건강과 지속 가능성을 추구하는 이들을 위해, 맛과 영양이 가득한 채식 요리 레시피를 소개합니다. 이 글에서는 간단하지만 맛있는 채식 요리 10가지를 선보입니다.",
        response: {
            status: "답변완료",
            message: "안녕하세요 성호님, 불편을 드려 죄송합니다.",
            date: "2024.03.22",
            content: "건강과 지속 가능성을 추구하는 이들을 위해, 맛과 영양이 가득한 채식 요리 레시피를 소개합니다. 이 글에서는 간단하지만 맛있는 채식 요리 10가지를 선보입니다."
        }
    };
</script>

<PageHeader pageName="문의 상세" backRoute="/qna/1-1"/>

<section id="문의상세">
    <div>
        <div>
            <p class="fw600">{qnaData.title}</p>
            <h6 class="mt8 gray mb12">{qnaData.date}</h6>
            <h6>{qnaData.content}</h6>
            <div class="underline"></div>
        </div>
        <div>
            <div class="badge response mb8">{qnaData.response.status}</div>
            <h5>{qnaData.response.message}</h5>
            <h6 class="mt8 gray mb12">{qnaData.response.date}</h6>
            <h6>{qnaData.response.content}</h6>
            <div class="underline"></div>
        </div>
    </div>
</section>
