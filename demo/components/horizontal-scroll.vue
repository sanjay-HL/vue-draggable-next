<script lang="ts">
import { defineComponent } from 'vue'
import { VueDraggableNext } from '/@'
export default defineComponent({
    components: {
        draggable: VueDraggableNext,
    },
    props: {
        stages: {
            type: Array,
            required: true,
        },
        height: {
            type: Number,
            required: true,
        },
    },
    setup() {
        const dragOptions = {
            animation: 100,
            group: 'description',
            disabled: false,
            ghostClass: 'opacity-50',
            fallbackTolerance: 10,
            forceFallback: true,
            fallbackOnBody: true,
        }

        return {
            dragOptions,
        }
    },
    methods: {
        onStart(evt: any) {
            console.log('onStart', evt)
        },
        onEnd(evt: any) {
            console.log('onEnd', evt)
        },
        log(evt: any) {
            console.log('log', evt)
        },
    },
})
</script>

<template>
     <!-- <draggable
        :list="stages"
        v-bind="dragOptions"
        :handle="'.cardWrapper'"
        class="min-h-full"
        :sort="false"
        @change="log"
        @end="onEnd"
        @start="onStart"
      > -->
        <RecycleScroller :buffer="20" class="vertical-scroll" :items="stages" :item-size="height+10" direction="vertical" key-field="id">
            <template v-slot="{ item, index, active }">
                <div class="w-full">
                    <div class="virtual-scroll-item" :style="{marginBottom:'0.625rem', height: height+'px'}">
                        <div>{{ item.description }}</div>
                    </div>
                </div>
            </template>
        </RecycleScroller>
    <!-- </draggable> -->
</template>

<style>
.vertical-scroll{
    height: 100%;
    overflow: auto;
}

.vertical-scroll .vue-recycle-scroller__item-view {
    height: fit-content !important;
}
</style>