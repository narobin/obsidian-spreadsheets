<script lang="ts">
	export let nums: any[][];
	export let headerRows: number = 1;

	$: rows = nums.length;
	$: cols = nums[0].length;

	const addRow = () => {
		nums = [ ...nums, new Array(cols) ];
	}

	const addCol = () => {
		nums = nums.map(row => ([...row, null]));
	}
</script>

<div class="table">
	{#each nums as row, i}
		<div class="row" class:header={i < headerRows}>
			<span>{i+1}</span>
			{#each row as val}
				<input type="text" bind:value={val} />
			{/each}
			{#if i === 0}
				<button id="AddCol" on:click={addCol}>+</button>
			{/if}
		</div>
	{/each}
	<button id="AddRow" class="row" on:click={addRow}>+</button>
</div>


<style lang="scss">
	$border-color: var(--color-base-20);
	$border: var(--input-border-width) solid $border-color;

	.table {
		display: grid;
		margin-top: var(--size-2-1);

		button {
			background: transparent;
			border-radius: 0;
			box-shadow: none;
			cursor: pointer;
			&:hover {
				background-color: $border-color;
			}
		}

		#AddCol {
			width: var(--size-4-8);
			background-color: $border-color;
			border: $border;
			&:hover {
				background-color: var(--color-base-25);
				border-color: var(--color-base-25);
			}
		}
	}

	.row {
		display: grid;
		grid-column: 1;
		grid-template-columns: var(--size-4-8);
		grid-auto-columns: 8rem;
		grid-auto-flow: column;
		border-bottom: $border;

		span {
			color: var(--text-faint);
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: right;
		}

		&>* {
			padding: var(--size-4-1) var(--size-4-2);
			box-sizing: content-box;
			margin: 0;
			border: none;
			border-right: $border;
			font-size: var(--font-text-size);
		}

		&.header {
			background-color: $border-color;

			input {
				font-weight: bold;
			}
		}

		&:first-child {
			border-top: $border;
		}
	}

	input {
		background-color: transparent;
		border-radius: 0;

		&:focus {
			box-shadow: 0 0 0 2px hsl(var(--accent-h), var(--accent-s), var(--accent-l));
			z-index: 10;
			border-radius: var(--radius-s);
		}
	}
</style>
