<script setup lang="ts">
import { ref } from 'vue'
import HorizontalScroll from './horizontal-scroll.vue'
import { RecycleScroller } from 'vue3-virtual-scroller';

const items = ref(
    Array.from({ length: 1000 }, (_, i) => {
        return {
            id: i,
            title: `Item ${i}`,
            description: `Description ${i}`,
            height: i%2==0 ? 100 : 200,
            stages: Array.from({ length: 1000 }, (_, i) => {
                return {
                    id: 'stage-'+i,
                    title: `Stage ${i}`,
                    description: `Description ${i}`, 
                }
            }),
        }
    })
)
</script>

<template>
    <div class="virtual-scroll-wrap">
        <RecycleScroller :items="items" :min-item-size="320" class="scroller" direction="horizontal" key-field="id">
            <template v-slot="{ item, index, active }">
                <div  style="display: flex;flex-direction: column;width: 305px; height: 100%; margin-right: 0.625rem;">
                    <div class="virtual-scroll-item">
                        <div>{{ item.title }}</div>
                    </div>
                    <div style="height: calc(100% - 100px); margin-top: 0.625rem">
                        <HorizontalScroll :stages="item.stages" :height="item.height" />
                    </div>
                </div>
            </template>
        </RecycleScroller>
    </div>
</template>

<style>
.virtual-scroll-wrap,
.scroller {
    height: 500px;
    overflow: hidden;
}

.virtual-scroll-item{
    background-color: #f0f0f0;
    padding: 0.625rem;
    border-radius: 0.5rem;
}
</style>
