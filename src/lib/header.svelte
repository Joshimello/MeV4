<section class="w-100vw h-100vh flex flex-col justify-center items-center noselect">
	
	<div class="flex flex-col absolute">
        <span class="text-indigo-900 text-2xl mix-blend-difference pb-4 -z-1 font-manifesto">
            I LOVE
        </span>
        <div class="text-stroke-indigo-300 text-transparent text-9xl mix-blend-color-dodge font-light font-manifesto flex flex-row justify-between w-110 duration-300 ease-in-out filter z-1 text-stroke-sm" id="headerText">
            {#each currentItem as char}
            <span>{char}</span>
            {/each}
        </div>
        <span class="text-indigo-900 text-2xl mix-blend-difference text-right -z-1 font-manifesto">
            ING
        </span>
    </div>

    <div class="absolute">
		<div class="flex flex-row relative top-60 w-110 justify-between">
			{#each items as item}
			<img alt="{item}" src="../image/{item}.svg" on:click={() => (changeItemTo(item))} class="border-b-3 border-l-3 py-1 shadow-md hover hover:shadow-sm duration-25 cursor-pointer">
			{/each}
		</div>
	</div>

    <canvas class="w-100vw h-100vh duration-200 ease-out filter opacity-100" id="bg">
   	</canvas>

</section>

<script>

import { onMount } from 'svelte'

let changeModelTo
onMount(async () => {
    let res = await import('./scene.ts')
    changeModelTo = res.changeModelTo
})

let items = ['code', 'edit', 'cook', 'game', 'vibe']
let currentItem = items[0]

let isChanging = false
function changeItemTo(item) {
	if (isChanging) return

	isChanging = true
	document.querySelector('#headerText').classList.toggle('blur-50')
	document.querySelector('#bg').classList.toggle('opacity-0')
	window.setTimeout(() => {
		document.querySelector('#headerText').classList.toggle('blur-50')
		currentItem = item
	}, 300)
	window.setTimeout(() => {
		document.querySelector('#bg').classList.toggle('opacity-0')
		changeModelTo(item)
	}, 200)
	window.setTimeout(() => {
		isChanging = false
	}, 500)
}

</script>