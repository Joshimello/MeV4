<script>
import IconGroup from './icongroup.svelte'
import contentEN from '../lang/EN.json'
const content = {
    ...contentEN,
}
const lang = 'EN'
</script>

<section class="w-110 h-300vh">

    {#each content[lang] as section}
    <div class="mb-16">

        <div class="font-manifesto text-4xl flex">
            <img src="./image/{section.icon}" alt="{section.icon}">
            <span class="px-2 pl-4">
                {@html section.title}
            </span>
        </div>

        {#each section.body as text}
        {#if Array.isArray(text)}
            <IconGroup icons={text}/>
        {:else}
        <span class="font-odudo text-xl font-light block">
            {@html text}
        </span>
        {/if}
        {/each}

    </div>
    {/each}
</section>