<script>
	export let icons = []
</script>

<div>
	{#each icons as icon}	
	<span class="relative h-12 mr-4 cursor-pointer">
		<img
			class="h-12 my-2 inline hover:sibling:opacity-70"
			src="./image/tech/{icon}.svg"
			alt="{icon}"
		/>
		<span class="absolute left-1/2 transform preserve-flat -translate-x-1/2 top-7 uppercase bg-black opacity-0 text-white px-1 rounded transition duration-100 noselect text-sm">
			{icon}
		</span>
	</span>
	{/each}
</div>