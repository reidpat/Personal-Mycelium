<script>
	import { onMount } from 'svelte';
	import TaskItem from '../../lib/components/TaskItem.svelte';

    export let data;

    onMount(()=> {
        console.log(data);
    })

</script>

<h1>Tasks</h1>
{#if data.data}
    {#each data.data as task}
        <TaskItem {task} />
    {/each}
{/if}

