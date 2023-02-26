<script>
import IconGroup from './icongroup.svelte'

import contentEN from '../lang/EN.json'
import contentZH from '../lang/ZH.json'
import contentJP from '../lang/JP.json'
const content = {
    ...contentEN,
    ...contentZH,
    ...contentJP
}

let lang = 'EN'
</script>

<section class="h-300vh w-110 <sm:w-auto mx-auto">

    <div class="p-2 flex items-center justify-end gap-2 text-md">
        <img class="mr-auto h-8 w-8" src="./image/language.svg">
        {#each Object.keys(content) as l}
        <div class="bg-indigo-100 w-8 h-8 flex items-center justify-center rounded-md cursor-pointer" on:click={()=>(lang = l)}>
            {l}
        </div>
        {/each}
    </div>

    {#each content[lang] as section}
    <div class="py-16 border-t-2 border-indigo-200">

        <div class="font-manifesto text-4xl flex">
            <img src="./image/{section.icon}" alt="{section.icon}">
            <span class="px-2 pl-4 font-thin">
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