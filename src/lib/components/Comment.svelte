<script>
    export let comments = [];
</script>

<article>
    {#each comments as comment}
        <div class="comment">
            <h6>·</h6>
            <h6>{comment}</h6>
        </div>
    {/each}
</article>

<style>
    article {display: flex; flex-direction: column; gap: .4rem; padding: 1.6rem 2.4rem; background-color: var(--background); border-radius: var(--border-radius-sm);}
    .comment {display: flex;align-items: flex-start;gap: .8rem;}
</style>