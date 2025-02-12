import { createRouter, createWebHashHistory } from 'vue-router'

import BasicComponent from './components/basic.vue'
import CloneComponent from './components/clone.vue'
import FutureIndexComponent from './components/futureIndex.vue'
import NestedComponent from './components/nested-component.vue'
import ThirdPartyComponent from './components/third-party.vue'
import TransitionComponent from './components/transition-group.vue'
import VModelComponent from './components/v-model-component.vue'
import VirtualScrollComponent from './components/virtual-scroll.vue'
import VuexComponent from './components/vuex-component.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      name: 'basic',
      path: '/',
      component: BasicComponent,
    },
    {
      name: 'clone',
      path: '/clone',
      component: CloneComponent,
    },
    {
      name: 'transition',
      path: '/transition',
      component: TransitionComponent,
    },
    {
      name: 'nested',
      path: '/nested',
      component: NestedComponent,
    },
    {
      name: 'vuex',
      path: '/vuex',
      component: VuexComponent,
    },
    {
      name: 'vmode',
      path: '/vmode',
      component: VModelComponent,
    },
    {
      name: 'third-party',
      path: '/third-party',
      component: ThirdPartyComponent,
    },
    {
      name: 'future-index',
      path: '/future-index',
      component: FutureIndexComponent,
    },
    {
      name: 'virtual-list',
      path: '/virtual-list',
      component: VirtualScrollComponent,
    },
  ],
})

export { router }
