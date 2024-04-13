
import { $t } from 'src/services/i18n';

export const AppMenus = {
    
	navbarTopRight: [],
	navbarTopLeft: [],
	navbarSideLeft: [
  {
    "path": "/home",
    "label": $t('home'),
    "icon": "extension",
    "iconcolor": "",
    "target": "",
    "submenu": []
  },
  {
    "path": "/admin",
    "label": $t('admin'),
    "icon": "extension",
    "iconcolor": "",
    "target": "",
    "submenu": []
  },
  {
    "path": "/certificate",
    "label": $t('certificate'),
    "icon": "extension",
    "iconcolor": "",
    "target": "",
    "submenu": []
  },
  {
    "path": "/course",
    "label": $t('course'),
    "icon": "extension",
    "iconcolor": "",
    "target": "",
    "submenu": []
  },
  {
    "path": "/mistakebook",
    "label": $t('mistakeBook'),
    "icon": "extension",
    "iconcolor": "",
    "target": "",
    "submenu": []
  },
  {
    "path": "/purchaserecord",
    "label": $t('purchaseRecord'),
    "icon": "extension",
    "iconcolor": "",
    "target": "",
    "submenu": []
  },
  {
    "path": "/review",
    "label": $t('review'),
    "icon": "extension",
    "iconcolor": "",
    "target": "",
    "submenu": []
  },
  {
    "path": "/student",
    "label": $t('student'),
    "icon": "extension",
    "iconcolor": "",
    "target": "",
    "submenu": []
  },
  {
    "path": "/teacher",
    "label": $t('teacher'),
    "icon": "extension",
    "iconcolor": "",
    "target": "",
    "submenu": []
  },
  {
    "path": "/courseresource",
    "label": $t('courseResource'),
    "icon": "extension",
    "iconcolor": "",
    "target": "",
    "submenu": []
  }
],
	adminlistheader: [
  {
    "label": $t('adminId'),
    "align": "left",
    "sortable": false,
    "name": "admin_id",
    "field": "admin_id"
  },
  {
    "label": $t('name'),
    "align": "left",
    "sortable": false,
    "name": "name",
    "field": "name"
  },
  {
    "label": $t('email'),
    "align": "left",
    "sortable": false,
    "name": "email",
    "field": "email"
  },
  {
    "label": $t(''),
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }
],
	certificatelistheader: [
  {
    "label": $t('certificateId'),
    "align": "left",
    "sortable": false,
    "name": "certificate_id",
    "field": "certificate_id"
  },
  {
    "label": $t('studentId'),
    "align": "left",
    "sortable": false,
    "name": "student_id",
    "field": "student_id"
  },
  {
    "label": $t('courseId'),
    "align": "left",
    "sortable": false,
    "name": "course_id",
    "field": "course_id"
  },
  {
    "label": $t('issueDate'),
    "align": "left",
    "sortable": false,
    "name": "issue_date",
    "field": "issue_date"
  },
  {
    "label": $t(''),
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }
],
	courselistheader: [
  {
    "label": $t('courseId'),
    "align": "left",
    "sortable": false,
    "name": "course_id",
    "field": "course_id"
  },
  {
    "label": $t('teacherId'),
    "align": "left",
    "sortable": false,
    "name": "teacher_id",
    "field": "teacher_id"
  },
  {
    "label": $t('title'),
    "align": "left",
    "sortable": false,
    "name": "title",
    "field": "title"
  },
  {
    "label": $t('description'),
    "align": "left",
    "sortable": false,
    "name": "description",
    "field": "description"
  },
  {
    "label": $t('learningObjectives'),
    "align": "left",
    "sortable": false,
    "name": "learning_objectives",
    "field": "learning_objectives"
  },
  {
    "label": $t('targetAudience'),
    "align": "left",
    "sortable": false,
    "name": "target_audience",
    "field": "target_audience"
  },
  {
    "label": $t('estimatedDuration'),
    "align": "left",
    "sortable": false,
    "name": "estimated_duration",
    "field": "estimated_duration"
  },
  {
    "label": $t(''),
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }
],
	resourceType: [    
{value: "video", label: $t('video')},
	{value: "exercise", label: $t('exercise')}
    ],
	courseresourcelistheader: [
  {
    "label": $t('resourceId'),
    "align": "left",
    "sortable": false,
    "name": "resource_id",
    "field": "resource_id"
  },
  {
    "label": $t('courseId'),
    "align": "left",
    "sortable": false,
    "name": "course_id",
    "field": "course_id"
  },
  {
    "label": $t('resourceType'),
    "align": "left",
    "sortable": false,
    "name": "resource_type",
    "field": "resource_type"
  },
  {
    "label": $t('resourceUrl'),
    "align": "left",
    "sortable": false,
    "name": "resource_url",
    "field": "resource_url"
  },
  {
    "label": $t(''),
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }
],
	mistakebooklistheader: [
  {
    "label": $t('mistakeId'),
    "align": "left",
    "sortable": false,
    "name": "mistake_id",
    "field": "mistake_id"
  },
  {
    "label": $t('studentId'),
    "align": "left",
    "sortable": false,
    "name": "student_id",
    "field": "student_id"
  },
  {
    "label": $t('questionType'),
    "align": "left",
    "sortable": false,
    "name": "question_type",
    "field": "question_type"
  },
  {
    "label": $t('questionContent'),
    "align": "left",
    "sortable": false,
    "name": "question_content",
    "field": "question_content"
  },
  {
    "label": $t('wrongAnswer'),
    "align": "left",
    "sortable": false,
    "name": "wrong_answer",
    "field": "wrong_answer"
  },
  {
    "label": $t('solution'),
    "align": "left",
    "sortable": false,
    "name": "solution",
    "field": "solution"
  },
  {
    "label": $t(''),
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }
],
	questionType: [    
{value: "single_choice", label: $t('singleChoice')},
	{value: "multiple_choice", label: $t('multipleChoice')},
	{value: "fill_in_the_blank", label: $t('fillInTheBlank')}
    ],
	purchaserecordlistheader: [
  {
    "label": $t('recordId'),
    "align": "left",
    "sortable": false,
    "name": "record_id",
    "field": "record_id"
  },
  {
    "label": $t('studentId'),
    "align": "left",
    "sortable": false,
    "name": "student_id",
    "field": "student_id"
  },
  {
    "label": $t('courseId'),
    "align": "left",
    "sortable": false,
    "name": "course_id",
    "field": "course_id"
  },
  {
    "label": $t('purchaseDate'),
    "align": "left",
    "sortable": false,
    "name": "purchase_date",
    "field": "purchase_date"
  },
  {
    "label": $t(''),
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }
],
	reviewlistheader: [
  {
    "label": $t('reviewId'),
    "align": "left",
    "sortable": false,
    "name": "review_id",
    "field": "review_id"
  },
  {
    "label": $t('studentId'),
    "align": "left",
    "sortable": false,
    "name": "student_id",
    "field": "student_id"
  },
  {
    "label": $t('courseId'),
    "align": "left",
    "sortable": false,
    "name": "course_id",
    "field": "course_id"
  },
  {
    "label": $t('rating'),
    "align": "left",
    "sortable": false,
    "name": "rating",
    "field": "rating"
  },
  {
    "label": $t('comment'),
    "align": "left",
    "sortable": false,
    "name": "comment",
    "field": "comment"
  },
  {
    "label": $t(''),
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }
],
	studentlistheader: [
  {
    "label": $t('studentId'),
    "align": "left",
    "sortable": false,
    "name": "student_id",
    "field": "student_id"
  },
  {
    "label": $t('name'),
    "align": "left",
    "sortable": false,
    "name": "name",
    "field": "name"
  },
  {
    "label": $t('email'),
    "align": "left",
    "sortable": false,
    "name": "email",
    "field": "email"
  },
  {
    "label": $t(''),
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }
],
	teacherlistheader: [
  {
    "label": $t('teacherId'),
    "align": "left",
    "sortable": false,
    "name": "teacher_id",
    "field": "teacher_id"
  },
  {
    "label": $t('name'),
    "align": "left",
    "sortable": false,
    "name": "name",
    "field": "name"
  },
  {
    "label": $t('email'),
    "align": "left",
    "sortable": false,
    "name": "email",
    "field": "email"
  },
  {
    "label": $t(''),
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }
],

    exportFormats: {
        print: {
			label: 'Print',
			color: 'blue',
            icon: 'print',
            id: 'print',
            ext: 'print',
        },
        pdf: {
			label: 'Pdf',
			color: 'red',
            icon: 'picture_as_pdf',
            id: 'pdf',
            ext: 'pdf',
        },
        excel: {
			label: 'Excel',
			color: 'green',
            icon: 'grid_on',
            id: 'excel',
            ext: 'xlsx',
        },
        csv: {
			label: 'Csv',
			color: 'teal',
            icon: 'grid_on',
            id: 'csv',
            ext: 'csv',
        },
    },
    locales: {
  "fr": "French",
  "ru": "Russian",
  "zh-CN": "Chinese",
  "en-US": "English",
  "it": "Italian",
  "hi": "Hindi",
  "pt": "Portuguese",
  "de": "German",
  "es": "Spanish",
  "ar": "Arabic"
}
}