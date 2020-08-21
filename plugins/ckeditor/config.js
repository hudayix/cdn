/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
	config.language = 'zh-cn';
	config.uiColor = '#ffffff';
	config.allowedContent = {
		$1: {
			elements: CKEDITOR.dtd,
			attributes: true,
			styles: true,
			classes: true
		}
	};
	config.toolbar = [
		{ name: 'document', items: [ 'Source', 'Preview', 'Templates' ] },
		{ name: 'clipboard', items: [ 'Undo', 'About' ] },
		{ name: 'editing', items: [ 'Find', 'Replace' ] },
		{ name: 'basicstyles', items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'RemoveFormat' ] },
		{ name: 'paragraph', items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', 'CreateDiv', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', 'BidiLtr', 'BidiRtl', 'Language' ] },
		{ name: 'links', items: [ 'Link', 'Unlink', 'Anchor' ] },
		{ name: 'insert', items: [ 'Image', 'Flash', 'Table', 'HorizontalRule', 'Smiley', 'SpecialChar', 'PageBreak', 'Iframe' ] },
		{ name: 'styles', items: [ 'Styles', 'Format', 'Font', 'FontSize' ] },
		{ name: 'colors', items: [ 'TextColor', 'BGColor' ] },
		{ name: 'tools', items: [ 'Maximize', 'ShowBlocks' ] },
	];	
	config.extraPlugins = 'uploadimage,image2';
	config.font_names='宋体/宋体;黑体/黑体;仿宋/仿宋_GB2312;楷体/楷体_GB2312;隶书/隶书;幼圆/幼圆;微软雅黑/微软雅黑;'+ config.font_names;
	config.filebrowserUploadUrl = '/plugins/upload/7a1b8b903319b7c0.php?type=files';
	config.filebrowserBrowseUrl = 'my.app.php?m=files';	
	config.filebrowserUploadMethod = 'form';
};
