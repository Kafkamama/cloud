<template>
    <q-page class="main-page"  id="">
        <section class="page-section q-mb-md" >
            <div class="container-fluid">
                <div class="row q-col-gutter-x-md">
                    <div  class="col comp-grid" >
                    </div>
                    <div  class="col-12 comp-grid" >
                        <q-card  :flat="isSubPage" class=" nice-shadow-6">
                            <q-img src="images/微信图片_20240328173629.png"     >
                            </q-img>
                        </q-card>
                        <record-count api-path="components_data/getcount_certificate" max="" v-slot="record">
                        <q-btn align="left"  unelevated    :rounded="false"  block no-caps text-color="blue" color="blue-1" :to="`/certificate`" padding="md" class="full-width animated zoomIn" >
                            <q-icon class=" q-mr-md" color="blue" style="opacity:1" size="40px" name="extension"></q-icon>
                            <div class="flex-column text-left">
                                <div class="text-bold">Certificate</div>
                                <div class="text-caption">Total Certificate</div>
                            </div>
                            <div class="text-h5 absolute-top-right q-ma-md q-mt-lg">
                                <span v-if="!record.loading">{{ record.num }}</span>
                                <q-spinner v-else size="14px" />
                            </div>
                        </q-btn>
                        </record-count>
                        <record-count api-path="components_data/getcount_course" max="" v-slot="record">
                        <q-btn align="left"  unelevated    :rounded="false"  block no-caps text-color="blue" color="blue-1" :to="`/course`" padding="md" class="full-width animated zoomIn" >
                            <q-icon class=" q-mr-md" color="blue" style="opacity:1" size="40px" name="extension"></q-icon>
                            <div class="flex-column text-left">
                                <div class="text-bold">Course</div>
                                <div class="text-caption">Total Course</div>
                            </div>
                            <div class="text-h5 absolute-top-right q-ma-md q-mt-lg">
                                <span v-if="!record.loading">{{ record.num }}</span>
                                <q-spinner v-else size="14px" />
                            </div>
                        </q-btn>
                        </record-count>
                        <record-count api-path="components_data/getcount_courseresource" max="" v-slot="record">
                        <q-btn align="left"  unelevated    :rounded="false"  block no-caps text-color="blue" color="blue-1" :to="`/courseresource`" padding="md" class="full-width animated zoomIn" >
                            <q-icon class=" q-mr-md" color="blue" style="opacity:1" size="40px" name="extension"></q-icon>
                            <div class="flex-column text-left">
                                <div class="text-bold">Course Resource</div>
                                <div class="text-caption">Total Course Resource</div>
                            </div>
                            <div class="text-h5 absolute-top-right q-ma-md q-mt-lg">
                                <span v-if="!record.loading">{{ record.num }}</span>
                                <q-spinner v-else size="14px" />
                            </div>
                        </q-btn>
                        </record-count>
                        <record-count api-path="components_data/getcount_mistakebook" max="" v-slot="record">
                        <q-btn align="left"  unelevated    :rounded="false"  block no-caps text-color="blue" color="blue-1" :to="`/mistakebook`" padding="md" class="full-width animated zoomIn" >
                            <q-icon class=" q-mr-md" color="blue" style="opacity:1" size="40px" name="extension"></q-icon>
                            <div class="flex-column text-left">
                                <div class="text-bold">Mistake Book</div>
                                <div class="text-caption">Total Mistake Book</div>
                            </div>
                            <div class="text-h5 absolute-top-right q-ma-md q-mt-lg">
                                <span v-if="!record.loading">{{ record.num }}</span>
                                <q-spinner v-else size="14px" />
                            </div>
                        </q-btn>
                        </record-count>
                        <record-count api-path="components_data/getcount_purchaserecord" max="" v-slot="record">
                        <q-btn align="left"  unelevated    :rounded="false"  block no-caps text-color="blue" color="blue-1" :to="`/purchaserecord`" padding="md" class="full-width animated zoomIn" >
                            <q-icon class=" q-mr-md" color="blue" style="opacity:1" size="40px" name="extension"></q-icon>
                            <div class="flex-column text-left">
                                <div class="text-bold">Purchase Record</div>
                                <div class="text-caption">Total Purchase Record</div>
                            </div>
                            <div class="text-h5 absolute-top-right q-ma-md q-mt-lg">
                                <span v-if="!record.loading">{{ record.num }}</span>
                                <q-spinner v-else size="14px" />
                            </div>
                        </q-btn>
                        </record-count>
                        <record-count api-path="components_data/getcount_review" max="" v-slot="record">
                        <q-btn align="left"  unelevated    :rounded="false"  block no-caps text-color="blue" color="blue-1" :to="`/review`" padding="md" class="full-width animated zoomIn" >
                            <q-icon class=" q-mr-md" color="blue" style="opacity:1" size="40px" name="extension"></q-icon>
                            <div class="flex-column text-left">
                                <div class="text-bold">Review</div>
                                <div class="text-caption">Total Review</div>
                            </div>
                            <div class="text-h5 absolute-top-right q-ma-md q-mt-lg">
                                <span v-if="!record.loading">{{ record.num }}</span>
                                <q-spinner v-else size="14px" />
                            </div>
                        </q-btn>
                        </record-count>
                        <record-count api-path="components_data/getcount_teacher" max="" v-slot="record">
                        <q-btn align="left"  unelevated    :rounded="false"  block no-caps text-color="blue" color="blue-1" :to="`/teacher`" padding="md" class="full-width animated zoomIn" >
                            <q-icon class=" q-mr-md" color="blue" style="opacity:1" size="40px" name="extension"></q-icon>
                            <div class="flex-column text-left">
                                <div class="text-bold">Teacher</div>
                                <div class="text-caption">Total Teacher</div>
                            </div>
                            <div class="text-h5 absolute-top-right q-ma-md q-mt-lg">
                                <span v-if="!record.loading">{{ record.num }}</span>
                                <q-spinner v-else size="14px" />
                            </div>
                        </q-btn>
                        </record-count>
                        <record-count api-path="components_data/getcount_student" max="" v-slot="record">
                        <q-btn align="left"  unelevated    :rounded="false"  block no-caps text-color="blue" color="blue-1" :to="`/student`" padding="md" class="full-width animated zoomIn" >
                            <q-icon class=" q-mr-md" color="blue" style="opacity:1" size="40px" name="extension"></q-icon>
                            <div class="flex-column text-left">
                                <div class="text-bold">Student</div>
                                <div class="text-caption">Total Student</div>
                            </div>
                            <div class="text-h5 absolute-top-right q-ma-md q-mt-lg">
                                <span v-if="!record.loading">{{ record.num }}</span>
                                <q-spinner v-else size="14px" />
                            </div>
                        </q-btn>
                        </record-count>
                    </div>
                    <div  class="col-md-3 col-12 comp-grid" >
                    </div>
                    <div  class="col-md-3 col-12 comp-grid" >
                    </div>
                </div>
            </div>
        </section>
    </q-page>

</template>
<script setup>
	import {  computed, ref } from 'vue';
	
	
	import { useApp } from 'src/composables/app.js';
	
	
	
	const props = defineProps({
		pageName: {
			type: String,
			default: 'home',
		},
		routeName: {
			type: String,
			default: 'home',
		},
		isSubPage: {
			type : Boolean,
			default : false,
		},
	});
	const app = useApp();
	
	const pageReady = ref(true);
	
</script>
<style scoped>
</style>
