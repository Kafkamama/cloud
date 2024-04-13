<template>
    <main class="main-page" id="">
        <template v-if="pageReady">
            <section class="page-section " >
                <div class="container">
                    <div class="row q-col-gutter-x-md">
                        <div  class="col comp-grid" >
                            <div >
                                <div class="q-mb-3 row justify-start q-col-gutter-sm">
                                    <div class="col-12">
                                        <q-card  class="q-pa-md nice-shadow-6">
                                            <div class="row q-col-gutter-x-md items-center">
                                                <div class="col">
                                                    <div class="text-grey text-weight-medium mb-1">{{ $t('teacherId') }}</div>
                                                    <div class="text-bold">{{ item.teacher_id }}</div>
                                                </div>
                                            </div>
                                        </q-card>
                                    </div>
                                    <div class="col-12">
                                        <q-card  class="q-pa-md nice-shadow-6">
                                            <div class="row q-col-gutter-x-md items-center">
                                                <div class="col">
                                                    <div class="text-grey text-weight-medium mb-1">{{ $t('name') }}</div>
                                                    <div class="text-bold">{{ item.name }}</div>
                                                </div>
                                            </div>
                                        </q-card>
                                    </div>
                                    <div class="col-12">
                                        <q-card  class="q-pa-md nice-shadow-6">
                                            <div class="row q-col-gutter-x-md items-center">
                                                <div class="col">
                                                    <div class="text-grey text-weight-medium mb-1">{{ $t('email') }}</div>
                                                    <div class="text-bold">{{ item.email }}</div>
                                                </div>
                                            </div>
                                        </q-card>
                                    </div>
                                </div>
                                <div  class=" row q-col-gutter-xs justify-start q-ma-md">
                                    <div><q-btn icon="edit" :label="$t('edit')"  outline  :rounded="false"  no-caps  unelevated   padding="xs" color="positive" :title="$t('edit')"  @click="app.openPageDialog({ page:'teacher/edit', url: `/teacher/edit/${item.teacher_id}` , closeBtn: true })">
                                    </q-btn></div>
                                    <div><q-btn icon="delete_sweep" :label="$t('delete')"  outline  :rounded="false"  no-caps  unelevated   padding="xs" color="negative" :title="$t('delete')"  @click="deleteItem(item.teacher_id)">
                                    </q-btn></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </template>
        <template v-if="loading">
            <div style="min-height:200px" class="q-pa-sm text-center relative-position">
                <q-inner-loading color="primary" :label="$t('loading')" showing></q-inner-loading>
            </div>
        </template>
    </main>
</template>
<script setup>
	import {  computed, ref, toRefs } from 'vue';
	import { useMeta } from 'quasar';
	import { useApp } from 'src/composables/app.js';
	import { $t } from 'src/services/i18n';
	import  AccountEditPage  from "./accountedit.vue";
	import  ChangePasswordPage  from "./changepassword.vue";
	import { useViewPage } from 'src/composables/viewpage.js';
	import { usePageStore } from 'src/stores/page';
	
	const props = defineProps({
		id: [String, Number],
		primaryKey: {
			type: String,
			default: 'teacher_id',
		},
		pageStoreKey: {
			type: String,
			default: 'ACCOUNT',
		},
		pageName: {
			type: String,
			default: 'teacher',
		},
		routeName: {
			type: String,
			default: 'teacheraccountview',
		},
		apiPath: {
			type: String,
			default: 'account',
		},
		autoLoad: {
			type: Boolean,
			default: true,
		},
		exportButton: {
			type: Boolean,
			default: true,
		},
		showFooter: {
			type: Boolean,
			default: true,
		},
		isSubPage: {
			type : Boolean,
			default : false,
		},
		titleBeforeDelete: {
			type: String,
			default: $t('deleteRecord'),
		},
		msgBeforeDelete: {
			type: String,
			default: () => $t('promptDeleteRecord'),
		},
		msgAfterDelete: {
			type: String,
			default: () => $t('recordDeletedSuccessfully'),
		},
		showHeader: {
			type: Boolean,
			default: true,
		},
	});
	
	const store = usePageStore(props.pageStoreKey);
	const app = useApp(props);
	const page = useViewPage({ store, props });
	
	const { currentRecord } = toRefs(store.state);
	const { loading, pageReady } = toRefs(page.state);
	const item = currentRecord;
	const { load, deleteItem, } = page.methods;
	
	const tab = ref('accountview');
	
	
	useMeta(() => {
		return {
			//set browser title
			title: $t('myAccount')
		}
	});
</script>
<style scoped>
</style>
