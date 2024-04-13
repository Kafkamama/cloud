<template>
    <main class="main-page" id="">
        <template v-if="pageReady">
            <template v-if="showHeader">
                <section class="page-section q-pa-md" >
                    <div class="container">
                        <div class="row justify-between items-center q-col-gutter-md">
                            <div  v-if="!isSubPage"  class="col-auto " >
                                <q-btn @click="$router.go(-1)"      flat :rounded="false"  size=""  color="primary"  no-caps  unelevated   class="" >
                                    <q-icon name="arrow_back"></q-icon>                             
                                    
                                </q-btn>
                            </div>
                            <div  class="col " >
                                <div class=" text-h6 text-primary" >
                                    {{ $t('editCourse') }}
                                </div>
                            </div>
                            <!--topcardactiontemplates-->
                        </div>
                    </div>
                </section>
            </template>
            <section class="page-section " >
                <div class="container">
                    <div class="row q-col-gutter-x-md">
                        <div  class="col-md-9 col-12 comp-grid" >
                            <div >
                                <q-card  :flat="isSubPage" class="q-pa-md nice-shadow-6">
                                    <q-form ref="observer"  @submit.prevent="submitForm()">
                                    <!--[form-content-start]-->
                                    <div class="row q-col-gutter-x-md">
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    {{ $t('teacherId') }} 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <api-data-source @loaded="response => mapOptionField(response, 'teacher_id')"  api-path="components_data/teacher_id_option_list"  v-slot="req">
                                                        <nice-select     :loading="req.loading"   ref="ctrlteacher_id" v-model="formData.teacher_id" :options="req.response" :label="$t('teacherId')"  :error="isFieldValid('teacher_id')" :error-message="getFieldError('teacher_id')">
                                                        </nice-select>  
                                                    </api-data-source>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    {{ $t('title') }} *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrltitle" v-model.trim="formData.title"  :label="$t('title')" type="text" :placeholder="$t('enterTitle')"      
                                                    class="" :error="isFieldValid('title')" :error-message="getFieldError('title')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    {{ $t('description') }} 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input  ref="ctrldescription" rows="5"  v-model="formData.description" :placeholder="$t('enterDescription')"    type="textarea" :error="isFieldValid('description')" :error-message="getFieldError('description')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    {{ $t('learningObjectives') }} 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input  ref="ctrllearning_objectives" rows="5"  v-model="formData.learning_objectives" :placeholder="$t('enterLearningObjectives')"    type="textarea" :error="isFieldValid('learning_objectives')" :error-message="getFieldError('learning_objectives')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    {{ $t('targetAudience') }} 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input  ref="ctrltarget_audience" rows="5"  v-model="formData.target_audience" :placeholder="$t('enterTargetAudience')"    type="textarea" :error="isFieldValid('target_audience')" :error-message="getFieldError('target_audience')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    {{ $t('estimatedDuration') }} 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlestimated_duration" v-model.trim="formData.estimated_duration"  :label="$t('estimatedDuration')" type="number" :placeholder="$t('enterEstimatedDuration')"   step="any"    
                                                    class="" :error="isFieldValid('estimated_duration')" :error-message="getFieldError('estimated_duration')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!--[form-content-end]-->
                                    <div v-if="showSubmitButton" class="text-center q-my-md">
                                        <q-btn    :rounded="false"  color="primary"  no-caps  unelevated   type="submit" icon-right="send" :loading="saving">
                                            {{ submitButtonLabel }}
                                            <template v-slot:loading>
                                                <q-spinner-oval />
                                            </template>
                                        </q-btn>
                                    </div>
                                    </q-form>
                                    <slot :submit="submitForm" :saving="saving"></slot>
                                </q-card>
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
	import {  computed, ref, reactive, toRefs } from 'vue';
	import { required, numeric, } from 'src/services/validators';
	import { useMeta } from 'quasar';
	import { useApp } from 'src/composables/app';
	import { $t } from 'src/services/i18n';
	import { useEditPage } from 'src/composables/editpage';
	import { usePageStore } from 'src/stores/page';
	
	const props = defineProps({
		id: [String, Number],
		pageName: {
			type: String,
			default: 'course',
		},
		pageStoreKey: {
			type: String,
			default: 'COURSE',
		},
		routeName: {
			type: String,
			default: 'courseedit',
		},
		pagePath: {
			type : String,
			default : 'course/edit',
		},
		apiPath: {
			type: String,
			default: 'course/edit',
		},
		submitButtonLabel: {
			type: String,
			default: () => $t('update'),
		},
		msgTitle: {
			type: String,
			default: $t('updateRecord'),
		},
		msgBeforeSave: {
			type: String,
			default: () => $t(''),
		},
		msgAfterSave: {
			type: String,
			default: () => $t('recordUpdatedSuccessfully'),
		},
		formValidationError: {
			type: String,
			default: $t('formIsInvalid'),
		},
		formValidationMsg: {
			type: String,
			default: $t('pleaseCompleteTheForm'),
		},
		showHeader: {
			type: Boolean,
			default: true,
		},
		showSubmitButton: {
			type: Boolean,
			default: true,
		},
		redirect: {
			type : Boolean,
			default : true,
		},
		isSubPage: {
			type : Boolean,
			default : false,
		},
	});
	
	const store = usePageStore(props.pageStoreKey);
	const app = useApp();
	
	const formDefaultValues = Object.assign({
		teacher_id: "", 
		title: "", 
		description: "", 
		learning_objectives: "", 
		target_audience: "", 
		estimated_duration: "", 
	}, props.pageData);
	
	const formData = reactive({ ...formDefaultValues });
	
	//event raised after form submit
	function afterSubmit(response) {
		app.flashMsg(props.msgTitle, props.msgAfterSave);
		if(app.isDialogOpen()){
			app.closeDialogs(); // if page is open as dialog, close dialog
		}
		else if(props.redirect){
			app.navigateTo(`/course`);
		}
	}
	
	//vuelidate form validation rules
	const rules = computed(() => {
		return {
			title: { required },
		estimated_duration: { numeric }
		}
	});
	
	const page = useEditPage({ store, props, formData, rules, afterSubmit });
	
	const {  saving, loading, pageReady,   } = toRefs(page.state);
	
	const {  currentRecord: editRecord } = toRefs(store.state);
	
	const { load, submitForm, isFieldValid, getFieldError, mapOptionField, } = page.methods;
	
	useMeta(() => {
		return {
			//set browser title
			title: $t('editCourse')
		}
	});
</script>
<style scoped>
</style>
